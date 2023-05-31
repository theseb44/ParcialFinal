const express = require("express");
const cors = require("cors")
const dbconnection = require("../BackEnd/DB/connection")
require("dotenv").config()
const routes = require("../BackEnd/router/routes")
const app = express();


app.use(cors())
app.use(express.json())
app.use(routes)




const port = process.env.PORT || 3000
const start = async() => {

    try {
        await  dbconnection(process.env.mongoUrl)
        .then( console.log("base de datos conectada"))
        .catch((err)=> {
            console.log(`ocurrio un erroren la conexion de DB ${err}`)
        })
        
        app.listen(port,console.log(`se monto el servidor en el puerto ${port}`))
    } catch (error) {
        console.log(`ocurrio un error al iniciar ${error}`);
    }
}

start();



