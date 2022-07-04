const router = require("express").Router();

const { SAVE_TRANSACTION } = require("../controller/transaction.controller");

router.post("/save/:userID", SAVE_TRANSACTION);

module.exports = router;
