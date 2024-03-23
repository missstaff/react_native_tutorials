import express from "express";
import cors from "cors";
import { validateEmail } from "../common/utilities.js";
import dotenv from "dotenv";
dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000; 

// Middleware to parse JSON and URL-encoded bodies
app.use(cors()); // Enable CORS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send("Server is ready");
});

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name) {
    res.status(400).send("Name is required");
    return;
  }

  if (!email) {
    res.status(400).send("Email is required");
    return;
  }

  if (!validateEmail(email)) {
    res.status(400).send("Invalid email format");
    return;
  }

  if (!message) {
    res.status(400).send("Message is required");
    return;
  }

  res.status(200).json({ message: "Form data received" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).send("Something went wrong!");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${process.env.BASE_URL}:${PORT}`);
});
