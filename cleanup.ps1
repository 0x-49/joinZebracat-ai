Write-Host "Cleaning up project..." -ForegroundColor Green
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue node_modules
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue .astro
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue dist
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue src\assets\*
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue src\components\Welcome.astro

Write-Host "Installing dependencies..." -ForegroundColor Green
npm install

Write-Host "Cleanup complete!" -ForegroundColor Green
