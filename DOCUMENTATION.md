### HNG TASK 2 DOCUMENTATION

This is the documentation for the hng-task-2 app

The root of the application is located in the `server.ts`file.

Configuration for the database used (mySql) is located in `ormconfig.ts`

## Install
--

To install packages after cloning repository:

```
pnpm install
```

```
 yarn install
```

## Start Server

```
pnpm dev
```

```
yarn dev
```

---

### REST API
Operations of the CRUD endpoints for the application are described below

## Create Person

**Endpoint:** `POST | https://hngx-task-two-uzvn.onrender.com/api`

- **Description:** Creates a new person in the database.
- **Returns:**
  - Status 400 Bad Request if the request body is missing or invalid(e.g not a string).
  - Status 400 Bad Request if the person with the same name already exists.
  - Status 201 Created with the newly created user if successful.

**Response Body (if successful):**

```json
{
  "message": "User created successfully",
  "newUser": {
    "name": "John Doe",
    "user_id": 4,
    "created_at": "2023-09-12T13:48:43.000Z",
    "updated_at": "2023-09-12T13:48:43.000Z"
  }
}
```

**Request Body:**

```json
{
  "name": "John Doe"
}
```

---

## Get All Persons

**Endpoint:** `GET | https://hngx-task-two-uzvn.onrender.com/api`

- **Description:** Fetches all persons from the database.
- **Returns:**
  - Status 200 OK with the list of users if successful.

**Response Body (if successful):**

```json
{
  "message": "Users fetched successfully",
  "users": [
    {
      "user_id": 1,
      "name": "My_Gee",
      "created_at": "2023-09-12T13:08:57.000Z",
      "updated_at": "2023-09-12T13:08:57.000Z"
    },
    {
      "user_id": 3,
      "name": "Gele",
      "created_at": "2023-09-12T13:48:33.000Z",
      "updated_at": "2023-09-12T13:48:33.000Z"
    },
    {
      "user_id": 4,
      "name": "Fash",
      "created_at": "2023-09-12T13:48:43.000Z",
      "updated_at": "2023-09-12T13:48:43.000Z"
    }
  ]
}
```

---

## Get Person by ID

**Endpoint:** `GET | https://hngx-task-two-uzvn.onrender.com/api/:user_id`

- **Description:** Fetches a person by their ID from the database.
- **Returns:**
  - Status 404 Not Found if the person is not found.
  - Status 200 OK with the user if successful.

**Response Body(if successful):**

```json
{
  "message": "User fetched successfully",
  "user": {
    "user_id": 1,
    "name": "My_Gee",
    "created_at": "2023-09-12T13:08:57.000Z",
    "updated_at": "2023-09-12T13:08:57.000Z"
  }
}
```

---

## Update Person

**Endpoint:** `PATCH | https://hngx-task-two-uzvn.onrender.com/api/:user_id`

- **Description:** Updates a person's information in the database.
- **Returns:**
  - Status 400 Bad Request if the request body is missing or invalid.
  - Status 404 Not Found if the person is not found.
  - Status 202 Accepted with the updated user if successful.

**Response Body(if successful):**

```json
{
  "message": "User updated successfully",
  "user": {
    "user_id": 1,
    "name": "Jane Doe",
    "created_at": "2023-09-12T13:08:57.000Z",
    "updated_at": "2023-09-12T13:08:57.000Z"
  }
}
```

**Request Body:**

```json
{
  "name": "John Doe"
}
```

---

## Delete Person

**Endpoint:** `DELETE | https://hngx-task-two-uzvn.onrender.com/api/:user_id`

- **Description:** Deletes one person from the database.
- **Returns:**
  - Status 404 Not Found if the person is not found.
  - Status 200 with a success message response if deletion is successful.

**Response Body(if successful):**

```json
{
  "message": "User deleted successfully"
}
```
