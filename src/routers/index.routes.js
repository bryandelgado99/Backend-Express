const {Router} = require('express')
const { renderIndex, renderLogin, renderContact } = require('../controllers/index.controllers')

//Instanciamos la clase
const router = Router() 

//Rutas púbicas
router.get('/', renderIndex)

router.get('/login', renderLogin)

router.get('/contact', renderContact)

//Rutas Privadas

//Exportamos el módulo
module.exports = router