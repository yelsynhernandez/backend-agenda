'use strict';

import { ejecutarConsulta } from '../../db/funciones.js';
import { respuestaExito, respuestaFracaso } from '../../utilities/mensajes.js';
import { sqlActualizar, sqlEliminar, sqlGuardar, sqlObtener } from './queries.js';

const obtener = async (req, res) => {
    try {
        const registros = await ejecutarConsulta(sqlObtener);
        res.status(200).json(registros.length > 0 ? registros : respuestaExito('No hay registros'));
    } catch (error) {
        console.error(error);
        res.status(500).json(respuestaFracaso('Ha ocurrido un error'));
    }
};

// const obtenerUno = async (req, res) => {
//     const { id } = req.params;
//     try {
//         const result = await ejecutarConsulta('SELECT * FROM tipo_telefono WHERE id = ?', [id]);
//         if (result.length === 0) {
//             return res.status(404).json({ error: 'Tipo telefono not found' });
//         }
//         res.json(result[0]);
//     } catch (error) {
//         res.status(500).json({ error: 'Error retrieving data' });
//     }
// };

const guardar = async (req, res) => {
    const { descripcion } = req.body;
    try {
        const result = await ejecutarConsulta(sqlGuardar, [descripcion]);
        res.status(201).json({ id: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creating data' });
    }
};

const actualizar = async (req, res) => {
    const { id } = req.params;
    const { descripcion } = req.body;
    try {
        const result = await ejecutarConsulta(sqlActualizar, [descripcion, id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Tipo telefono not found' });
        }
        res.json({ message: 'Tipo telefono updated' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error updating data' });
    }
};

const eliminar = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await ejecutarConsulta(sqlEliminar, [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Tipo telefono not found' });
        }
        res.json({ message: 'Tipo telefono deleted' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error deleting data' });
    }
};

export {
    obtener,
    guardar,
    actualizar,
    eliminar
};
