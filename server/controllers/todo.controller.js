import connection from "../db.js";

export const data =  async(req,res)=> {
    const [result] = await connection.query('SELECT nombre FROM data1')
    res.json(result[0])
}