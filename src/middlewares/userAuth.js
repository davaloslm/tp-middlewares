const userAuth = (req, res, next)=>{
    let admins = ["Ada", "Tim", "Vim","Greta"]
    if(req.query && admins.find(admin=> req.query.user === admin)){
        res.send("Hola Admin:"+ req.query.user)
    }else{
        res.send("No tienes los privilegios para ingresar")
    }
}

module.exports = userAuth;

