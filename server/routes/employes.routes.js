import { Router } from "express";
import { deletePublicacion, getPublicaciones, postPublicacion, updatePublicacion, getPublicacion } 
from "../controllers/employeess.controllers.js";
const router = Router();

router.get('/publicacion',getPublicaciones);

router.get('/publicacion/:id', getPublicacion);

router.post('/publicacion', postPublicacion);

router.patch('/publicacion/:id', updatePublicacion);

router.delete('/publicacion/:id', deletePublicacion);

export default router;