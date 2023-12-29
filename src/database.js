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

connection =  async() =>{
    try{
        await mongoose.connect(process.env["MONGO_URI_ATLAS"]);
        console.log("La conexión con MongoDB ha sido existosa");
    }catch(err){
        console.error("Error en la conexión a MongoDB:", err);
    }
}

module.exports = connection