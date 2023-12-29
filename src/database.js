const mongoose = require('mongoose')

const url = "mongodb://0.0.0.0:27017/portafolio";

/*Crear método de conexión/*
connection = async()=>{
    try {
        await mongoose.connect(process.env["MONGODB_URI "] || url)
        console.log('Database is connected to DB: porfolio')
    } catch (error) {
        console.log(error);
    }
}*/

const conn_str = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@cluster001.zj6u1tq.mongodb.net/?retryWrites=true&w=majority`

connection =  async() =>{
    try{
        await mongoose.connect(conn_str);
        console.log("La conexión con MongoDB ha sido existosa");
    }catch(err){
        console.error("Error en la conexión a MongoDB:", err);
    }
}

module.exports = connection