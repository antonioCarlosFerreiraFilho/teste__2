const express = require("express");
const app = express();

const port = process.env.PORT || 7832;

app.use(express.static('publico'));

app.get("/", function(req, res) {

    res.sendFile(__dirname + "/publico/index.html");
});

app.listen(port, function() {

    console.log("serv rodando na url: http:/localhost:7832");
});
