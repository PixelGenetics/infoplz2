import connection from "../db.js";

export const getPublicaciones = async(req,res) => {
    try {


        // Traer multiple publicaciones de manera limitada 
        const { page, limit} = req.query;
        const offset = (page - 1 ) * limit;
        const [rows] =  await connection.query('SELECT * FROM contenido LIMIT ? OFFSET ?',[+limit,+offset]);
        console.log(rows)

        const [TotalPageData] = await connection.query('SELECT COUNT(*) AS COUNT FROM contenido')
        console.log("TotalPageData: ",TotalPageData)

        const totalPage = Math.ceil(+TotalPageData[0]?.COUNT / limit);
        console.log("TotalPage: ",totalPage)

        

        res.json({
            rows:rows,
            pagination:{
                page: +page,
                limit: +limit,
                totalPage
            }
        }
        );
    } catch (error) {
        return res.status(500).json({
            message:"Something went wrong"
        })
    }
};

export const getPublicacion = async(req,res) => {
    try {
    const [rows] = await connection.query('SELECT * FROM contenido WHERE content_id = ?',[req.params.id])
    console.log(rows)

    if(rows.length <= 0) return res.status(404).json({
        message:"Publicacion no encontrada"
    })
    res.send(rows[0])

    } catch (error) {
    return res.status(500).json({
        message:"Something went wrong"
    })
    }
}

export const postPublicacion = async (req,res) => {
    try {
        const {content_author,content_summary, content_parrafo,content_date,content_image} = req.body;
    const [rows] = await connection.query('INSERT INTO contenido (content_author,content_summary, content_parrafo,content_date, content_image) VALUES (?,?,?,?,?)',[content_author,content_summary,content_parrafo,content_date,content_image])
    res.send({
        content_id: rows.insertId,
        content_author,
        content_summary,
        content_parrafo,
        content_date,
        content_image
    });
    } catch (error) {
        return res.status(500).json({
            message:"Something went wrong"
        })
    }
};

export const updatePublicacion = async (req,res) => {
    try {
    const {id} = req.params 
    const {content_author,content_summary,content_parrafo} = req.body
    
    const [result] = await connection.query('UPDATE contenido SET content_author = IFNULL(?, content_author), content_summary = IFNULL(?, content_summary), content_parrafo = IFNULL(?, content_parrafo) WHERE content_id = ?', [content_author,content_summary,content_parrafo,id])
    console.log(result)
    
    if(result.affectedRows <= 0 )return res.status(400).json({
        message:"Nothing to update"
    })
    
    const [rows] = await connection.query('SELECT * FROM contenido WHERE content_id = ?',[id])
    
    res.json(rows[0])

    } catch (error) {
        return res.status(500).json({
            message:"Something went wrong"
        })
    }
};

export const deletePublicacion = async(req,res) => {
    try {
    const result = await connection.query('DELETE FROM contenido WHERE content_id = ?',[req.params.id])
    console.log(result);

    if(result.affectedRows <= 0) return res.status(400).json({
        message: "Employee not found"
    });else{
        return res.status(200).json({
            message:"Employee deleted"
        })
    }
    } catch (error) {
        return res.status(500).json({
            message:"Something went wrong"
        })
    }
};