const express = require("express");
const app = express();




const port = 3000
const start = () => {

    try {
        
        app.listen(port,`se monto el servidor en el puerto ${port}`)
    } catch (error) {
        
    }
}

start();



