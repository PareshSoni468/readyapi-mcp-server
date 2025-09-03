# Contributing to ReadyAPI MCP Server

Thank you for your interest in contributing to the ReadyAPI MCP Server! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- TypeScript knowledge
- Basic understanding of ReadyAPI/SoapUI
- Familiarity with Model Context Protocol (MCP)

### Development Setup
1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/readyapi-mcp-server.git`
3. Install dependencies: `npm install`
4. Build the project: `npm run build`
5. Run in development mode: `npm run dev`

## 📋 How to Contribute

### Reporting Issues
- Use the GitHub issue tracker
- Provide clear, reproducible steps
- Include ReadyAPI version and environment details
- Add screenshots or logs when helpful

### Submitting Changes
1. Create a feature branch: `git checkout -b feature/your-feature-name`
2. Make your changes
3. Add tests for new functionality
4. Ensure all tests pass: `npm test`
5. Update documentation if needed
6. Commit with clear messages
7. Push to your fork
8. Create a Pull Request

### Code Style
- Follow TypeScript best practices
- Use meaningful variable and function names
- Add JSDoc comments for public APIs
- Maintain consistent formatting (use Prettier)
- Follow existing code patterns

### Commit Messages
Use clear, descriptive commit messages:
```
feat: add SOAP response validation
fix: resolve authentication timeout issue
docs: update installation guide
test: add unit tests for data manager
```

## 🏗️ Project Structure

```
src/
├── index.ts                 # Main MCP server
├── readyapi/
│   ├── project-manager.ts   # Project analysis
│   ├── test-executor.ts     # Test execution
│   ├── soap-helper.ts       # SOAP operations
│   ├── rest-helper.ts       # REST operations
│   ├── assertion-manager.ts # Assertion handling
│   └── data-manager.ts      # Data management
└── types/                   # Type definitions
```

## 🧪 Testing

### Running Tests
```bash
npm test                 # Run all tests
npm run test:unit       # Unit tests only
npm run test:integration # Integration tests
npm run test:coverage   # Generate coverage report
```

### Writing Tests
- Write unit tests for all new functions
- Include integration tests for MCP tools
- Test error handling scenarios
- Mock external dependencies

### Test Structure
```typescript
describe('ProjectManager', () => {
  describe('analyzeProject', () => {
    it('should analyze project overview', async () => {
      // Test implementation
    });
    
    it('should handle invalid project paths', async () => {
      // Error handling test
    });
  });
});
```

## 📝 Documentation

### Code Documentation
- Add JSDoc comments for all public APIs
- Include usage examples in comments
- Document complex algorithms or business logic
- Keep README.md and USAGE_EXAMPLES.md updated

### Documentation Standards
```typescript
/**
 * Analyzes a ReadyAPI project and provides insights
 * @param args - Project analysis arguments
 * @param args.projectPath - Path to ReadyAPI project file
 * @param args.analysisType - Type of analysis to perform
 * @returns Promise with analysis results
 * @throws Error when project path is invalid
 */
export async function analyzeProject(args: ProjectAnalysisArgs): Promise<ProjectAnalysisResult>
```

## 🔧 Development Guidelines

### Adding New MCP Tools
1. Define tool schema in `index.ts`
2. Implement handler function in appropriate module
3. Add comprehensive error handling
4. Write unit and integration tests
5. Update documentation and examples

### Error Handling
- Use descriptive error messages
- Provide actionable solutions when possible
- Log errors appropriately
- Return consistent error formats

### Performance Considerations
- Avoid blocking operations in main thread
- Use streaming for large data sets
- Implement proper caching where appropriate
- Monitor memory usage

## 🤝 Community Guidelines

### Code of Conduct
- Be respectful and inclusive
- Help others learn and grow
- Provide constructive feedback
- Follow the golden rule

### Communication
- Use GitHub issues for bug reports and feature requests
- Join discussions in pull requests
- Be patient with response times
- Ask questions when unclear

## 🎯 Areas for Contribution

### High Priority
- ReadyAPI XML project file parsing
- Test runner integration
- Performance optimization
- Error handling improvements

### Medium Priority
- Additional assertion types
- More data source formats
- UI test automation features
- Load testing capabilities

### Documentation
- More usage examples
- Video tutorials
- Best practices guide
- Troubleshooting documentation

## 🏆 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes for significant contributions
- Project documentation

## 📞 Getting Help

- GitHub Issues: Bug reports and feature requests
- Discussions: General questions and ideas
- Documentation: Check README.md and USAGE_EXAMPLES.md

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to ReadyAPI MCP Server! Your efforts help make API testing automation more accessible and powerful for everyone.
