# E-Commerce Web Application

A Java 17 and Spring Boot REST API for a product catalogue.

## Implemented
- Create, list and retrieve products.
- Delete products by ID.
- Validates product name and positive price.
- Spring Data JPA persistence with an H2 in-memory database.
- REST API under `/api/products`.

## Run
```bash
mvn spring-boot:run
```
Base URL: `http://localhost:8080/api/products`. Create a product with JSON `{"name":"Keyboard","price":1299.00}`.

## Test
```bash
mvn test
```
GitHub Actions runs the Maven test suite on Java 17.

Scope: product catalogue CRUD demo only. Cart, checkout, payments, customer authentication and production database configuration are not implemented.