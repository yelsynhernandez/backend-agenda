import Joi from 'joi';
import { mensajesJoi } from '../../utilities/mensajes.js';

export const esquema = Joi.object({
    codigo: Joi.number().required().messages({...mensajesJoi.requerido, ...mensajesJoi.numero}),
    nombre: Joi.string().min(2).max(50).required().messages({...mensajesJoi.requerido, ...mensajesJoi.cadena})
}).unknown(true);

export const esquemaEliminar = Joi.object({ codigo: Joi.number().required() }).unknown(true);