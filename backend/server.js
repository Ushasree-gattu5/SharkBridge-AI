// Import express
const express = require("express");

// Create Express application
const app = express();

// Define Port
const PORT = 5000;

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to SharkBridge AI Backend 🚀");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});