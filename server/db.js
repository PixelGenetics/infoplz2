import { createPool } from "mysql2/promise";

const connection = createPool({
    host: process.env.DB_HOST || "localhost",
    database: process.env.DB_DATABASE || "firstapi",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || ""
});

export default connection;