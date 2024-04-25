const express = require("express");
const router = express.Router();

const account = { balance: 10000, currency: "CHF" };

// very simple replay attack protection
// possible improvements: persisten storage, user-specific check
const processedTokens = [];
const checkAndRecordUnseenCSRFToken = (toCheckTransactionToken) =>  {
  if(processedTokens.includes(toCheckTransactionToken)) {
    return false;
  }else{
    processedTokens.push(toCheckTransactionToken);
    return true;
  }
};


/* securedTransfer. */
router
  .route("/transfer")
  .get(function(req, res, next) {
    res.render("csrfTransfer", {
      title: "Secured Transfer",
      csrfToken: req.csrfToken(), //needed if not provided on res.locals
      ...account
    });
  })
  .post(function(req, res, next) {
    console.log("CSRF:", req.body._csrf);
    if (checkAndRecordUnseenCSRFToken(req.body._csrf)) {
      res.send("Your Transfer Record: " + JSON.stringify(req.body));
    }else{
      res.send("Your Transfer was already processed.");
    }
  });

module.exports = router;
