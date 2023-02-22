require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const weather = require("./weather/script.js");

const whitelist = ["https://ms-m-s.github.io", "http://ms-m-s.github.io"];
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    }
}

app.use(cors(corsOptions));

app.use("/", weather);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running...");
});