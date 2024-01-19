import { createPool } from "mysql2/promise";

const connection = createPool({
    host:"localhost",
    database:"firstapi",
    user:"root",
    password:"1234"
});

export default connection;