# xhs skill initialization script
# Creates Obsidian output directories and cookie template

$h = $env:USERPROFILE
$base = Join-Path $h "Documents\Obsidian Vault\xhs"

# Create directories
$dirs = @($base, (Join-Path $base "img"), (Join-Path $base "video"))
foreach ($d in $dirs) {
    if (-not (Test-Path $d)) {
        New-Item -ItemType Directory -Path $d -Force | Out-Null
        Write-Host "Created: $d"
    } else {
        Write-Host "Exists: $d"
    }
}

# Create cookie template if not exists
$cookieFile = Join-Path $h "cookies.json"
if (-not (Test-Path $cookieFile)) {
    $template = @"
[
  {
    "name": "请替换为实际cookie",
    "value": "请替换为实际值",
    "domain": ".xiaohongshu.com",
    "path": "/",
    "expires": 1893456000,
    "size": 30,
    "httpOnly": false,
    "secure": false,
    "session": false,
    "priority": "Medium",
    "sameParty": false,
    "sourceScheme": "Secure",
    "sourcePort": 443
  }
]
"@
    Set-Content -Path $cookieFile -Value $template -Encoding UTF8
    Write-Host "Created cookie template: $cookieFile"
    Write-Host "Please replace with actual cookies from Chrome DevTools!"
} else {
    Write-Host "Cookie file exists: $cookieFile"
}

Write-Host "`nInitialization complete!"
Write-Host "Output directory: $base"
Write-Host "Next step: Export cookies from Chrome to $cookieFile"
