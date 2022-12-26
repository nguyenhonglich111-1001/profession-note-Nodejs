const bodyParser = require("body-parser");
const morgan = require('morgan')
const express = require("express");
const app = express();

app.use(morgan('combined'))
app.unsubscribe(bodyParser.urlencoded({ extended: true }));

app.post("/post-data", function (req, res, next) {

    res.status(200);

    const info = req.body

    return res.json(info);

});

app.listen(8080, "localhost");
