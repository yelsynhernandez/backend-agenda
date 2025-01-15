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