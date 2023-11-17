import connection from "../db.js";

const mostrar = async (req,res) => {
    try {
        const [result] = await connection.query('SELECT * FROM data1');
        res.status(200).json(result)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export default mostrar;