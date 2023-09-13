# HNG-TASK-2

A simple Express.js REST API for managing people. This project demonstrates basic CRUD operations and error handling in a Node.js application.

## Table of Contents

- [Getting Started](#getting-started)
  - [Live url](#live-url)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Postman Collection](#postman-collection)
- [Usage](#usage)
  - [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)

## Getting Started

## Live Url

[Go to live url](#https://hngx-task-two-uzvn.onrender.com/api)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- MySql2 installed and running
- Postman or a similar tool for testing the API

## Installation

1. Clone the repository:

```
git clone https://github.com/ansman58/hng-task-2.git
```

## Install dependencies:

```
yarn install
```

- Create a .env file in the project root directory with your MySql database connection details:

```
DB_USER =
DB_PASSWORD =
DB_NAME =
DB_HOST =
```

## Postman Collection

[Go to postman collection](#https://documenter.getpostman.com/view/29520347/2s9YC4VszN)

## Start the server:

```
yarn dev
```

## Usage (API Endpoints)

- `GET /api: Get a list of all people.`
- `POST /api: Create a new person.`
- `GET /api/:user_id: Get a single person by their ID.`
- `PATCH /api/:user_id: Update a person by their ID.`
- `DELETE /api/:user_id: Delete a person by their ID.`

Examples:

## To create a new person, make a POST request to:

- `https://hngx-task-two-uzvn.onrender.com/api`

## Request Body:

```json
{
  "name": "John Doe"
}
```

## To get a person by ID, make a GET request to:

`https://hngx-task-two-uzvn.onrender.com/api/1`

## To update a person by ID, make a PATCH request to:

`https://hngx-task-two-uzvn.onrender.com/api/2`

## Request Body:

```json
{
  "name": "Updated Name"
}
```

## To delete a person by ID, make a DELETE request to:

`https://hngx-task-two-uzvn.onrender.com/api/1`

## Error Handling

The API handles errors gracefully. It provides meaningful error messages and status codes for various scenarios, including invalid requests and resource not found.
