import { createPool } from "mysql2/promise";

const connection = createPool({
    host:"localhost",
    database:"firstapi",
    user:"root",
    password:""
});

export default connection;