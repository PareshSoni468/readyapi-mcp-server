# ReadyAPI MCP Server Setup Script
# This script sets up the ReadyAPI Model Context Protocol Server for automated API testing

Write-Host "🚀 ReadyAPI MCP Server Setup" -ForegroundColor Green
Write-Host "==============================" -ForegroundColor Green

# Check if Node.js is installed
Write-Host "Checking Node.js installation..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js found: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js is not installed. Please install Node.js 18+ from https://nodejs.org/" -ForegroundColor Red
    exit 1
}

# Check Node.js version
$nodeVersionNumber = $nodeVersion -replace 'v', ''
$majorVersion = [int]($nodeVersionNumber.Split('.')[0])
if ($majorVersion -lt 18) {
    Write-Host "❌ Node.js version $nodeVersion is too old. Please upgrade to Node.js 18 or later." -ForegroundColor Red
    exit 1
}

# Check if npm is available
Write-Host "Checking npm installation..." -ForegroundColor Yellow
try {
    $npmVersion = npm --version
    Write-Host "✅ npm found: v$npmVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ npm is not available. Please install npm or use Node.js installer." -ForegroundColor Red
    exit 1
}

# Install dependencies
Write-Host "Installing project dependencies..." -ForegroundColor Yellow
try {
    npm install
    Write-Host "✅ Dependencies installed successfully" -ForegroundColor Green
} catch {
    Write-Host "❌ Failed to install dependencies. Check your internet connection and try again." -ForegroundColor Red
    exit 1
}

# Build the TypeScript project
Write-Host "Building TypeScript project..." -ForegroundColor Yellow
try {
    npm run build
    Write-Host "✅ Project built successfully" -ForegroundColor Green
} catch {
    Write-Host "❌ Failed to build project. Check TypeScript compilation errors above." -ForegroundColor Red
    exit 1
}

# Test the server startup
Write-Host "Testing server startup..." -ForegroundColor Yellow
try {
    # Create a test process that will exit quickly
    $testProcess = Start-Process -FilePath "node" -ArgumentList "build/index.js" -NoNewWindow -PassThru
    Start-Sleep -Seconds 2
    
    if (!$testProcess.HasExited) {
        Write-Host "✅ Server starts successfully" -ForegroundColor Green
        $testProcess.Kill()
    } else {
        Write-Host "❌ Server failed to start. Check error messages above." -ForegroundColor Red
        exit 1
    }
} catch {
    Write-Host "❌ Failed to test server startup." -ForegroundColor Red
    exit 1
}

# Check for ReadyAPI installation (optional)
Write-Host "Checking for ReadyAPI/SoapUI installation..." -ForegroundColor Yellow
$readyApiPaths = @(
    "${env:ProgramFiles}\SmartBear\ReadyAPI-*\bin\testrunner.bat",
    "${env:ProgramFiles(x86)}\SmartBear\ReadyAPI-*\bin\testrunner.bat",
    "${env:ProgramFiles}\SmartBear\SoapUI-*\bin\testrunner.bat",
    "${env:ProgramFiles(x86)}\SmartBear\SoapUI-*\bin\testrunner.bat"
)

$readyApiFound = $false
foreach ($path in $readyApiPaths) {
    $found = Get-ChildItem -Path $path -ErrorAction SilentlyContinue
    if ($found) {
        Write-Host "✅ ReadyAPI/SoapUI found: $($found.FullName)" -ForegroundColor Green
        $readyApiFound = $true
        break
    }
}

if (!$readyApiFound) {
    Write-Host "⚠️  ReadyAPI/SoapUI not found in standard locations." -ForegroundColor Yellow
    Write-Host "   The MCP server will work without it, but full integration requires ReadyAPI." -ForegroundColor Yellow
}

# Create necessary directories
Write-Host "Creating project directories..." -ForegroundColor Yellow
$directories = @("logs", "temp", "reports")
foreach ($dir in $directories) {
    if (!(Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
        Write-Host "✅ Created directory: $dir" -ForegroundColor Green
    }
}

# Display setup completion and next steps
Write-Host ""
Write-Host "🎉 Setup Complete!" -ForegroundColor Green
Write-Host "==================" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Next Steps:" -ForegroundColor Cyan
Write-Host "1. Start the development server:" -ForegroundColor White
Write-Host "   npm run dev" -ForegroundColor Gray
Write-Host ""
Write-Host "2. Or start the production server:" -ForegroundColor White  
Write-Host "   npm start" -ForegroundColor Gray
Write-Host ""
Write-Host "3. Test the MCP server with your AI assistant" -ForegroundColor White
Write-Host ""
Write-Host "📁 Available MCP Tools:" -ForegroundColor Cyan
Write-Host "- readyapi_analyze_project       (Analyze ReadyAPI projects)" -ForegroundColor White
Write-Host "- readyapi_execute_test_suite    (Execute test suites)" -ForegroundColor White
Write-Host "- readyapi_manage_soap_services  (SOAP service management)" -ForegroundColor White
Write-Host "- readyapi_manage_rest_services  (REST API testing)" -ForegroundColor White  
Write-Host "- readyapi_manage_assertions     (Assertion management)" -ForegroundColor White
Write-Host "- readyapi_manage_test_data      (Test data management)" -ForegroundColor White
Write-Host ""
Write-Host "📖 Documentation:" -ForegroundColor Cyan
Write-Host "- README.md           (Overview and installation)" -ForegroundColor White
Write-Host "- USAGE_EXAMPLES.md   (Comprehensive usage examples)" -ForegroundColor White
Write-Host "- .vscode/copilot-instructions.md (Development guidelines)" -ForegroundColor White
Write-Host ""
Write-Host "🔧 Development Commands:" -ForegroundColor Cyan
Write-Host "- npm run build       (Build TypeScript)" -ForegroundColor White
Write-Host "- npm run dev         (Development mode)" -ForegroundColor White
Write-Host "- npm start           (Production mode)" -ForegroundColor White
Write-Host ""

if (!$readyApiFound) {
    Write-Host "⚠️  Note: For full ReadyAPI integration, install ReadyAPI or SoapUI:" -ForegroundColor Yellow
    Write-Host "   https://www.readyapi.com/" -ForegroundColor Gray
    Write-Host "   https://www.soapui.org/" -ForegroundColor Gray
    Write-Host ""
}

Write-Host "Happy API Testing! 🧪" -ForegroundColor Green
