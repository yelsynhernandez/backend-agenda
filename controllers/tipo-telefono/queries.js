export const sqlObtener = (codigo) => {
    return `select * from tipo_telefono${codigo ? ' where id = ?' : ''}`;
};
export const sqlGuardar = 'INSERT INTO tipo_telefono (descripcion) VALUES (?)';
export const sqlActualizar = 'UPDATE tipo_telefono SET descripcion = ? WHERE id = ?';
export const sqlEliminar = 'DELETE FROM tipo_telefono WHERE id = ?';