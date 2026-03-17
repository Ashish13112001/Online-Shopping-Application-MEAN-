import type { RequestHandler } from "express";

const signup: RequestHandler = (req, res) => {
  res.json({ message: "Signup working" });
};

const login: RequestHandler = (req, res) => {
  res.json({ message: "Login working" });
};

export default {
  signup,
  login
};
