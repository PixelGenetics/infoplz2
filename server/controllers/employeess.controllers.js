import connection from "../db.js";

export const getPublicaciones = async(req,res) => {
    try {
        const [rows] =  await connection.query('SELECT * FROM data1')
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message:"Something went wrong"
        })
    }
};

export const getPublicacion = async(req,res) => {
    try {
    const [rows] = await connection.query('SELECT * FROM data1 WHERE id = ?',[req.params.id])
    console.log(rows)

    if(rows.length <= 0) return res.status(404).json({
        message:"Employee not found"
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
        const {nombre, lastname,phone,birth} = req.body;
    const [rows] = await connection.query('INSERT INTO data1 (nombre,lastname,phone,birth) VALUES (?,?,?,?)',[nombre,lastname,phone,birth])
    res.send({
        id: rows.insertId,
        nombre,
        lastname,
        phone,
        birth
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
    const {nombre,lastname} = req.body
    
    const [result] = await connection.query('UPDATE data1 SET nombre = IFNULL(?, nombre), lastname = IFNULL(?, lastname) WHERE id = ?', [nombre,lastname,id])
    console.log(result)
    
    if(result.affectedRows <= 0 )return res.status(400).json({
        message:"Nothing to update"
    })
    
    const [rows] = await connection.query('SELECT * FROM data1 WHERE id = ?',[id])
    
    res.json(rows[0])

    } catch (error) {
        return res.status(500).json({
            message:"Something went wrong"
        })
    }
};

export const deletePublicacion = async(req,res) => {
    try {
    const result = await connection.query('DELETE FROM data1 WHERE id = ?',[req.params.id])
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