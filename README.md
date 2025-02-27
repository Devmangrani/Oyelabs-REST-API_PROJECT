# RESTful API with Node.js and Express

A robust RESTful API built with Node.js, Express, and PostgreSQL, featuring user management, authentication, and comprehensive API documentation.


## 🎯 Project Objectives

This project demonstrates the implementation of a RESTful API with:

- Node.js and Express.js framework
- PostgreSQL database with Sequelize ORM
- CRUD operations
- JWT authentication
- API documentation with Swagger
- Request validation and error handling
- Environment configuration management

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL
- **ORM**: Sequelize
- **Authentication**: JWT
- **Documentation**: Swagger
- **Testing**: Jest
- **Other Tools**: bcryptjs, cors, dotenv

## 📋 Features

1. **User Management**

   - Create new users
   - Retrieve user details
   - Update user information
   - Delete users
   - List all users with pagination

2. **Authentication**

   - JWT-based authentication
   - Secure password hashing
   - Protected routes

3. **API Documentation**

   - Swagger UI integration
   - Detailed API endpoints documentation

4. **Data Validation**
   - Input validation middleware
   - Error handling middleware

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/Devmangrani/Oyelabs-REST-API_PROJECT.git
cd Oyelabs-REST-API_PROJECT
```

2. Install dependencies

```bash
npm install
```

3. Configure environment variables

```bash
cp .env.example .env
```

Server Configuration
PORT=3000
NODE_ENV=development
Database Configuration
DB_HOST=localhost
DB_USER=your_username
DB_PASS=your_password
DB_NAME=rest_api_db
DB_PORT=5432
API Configuration
API_PREFIX=/api
CORS_ORIGIN=
Security Configuration
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=24h

Edit `.env` with your configuration:

```bash
PORT=3000
DB_HOST=localhost
DB_USER=your_username
```

4. Start the server

```bash
npm start
```

## 📚 Documentation

## 📚 API Documentation

Access the Swagger documentation at: `http://localhost:3000/api-docs`

### API Endpoints

#### Authentication

- `POST /api/auth/login` - User login

#### Users

- `GET /api/users` - Get all users (paginated)
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## 🔍 Postman Testing

Here are the API endpoints tested in Postman:

### Example Requests

1. **Create User**
   ![Create User](./screenshots/create-user.png)

   ```http
   POST http://localhost:3000/api/users
   Content-Type: application/json

   {
       "name": "Test User",
       "email": "test@example.com",
       "password": "password123"
   }
   ```

2. **Login**
   ![Login](./screenshots/login.png)

   ```http
   POST http://localhost:3000/api/auth/login
   Content-Type: application/json

   {
       "email": "test@example.com",
       "password": "password123"
   }
   ```

3. **Get Users**
   ![Get Users](./screenshots/login.png)
   ```http
   GET http://localhost:3000/api/users
   Authorization: Bearer <your_jwt_token>
   ```

### Response Examples

1. **Successful User Creation**
   ![Create User Response](./screenshots/create-user-response.png)

2. **Successful Login**
   ![Login Response](./screenshots/login-dev.png)

3. **Get Users with Pagination**
   ![Get Users Response](./screenshots/get-users-response.png)



## 🔒 Environment Files

The project uses different environment configurations:

- `.env.development` - Development environment
- `.env.test` - Testing environment
- `.env.production` - Production environment

## 🚀 Deployment

1. Set up production environment variables
2. Build the project (if necessary)
3. Start the server using `npm start`

## 📤 GitHub Upload Instructions

1. Create a new repository on GitHub

2. Initialize git in your project (if not already done):

```bash
git init
```

3. Add the following files to your repository:

- `.env.production` - Production environment
- `.env.test` - Testing environment
- `.env.development` - Development environment
- `.env.example` - Example environment file
- `node_modules/` - Node.js modules
- `.env` - Environment variables
- `.env.example` - Example environment file

4. Commit and push your changes:

```bash
git add .
git commit -m "Initial commit"
```

5. Add the remote repository:

```bash
git remote add origin <your-github-repo-url>
```

6. Push your changes:

```bash
git push -u origin main
```

7. Test the project:

```bash
npm test
```

## 📦 Project Dependencies

- `express`: Web framework for Node.js
- `sequelize`: ORM for PostgreSQL
- `bcryptjs`: Password hashing
- `jsonwebtoken`: JSON Web Token implementation
- `cors`: Cross-Origin Resource Sharing middleware
- `dotenv`: Environment variable management
- `nodemon`: Development tool to restart the server on file changes
- `pg`: PostgreSQL client for Node.js
- `pg-hstore`: Parse and stringify JSON objects using hstore format
