const mongoose = require('mongoose')

const conn_atlas = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASS}@cluster001.zj6u1tq.mongodb.net/?retryWrites=true&w=majority`

//Crear método de conexión
connection = async()=>{
    try {
        await mongoose.connect(conn_atlas )
        console.log('Database is connected to porfolio')
    } catch (error) {
        console.log(error);
    }
}

module.exports = connection
