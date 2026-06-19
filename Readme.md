# To-Do List REST API Using Node.js Core Modules

## Project Description

This project is a RESTful To-Do List API built using only Node.js core modules without any external frameworks such as Express.js.

The application allows users to perform CRUD operations (Create, Read, Update, Delete) on tasks. 
All data is stored temporarily in memory using a JavaScript array.

The project demonstrates a strong understanding of:

* HTTP Protocol
* RESTful API Design
* Request and Response Handling
* JSON Parsing
* Routing
* CRUD Operations
* Error Handling
* Modular Application Architecture

---

# Features

✔ Create a new task

✔ Retrieve all tasks

✔ Retrieve a specific task by ID

✔ Update an existing task

✔ Delete a task

✔ Validate incoming data

✔ Handle invalid routes

✔ Return proper HTTP status codes

✔ Modern URL parsing using the WHATWG URL API

---

# Technologies Used

* Node.js
* HTTP Module
* JavaScript ES6+

No third-party packages were used.

---

# Project Structure

```text
todo-api/
│
├── server.js
│
├── routes/
│   └── taskRoutes.js
│
├── controllers/
│   └── taskController.js
│
├── utils/
│   └── helpers.js
│
├── package.json
│
└── README.md
```

---

# Architecture Overview

## server.js

The main entry point of the application.

Responsibilities:

* Creates the HTTP server.
* Starts listening on port 5000.
* Passes incoming requests to the routing layer.

---

## routes/taskRoutes.js

Responsible for request routing.

Responsibilities:

* Detect requested endpoints.
* Detect HTTP methods.
* Forward requests to the appropriate controller.
* Handle unknown routes.

### Modern URL Parsing

This project uses the modern WHATWG URL API:

```javascript
const parsedUrl = new URL(
  req.url,
  `http://${req.headers.host}`
);

const path = parsedUrl.pathname;
```

This approach replaces the deprecated:

```javascript
url.parse()
```

and follows current Node.js best practices.

---

## controllers/taskController.js

Contains the business logic.

Responsibilities:

* Create tasks.
* Read tasks.
* Update tasks.
* Delete tasks.
* Validate task existence.

Tasks are stored in memory:

```javascript
let tasks = [];
```

---

## utils/helpers.js

Contains reusable helper functions.

Responsibilities:

* Read incoming request bodies.
* Parse JSON data.
* Reduce code duplication.

---

# Data Model

Each task contains:

```json
{
  "id": 1750245600000,
  "title": "Learn Node.js",
  "completed": false
}
```

| Field     | Type    | Description       |
| --------- | ------- | ----------------- |
| id        | Number  | Unique identifier |
| title     | String  | Task title        |
| completed | Boolean | Task status       |

---

# API Endpoints

## Get All Tasks

```http
GET /tasks
```

Response:

```json
[
  {
    "id": 1,
    "title": "Learn Node.js",
    "completed": false
  }
]
```

Status:

```text
200 OK
```

---

## Get Task By ID

```http
GET /tasks/:id
```

Example:

```http
GET /tasks/1
```

Status:

```text
200 OK
404 Not Found
```

---

## Create Task

```http
POST /tasks
```

Request Body:

```json
{
  "title": "Learn Node.js"
}
```

Response:

```json
{
  "id": 1,
  "title": "Learn Node.js",
  "completed": false
}
```

Status:

```text
201 Created
400 Bad Request
```

---

## Update Task

```http
PUT /tasks/:id
```

Request Body:

```json
{
  "completed": true
}
```

Response:

```json
{
  "id": 1,
  "title": "Learn Node.js",
  "completed": true
}
```

Status:

```text
200 OK
404 Not Found
400 Bad Request
```

---

## Delete Task

```http
DELETE /tasks/:id
```

Example:

```http
DELETE /tasks/1
```

Response:

```json
{
  "message": "Task deleted successfully"
}
```

Status:

```text
200 OK
404 Not Found
```

---

# Error Handling

The API returns meaningful error messages.

## Invalid JSON

```json
{
  "message": "Invalid JSON"
}
```

---

## Missing Title

```json
{
  "message": "Title is required"
}
```

---

## Task Not Found

```json
{
  "message": "Task not found"
}
```

---

## Route Not Found

```json
{
  "message": "Route not found"
}
```

---

# Running The Project

## Install

```bash
npm install
```

---

## Start The Server

```bash
node server.js
```

Output:

```bash
Server running on port 5000
```

---

# Testing

The API was tested successfully using Postman.

Tested operations:

1. POST /tasks
2. GET /tasks
3. GET /tasks/:id
4. PUT /tasks/:id
5. DELETE /tasks/:id

All CRUD operations returned the expected results and status codes.

---

# Important Note

This project stores data in memory:

```javascript
let tasks = [];
```

Therefore:

* Data is not persistent.
* Restarting the server resets all tasks.
* No database is used.

This behavior is expected for this checkpoint.

---

# Learning Outcomes

By completing this project, the following concepts were applied:

* RESTful API Design
* HTTP Methods
* CRUD Operations
* Dynamic Routing
* Request Parsing
* Response Handling
* JSON Processing
* Error Handling
* Modular Programming
* Node.js Core Modules
* Modern URL API Usage

---

# Conclusion

This project successfully implements a complete To-Do List REST API using only Node.js core modules. It demonstrates backend development fundamentals, proper API design, clean code organization, and modern Node.js practices without relying on external frameworks.
