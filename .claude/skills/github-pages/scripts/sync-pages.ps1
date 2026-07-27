# sync-pages.ps1 — Sync vault HTML files to claire-pages public repo
# Usage:
#   .\sync-pages.ps1          # Sync, commit, push
#   .\sync-pages.ps1 -DryRun  # Preview only

param(
    [switch]$DryRun
)

$ErrorActionPreference = "Stop"

# Script is at vault/.claude/skills/github-pages/scripts/
$ScriptDir  = $PSScriptRoot
$VaultRoot  = (Resolve-Path (Join-Path $ScriptDir "../../../..")).Path.TrimEnd('\','/')
$SkillDir   = Join-Path $VaultRoot ".claude\skills\github-pages"
$PagesDir   = Join-Path $SkillDir "claire-pages"
$BaseUrl    = "https://claireqi328.github.io/claire-pages"
$MappingFile = Join-Path $SkillDir "HTML-LINKS.md"

# Validate paths
if (-not (Test-Path $PagesDir)) {
    Write-Host "[ERROR] claire-pages directory not found: $PagesDir" -ForegroundColor Red
    exit 1
}

# Find all .html files in vault, excluding claire-pages, .obsidian, .git, node_modules
Write-Host "[SCAN] Scanning vault for .html files..." -ForegroundColor Cyan
$htmlFiles = Get-ChildItem -Path $VaultRoot -Recurse -Filter "*.html" -File -ErrorAction SilentlyContinue |
    Where-Object {
        $rel = $_.FullName.Substring($VaultRoot.Length + 1)
        $rel -notmatch "^(\.obsidian|\.git|\.trash|\.agents|\.claude|node_modules)[\\\/]"
    }

Write-Host "[SCAN] Found $($htmlFiles.Count) HTML files in vault" -ForegroundColor Cyan

if ($htmlFiles.Count -eq 0) {
    Write-Host "[WARN] No HTML files found. Nothing to sync." -ForegroundColor Yellow
    exit 0
}

# Build mapping and copy files
$entries = @()
$copied = 0
$skipped = 0

foreach ($file in $htmlFiles) {
    $relPath = $file.FullName.Substring($VaultRoot.Length + 1)
    $destPath = Join-Path $PagesDir $relPath
    $destDir  = Split-Path $destPath -Parent

    # URL encode the path for the public link
    $encodedParts = $relPath -split '[\\\/]' | ForEach-Object {
        [System.Uri]::EscapeDataString($_)
    }
    $encodedPath = $encodedParts -join "/"
    $publicLink  = "$BaseUrl/$encodedPath"

    $entries += [PSCustomObject]@{
        FileName   = $file.Name
        VaultPath  = $relPath
        PublicLink = $publicLink
    }

    if ($DryRun) {
        $copied++
        continue
    }

    # Ensure destination directory exists
    if (-not (Test-Path $destDir)) {
        New-Item -ItemType Directory -Path $destDir -Force | Out-Null
    }

    # Copy if changed (compare by last write time and size)
    $needCopy = $true
    if (Test-Path $destPath) {
        $destItem = Get-Item $destPath
        if ($destItem.LastWriteTime -eq $file.LastWriteTime -and $destItem.Length -eq $file.Length) {
            $needCopy = $false
            $skipped++
        }
    }

    if ($needCopy) {
        Copy-Item -Path $file.FullName -Destination $destPath -Force
        $copied++
    }
}

if ($DryRun) {
    Write-Host "[DRYRUN] Would copy $copied files to claire-pages" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "[DRYRUN] Files to sync:" -ForegroundColor Yellow
    $entries | ForEach-Object { Write-Host "  $($_.VaultPath)" }
    exit 0
}

Write-Host "[SYNC] Copied $copied, skipped $skipped (unchanged)" -ForegroundColor Green

# === CLEANUP: delete files in claire-pages that no longer exist in vault ===
Write-Host "[CLEAN] Checking for orphaned files in claire-pages..." -ForegroundColor Cyan

# Build set of expected paths in claire-pages (relative)
$expectedPaths = @{}
foreach ($file in $htmlFiles) {
    $relPath = $file.FullName.Substring($VaultRoot.Length + 1)
    $expectedPaths[$relPath] = $true
}

# Find all HTML files in claire-pages
$pagesFiles = Get-ChildItem -Path $PagesDir -Recurse -Filter "*.html" -File -ErrorAction SilentlyContinue |
    Where-Object {
        $rel = $_.FullName.Substring($PagesDir.Length + 1)
        $rel -notmatch "^\.git[\\\/]"
    }

$deleted = 0
foreach ($pf in $pagesFiles) {
    $relPath = $pf.FullName.Substring($PagesDir.Length + 1)
    if (-not $expectedPaths.ContainsKey($relPath)) {
        Remove-Item -Path $pf.FullName -Force
        $deleted++
        if ($deleted -le 20) {
            Write-Host "  [DEL] $relPath" -ForegroundColor DarkYellow
        }
    }
}

if ($deleted -gt 20) {
    Write-Host "  ... and $($deleted - 20) more" -ForegroundColor DarkYellow
}
Write-Host "[CLEAN] Deleted $deleted orphaned files" -ForegroundColor $(if ($deleted -gt 0) { "Yellow" } else { "Green" })

# Remove empty directories in claire-pages (bottom-up)
if ($deleted -gt 0) {
    Get-ChildItem -Path $PagesDir -Recurse -Directory -ErrorAction SilentlyContinue |
        Where-Object { $_.FullName -ne (Join-Path $PagesDir ".git") } |
        Sort-Object { $_.FullName.Length } -Descending |
        ForEach-Object {
            $children = Get-ChildItem -Path $_.FullName -ErrorAction SilentlyContinue
            if (-not $children) {
                Remove-Item -Path $_.FullName -Force
            }
        }
    Write-Host "[CLEAN] Removed empty directories" -ForegroundColor Green
}

# Generate HTML-LINKS.md
Write-Host "[MAP] Generating HTML-LINKS.md..." -ForegroundColor Cyan
$date = Get-Date -Format "yyyy-MM-dd HH:mm"
$md = @"
# HTML Files - Public Links

> Auto-generated on $date. Total: $($entries.Count) files.
> Public site: $BaseUrl

| # | File Name | Vault Path | Public Link |
|---|-----------|-----------|-------------|
"@

$i = 0
foreach ($e in $entries) {
    $i++
    $md += "`n| $i | $($e.FileName) | ``$($e.VaultPath)`` | [Link]($($e.PublicLink)) |"
}

Set-Content -Path $MappingFile -Value $md -Encoding UTF8
Write-Host "[MAP] Written to $MappingFile" -ForegroundColor Green

# Git commit and push
Write-Host "[GIT] Committing and pushing..." -ForegroundColor Cyan
Push-Location $PagesDir
try {
    cmd /c "git add -A 2>&1" | Out-Null
    $status = cmd /c "git status --porcelain" 2>&1
    if ($status) {
        cmd /c "git commit -m `"sync: update HTML files from vault ($copied changed)`" 2>&1" | Out-Null
        cmd /c "git push origin main" 2>&1
        Write-Host "[GIT] Pushed to main" -ForegroundColor Green
    } else {
        Write-Host "[GIT] No changes to commit" -ForegroundColor Yellow
    }
} finally {
    Pop-Location
}

Write-Host ""
Write-Host "[DONE] Sync complete!" -ForegroundColor Green
