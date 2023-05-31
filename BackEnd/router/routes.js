const express = require("express")
const routes = express.Router()

const {
    getAllPersonas,
    getPersona,
    createPersona,
    updatePersona,
    deletePersona
} = require("../controller/controller.js")

routes.route('/api/v1/personas').get(getAllPersonas);
routes.route('/api/v1/personas/:id').get(getPersona);
routes.route('/api/v1/personas').post(createPersona);
routes.route('/api/v1/personas/:id').patch(updatePersona);
routes.route('/api/v1/personas/:id').delete(deletePersona);

module.exports = routes