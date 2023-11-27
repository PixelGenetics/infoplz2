import fs from 'fs';
import connection from "../db.js";
import sharp from "sharp";

    export function guardarImagen(req,res) {
    const nombre = req.file.originalname;
    const datosImagen = req.file.buffer;

    const sql = 'INSERT INTO contenido_photo (nombre,datosImagen) VALUES (?,?)';
    connection.query(sql, [nombre,datosImagen], (err,result) => {
        if (err) throw err;
        console.log('Imagen almacenada en la bd');
    });
    res.status(200).json({
        message:"Imagen agregada a bd"
    })
}

export default {guardarImagen}