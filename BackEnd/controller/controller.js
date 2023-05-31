const personaModel = require("../models/PersonaSchema")

/*
const buscar = async (json)=> {
    const { personaId } = json;

    const personabd = await personaModel.findOne({ personaId });
    if (personabd !== null) {
      return true
    }
    return false;
}*/


const getAllPersonas = async(req, res)=> {

    try{
        const personas = await personaModel.find({})
        res.status(200).json({ personas }) 
    }catch(error){
        res.status(500).json({
            msg: `ocurrio un error al obtener todos ${error}`
        })
    }

}

const getPersona = async(req,res) => {

    try {
        const {id:paramId} = req.params
        const persona = await personaModel.findOne({ personaId:paramId })
        res.status(200).json({persona})
    } catch (error) {
        res.status(500).json({
            msg: `ocurrio un error al obtener ${error}`
        })
    }
} 

const createPersona = async (req, res) => {

    try {
        
        await personaModel.create(req.body)
        res.status(200).json({
            msg:"creacion exitosa"
        })
    } catch (error) {
        res.status(500).json({
            msg:`ocurrio un error creando ${error}`
        })
    }
}

const updatePersona = async (req, res) => {

    try {
        const {id:paramsId} = req.params
        await personaModel.findOneAndUpdate({personaId:paramsId }, req.body, {
            new: true,
            runValidators: true
        })

        res.status(200).json({
            msg:"actualizacion exitosa"
        })
    } catch (error) {
        res.status(200).json({
            msg:`ocurrio un error al actualizar ${error}`
        })
    }
}

const deletePersona = async (req, res)=>{

    try {
        const {id:paramsId} = req.params
        await personaModel.findOneAndDelete({personaId:paramsId })
        res.status(200).json({
            msg:"se elimino correctamente"
        })
    } catch (error) {
        res.status(500).json({
            msg: `ocurrio un error al eliminar ${error}`
        })
    }
}

module.exports = {
    getAllPersonas,
    getPersona,
    createPersona,
    updatePersona,
    deletePersona
}
