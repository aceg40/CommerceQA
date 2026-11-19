# CommerceQA | E-Commerce Test Automation

A QA automation portfolio project using Playwright and TypeScript to test a Medusa e-commerce application.

## Project Overview

CommerceQA demonstrates automated end-to-end (E2E) and API testing, covering customer journeys, product interactions, and API error handling.

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Medusa (application under test)

## Test Coverage

### End-to-End Tests
- Verify the storefront loads correctly
- Verify the product catalog displays products
- Open a product from the catalog
- Select a product variant and add it to the cart

### API Tests
- Retrieve available regions
- Validate rejection of requests without an API key
- Verify error handling for nonexistent API routes

## Test Results

**7 tests passed locally in Chromium.**

## Project Structure

- automation/tests/storefront.spec.ts — E2E tests
- automation/tests/api.spec.ts — API tests
- automation/playwright.config.ts — Playwright configuration
- automation/.github/workflows/playwright.yml — Initial CI configuration

## Running the Tests

Requirements:
- Node.js
- A running Medusa backend and storefront
- A valid Medusa publishable API key

From the automation directory, run:

npm ci
npx playwright install
npx playwright test --project=chromium

The application under test is not included in this repository.

## Author

Juan Sebastián Giraldo López

Software Quality Assurance | QA Automation
