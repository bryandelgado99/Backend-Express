const Portfolio = require('../models/Portfolio')

const renderIndex = async(req,res)=>{
    const portfolios = await Portfolio.find().lean()
    res.render('index',{portfolios})
}

const renderLogin = (req,res)=>{
    res.render('login')
}

const renderContact = (req,res)=>{
    res.json({
        "nombre":"Bryan Delgado",
        "edad":"24"
    })
}

module.exports ={
    renderIndex, 
    renderLogin,
    renderContact
}