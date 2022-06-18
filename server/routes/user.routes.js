const router = require("express").Router();
const {
  CREATE_USER,
  LOGIN_USER,
  AUTO_LOGIN,
} = require("../controller/user.controller");

router.post("/create", CREATE_USER);
router.post("/login", LOGIN_USER);
router.get("/login/auto", AUTO_LOGIN);

module.exports = router;
