const{Router} = require('express')

const router = Router()

const { renderAllPortafolios,
        renderPortafolio,
        renderPortafolioForm,
        createNewPortafolio,
        renderEditPortafolioForm,
        updatePortafolio,
        deletePortafolio
    } = require('../controllers/portfolio.controller.js')

/*Create*/
router.get('/portafolio/add', renderPortafolioForm)
router.post('/portafolio/add', createNewPortafolio)

/*Read*/
router.get('/portafolios', renderAllPortafolios)
router.get('/portafolio/:id', renderPortafolio)

/*Update*/
router.get('/portafolio/edit/:id', renderEditPortafolioForm)
router.put('/portafolio/edit/:id', updatePortafolio)

/*Delete*/
router.delete('/portafolio/delete/:id', deletePortafolio)

module.exports = router