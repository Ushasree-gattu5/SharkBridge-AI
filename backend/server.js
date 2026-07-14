const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Import Routes
const authRoutes = require("./routes/authRoutes");

// Load Environment Variables
dotenv.config();

// Connect Database
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to SharkBridge AI Backend 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});