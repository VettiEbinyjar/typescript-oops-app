Sure! Here is a `README.md` file for your application:

```markdown
# Backend Application with TypeScript, Express, and Mongoose

This repository contains a backend application built using TypeScript, Express, and Mongoose, implementing JWT authentication and following best practices.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [License](#license)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/backend-app.git
   cd backend-app
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the root of the project and add your MongoDB URI and secret key:

   ```env
   MONGO_URI=mongodb://localhost:27017/mydatabase
   SECRET_KEY=your_secret_key
   ```

4. Build the TypeScript project:

   ```sh
   npm run build
   ```

## Usage

To start the application in development mode with automatic restarts on file changes, use:

```sh
npm start
```

This will start the server using `nodemon` and `ts-node`.

## API Endpoints

### Authentication

- **Register**: `POST /auth/register`
  - Body: `{ "name": "John Doe", "email": "john@example.com", "password": "yourpassword" }`
  - Response: `{ "token": "your_jwt_token" }`

- **Login**: `POST /auth/login`
  - Body: `{ "email": "john@example.com", "password": "yourpassword" }`
  - Response: `{ "token": "your_jwt_token" }`

- **Get Profile**: `GET /auth/profile`
  - Headers: `{ "Authorization": "Bearer your_jwt_token" }`
  - Response: `{ "name": "John Doe", "email": "john@example.com" }`

### Users

- **Get All Users**: `GET /users`
  - Response: `[{"_id": "1", "name": "John Doe", "email": "john@example.com"}, ...]`

- **Add User**: `POST /users`
  - Body: `{ "name": "Jane Doe", "email": "jane@example.com", "password": "yourpassword" }`
  - Response: `{ "_id": "2", "name": "Jane Doe", "email": "jane@example.com" }`

- **Delete All Users**: `DELETE /users`
  - Response: `{ "message": "All users deleted" }`

- **Get User by ID**: `GET /users/:id`
  - Response: `{ "_id": "1", "name": "John Doe", "email": "john@example.com" }`

- **Update User by ID**: `PUT /users/:id`
  - Body: `{ "name": "John Smith" }`
  - Response: `{ "_id": "1", "name": "John Smith", "email": "john@example.com" }`

- **Delete User by ID**: `DELETE /users/:id`
  - Response: `{ "message": "User deleted" }`

## Environment Variables

- `MONGO_URI`: The URI of your MongoDB database.
- `SECRET_KEY`: A secret key for JWT token generation.

## Project Structure

```plaintext
backend-app/
│
├── src/
│   ├── config/
│   │   └── database.ts
│   ├── controllers/
│   │   ├── authController.ts
│   │   └── userController.ts
│   ├── middleware/
│   │   └── authMiddleware.ts
│   ├── models/
│   │   └── userModel.ts
│   ├── routes/
│   │   ├── authRoutes.ts
│   │   └── userRoutes.ts
│   ├── index.ts
│   └── server.ts
│
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

This `README.md` provides a comprehensive overview of your project, including installation instructions, usage, API endpoints, environment variables, project structure, and licensing. You can customize it further based on your specific requirements or additional features in your application.