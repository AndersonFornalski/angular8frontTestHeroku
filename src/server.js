const express = require("express");
const app = express();

const PORT = process.env.PORT || 3500;

app.use(express.static(__dirname + "/dist/AppNodeAngular9Cadastro"));

app.get("/*", (req, res)=>{
    res.sendFile(__dirname + "/dist/AppNodeAngular9Cadastro/index.html");
})

app.listen(PORT, ()=>{
    console.log("Servidor logado na porta " + PORT);
})