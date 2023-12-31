const {Schema, model} = require('mongoose')

//Importamos BCRYPT
const bcrypt = require('bcryptjs')

//Creamos el esquema
const userSchema = new Schema({
        name:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true
        },
        password :{
            type:String,
            require:true
        },
        token:{
            type:String,
            default:null
        },
        confirmEmail:{
            type:Boolean,
            default:false
        }
    },
    
    {
    timestamps:true
})

//Método para cifrar el password
userSchema.methods.encrypPassword = async (password)=>{
    const salt = await bcrypt.genSalt(10) //Saltos de encriptación
    const passwordEncryp = await bcrypt.hash(password,salt)
    return passwordEncryp
}

// Método para verificar si el password ingresado es el mismo de la BDD
userSchema.methods.matchPassword = async function(password){
    const response = await bcrypt.compare(password,this.password)
    return response
}

// Método para crear un token
userSchema.methods.crearToken = function(){
    return token = this.token = Math.random().toString(36).slice(2)
}

//Exportamos el modelo
module.exports = model('user', userSchema)