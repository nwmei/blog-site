import { Router } from "express";
import { getRepository } from "typeorm";
import { User } from "../entities/User";

const usersRouter = Router();

// Get all users
usersRouter.get("/", async (req, res) => {
  const userRepository = getRepository(User);
  const users = await userRepository.find();
  res.json(users);
});

// Create a new user
usersRouter.post("/", async (req, res) => {
  const userRepository = getRepository(User);
  const newUser = userRepository.create(req.body);
  await userRepository.save(newUser);
  res.json(newUser);
});

export default usersRouter;
