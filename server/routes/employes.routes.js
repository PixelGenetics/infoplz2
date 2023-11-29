import { Router } from "express";
import { deletePublicacion, getPublicaciones, postPublicacion, updatePublicacion, getPublicacion } 
from "../controllers/publicar.controllers.js";
import multer from "multer";
import {guardarImagen, publicarImagen} from "../controllers/storage.controller.js";

const router = Router();

router.get('/publicacion',getPublicaciones);

router.get('/publicacion/:id', getPublicacion);

router.post('/publicacion', postPublicacion);

const storage = multer.memoryStorage();
const subir = multer({storage:storage});

router.post('/upload', subir.single('imagen'),(req,res) => {
    guardarImagen(req,res);
})

router.get('/upload/:id',publicarImagen)

router.patch('/publicacion/:id', updatePublicacion);

router.delete('/publicacion/:id', deletePublicacion);

export default router;