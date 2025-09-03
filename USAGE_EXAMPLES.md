# ReadyAPI MCP Server Usage Examples

This document provides comprehensive examples of how to use the ReadyAPI MCP Server for various API testing and automation scenarios.

## Table of Contents
1. [Project Analysis](#project-analysis)
2. [Test Suite Execution](#test-suite-execution)
3. [SOAP Service Management](#soap-service-management)
4. [REST API Testing](#rest-api-testing)
5. [Assertion Management](#assertion-management)
6. [Test Data Management](#test-data-management)
7. [Advanced Workflows](#advanced-workflows)
8. [Troubleshooting](#troubleshooting)

## Project Analysis

### Basic Project Overview
```typescript
// Get a comprehensive overview of your ReadyAPI project
const result = await analyzeProject({
  projectPath: "C:/Projects/ECommerce/ECommerce-readyapi-project.xml",
  analysisType: "overview"
});
```

**Output**: Project structure, test suites count, service definitions, mock services, and overall health metrics.

### Test Coverage Analysis
```typescript
// Analyze how well your APIs are covered by tests
const coverage = await analyzeProject({
  projectPath: "C:/Projects/ECommerce/ECommerce-readyapi-project.xml",
  analysisType: "test_coverage"
});
```

**Use Cases**:
- Identify untested API endpoints
- Find gaps in error scenario testing
- Assess data-driven test coverage
- Generate coverage reports for stakeholders

### Endpoint Health Check
```typescript
// Check the health and availability of your API endpoints
const health = await analyzeProject({
  projectPath: "C:/Projects/ECommerce/ECommerce-readyapi-project.xml",
  analysisType: "endpoint_health"
});
```

**Benefits**:
- Detect broken or unavailable endpoints
- Monitor SSL certificate status
- Validate authentication configurations
- Check response time performance

### Performance Metrics
```typescript
// Analyze performance characteristics of your tests
const performance = await analyzeProject({
  projectPath: "C:/Projects/ECommerce/ECommerce-readyapi-project.xml",
  analysisType: "performance_metrics"
});
```

**Insights**:
- Average response times by endpoint
- Performance bottlenecks identification
- Load testing configuration analysis
- Resource utilization patterns

## Test Suite Execution

### Headless Test Execution
```typescript
// Run tests in headless mode for CI/CD integration
const execution = await executeTestSuite({
  projectPath: "C:/Projects/ECommerce/ECommerce-readyapi-project.xml",
  testSuitePath: "UserManagement-TestSuite",
  environment: "staging",
  testRunner: "headless"
});
```

**Scenarios**:
- Continuous integration pipelines
- Automated regression testing
- Scheduled test execution
- Build verification tests

### GUI Test Execution
```typescript
// Run tests with ReadyAPI GUI for debugging
const guiExecution = await executeTestSuite({
  projectPath: "C:/Projects/ECommerce/ECommerce-readyapi-project.xml",
  testSuitePath: "PaymentProcessing-TestSuite",
  environment: "development",
  testRunner: "gui"
});
```

**Use Cases**:
- Interactive test debugging
- Step-by-step test analysis
- Manual test observation
- Test development and refinement

### Environment-Specific Testing
```typescript
// Test against different environments
const prodTest = await executeTestSuite({
  projectPath: "C:/Projects/ECommerce/ECommerce-readyapi-project.xml",
  testSuitePath: "SmokeTests-TestSuite",
  environment: "production",
  testRunner: "headless"
});
```

**Environments**:
- Development: Full test suite execution
- Staging: Integration and performance tests
- Production: Smoke tests and health checks
- UAT: User acceptance test scenarios

## SOAP Service Management

### WSDL Import and Service Creation
```typescript
// Import a SOAP service from WSDL
const wsdlImport = await manageSoapServices({
  projectPath: "C:/Projects/Banking/Banking-readyapi-project.xml",
  action: "import_wsdl",
  wsdlUrl: "https://api.bank.com/services/AccountService?wsdl"
});
```

**Features**:
- Automatic service interface generation
- Request template creation
- Response schema validation
- Operation discovery and mapping

### SOAP Request Creation
```typescript
// Create a specific SOAP request
const soapRequest = await manageSoapServices({
  projectPath: "C:/Projects/Banking/Banking-readyapi-project.xml",
  action: "create_request",
  serviceName: "AccountService",
  operationName: "GetAccountBalance"
});
```

**Generated Components**:
- Complete SOAP envelope structure
- Proper namespace declarations
- Operation-specific body content
- Authentication placeholders

### SOAP Response Validation
```typescript
// Validate SOAP response structure and content
const validation = await manageSoapServices({
  projectPath: "C:/Projects/Banking/Banking-readyapi-project.xml",
  action: "validate_response",
  serviceName: "AccountService",
  operationName: "GetAccountBalance"
});
```

**Validation Checks**:
- Schema compliance verification
- SOAP envelope structure validation
- Namespace correctness
- Required element presence

### Endpoint Configuration
```typescript
// Update SOAP service endpoints
const endpointUpdate = await manageSoapServices({
  projectPath: "C:/Projects/Banking/Banking-readyapi-project.xml",
  action: "update_endpoint",
  serviceName: "AccountService"
});
```

## REST API Testing

### REST Request Creation
```typescript
// Create a REST API request
const restRequest = await manageRestServices({
  projectPath: "C:/Projects/ECommerce/ECommerce-readyapi-project.xml",
  action: "create_request",
  endpoint: "https://api.ecommerce.com/products",
  method: "GET"
});
```

**HTTP Methods Supported**:
- GET: Data retrieval operations
- POST: Resource creation
- PUT: Resource updates
- DELETE: Resource removal
- PATCH: Partial updates

### Swagger/OpenAPI Import
```typescript
// Import REST API from Swagger specification
const swaggerImport = await manageRestServices({
  projectPath: "C:/Projects/ECommerce/ECommerce-readyapi-project.xml",
  action: "import_swagger",
  swaggerUrl: "https://api.ecommerce.com/swagger.json"
});
```

**Auto-Generated Features**:
- Complete REST interface
- Request/response schemas
- Authentication configurations
- Parameter validation
- Error response handling

### Endpoint Validation
```typescript
// Validate REST endpoint health and accessibility
const endpointValidation = await manageRestServices({
  projectPath: "C:/Projects/ECommerce/ECommerce-readyapi-project.xml",
  action: "validate_endpoint",
  endpoint: "https://api.ecommerce.com/products"
});
```

**Validation Aspects**:
- Endpoint accessibility
- SSL certificate validity
- Response format verification
- Performance characteristics
- Error handling behavior

### Authentication Testing
```typescript
// Test various authentication methods
const authTest = await manageRestServices({
  projectPath: "C:/Projects/ECommerce/ECommerce-readyapi-project.xml",
  action: "test_auth",
  endpoint: "https://api.ecommerce.com/secure-endpoint"
});
```

**Authentication Types**:
- Bearer Token authentication
- API Key validation
- Basic authentication
- OAuth2 flows
- Custom authentication schemes

## Assertion Management

### XPath Assertions for XML/SOAP
```typescript
// Create XPath assertion for SOAP response
const xpathAssertion = await manageAssertions({
  projectPath: "C:/Projects/Banking/Banking-readyapi-project.xml",
  action: "create_assertion",
  testStepName: "GetAccountBalance",
  assertionType: "xpath",
  expectedValue: "5000.00"
});
```

**XPath Examples**:
- `//soap:Body/GetAccountBalanceResponse/Balance` - Extract balance value
- `//AccountDetails/Status[text()='Active']` - Verify account status
- `count(//TransactionList/Transaction)` - Count transactions

### JSONPath Assertions for REST
```typescript
// Create JSONPath assertion for REST response
const jsonAssertion = await manageAssertions({
  projectPath: "C:/Projects/ECommerce/ECommerce-readyapi-project.xml",
  action: "create_assertion",
  testStepName: "GetProduct",
  assertionType: "jsonpath",
  expectedValue: "Available"
});
```

**JSONPath Examples**:
- `$.product.status` - Check product status
- `$.users[0].name` - First user's name
- `$.orders.length` - Number of orders

### Performance Assertions
```typescript
// Create response time assertion
const performanceAssertion = await manageAssertions({
  projectPath: "C:/Projects/ECommerce/ECommerce-readyapi-project.xml",
  action: "create_assertion",
  testStepName: "SearchProducts",
  assertionType: "response_time",
  expectedValue: "2000" // milliseconds
});
```

### Status Code Validation
```typescript
// Validate HTTP status codes
const statusAssertion = await manageAssertions({
  projectPath: "C:/Projects/ECommerce/ECommerce-readyapi-project.xml",
  action: "create_assertion",
  testStepName: "CreateOrder",
  assertionType: "status_code",
  expectedValue: "201"
});
```

### Schema Validation
```typescript
// Validate response against JSON schema
const schemaAssertion = await manageAssertions({
  projectPath: "C:/Projects/ECommerce/ECommerce-readyapi-project.xml",
  action: "create_assertion",
  testStepName: "GetOrderDetails",
  assertionType: "schema_validation",
  expectedValue: "OrderSchema.json"
});
```

## Test Data Management

### Excel Data Source
```typescript
// Create Excel-based data source
const excelData = await manageTestData({
  projectPath: "C:/Projects/ECommerce/ECommerce-readyapi-project.xml",
  action: "create_datasource",
  dataSourceType: "excel",
  filePath: "C:/TestData/UserProfiles.xlsx"
});
```

**Excel Structure**:
```
| username   | password  | email              | role  |
|------------|-----------|-------------------|--------|
| john.doe   | pass123   | john@example.com  | user   |
| jane.admin | admin456  | jane@example.com  | admin  |
```

### Database Connection
```typescript
// Create database data source
const dbConnection = await manageTestData({
  projectPath: "C:/Projects/ECommerce/ECommerce-readyapi-project.xml",
  action: "create_database_connection",
  connectionString: "jdbc:mysql://localhost:3306/testdb?user=test&password=test123"
});
```

**Database Queries**:
```sql
-- User data for authentication tests
SELECT username, password, role FROM users WHERE active = 1;

-- Product data for catalog tests  
SELECT product_id, name, price, category FROM products WHERE in_stock = true;

-- Order data for transaction tests
SELECT order_id, customer_id, total_amount, status FROM orders WHERE created_date >= CURDATE();
```

### CSV Data Import
```typescript
// Import CSV test data
const csvData = await manageTestData({
  projectPath: "C:/Projects/ECommerce/ECommerce-readyapi-project.xml",
  action: "create_datasource",
  dataSourceType: "csv",
  filePath: "C:/TestData/ProductCatalog.csv"
});
```

### JSON Data Source
```typescript
// Create JSON-based data source
const jsonData = await manageTestData({
  projectPath: "C:/Projects/ECommerce/ECommerce-readyapi-project.xml",
  action: "create_datasource", 
  dataSourceType: "json",
  filePath: "C:/TestData/ApiTestData.json"
});
```

**JSON Structure**:
```json
{
  "testCases": [
    {
      "scenario": "successful_login",
      "username": "validuser",
      "password": "validpass",
      "expectedResult": "success"
    },
    {
      "scenario": "invalid_credentials",
      "username": "invaliduser", 
      "password": "wrongpass",
      "expectedResult": "authentication_failed"
    }
  ]
}
```

### Generated Test Data
```typescript
// Generate realistic test data
const generatedData = await manageTestData({
  projectPath: "C:/Projects/ECommerce/ECommerce-readyapi-project.xml",
  action: "generate_test_data",
  dataSourceType: "json"
});
```

**Generated Data Types**:
- User profiles with realistic names and emails
- Product catalogs with market-appropriate pricing
- Transaction records with valid date ranges
- Address information with proper formatting
- Phone numbers and identification data

## Advanced Workflows

### End-to-End Test Automation
```typescript
// 1. Analyze project first
const analysis = await analyzeProject({
  projectPath: "C:/Projects/ECommerce/ECommerce-readyapi-project.xml",
  analysisType: "overview"
});

// 2. Set up test data
const testData = await manageTestData({
  projectPath: "C:/Projects/ECommerce/ECommerce-readyapi-project.xml",
  action: "import_excel",
  filePath: "C:/TestData/E2ETestData.xlsx"
});

// 3. Execute comprehensive test suite
const execution = await executeTestSuite({
  projectPath: "C:/Projects/ECommerce/ECommerce-readyapi-project.xml",
  testSuitePath: "E2E-TestSuite",
  environment: "staging",
  testRunner: "headless"
});
```

### API Contract Testing
```typescript
// 1. Import API specification
const apiImport = await manageRestServices({
  projectPath: "C:/Projects/Banking/Banking-readyapi-project.xml",
  action: "import_swagger",
  swaggerUrl: "https://api.bank.com/openapi.json"
});

// 2. Create schema validation assertions
const schemaValidation = await manageAssertions({
  projectPath: "C:/Projects/Banking/Banking-readyapi-project.xml",
  action: "create_assertion",
  testStepName: "AllEndpoints",
  assertionType: "schema_validation"
});

// 3. Execute contract validation tests
const contractTests = await executeTestSuite({
  projectPath: "C:/Projects/Banking/Banking-readyapi-project.xml",
  testSuitePath: "ContractValidation-TestSuite",
  environment: "integration",
  testRunner: "headless"
});
```

### Security Testing Workflow
```typescript
// 1. Test authentication mechanisms
const authValidation = await manageRestServices({
  projectPath: "C:/Projects/SecureAPI/SecureAPI-readyapi-project.xml",
  action: "test_auth",
  endpoint: "https://secureapi.com/protected"
});

// 2. Create security-specific assertions
const securityAssertions = await manageAssertions({
  projectPath: "C:/Projects/SecureAPI/SecureAPI-readyapi-project.xml",
  action: "create_assertion",
  testStepName: "SecurityValidation",
  assertionType: "status_code",
  expectedValue: "403" // Forbidden for unauthorized access
});

// 3. Execute security test suite
const securityTests = await executeTestSuite({
  projectPath: "C:/Projects/SecureAPI/SecureAPI-readyapi-project.xml",
  testSuitePath: "SecurityTests-TestSuite",
  environment: "security",
  testRunner: "headless"
});
```

## Troubleshooting

### Common Issues and Solutions

#### Project Path Problems
```typescript
// ❌ Incorrect path format
projectPath: "C:\\Projects\\MyAPI\\project.xml" // Escaped backslashes

// ✅ Correct path format  
projectPath: "C:/Projects/MyAPI/project.xml" // Forward slashes

// ✅ Also correct
projectPath: "C:\\\\Projects\\\\MyAPI\\\\project.xml" // Double-escaped
```

#### Test Suite Execution Failures
```typescript
// Check project health first
const health = await analyzeProject({
  projectPath: "C:/Projects/MyAPI/MyAPI-readyapi-project.xml",
  analysisType: "endpoint_health"
});

// Validate specific test suite exists
const coverage = await analyzeProject({
  projectPath: "C:/Projects/MyAPI/MyAPI-readyapi-project.xml", 
  analysisType: "test_coverage"
});
```

#### Authentication Issues
```typescript
// Test authentication independently
const authTest = await manageRestServices({
  projectPath: "C:/Projects/MyAPI/MyAPI-readyapi-project.xml",
  action: "test_auth",
  endpoint: "https://api.example.com/protected-endpoint"
});

// Validate endpoint accessibility
const endpointCheck = await manageRestServices({
  projectPath: "C:/Projects/MyAPI/MyAPI-readyapi-project.xml",
  action: "validate_endpoint", 
  endpoint: "https://api.example.com/health"
});
```

#### Data Source Connection Problems
```typescript
// Test database connection
const dbTest = await manageTestData({
  projectPath: "C:/Projects/MyAPI/MyAPI-readyapi-project.xml",
  action: "create_database_connection",
  connectionString: "jdbc:mysql://localhost:3306/testdb?user=test&password=test123"
});

// Validate file-based data sources
const fileValidation = await manageTestData({
  projectPath: "C:/Projects/MyAPI/MyAPI-readyapi-project.xml",
  action: "import_excel",
  filePath: "C:/TestData/UserData.xlsx"
});
```

### Performance Optimization Tips

1. **Use Headless Execution**: For CI/CD and automated testing
2. **Optimize Data Sources**: Use database connections for large datasets
3. **Selective Test Execution**: Run only necessary test suites
4. **Environment-Specific Configuration**: Optimize for target environment
5. **Assertion Efficiency**: Use appropriate assertion types for better performance

### Best Practices

1. **Project Organization**: Keep test suites logically organized
2. **Data Management**: Use external data sources for maintainability
3. **Environment Management**: Configure environment-specific settings
4. **Error Handling**: Implement comprehensive error scenarios
5. **Documentation**: Maintain clear test case documentation
6. **Version Control**: Track changes in test automation
7. **Regular Maintenance**: Update assertions and test data regularly

---

This comprehensive guide covers the major use cases and scenarios for the ReadyAPI MCP Server. For additional support or advanced configurations, refer to the main README.md file or create an issue in the project repository.
