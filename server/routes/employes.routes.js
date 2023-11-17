import { Router } from "express";
import { deleteEmployees, getEmployees, postEmployees, updateEmployees, getEmployee } 
from "../controllers/employeess.controllers.js";
const router = Router();

router.get('/employees',getEmployees);

router.get('/employees/:id', getEmployee);

router.post('/employees', postEmployees);

router.patch('/employees/:id', updateEmployees);

router.delete('/employees/:id', deleteEmployees);

export default router;