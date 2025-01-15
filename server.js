import express from 'express';
import dotenv from 'dotenv';
import tipoTelefono from './routes/tipo-telefono.js';
import { checkBody, checkJSON, rutaNoEncontrada } from './middlewares/middlewares.js';

dotenv.config();
const app = express();

const root = '/api';

app.use(express.json());
app.use(checkBody);
app.use(checkJSON);

app.use(`${root}/tipo-telefono`, tipoTelefono);

app.use(rutaNoEncontrada);

app.listen(process.env.PORT || 3000, ()=>{
    console.log(process.env.APP);
})