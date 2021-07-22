import { Router } from "express";
import User from "./app/models/User";
import Database from './database'; 

const routes = new Router();

routes.get("/", async (req, res) => {
  const user = await User.create({
    name: "Douglas Morais",
    email: "douglas@email.com",
    password_hash: "123456",
  })
  return res.json(user);
});

export default routes;
