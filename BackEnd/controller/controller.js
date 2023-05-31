const personaModel = require("../models/PersonaSchema")





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
        const {id:personaId} = req.params
        const persona = await personaModel.findOne({ _id:personaId })
        if(persona === null){return res.status(404).json({msg:"no se encontro"})}
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
        const {id:personaId} = req.params
        await personaModel.findOneAndUpdate({_id:personaId }, req.body, {
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
        const {id:personaId} = req.params
        await personaModel.findOneAndDelete({_id:personaId })
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
