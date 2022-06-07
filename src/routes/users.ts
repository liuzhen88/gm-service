import express, { Router } from "express";
import UserController from "../controllers/user";
import format from "../controllers/user/format";

const router = Router();

router.get("/", (req, res, next) => {
  let userController = new UserController(req, res);
  let query = format.getParams(req.query);
  userController.Get(query);
});

export default router;
