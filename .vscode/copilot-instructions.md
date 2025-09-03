# ReadyAPI MCP Server Development Instructions

## Project Overview
This project is a Model Context Protocol (MCP) server that provides intelligent automation capabilities for ReadyAPI/SoapUI testing. It enables AI assistants to help users with:

- ReadyAPI project management and analysis
- Test case creation and execution
- SOAP/REST API testing automation
- Assertion validation and debugging
- Test data management
- Performance testing setup

## Key Components

### 1. ReadyAPI Integration (`src/readyapi/`)
- **project-manager.ts**: ReadyAPI project analysis, workspace management
- **test-executor.ts**: Test case and test suite execution with real-time monitoring
- **soap-helper.ts**: SOAP service testing, WSDL parsing, request/response handling
- **rest-helper.ts**: REST API testing, endpoint validation, data-driven testing
- **assertion-manager.ts**: Smart assertion creation and validation
- **data-manager.ts**: Test data handling, data sources, and parameterization

### 2. Core MCP Server (`src/index.ts`)
The main server implementation that exposes ReadyAPI functionality through MCP tools

## Development Guidelines

### ReadyAPI/SoapUI Specifics
- Focus on SOAP and REST web service testing
- Support for WSDL imports and service discovery
- Handle complex XML namespaces and XPath expressions
- Provide intelligent test data generation
- Support for security testing (OAuth, certificates, etc.)

### Code Patterns
```typescript
// Tool definition example
export const executeTestSuite: McpTool = {
  name: "readyapi_execute_test_suite",
  description: "Execute a ReadyAPI test suite with real-time monitoring",
  inputSchema: {
    type: "object",
    properties: {
      projectPath: { type: "string", description: "Path to ReadyAPI project" },
      testSuitePath: { type: "string", description: "Path to test suite file" },
      environment: { type: "string", description: "Environment to run tests against" }
    },
    required: ["projectPath", "testSuitePath"]
  }
};
```

### File Structure Conventions
- Use TypeScript with strict typing
- Implement proper error handling and logging
- Follow MCP protocol standards
- Support both command-line and GUI ReadyAPI operations

### Testing Focus Areas
1. **SOAP Services**: WSDL validation, complex request creation, namespace handling
2. **REST APIs**: Endpoint testing, JSON/XML validation, authentication
3. **Security Testing**: SSL certificates, OAuth flows, API key management
4. **Performance Testing**: Load testing setup, response time validation
5. **Data-Driven Testing**: Excel/CSV integration, database connections

## AI Assistant Guidance
When working with this codebase:
- Prioritize ReadyAPI-specific functionality over generic testing tools
- Consider real-world API testing scenarios
- Implement intelligent error detection and suggestions
- Support both technical and non-technical users
- Provide clear documentation and examples
