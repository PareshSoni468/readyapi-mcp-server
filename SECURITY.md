# ReadyAPI MCP Server - Security Policy

## Supported Versions

We actively support the following versions of ReadyAPI MCP Server:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take security vulnerabilities seriously. If you discover a security vulnerability in ReadyAPI MCP Server, please follow these steps:

### 1. **DO NOT** create a public GitHub issue

Security vulnerabilities should not be disclosed publicly until they have been addressed.

### 2. Report privately

Send an email to the maintainers with:
- **Subject**: "Security Vulnerability in ReadyAPI MCP Server"
- **Description**: Detailed description of the vulnerability
- **Steps to reproduce**: Clear steps to reproduce the issue
- **Impact**: What could an attacker accomplish with this vulnerability
- **Suggested fix**: If you have ideas for how to fix it

### 3. Response timeline

- **Initial response**: Within 48 hours of your report
- **Investigation**: We will investigate and assess the vulnerability
- **Fix development**: We will work on a fix as quickly as possible
- **Disclosure**: We will coordinate disclosure with you

### 4. Responsible disclosure

We follow responsible disclosure practices:
- We will acknowledge your report within 48 hours
- We will provide regular updates on our progress
- We will credit you for the discovery (if desired)
- We will not take legal action against researchers who follow this policy

## Security Best Practices

When using ReadyAPI MCP Server, follow these security best practices:

### Authentication & Authorization
- Never hardcode credentials in test files
- Use environment variables for sensitive configuration
- Implement proper authentication for API endpoints
- Regularly rotate API keys and credentials

### Data Protection
- Don't include sensitive data in test data files
- Use secure connections (HTTPS/TLS) for API testing
- Sanitize logs to prevent credential exposure
- Encrypt sensitive test data at rest

### Network Security
- Use secure networks for API testing
- Implement proper firewall rules
- Monitor network traffic for anomalies
- Use VPN when testing against internal APIs

### Code Security
- Keep dependencies up to date
- Run security audits regularly (`npm audit`)
- Follow secure coding practices
- Review code changes for security implications

### ReadyAPI/SoapUI Security
- Keep ReadyAPI/SoapUI installations updated
- Secure ReadyAPI project files
- Use proper SSL certificate validation
- Implement security testing in your test suites

## Known Security Considerations

### 1. File System Access
ReadyAPI MCP Server requires access to:
- ReadyAPI project files
- Test data files
- Log directories

Ensure proper file permissions and restrict access to authorized users only.

### 2. Network Connections
The server makes network connections to:
- Target API endpoints
- Database servers (for data sources)
- File shares (for test data)

Monitor and secure these connections appropriately.

### 3. Data Handling
The server processes:
- API request/response data
- Test credentials
- Database connection strings

Ensure sensitive data is handled securely and not logged inappropriately.

## Security Updates

Security updates will be:
- Released as soon as possible after discovery
- Announced through GitHub releases
- Documented in the changelog
- Tagged with security advisory information

## Contact Information

For security-related questions or concerns:
- Email: [Create a GitHub issue for non-security questions]
- GitHub Security Advisories: Use GitHub's private vulnerability reporting
- Response time: 48 hours maximum

## Acknowledgments

We appreciate the security research community and will acknowledge researchers who responsibly disclose vulnerabilities:
- Public acknowledgment in release notes
- Credit in security advisories
- Optional listing in our contributors section

Thank you for helping keep ReadyAPI MCP Server and its users safe!
