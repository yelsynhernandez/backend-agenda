export const respuestaExito = (mensaje) => {
    return { exito: true, msj: mensaje }
}

export const respuestaFracaso = (mensaje) => {
    return { exito: false, error: mensaje}
};

export const mensajesJoi = {
    "bit": {
        "boolean.base": "El campo {{#label}} debe ser de tipo booleano"
    },
    "cadena": {
        "string.empty": "El campo {{#label}} no puede estar vacío.",
        "string.base": "El campo {{#label}} debe ser una cadena de texto.",
        "string.min": "El campo {{#label}} debe tener al menos {#limit} caracteres.",
        "string.max": "El campo {{#label}} no puede tener más de {#limit} caracteres.",
        "string.length": "El campo {{#label}} debe tener exactamente {#limit} caracteres."
    },
    "correo": {
        "string.email": "El campo {{#label}} debe ser una dirección de correo electrónico válida."
    },
    "decimal": {
        "number.empty": "El campo {{#label}} no puede estar vacío.",
        "number.base": "El campo {{#label}} debe ser un número.",
        "number.precision": "El campo {{#label}} debe tener como máximo {#limit} cifras decimales.",
        "number.min": "El campo {{#label}} debe ser mayor o igual a {#limit}.",
        "number.max": "El campo {{#label}} debe ser menor o igual a {#limit}."
    },
    "entero": {
        "number.empty": "El campo {{#label}} no puede estar vacío.",
        "number.base": "El campo {{#label}} debe ser un número.",
        "number.integer": "El campo {{#label}} debe ser un número entero.",
        "number.min": "El campo {{#label}} debe ser mayor o igual a {#limit}.",
        "number.max": "El campo {{#label}} debe ser menor o igual a {#limit}.",
        "number.precision": "El campo {{#label}} debe tener como máximo {#limit} cifras decimales.",
        "number.multiple": "El campo {{#label}} debe ser múltiplo de {#multiple}."
    },
    "fecha": {
        "date.base": "El campo {{#label}} debe ser una fecha válida.",
        "date.format": "El campo {{#label}} no está en el formato correcto.",
        "date.max": "El campo {{#label}} debe ser menor o igual a {#limit}.",
        "date.min": "El campo {{#label}} debe ser mayor o igual a {#limit}."
    },
    "noPermitido": {
        "object.unknown": "El campo {#label} no está permitido"
    },
    "requerido": {
        "any.required": "El campo {{#label}} es requerido."
    }
}