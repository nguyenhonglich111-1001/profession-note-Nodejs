const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const port = 3000;

app.get("/:user_id", function (req, res, next) {
    var info = {
        Community: "StackOverFlow",
        number_value: "792001",
    };

    console.log(req.originalUrl);
    console.log(req.params.user_id);
    console.log(req.query.field);

    if (req.params.user_id == "792001") {
        res.status(200);
        return res.json(info);
    } else {
        next(new Error("Not valid name")); // Throw error in terminal
    }
});


app.route("/test").get((req, res, next) => {
    res.send("<h1> test ahihi </h1>");
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    return res.status(500).send("Internal Server Occurred"); // Send to the window
});

app.listen(port, function () {
    console.log("Server is listening on http://localhost:" + port);
});
