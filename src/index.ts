#!/usr/bin/env node

/**
 * ReadyAPI MCP Server
 * A Model Context Protocol server for ReadyAPI/SoapUI automation and testing
 */

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import { z } from 'zod';

// Import ReadyAPI modules
import { analyzeProject, ProjectAnalysisArgs } from './readyapi/project-manager.js';
import { executeTestSuite, TestExecutionArgs } from './readyapi/test-executor.js';
import { manageSoapServices, SoapServiceArgs } from './readyapi/soap-helper.js';
import { manageRestServices, RestServiceArgs } from './readyapi/rest-helper.js';
import { manageAssertions, AssertionArgs } from './readyapi/assertion-manager.js';
import { manageTestData, DataManagerArgs } from './readyapi/data-manager.js';class ReadyAPIMCPServer {
    private server: Server;

    constructor() {
        this.server = new Server(
            {
                name: 'readyapi-mcp-server',
                version: '1.0.0',
            },
            {
                capabilities: {
                    tools: {},
                },
            }
        );

        this.setupToolHandlers();
        this.setupErrorHandling();
    }

    private setupToolHandlers() {
        // List available tools
        this.server.setRequestHandler(ListToolsRequestSchema, async () => {
            return {
                tools: [
                    {
                        name: 'readyapi_analyze_project',
                        description: 'Analyze ReadyAPI project structure and provide insights',
                        inputSchema: {
                            type: 'object',
                            properties: {
                                projectPath: {
                                    type: 'string',
                                    description: 'Path to the ReadyAPI project',
                                },
                                analysisType: {
                                    type: 'string',
                                    enum: ['overview', 'test_coverage', 'endpoint_health', 'performance_metrics'],
                                    description: 'Type of analysis to perform',
                                },
                            },
                            required: ['projectPath'],
                        },
                    },
                    {
                        name: 'readyapi_execute_test_suite',
                        description: 'Execute a ReadyAPI test suite with real-time monitoring',
                        inputSchema: {
                            type: 'object',
                            properties: {
                                projectPath: {
                                    type: 'string',
                                    description: 'Full path to the ReadyAPI project folder',
                                },
                                testSuitePath: {
                                    type: 'string',
                                    description: 'Path to the specific test suite file',
                                },
                                environment: {
                                    type: 'string',
                                    description: 'Environment to run tests against',
                                    default: 'default',
                                },
                                testRunner: {
                                    type: 'string',
                                    enum: ['gui', 'headless'],
                                    description: 'How to run the tests (GUI or headless mode)',
                                    default: 'headless',
                                },
                            },
                            required: ['projectPath', 'testSuitePath'],
                        },
                    },
                    {
                        name: 'readyapi_manage_soap_services',
                        description: 'Manage SOAP services: import WSDL, create requests, validate responses',
                        inputSchema: {
                            type: 'object',
                            properties: {
                                projectPath: {
                                    type: 'string',
                                    description: 'Path to the ReadyAPI project',
                                },
                                action: {
                                    type: 'string',
                                    enum: ['import_wsdl', 'create_request', 'validate_response', 'update_endpoint'],
                                    description: 'Action to perform',
                                },
                                wsdlUrl: {
                                    type: 'string',
                                    description: 'WSDL URL for import operations',
                                },
                                serviceName: {
                                    type: 'string',
                                    description: 'Name of the SOAP service',
                                },
                                operationName: {
                                    type: 'string',
                                    description: 'SOAP operation name',
                                },
                            },
                            required: ['projectPath', 'action'],
                        },
                    },
                    {
                        name: 'readyapi_manage_rest_services',
                        description: 'Manage REST services: create requests, validate responses, test endpoints',
                        inputSchema: {
                            type: 'object',
                            properties: {
                                projectPath: {
                                    type: 'string',
                                    description: 'Path to the ReadyAPI project',
                                },
                                action: {
                                    type: 'string',
                                    enum: ['create_request', 'import_swagger', 'validate_endpoint', 'test_auth'],
                                    description: 'Action to perform',
                                },
                                endpoint: {
                                    type: 'string',
                                    description: 'REST endpoint URL',
                                },
                                method: {
                                    type: 'string',
                                    enum: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
                                    description: 'HTTP method',
                                },
                                swaggerUrl: {
                                    type: 'string',
                                    description: 'Swagger/OpenAPI specification URL',
                                },
                            },
                            required: ['projectPath', 'action'],
                        },
                    },
                    {
                        name: 'readyapi_manage_assertions',
                        description: 'Create and manage test assertions for API responses',
                        inputSchema: {
                            type: 'object',
                            properties: {
                                projectPath: {
                                    type: 'string',
                                    description: 'Path to the ReadyAPI project',
                                },
                                action: {
                                    type: 'string',
                                    enum: ['create_assertion', 'validate_response', 'update_assertion', 'list_assertions'],
                                    description: 'Action to perform',
                                },
                                testStepName: {
                                    type: 'string',
                                    description: 'Name of the test step to add assertions to',
                                },
                                assertionType: {
                                    type: 'string',
                                    enum: ['xpath', 'jsonpath', 'response_time', 'status_code', 'schema_validation'],
                                    description: 'Type of assertion to create',
                                },
                                expectedValue: {
                                    type: 'string',
                                    description: 'Expected value for the assertion',
                                },
                            },
                            required: ['projectPath', 'action'],
                        },
                    },
                    {
                        name: 'readyapi_manage_test_data',
                        description: 'Manage test data sources and parameterization',
                        inputSchema: {
                            type: 'object',
                            properties: {
                                projectPath: {
                                    type: 'string',
                                    description: 'Path to the ReadyAPI project',
                                },
                                action: {
                                    type: 'string',
                                    enum: ['create_datasource', 'import_excel', 'create_database_connection', 'generate_test_data'],
                                    description: 'Action to perform',
                                },
                                dataSourceType: {
                                    type: 'string',
                                    enum: ['excel', 'csv', 'database', 'xml', 'json'],
                                    description: 'Type of data source',
                                },
                                filePath: {
                                    type: 'string',
                                    description: 'Path to data file (for file-based sources)',
                                },
                                connectionString: {
                                    type: 'string',
                                    description: 'Database connection string',
                                },
                            },
                            required: ['projectPath', 'action'],
                        },
                    },
                ],
            };
        });

        // Handle tool calls
        this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
            const { name, arguments: args } = request.params;

            try {
                let result: any;
                switch (name) {
                    case 'readyapi_analyze_project':
                        result = await analyzeProject(args as unknown as ProjectAnalysisArgs);
                        break;

                    case 'readyapi_execute_test_suite':
                        result = await executeTestSuite(args as unknown as TestExecutionArgs);
                        break;

                    case 'readyapi_manage_soap_services':
                        result = await manageSoapServices(args as unknown as SoapServiceArgs);
                        break;

                    case 'readyapi_manage_rest_services':
                        result = await manageRestServices(args as unknown as RestServiceArgs);
                        break;

                    case 'readyapi_manage_assertions':
                        result = await manageAssertions(args as unknown as AssertionArgs);
                        break;

                    case 'readyapi_manage_test_data':
                        result = await manageTestData(args as unknown as DataManagerArgs);
                        break;

                    default:
                        throw new Error(`Unknown tool: ${name}`);
                }

                return result;
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : String(error);
                return {
                    content: [
                        {
                            type: 'text' as const,
                            text: `Error executing ${name}: ${errorMessage}`,
                        },
                    ],
                    isError: true,
                };
            }
        });
    }

    private setupErrorHandling() {
        this.server.onerror = (error) => {
            console.error('[MCP Error]', error);
        };

        process.on('SIGINT', async () => {
            await this.server.close();
            process.exit(0);
        });
    }

    async run() {
        const transport = new StdioServerTransport();
        await this.server.connect(transport);
        console.error('ReadyAPI MCP Server running on stdio');
    }
}

// Start the server
const server = new ReadyAPIMCPServer();
server.run().catch((error) => {
    console.error('Failed to start server:', error);
    process.exit(1);
});
