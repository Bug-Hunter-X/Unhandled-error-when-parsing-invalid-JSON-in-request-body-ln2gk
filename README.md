# Unhandled error when parsing invalid JSON in request body
This repository demonstrates a common error in Express.js applications where the server throws an error when it receives invalid JSON data in the request body.

## Bug
The bug occurs in the `bug.js` file. The server uses `res.json()` to send the request body back to the client without validating it first. If the request body is not a valid JSON string, it will cause an error and crash the application.

## Solution
The `bugSolution.js` file shows how to fix the bug by validating the request body before sending it back to the client.  The solution uses a `try...catch` block to handle the potential error that `JSON.parse` might throw. If parsing fails, it sends a proper error response instead of crashing.

## How to reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `node bug.js`.
4. Send a POST request to `http://localhost:3000/` with an invalid JSON body (e.g., `{"name": "John Doe", "age": "thirty"}`).
5. Observe the error.
6. Run `node bugSolution.js` and repeat step 4. Observe the improved error handling.