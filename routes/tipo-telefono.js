import { Router } from 'express'
import { actualizar, eliminar, guardar, obtener } from '../controllers/tipo-telefono/tipo-telefono.js';

const router = Router({caseSensitive: true, strict: true});

router.get('/', obtener);
router.post('/', guardar);
router.put('/', actualizar);
router.delete('/', eliminar)

export default router;