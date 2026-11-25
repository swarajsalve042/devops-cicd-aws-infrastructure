# Employee Management System

A Java 17 and Spring Boot REST API for employee records.

## Implemented
- Create, list and retrieve employee records.
- Update employee details.
- Delete employees by ID.
- Spring Data JPA with H2 in-memory database.
- REST API under `/api/employees`.

## Run
```bash
mvn spring-boot:run
```
Base URL: `http://localhost:8080/api/employees`.

## Test
```bash
mvn test
```
GitHub Actions runs the Maven test suite on Java 17.

Scope: CRUD learning project. Authentication, role-based access, advanced validation and production database configuration are not implemented.