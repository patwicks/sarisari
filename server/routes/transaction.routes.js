const router = require("express").Router();

const {
  SAVE_TRANSACTION,
  POPULATE_TRANSACTIONS,
} = require("../controller/transaction.controller");

router.post("/save/:userID", SAVE_TRANSACTION);
router.get("/populate/:userID", POPULATE_TRANSACTIONS);

module.exports = router;
