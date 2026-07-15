const express = require("express");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello from Dockerized Node.js Application!");
});

app.get("/health", (req, res) => {
    res.json({
        status: "UP",
        message: "Application is running successfully"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
