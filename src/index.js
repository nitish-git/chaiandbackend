import dotenv from "dotenv";
import express from "express";
import { userController } from "./controllers/task_organiser/users/user.controller.js";
import { webhookController } from "./controllers/webhook/webhook.controller.js";
import { connectDB } from "./db/connect.js";
const app = express();
dotenv.config();
const PORT = process.env.PORT;

const db = connectDB();

app.use(express.json());
app.get("/api", (req, res) => {
  res.send({ API: "Welcome to the API" });
});

app.get("/api/users", userController.getUsers);

app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3]);
});

app.post("/api/login", (req, res) => {});

app.post("/webhook", webhookController.mongo);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
