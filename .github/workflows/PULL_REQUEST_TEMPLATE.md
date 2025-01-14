### PR Checklist
<!-- Provide a brief description of the changes in this PR -->

---

### Programming

#### Coding Standards
- [ ] Use appropriate HTTP methods for API endpoints based on the operation (GET, POST, PUT, DELETE, etc.).
- [ ] Ensure proper error handling with descriptive error messages and appropriate HTTP status codes.
- [ ] Implement a retry mechanism for external API calls with exponential backoff.
- [ ] Ensure all database queries are optimized and execute within the defined threshold (e.g., less than 700ms).
- [ ] Follow the project-specific naming conventions for variables, functions, and classes.
- [ ] Ensure all reusable logic is moved to helper or utility functions to avoid redundancy.

#### Code Quality
- [ ] Write modular and maintainable code by adhering to SOLID principles.
- [ ] Ensure all functions are concise and perform a single responsibility.
- [ ] Avoid hardcoding values; use configuration files or environment variables.
- [ ] Ensure proper comments are added to complex sections of the code for clarity.

#### Performance Optimization
- [ ] Verify memory usage and optimize loops or recursive calls where necessary.
- [ ] Use lazy loading or pagination for large datasets.
- [ ] Avoid fetching unnecessary data by using selective queries (e.g., only required fields).

#### Security Practices
- [ ] Sanitize and validate all user inputs to prevent injection attacks.
- [ ] Use HTTPS for all network requests to ensure secure data transmission.
- [ ] Do not log sensitive information such as passwords or authentication tokens.
- [ ] Implement rate limiting to prevent abuse of APIs.
- [ ] Ensure all sensitive data is encrypted both at rest and in transit.

#### Testing
- [ ] Write and execute unit test cases for all functions with a minimum of 80% code coverage.
- [ ] Test edge cases, including invalid inputs, boundary conditions, and failure scenarios.
- [ ] Verify integration of all modules with existing components.
- [ ] Ensure mock data or stubs are used for testing external services.

#### Documentation
- [ ] Add clear and concise inline comments where necessary.
- [ ] Update developer documentation with new APIs, configurations, or architectural changes.

#### Async Behavior
- [ ] Ensure all asynchronous operations are properly handled using async/await or Promises.
- [ ] Handle promise rejections and exceptions in asynchronous code with appropriate fallback mechanisms.
- [ ] Ensure synchronous operations do not block the event loop.

#### Code Reviews
- [ ] Prepare your code for review by ensuring it adheres to all project standards and guidelines.
- [ ] Document any known limitations or areas requiring further discussion in the pull request description.
- [ ] Run static code analysis tools to catch linting or formatting errors before submission.

---

### Code Review

#### General Code Quality
- [ ] The code follows the team's coding standards and style guide.
- [ ] Proper indentation and formatting of code for readability.
- [ ] Unused variables, functions, and imports are identified and removed.
- [ ] Proper commenting and documentation for functions, classes, and complex logic are included.
- [ ] The code is modular, and functions are small, performing only one responsibility.
- [ ] Adheres to SOLID principles and applicable design patterns.

#### Code Structure
- [ ] Proper file and directory structure is followed based on project conventions.
- [ ] The code is easy to navigate and logically organized.
- [ ] Excessive nesting in loops, conditions, or functions is avoided or refactored.
- [ ] Naming conventions for variables, functions, classes, and files are consistent and meaningful.
- [ ] Classes and functions are used appropriately to avoid code duplication.

#### Functionality
- [ ] The code implements the feature according to the specifications and requirements.
- [ ] All edge cases and potential failure points are addressed.
- [ ] Business logic is correctly implemented and aligns with the requirements.
- [ ] The code does not introduce regressions in existing functionality.
- [ ] The new code does not conflict with other ongoing development efforts.

#### Testing
- [ ] Sufficient unit tests are written for the new functionality.
- [ ] Test coverage is at an acceptable level and includes critical paths.
- [ ] Test case structure and naming conventions are correct.
- [ ] All tests are passing, and no tests are skipped without a valid reason.
- [ ] Integration and end-to-end tests cover critical paths and edge cases.
- [ ] Mocks and stubs are appropriately used in unit tests, isolating external dependencies.
- [ ] Test cases are not redundant and focus on new functionality or edge cases.

#### Performance
- [ ] Performance issues like unnecessary database calls, complex queries, or inefficient loops are addressed.
- [ ] Performance optimizations (e.g., caching, pagination) are applied where necessary.
- [ ] Heavy computations or resource-intensive operations are optimized.

#### Security
- [ ] The code does not introduce security vulnerabilities like SQL injection or XSS.
- [ ] Sensitive data is handled correctly, including encryption and secure storage practices.
- [ ] Input validation is implemented to prevent malicious inputs.
- [ ] Authentication and authorization mechanisms are correctly implemented and tested.
- [ ] No hardcoded secrets, tokens, or passwords are present in the codebase.

#### Documentation
- [ ] All functions, methods, and classes have meaningful documentation and comments.
- [ ] The code is easy to understand, with explanations for complex logic where necessary.
- [ ] The README and other relevant documentation are up to date.
- [ ] Deployment instructions, if applicable, are included and clear.
- [ ] Major design decisions are documented for future reference.

#### Collaboration
- [ ] The code follows team conventions and patterns established in previous reviews.
- [ ] Constructive feedback and suggestions for improvement are provided respectfully.
- [ ] Suggested changes are reasonable, actionable, and not overly critical.
- [ ] Reviewer and author discuss and resolve disagreements or concerns.
- [ ] The review process promotes knowledge sharing and is a learning opportunity for the team.