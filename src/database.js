const mongoose = require('mongoose')

//Crear método de conexión
connection = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Database is connected to porfolio')
    } catch (error) {
        console.log(error);
    }
}

module.exports = connection