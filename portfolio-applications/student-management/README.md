# Student Management System

A Java 17 JDBC data-access project demonstrating student-record CRUD operations.

## Implemented
- Creates the students table if missing.
- Adds records with prepared statements.
- Lists student records.
- Deletes a student by ID.
- Uses try-with-resources for JDBC resource management.

## Test
```bash
mvn test
```
The automated test uses an H2 in-memory database. The repository accepts a JDBC URL and can be configured for another JDBC database.

Scope: JDBC data-access layer only; desktop/web UI and production database configuration are not included.