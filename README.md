# User Authentication & Authorization API (JWT)

This project implements **User Authentication and Authorization**
using **JWT Bearer Tokens** with Node.js, Express.js, and MongoDB.
The application follows the **MVC architecture** and is tested using Postman.
The backend is **deployed on Render** and publicly accessible.

---

## 🌐 Live Backend URL

https://auth-jwt-project-m0lk.onrender.com

---

## 🚀 Features

- User Registration (Signup)
- User Login (Signin)
- Password hashing using bcrypt
- JWT generation on login
- Bearer Token based authorization
- Protected routes using middleware
- Proper error handling
- MVC folder structure

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (JSON Web Token)
- bcrypt
- Postman

---

## 📂 Folder Structure

├── Controllers  
│   └── userController.js  
├── Models  
│   └── userSchema.js  
├── Routers  
│   └── userRouter.js  
├── Middlewares  
│   └── authMiddleware.js  
├── Database  
│   └── dbconfig.js  
├── index.js  
├── .env  
├── package.json  
└── README.md  

---

## 📌 API Endpoints (Deployed)

Base URL:
https://auth-jwt-project-m0lk.onrender.com


| Method | Endpoint              | Description              |
|------|----------------------|--------------------------|
| POST | /api/auth/register   | Register new user        |
| POST | /api/auth/login      | Login user & get JWT     |
| GET  | /api/auth/profile    | Protected user profile   |

---

## 📋 Setup Instructions (Local)

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>


2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the following:
    ```
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    ``` 

4. Start the server:
    ```bash 
    npm start
    ```
5. Test the API endpoints using Postman or any API client.

Live Postman documentation for the deployed API:
https://documenter.getpostman.com/view/50347780/2sBXVfiAvg
