const express = require("express");
const router = express.Router();

const account = { balance: 10000, currency: "CHF" };

console.log("loaded");

/* regularTransfer. */
router
  .route("/transfer")
  .get(function(req, res, next) {
    res.render("transfer", { title: "Regular Transfer", ...account });
  })
  .post(function(req, res, next) {
    console.log("Transaction processed: ", JSON.stringify(req.body));
    res.send("Your Transfer Record: " + JSON.stringify(req.body));
  });

module.exports = router;
