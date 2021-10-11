const fs = require("fs");
const path = require("path");

const userLog = (req, res, next)=>{
    fs.writeFileSync(path.join(__dirname, "../logs/userLogs.txt"), "El usuario ingresó a la ruta:" + req.url);
    next();
}

module.exports = userLog;