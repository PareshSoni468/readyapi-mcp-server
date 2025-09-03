# ReadyAPI MCP Server

A Model Context Protocol (MCP) server that provides intelligent automation capabilities for ReadyAPI/SoapUI testing. This server enables AI assistants to help users with API testing automation, SOAP/REST service testing, and comprehensive test management.

## Features

### 🔧 Core Capabilities
- **ReadyAPI Project Analysis**: Comprehensive project structure analysis and insights
- **Test Suite Execution**: Automated test execution with real-time monitoring
- **SOAP Service Management**: WSDL import, request creation, and response validation
- **REST API Testing**: Endpoint validation, Swagger import, and authentication testing
- **Assertion Management**: Smart assertion creation and response validation
- **Test Data Management**: Data source configuration and test data generation

### 📊 Analysis & Reporting
- Project overview and health assessment
- Test coverage analysis
- Endpoint health monitoring
- Performance metrics tracking
- Assertion validation reports

### 🛠️ Testing Automation
- SOAP and REST service testing
- Data-driven test execution
- Authentication and security testing
- Performance and load testing setup
- Error handling and validation

## Installation

### Prerequisites
- Node.js 18+ 
- ReadyAPI or SoapUI installed
- TypeScript development environment

### Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ReadyAPI_MCP_Server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the project:
   ```bash
   npm run build
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

## MCP Tools Available

### 1. ReadyAPI Project Analysis
```json
{
  "name": "readyapi_analyze_project",
  "description": "Analyze ReadyAPI project structure and provide insights",
  "parameters": {
    "projectPath": "Path to the ReadyAPI project",
    "analysisType": "overview | test_coverage | endpoint_health | performance_metrics"
  }
}
```

### 2. Test Suite Execution
```json
{
  "name": "readyapi_execute_test_suite",
  "description": "Execute a ReadyAPI test suite with real-time monitoring",
  "parameters": {
    "projectPath": "Full path to the ReadyAPI project folder",
    "testSuitePath": "Path to the specific test suite file",
    "environment": "Environment to run tests against",
    "testRunner": "gui | headless"
  }
}
```

### 3. SOAP Service Management
```json
{
  "name": "readyapi_manage_soap_services",
  "description": "Manage SOAP services: import WSDL, create requests, validate responses",
  "parameters": {
    "projectPath": "Path to the ReadyAPI project",
    "action": "import_wsdl | create_request | validate_response | update_endpoint",
    "wsdlUrl": "WSDL URL for import operations",
    "serviceName": "Name of the SOAP service",
    "operationName": "SOAP operation name"
  }
}
```

### 4. REST Service Management
```json
{
  "name": "readyapi_manage_rest_services",
  "description": "Manage REST services: create requests, validate responses, test endpoints",
  "parameters": {
    "projectPath": "Path to the ReadyAPI project",
    "action": "create_request | import_swagger | validate_endpoint | test_auth",
    "endpoint": "REST endpoint URL",
    "method": "GET | POST | PUT | DELETE | PATCH",
    "swaggerUrl": "Swagger/OpenAPI specification URL"
  }
}
```

### 5. Assertion Management
```json
{
  "name": "readyapi_manage_assertions",
  "description": "Create and manage test assertions for API responses",
  "parameters": {
    "projectPath": "Path to the ReadyAPI project",
    "action": "create_assertion | validate_response | update_assertion | list_assertions",
    "testStepName": "Name of the test step to add assertions to",
    "assertionType": "xpath | jsonpath | response_time | status_code | schema_validation",
    "expectedValue": "Expected value for the assertion"
  }
}
```

### 6. Test Data Management
```json
{
  "name": "readyapi_manage_test_data",
  "description": "Manage test data sources and parameterization",
  "parameters": {
    "projectPath": "Path to the ReadyAPI project",
    "action": "create_datasource | import_excel | create_database_connection | generate_test_data",
    "dataSourceType": "excel | csv | database | xml | json",
    "filePath": "Path to data file (for file-based sources)",
    "connectionString": "Database connection string"
  }
}
```

## Usage Examples

### Analyze a ReadyAPI Project
```typescript
// Analyze project overview
await analyzeProject({
  projectPath: "C:/Projects/MyAPI/MyAPI-readyapi-project.xml",
  analysisType: "overview"
});

// Check test coverage
await analyzeProject({
  projectPath: "C:/Projects/MyAPI/MyAPI-readyapi-project.xml",
  analysisType: "test_coverage"
});
```

### Execute Test Suite
```typescript
// Run test suite in headless mode
await executeTestSuite({
  projectPath: "C:/Projects/MyAPI/MyAPI-readyapi-project.xml",
  testSuitePath: "UserManagement-TestSuite",
  environment: "staging",
  testRunner: "headless"
});
```

### Import WSDL Service
```typescript
// Import SOAP service from WSDL
await manageSoapServices({
  projectPath: "C:/Projects/MyAPI/MyAPI-readyapi-project.xml",
  action: "import_wsdl",
  wsdlUrl: "https://api.example.com/service?wsdl"
});
```

### Create REST Request
```typescript
// Create REST API request
await manageRestServices({
  projectPath: "C:/Projects/MyAPI/MyAPI-readyapi-project.xml",
  action: "create_request",
  endpoint: "https://api.example.com/users",
  method: "GET"
});
```

## Development

### Project Structure
```
src/
├── index.ts                 # Main MCP server implementation
├── readyapi/
│   ├── project-manager.ts   # Project analysis and management
│   ├── test-executor.ts     # Test execution and monitoring
│   ├── soap-helper.ts       # SOAP service operations
│   ├── rest-helper.ts       # REST API operations
│   ├── assertion-manager.ts # Assertion creation and validation
│   └── data-manager.ts      # Test data management
└── .vscode/
    └── copilot-instructions.md # AI development guidelines
```

### Scripts
- `npm run build` - Build TypeScript to JavaScript
- `npm run dev` - Build and run the development server
- `npm start` - Run the production server
- `npm test` - Run tests (to be implemented)

## Integration with AI Assistants

This MCP server is designed to work with AI assistants like Claude, providing them with the ability to:

1. **Understand ReadyAPI Projects**: Analyze project structure, test suites, and service definitions
2. **Execute Test Automation**: Run tests, monitor results, and provide feedback
3. **Debug API Issues**: Validate responses, check assertions, and identify problems
4. **Generate Test Cases**: Create comprehensive test scenarios and data sets
5. **Optimize Performance**: Analyze response times and suggest improvements

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For issues and questions:
- Create an issue in the GitHub repository
- Check the documentation in the USAGE_EXAMPLES.md file
- Review the .vscode/copilot-instructions.md for development guidance

---

**Note**: This is a foundational implementation of the ReadyAPI MCP Server. Full integration with ReadyAPI's XML project format and testrunner executable will be implemented in subsequent iterations.
