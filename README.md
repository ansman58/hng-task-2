# HNG-TASK-2

# REST API

A simple Express.js REST API for managing people. This project demonstrates basic CRUD operations and error handling in a Node.js application.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- MySql2 installed and running
- Postman or a similar tool for testing the API

### Installation

1. Clone the repository:

### Install dependencies:
npm install

- Create a .env file in the project root directory with your MySql database connection details:

```
DB_USER = 
DB_PASSWORD = 
DB_NAME = 
DB_HOST = 
```


### Start the server:
pnpm start

### Usage
- API Endpoints

`GET /api: Get a list of all people.` 
`POST /api: Create a new person.`
`GET /api/:user_id: Get a single person by their ID.`
`PATCH /api/:user_id: Update a person by their ID.`
`DELETE /api/:user_id: Delete a person by their ID.`

Examples:
### To create a new person, make a POST request to:
- `http://localhost:3120/api`
### Request Body:
```json
{
  "name": "John Doe"
}
```

### To get a person by ID, make a GET request to:
`http://localhost:3120/api/1`


### To update a person by ID, make a PATCH request to:
`http://localhost:3120/api/2`

### Request Body:
```json
{
  "name": "Updated Name"
}
```

### To delete a person by ID, make a DELETE request to:
`http://localhost:3120/api/1`


### Error Handling
The API handles errors gracefully. It provides meaningful error messages and status codes for various scenarios, including invalid requests and resource not found.
