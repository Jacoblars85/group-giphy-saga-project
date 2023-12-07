const express = require("express");
const pool = require("../modules/pool");
const axios = require("axios");
require("dotenv").config();

const API_KEY = process.env.GIPHY_API_KEY;
const router = express.Router();

router.get("/:id", (req, res) => {
  axios({
    method: "GET",
    url: `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&&q=${req.params.id}`,
  })
    .then((response) => {
      res.send(response.data.data);
    })
    .catch((error) => {
      console.log("Error in GET from giphyRouter,", error);
      res.sendStatus(500);
    });
});

module.exports = router;
