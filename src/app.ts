import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { createConnection } from "typeorm";
import "reflect-metadata";
import userRoutes from "./routes/user";
import blogPostRoutes from "./routes/blog";
import config from "./database";

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to your API" });
});

app.use("/api/users", userRoutes);
app.use("/api/blog-posts", blogPostRoutes);

// Start the server


async function connect() {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  try {
    const connection = await createConnection(config);
    console.log('Connected to PostgreSQL database');
  } catch (error) {
    console.error('Error connecting to PostgreSQL:', error);
  }
}

connect();
