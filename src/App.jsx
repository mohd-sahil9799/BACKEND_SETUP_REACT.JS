import express from 'express';
import DB_CONNECT from './db/server.js';
import postRoutes from './Routes/firstRoutes.js'; 


const app = express();


app.use(express.json());

DB_CONNECT();

app.use('/api/v1', postRoutes);


