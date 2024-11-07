export const respuestaExito = (mensaje) => {
    return { exito: true, msj: mensaje }
}

export const respuestaFracaso = (mensaje) => {
    return { exito: false, error: mensaje}
};