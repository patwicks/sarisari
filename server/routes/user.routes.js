const router = require("express").Router();
const {
  CREATE_USER,
  LOGIN_USER,
  AUTO_LOGIN,
  LOGOUT_USER,
  UPDATE_PROFILE_PIC,
} = require("../controller/user.controller");
// MIDDLEWARE
const HANDLE_SINGLE_IMG_UPLOAD = require("../middleware/upload_single_img.middleware");

router.post("/create", CREATE_USER);
router.post("/login", LOGIN_USER);
router.get("/login/auto", AUTO_LOGIN);
router.patch(
  "/profile/update/:userID",
  HANDLE_SINGLE_IMG_UPLOAD,
  UPDATE_PROFILE_PIC
);
router.delete("/logout", LOGOUT_USER);

module.exports = router;
