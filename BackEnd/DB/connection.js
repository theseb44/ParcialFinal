const { default: mongoose } = require("mongoose")

const DBconnection = (url) => {

    return mongoose.connect(url)
}

module.exports = DBconnection;