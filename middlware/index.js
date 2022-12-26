const express = require("express");
const greetMiddleware = require("./greet.js");
class GreetingService {
    constructor(_greeting) {
        this.greeting = _greeting;
    }

    createGreeting(_name) {
        return `${this.greeting}, ${_name}`;
    }
}
express()
    .use("/api/v1", greetMiddleware({ service: new GreetingService("Hallo") }))
    .use("/api/v2", greetMiddleware({ greeting: "Yo Bro, how u doin' man?!" }))
    .listen(3020);
