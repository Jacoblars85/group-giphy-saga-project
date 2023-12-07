const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

// return all favorite images
router.get("/", (req, res) => {
  const sqlText = `SELECT * FROM "favorites"`;
  pool
    .query(sqlText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("Error in favorite.router GET,", err);
      res.sendStatus(500);
    });
});

// add a new favorite
router.post("/", (req, res) => {
  const newFavoritedPost = req.body;
  const sqlText = `
  INSERT INTO "favorites"
  ("url")
  VALUES
  ($1)`;
  const sqlValues = [req.body.newFavorite];
  pool
    .query(sqlText, sqlValues)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("Error in favorite.router POST,", err);
      res.sendStatus(500);
    });
});

// update a favorite's associated category
router.put("/:id", (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  const sqlText = `
  UPDATE "favorites"
    SET "category_id" = $1
    WHERE "id" = '${req.params.id}';`;

  const sqlValues = [req.body.category_id];
  pool
    .query(sqlText, sqlValues)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("Error in favorite.router PUT,", err);
      res.sendStatus(500);
    });
});

// delete a favorite
router.delete("/:id", (req, res) => {
  const sqlText = `
    DELETE FROM "favorites"
      WHERE "id" = ${req.params.id};`;
  pool
    .query(sqlText)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("Error in favorite.router DELETE,", err);
      res.sendStatus(500);
    });
});

module.exports = router;
