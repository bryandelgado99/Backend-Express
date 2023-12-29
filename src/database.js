const mongoose = require('mongoose')

//const url = "mongodb://0.0.0.0:27017/portafolio";

/*Crear método de conexión/*
connection = async()=>{
    try {
        await mongoose.connect(process.env["MONGODB_URI "] || url)
        console.log('Database is connected to DB: porfolio')
    } catch (error) {
        console.log(error);
    }
}*/

const string_conn = "mongodb+srv://bryand9970:bryandelgado99@cluster001.zj6u1tq.mongodb.net/?retryWrites=true&w=majority"

//Crear método de conexión
connection = async()=>{
    try {
        await mongoose.connect(string_conn)
        console.log('Database is connected to porfolio')
    } catch (error) {
        console.log(error);
    }
}

module.exports = connection
