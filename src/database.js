const mongoose = require('mongoose')

const MONGODB_URI = "mongodb://localhost:27017/portafolio";

//Crear método de conexión
connection = async()=>{
    try {
        await mongoose.connect(MONGODB_URI)
        console.log('Database is connected to porfolio')
    } catch (error) {
        console.log(error);
    }
}

module.exports = connection