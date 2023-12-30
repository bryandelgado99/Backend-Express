const mongoose = require('mongoose')

const conn_local = "mongodb://localhost:27017/portfolio"
const conn_local__alt = "mongodb://0.0.0.0:27017/portfolio"
const conn_atlas = "mongodb+srv://bryande9970:bryandelgado99@cluster001.zj6u1tq.mongodb.net/?retryWrites=true&w=majority"

//Crear método de conexión
connection = async()=>{
    try {
        await mongoose.connect(conn_local || conn_atlas || conn_local__alt)
        console.log('Database is connected to porfolio')
    } catch (error) {
        console.log(error);
    }
}

module.exports = connection
