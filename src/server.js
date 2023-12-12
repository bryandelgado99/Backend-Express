const express = require('express')
const path = require('path')
const { engine }  = require('express-handlebars')
const methodOverride = require('method-override');

// Inicializaciones
const app = express()

// Configuraciones 
app.set('port',process.env.port || 3000)
app.set('views',path.join(__dirname, 'views'))
app.set('views',path.join(__dirname, 'views'))

//Handlebars Config
app.engine('.hbs',engine({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname:'.hbs'
}))
app.set('view engine','.hbs')

// Middlewares 
app.use(express.urlencoded({extended:false}))
app.use(require('./routers/index.routes'))
app.use(require('./routers/portfolio.routes'))
app.use(methodOverride('_method'))

// Variables globales

// Rutas 


// Archivos estáticos
app.use(express.static(path.join(__dirname,'public')))

module.exports = app
