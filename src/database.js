const mongoose = require('mongoose')

<<<<<<< HEAD
const MONGODB_URI="mongodb://localhost:27017/portfolio"
=======
const MONGODB_URI = "mongodb://localhost:27017/portafolio";
>>>>>>> 365d14cce58c33eb8031aea89a72f9730a1a5154

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