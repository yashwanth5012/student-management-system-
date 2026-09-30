const express = require("express");
const mysql = require("mysql2");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "YASH",
    database: "student_management"
});

db.connect((err) => {
    if (err) {
        console.log("Database connection failed:", err);
    } else {
        console.log("MySQL connected!");
    }
});


// ADD STUDENT
app.post("/add-student", (req, res) => {
    const { name, email, course } = req.body;

    const sql = "INSERT INTO students (name, email, course) VALUES (?, ?, ?)";

    db.query(sql, [name, email, course], (err) => {
        if (err) {
            console.log(err);
            return res.send("Error adding student");
        }

        res.send("Student added successfully!");
    });
});


// VIEW STUDENTS
app.get("/students", (req, res) => {
    const sql = "SELECT * FROM students";

    db.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            return res.send("Error fetching students");
        }

        res.json(results);
    });
});


// DELETE STUDENT
app.delete("/students/:id", (req, res) => {
    const id = req.params.id;

    const sql = "DELETE FROM students WHERE id = ?";

    db.query(sql, [id], (err) => {
        if (err) {
            console.log(err);
            return res.send("Error deleting student");
        }

        res.send("Student deleted successfully!");
    });
});


// UPDATE STUDENT
app.put("/students/:id", (req, res) => {
    const id = req.params.id;
    const { name, email, course } = req.body;

    const sql = `
        UPDATE students
        SET name = ?, email = ?, course = ?
        WHERE id = ?
    `;

    db.query(sql, [name, email, course, id], (err) => {
        if (err) {
            console.log(err);
            return res.send("Error updating student");
        }

        res.send("Student updated successfully!");
    });
});


// START SERVER
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});