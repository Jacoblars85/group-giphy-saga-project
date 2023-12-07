const express = require("express");
const pool = require("../modules/pool");
const axios = require("axios");
const API_KEY = require("../../.env");

const router = express.Router();

router.get("/:id", (req, res) => {
  console.log("Test GET!", req.params.id);
  res.sendStatus(200);
});

module.exports = router;
