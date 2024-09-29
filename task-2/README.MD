# Request Management API

This is an Express.js application that provides a RESTful API for managing requests. It allows users to create, read, update, and delete requests, as well as mark them as completed.

## Features

- Get all requests (sorted by priority)
- Get a specific request by ID
- Create a new request
- Update an existing request
- Delete a request
- Mark a request as completed

## Project Structure

The project is structured as follows:

- `app.js`: The main application file that sets up the Express server and middleware.
- `models/Request.js`: Defines the Request model and methods for interacting with the data.
- `controllers/requestController.js`: Contains the logic for handling request-related operations.
- `routes/requestRoutes.js`: Defines the API routes and maps them to controller functions.
- `data/requests.json`: JSON file used to store the requests data.

## Setup and Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   node app.js
   ```

The server will start running on `http://localhost:3000` (or the port specified in the `PORT` environment variable).

## API Endpoints

- `GET /requests`: Get all requests (sorted by priority)
- `GET /requests/:id`: Get a specific request by ID
- `POST /requests`: Create a new request
- `PUT /requests/:id`: Update an existing request
- `DELETE /requests/:id`: Delete a request
- `POST /requests/:id/complete`: Mark a request as completed

## Data Model

Each request object has the following structure:

```json
{
  "id": "string",
  "status": "string",
  "priority": "number"
  // Other request-specific fields
}
```

## Error Handling

The API includes basic error handling:

- 404 Not Found: When a requested resource doesn't exist
- 500 Internal Server Error: For any server-side errors

## Future Improvements

1. Add authentication and authorization
2. Implement input validation
3. Add pagination for the GET all requests endpoint
4. Implement logging
5. Add unit and integration tests
6. Use a database instead of a JSON file for data persistence
