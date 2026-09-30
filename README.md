# Student Management System

A simple and professional **Student Management System** developed using HTML, CSS, JavaScript, Node.js, Express.js, and MySQL.

The system allows users to **add, view, update, and delete student records** through a web-based interface.

---

## 📌 Project Overview

The Student Management System is a full-stack web application designed to manage student information efficiently.

The application follows a simple three-layer flow:

**Frontend → Backend → Database**

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Node.js with Express.js
* **Database:** MySQL
* **Database Connection:** MySQL2

---

## 🚀 Features

* Add new student records
* View all student records
* Update existing student information
* Delete student records
* Store student data in MySQL
* Simple and clean user interface
* REST-style backend routes
* Dynamic interaction between frontend and backend

---

## 🛠️ Technologies Used

| Technology | Purpose                  |
| ---------- | ------------------------ |
| HTML       | Structure of the webpage |
| CSS        | Styling and layout       |
| JavaScript | Frontend interaction     |
| Node.js    | Server-side runtime      |
| Express.js | Backend web framework    |
| MySQL      | Database management      |
| MySQL2     | Node.js-MySQL connection |

---

## 📂 Project Structure

```text
student-management-system/
│
├── public/
│   ├── index.html
│   └── style.css
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
└── database.sql
```

> The exact folder structure may vary depending on how the project is organized locally.

---

## 🗄️ Database Structure

### Database

```text
student_management
```

### Table

```text
students
```

### Fields

| Field    | Description              |
| -------- | ------------------------ |
| `id`     | Unique ID of the student |
| `name`   | Student name             |
| `email`  | Student email            |
| `course` | Student course           |

---

## 🔗 Application Routes

### Add Student

```text
POST /add-student
```

Adds a new student to the database.

### View Students

```text
GET /students
```

Retrieves all student records from the database.

### Update Student

```text
PUT /students/:id
```

Updates the information of a particular student using their ID.

### Delete Student

```text
DELETE /students/:id
```

Deletes a particular student record using their ID.

---

## 🏗️ System Architecture

```text
┌──────────────────────────┐
│       Frontend           │
│   HTML + CSS + JavaScript│
└────────────┬─────────────┘
             │
             │ HTTP Requests
             ▼
┌──────────────────────────┐
│       Backend            │
│    Node.js + Express.js  │
└────────────┬─────────────┘
             │
             │ MySQL2
             ▼
┌──────────────────────────┐
│        Database          │
│         MySQL            │
│   student_management     │
│        students          │
└──────────────────────────┘
```

---

## ⚙️ How to Run the Project

### 1. Install Node.js

Make sure Node.js is installed on your system.

Check the installation using:

```bash
node -v
npm -v
```

---

### 2. Clone the Repository

```bash
git clone <your-github-repository-url>
```

Move into the project directory:

```bash
cd student-management-system
```

---

### 3. Install Dependencies

Run:

```bash
npm install
```

The project uses packages such as:

* Express.js
* MySQL2

---

### 4. Create the MySQL Database

Open MySQL Workbench or MySQL Command Line and create the database:

```sql
CREATE DATABASE student_management;
```

Select the database:

```sql
USE student_management;
```

Create the students table:

```sql
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    course VARCHAR(100) NOT NULL
);
```

---

### 5. Configure Database Connection

Open `server.js` and configure the MySQL connection according to your local MySQL setup.

Example:

```javascript
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'YOUR_MYSQL_PASSWORD',
    database: 'student_management'
});
```

Replace:

```text
YOUR_MYSQL_PASSWORD
```

with your own MySQL password.

**Do not upload your real database password to GitHub.**

---

### 6. Start the Server

Run:

```bash
node server.js
```

If everything is configured correctly, the server will start successfully.

Open the application in your browser using the local server address shown by your application, for example:

```text
http://localhost:3000
```

---

## 🔄 How the System Works

### 1. Add Student

The user enters:

* Name
* Email
* Course

The frontend sends the information to:

```text
POST /add-student
```

Express receives the request and uses MySQL2 to insert the information into the `students` table.

---

### 2. View Students

When student records are requested, the frontend sends a request to:

```text
GET /students
```

The backend retrieves the records from MySQL and sends them back to the frontend.

---

### 3. Update Student

The user selects a student and modifies their information.

The frontend sends the updated data to:

```text
PUT /students/:id
```

The backend updates the corresponding database record based on the student's ID.

---

### 4. Delete Student

When the user deletes a student, the frontend sends:

```text
DELETE /students/:id
```

The backend removes that student's record from MySQL.

---

## 🔐 Important Security Note

Database credentials should not be stored directly in publicly shared source code.

For a production application, environment variables should be used to store sensitive information such as:

```text
DB_HOST
DB_USER
DB_PASSWORD
DB_NAME
```

For this academic project, make sure your actual password is not committed to GitHub.

---

## 📸 Project Screenshots

The project includes screenshots demonstrating:

1. Add Student
2. Student Records
3. Update Student

These screenshots demonstrate the major CRUD functionalities of the application.

---

## 🎯 CRUD Operations

The project implements all four basic database operations:

| Operation | Function       |
| --------- | -------------- |
| Create    | Add Student    |
| Read      | View Students  |
| Update    | Update Student |
| Delete    | Delete Student |

---

## 📚 Purpose of the Project

This project was developed to understand the fundamentals of **full-stack web development**, including:

* Frontend development
* Backend server creation
* Express.js routing
* HTTP requests
* MySQL database management
* Database connectivity using MySQL2
* CRUD operations
* Client-server communication

---

## 👨‍💻 Author

**Yashwanth**

Student Management System
Full Stack Development Assignment
