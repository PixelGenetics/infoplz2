import { Router } from "express";
import { deletePublicacion, getPublicaciones, postPublicacion, updatePublicacion, getPublicacion } 
from "../controllers/employeess.controllers.js";
const router = Router();

router.get('/employees',getPublicaciones);

router.get('/employees/:id', getPublicacion);

router.post('/employees', postPublicacion);

router.patch('/employees/:id', updatePublicacion);

router.delete('/employees/:id', deletePublicacion);

export default router;