# todo-kotlin
Todo List made with SpringBoot/Kotlin

### Dependencies
- Spring Web
- ThymeLeaf
- Spring Data JPA
- MySQL driver
- Spring Boot DevTools

### Run the API in the backend
From the root project: `cd backend`
`./gradlew bootRun`

### Run the frontend:
From the root project: `cd frontend`
`yarn start`

### Build the app:
- `docker-compose -f docker-compose-dev.yml build`

### Run the app in Docker:
- from the root project
- `docker-compose -f docker-compose-dev.yml up`