# Coffee Cart Testing Project

This project contains automated tests for the Coffee Cart application using Cypress and implements the Page Object Model pattern.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run tests in interactive mode:
```bash
npm run cypress:open
```

3. Run tests in headless mode:
```bash
npm test
```

## Project Structure

- `cypress/e2e/` - Contains test files
- `cypress/pages/` - Contains Page Object Model classes
- `.github/workflows/` - Contains CI/CD pipeline configuration

## CI/CD

The project uses GitHub Actions for continuous integration. Tests are automatically run on:
- Push to main/master branch
- Pull requests to main/master branch

## Page Objects

The project uses the Page Object Model pattern to improve test maintenance and reusability. Page objects are located in `cypress/pages/`.
