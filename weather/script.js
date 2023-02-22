const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();

const url = `https://api.openweathermap.org/data/2.5/weather`;

async function loadData(params) {
    try {
        return (await fetch(url + params)).json();
    } catch (error) {
        return {
            Error: error.stack
        };
    }
}

router.get("/:lat/:lon", async (req, res) => {
    const latitude = req.params.lat;
    const longitude = req.params.lon;
    const params = `?appid=${process.env.APIKEY}&lat=${latitude}&lon=${longitude}`;
    const data = await loadData(params);
    res.json(data);
});

module.exports = router;