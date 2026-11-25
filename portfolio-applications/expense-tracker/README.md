# Expense Tracker Web Application

A dependency-free Node.js REST API for recording expenses.

## Implemented
- Add and list expense records.
- Delete an expense by ID.
- Validate non-empty titles and positive amounts.
- Health endpoint at `/health`.
- Automated API tests using Node's built-in test runner.

## Run
```bash
npm start
```
Endpoints: `GET /api/expenses`, `POST /api/expenses`, `DELETE /api/expenses/:id`.

## Test
```bash
npm test
```

Scope: API demonstration with in-memory storage; records reset when the process restarts. Browser UI, accounts, persistent database, budgets and charts are future enhancements.