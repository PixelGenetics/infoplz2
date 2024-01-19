import connection from "../db.js";

    export function guardarImagen(req,res) {
    const nombre = req.file.originalname; //req.file.originalname => originalname proviene de multer
    const datosImagen = req.file.buffer; //req.file.buffer => buffer proviene de multer

    const sql = 'INSERT INTO contenido_photo (nombre,datosImagen) VALUES (?,?)';
    connection.query(sql, [nombre,datosImagen], (err,result) => {
        if (err) throw err;
        console.log('Imagen almacenada en la bd');
    });
    res.status(200).json({
        message:"Imagen agregada a bd"
    })
}

    export const publicarImagen = async (req,res) =>{
        try{
            const [imagen] = await connection.query('SELECT datosImagen FROM contenido_photo WHERE id = ?',[req.params.id])
            console.log(imagen)
            if(imagen.length <= 0) return res.status(404).json({
                message:'Imagen not found'
            })
            res.contentType('image/jpeg');
            res.end(imagen[0].datosImagen, 'binary');
        }catch (error){
            return res.status(500).json({
                message:"Something went wrong"
            })
        }
    }
    

export default {guardarImagen}