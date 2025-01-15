import { respuestaFracaso } from '../utilities/mensajes.js';

export const rutaNoEncontrada = (req, res) => {
    res.status(404).json(respuestaFracaso('Ruta no encontrada'));
}

export const checkBody = (req, res, next) => {
    if(req.method === 'POST' || req.method === 'PUT') {
        if(isEmpty(req.body)) {
            return res.status(400).json(respuestaFracaso('El cuerpo de la petición no puede estar vacío'));
        }
    }
    next();
}

export const checkJSON = (err, req, res, next) => {
    if(req.method === 'POST' || req.method === 'PUT') {
        if(err instanceof SyntaxError && err.status === 400 && 'body' in err) {
            return res.status(400).json(respuestaFracaso('El JSON proporcionado es inválido, por favor verifique la estructura.'));
        }
    }
    next();
}
