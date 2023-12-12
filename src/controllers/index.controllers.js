const renderIndex = (req,res)=>{
    res.render('index')
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