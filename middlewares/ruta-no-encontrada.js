import { respuestaFracaso } from '../utilities/mensajes.js';

export const rutaNoEncontrada = (req, res) => {
    res.status(404).json(respuestaFracaso('Ruta no encontrada'));
}