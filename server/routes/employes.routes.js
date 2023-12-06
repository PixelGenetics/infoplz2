import { Router } from "express";
import { deletePublicacion, getPublicaciones, postPublicacion, updatePublicacion, getPublicacion } 
from "../controllers/publicar.controllers.js";
import { publicarImagen} from "../controllers/storage.controller.js";

const router = Router();

router.get('/publicacion',getPublicaciones);

router.get('/publicacion/:id', getPublicacion);

router.post('/publicacion', postPublicacion);

router.get('/upload/:id',publicarImagen)

router.patch('/publicacion/:id', updatePublicacion);

router.delete('/publicacion/:id', deletePublicacion);

export default router;