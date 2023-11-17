import connection from "../db.js";

export const getEmployees = async(req,res) => {
    const [rows] =  await connection.query('SELECT * FROM data1')
    res.json(rows);
};

export const getEmployee = async(req,res) => {
    const [rows] = await connection.query('SELECT * FROM data1 WHERE id = ?',[req.params.id])
    console.log(rows)
    if(rows.length <= 0) return res.status(404).json({
        message:"Employee not found"
    })
    res.send(rows[0])
}

export const postEmployees = async (req,res) => {
    const {nombre, lastname,phone,birth} = req.body;
    const [rows] = await connection.query('INSERT INTO data1 (nombre,lastname,phone,birth) VALUES (?,?,?,?)',[nombre,lastname,phone,birth])
    res.send({
        id: rows.insertId,
        nombre,
        lastname,
        phone,
        birth
    });
};

export const updateEmployees = async (req,res) => {
    const {id} = req.params
    const {nombre,lastname} = req.body

    const [result] = await connection.query('UPDATE data1 SET nombre = IFNULL(?, nombre), lastname = IFNULL(?, lastname) WHERE id = ?', [nombre,lastname,id])
    console.log(result)

    if(result.affectedRows <= 0 )return res.status(400).json({
        message:"Nothing to update"
    })

    const [rows] = await connection.query('SELECT * FROM data1 WHERE id = ?',[id])

    res.json(rows[0])
};

export const deleteEmployees = async(req,res) => {
    const result = await connection.query('DELETE FROM data1 WHERE id = ?',[req.params.id])
    console.log(result);

    if(result.affectedRows <= 0) return res.status(400).json({
        message: "Employee not found"
    })

    res.sendStatus(204)
};