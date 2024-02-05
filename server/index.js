import express from 'express';
import todoRouter from './routes/todo.routes.js';
import employeesRoutes from './routes/employes.routes.js'
import indexRouter from './routes/todo.routes.js'
import cors from "cors";
import {dirname, join} from 'path';
import { fileURLToPath } from "url";

const app = express();
const _dirName = dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(todoRouter);

app.use('/api',employeesRoutes);

app.use(indexRouter);
app.use(express.static(join(_dirName, "../client/dist")));

app.listen(3000);
console.log('http://localhost:3000');
