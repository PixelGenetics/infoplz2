import express from 'express';
import todoRouter from './routes/todo.routes.js';
import employeesRoutes from './routes/employes.routes.js'
import indexRouter from './routes/todo.routes.js'

const app = express();

app.use(express.json());
app.use(todoRouter);

app.use('/api',employeesRoutes);

app.use(indexRouter);

app.listen(3000);
console.log('http://localhost:3000');
