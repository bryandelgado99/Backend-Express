const mongoose = require('mongoose')

const url = "mongodb://0.0.0.0:27017/portafolio";

//Crear método de conexión
connection = async()=>{
    try {
        await mongoose.connect(url)
        console.log('Database is connected to DB: porfolio')
    } catch (error) {
        console.log(error);
    }
}
module.exports = connection