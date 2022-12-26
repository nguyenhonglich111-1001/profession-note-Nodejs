const bodyParser = require("body-parser");
const morgan = require("morgan");
const express = require("express");
const app = express();

app.use(morgan("combined"));
app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

let sharks = [
    { _id: "0x5", snapshot: 774220032 },
    { _id: "0x4", snapshot: 30093687 },
    { _id: "0x2", snapshot: 261252 },
];

app.get("/", (req, res) => {
    res.send(`You're the first guy coming here!`);
});

app.get("/sharks", (req, res) => {
    res.send(sharks);
});

app.get("/shark/:_id", (req, res) => {
    const shark = sharks.find((shark) => shark._id == req.params._id);

    if (!shark) {
        res.status(404).send("_id isn't existed");
    }

    res.send(shark);
});

app.post("/shark/add", function (req, res, next) {
    const newShark = {
        _id: req.body._id,
        snapshot: req.body.snapshot,
    };

    sharks.push(newShark);

    res.send(
        JSON.stringify({
            success: true,
            message: "Add shark successfully",
            sharks: sharks,
        })
    );
});

app.delete("/shark/delete/:_id", function (req, res, next) {
    const sharkIndex = sharks.indexOf({ _id: req.params._id });

    if (sharkIndex == -1) {
        res.status(404).send("Shark _id not found!");
    }

    sharks.splice(sharkIndex, 1);
    res.send(
        JSON.stringify({
            success: true,
            message: "Delete shark successfully",
            shark: sharks,
        })
    );
});

app.listen(8080, "localhost");
