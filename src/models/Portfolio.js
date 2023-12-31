//Importamos el esquema y el modelo
const {Schema, model} = require('mongoose')

//Creamos nuevo esquema
const portfolio_schema = new Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    category :{
        type:String,
        require:true
    },
    user:{
        type:String,
        required:true
    },
    image:{
        public_id:String,
        secure_url:String
    }
},{
    timestamps:true
})

//Exportamos el modelo
module.exports = model('portfolio', portfolio_schema)