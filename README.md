# User Authentication & Authorization API (JWT)

This project implements **User Authentication and Authorization** using
**JWT Bearer Tokens** with Node.js, Express.js, and MongoDB.
The application follows the **MVC architecture** and is tested using Postman.

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
│ └── userController.js
├── Models
│ └── userSchema.js
├── Routers
│ └── userRouter.js
├── Middlewares
│ └── authMiddleware.js
├── Database
│ └── dbconfig.js
├── index.js
├── .env
├── package.json
└── README.md

---
## 📋 Setup Instruction
    
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```
2. Install dependencies:
   ```bash
    npm install
    ```
4. Start the server:

    ```bash
     npm start
     ```
5. Test the API using Postman.
    - Import the provided Postman collection.
    - Test the signup, signin, and protected routes.
---
## 📬 Postman Collection
You can import the Postman collection from the following link:
https://documenter.getpostman.com/view/50347780/2sBXVfiAvg
---

