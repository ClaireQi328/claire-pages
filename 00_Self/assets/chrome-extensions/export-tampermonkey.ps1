# Tampermonkey Export Helper Script

$ErrorActionPreference = "SilentlyContinue"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Tampermonkey Script Export Tool" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check Chrome extensions directory
$chromePath = "$env:LOCALAPPDATA\Google\Chrome\User Data\Default\Extensions"
$tampermonkeyId = "dhdgffkkebhmkfjojejmpbldmpobfkfo"

Write-Host "Checking Tampermonkey installation..." -ForegroundColor Yellow

if (Test-Path "$chromePath\$tampermonkeyId") {
    Write-Host "Tampermonkey is installed" -ForegroundColor Green

    # Get version
    $versionDir = Get-ChildItem "$chromePath\$tampermonkeyId" | Select-Object -First 1
    $manifest = Get-Content "$chromePath\$tampermonkeyId\$($versionDir.Name)\manifest.json" | ConvertFrom-Json
    Write-Host "   Version: $($manifest.version)" -ForegroundColor Gray

    # Check Local Extension Settings
    $settingsPath = "$env:LOCALAPPDATA\Google\Chrome\User Data\Default\Local Extension Settings\$tampermonkeyId"
    if (Test-Path $settingsPath) {
        $logFile = Get-ChildItem "$settingsPath\*.log" | Select-Object -First 1
        $sizeMB = [math]::Round($logFile.Length / 1MB, 2)
        Write-Host "   Script data size: ${sizeMB} MB" -ForegroundColor Gray
    }
} else {
    Write-Host "Tampermonkey is not installed" -ForegroundColor Red
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Export Steps" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Open Chrome, click Tampermonkey icon" -ForegroundColor White
Write-Host "2. Select 'Dashboard'" -ForegroundColor White
Write-Host "3. Click 'Utilities' tab at top" -ForegroundColor White
Write-Host "4. In 'Backup' section, click 'Export all scripts'" -ForegroundColor White
Write-Host "5. Save scripts.zip to:" -ForegroundColor White
Write-Host ""

$exportPath = "00_Self\assets\chrome-extensions\tampermonkey-scripts"
Write-Host "   $exportPath" -ForegroundColor Green -BackgroundColor Black

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Import to Quark Browser" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Install Tampermonkey in Quark:" -ForegroundColor White
Write-Host "   chrome://extensions/ -> Load unpacked -> Select Tampermonkey folder" -ForegroundColor Yellow
Write-Host ""
Write-Host "2. Open Quark's Tampermonkey panel" -ForegroundColor White
Write-Host "3. Go to 'Utilities' -> 'Import'" -ForegroundColor White
Write-Host "4. Select the exported scripts.zip" -ForegroundColor White
Write-Host ""

# Check export directory
$exportDir = Join-Path $PSScriptRoot $exportPath
if (Test-Path $exportDir) {
    $zipFiles = Get-ChildItem "$exportDir\*.zip" -ErrorAction SilentlyContinue
    if ($zipFiles) {
        Write-Host "========================================" -ForegroundColor Cyan
        Write-Host "  Exported script files found" -ForegroundColor Cyan
        Write-Host "========================================" -ForegroundColor Cyan
        Write-Host ""
        foreach ($zip in $zipFiles) {
            $sizeMB = [math]::Round($zip.Length / 1MB, 2)
            Write-Host "   $($zip.Name) (${sizeMB} MB)" -ForegroundColor Green
        }
    } else {
        Write-Host "No exported script files found, please complete export first" -ForegroundColor Yellow
    }
} else {
    Write-Host "Export directory does not exist, creating..." -ForegroundColor Yellow
    New-Item -ItemType Directory -Path $exportDir -Force | Out-Null
    Write-Host "Export directory created: $exportPath" -ForegroundColor Green
}

Write-Host ""
Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
