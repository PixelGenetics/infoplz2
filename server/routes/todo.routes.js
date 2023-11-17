import express from "express";
import mostrar from "../controllers/todo.js";
import { data } from "../controllers/todo.controller.js";

const todoRouter = express.Router();

todoRouter.get('/home',mostrar);

todoRouter.get('/data', data)

export default todoRouter;