var path = require("path");

module.exports = function(app) {
// FILE ROUTES TO SERVER (HTML)
    app.get("/public", (req,res) =>{
        res.sendFile(path.join(__dirname+'/index.html'));
    });
    app.get("/public", (req,res) =>{
        res.sendFile(path.join(__dirname+'/code.html'));
    });
    app.get("/public", (req,res) =>{
        res.sendFile(path.join(__dirname+'/dma.html'));
    });
// FILE ROUTES TO SERVER (CSS)
    app.get("/css", (req,res) =>{
        res.sendFile(path.join(__dirname+'/style.css'));
    });
    app.get("/css", (req,res) =>{
        res.sendFile(path.join(__dirname+'/code.css'));
    });
    app.get("/css", (req,res) =>{
        res.sendFile(path.join(__dirname+'/dma.css'));
    });
}