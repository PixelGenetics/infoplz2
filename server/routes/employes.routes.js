import { Router } from "express";
import { deletePublicacion, getPublicaciones, postPublicacion, updatePublicacion, getPublicacion, getPublicacionesGeneral, getPublicacionesReves, getPublicacionesRevesLimited } 
from "../controllers/publicar.controllers.js";
import { publicarImagen} from "../controllers/storage.controller.js";

const router = Router();

router.get('/publicacion',getPublicaciones);

router.get('/publicacion/:id', getPublicacion);

router.get('/publicacionesgeneral',getPublicacionesGeneral);

router.get('/publicacionreveslimited',getPublicacionesRevesLimited);

router.get('/publicacionreves',getPublicacionesReves)

router.post('/publicacion', postPublicacion);

router.get('/upload/:id',publicarImagen)

router.patch('/publicacion/:id', updatePublicacion);

router.delete('/publicacion/:id', deletePublicacion);

export default router;