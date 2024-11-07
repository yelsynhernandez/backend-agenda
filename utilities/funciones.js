export const validarEsquema = (esquema, campos) =>{
    try{
        const { error, value } = esquema.validate(campos);
        if(error){
            throw new Error(error.message);
        }
        return { error: false, campos: value };
    }
    catch(error){
        return { error: true, mensaje: error.message };
    }
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
