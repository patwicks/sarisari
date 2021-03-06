const router = require("express").Router();
const {
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  SEARCH_PRODUCT,
  FETCH_ONE_PRODOCT,
  POPULATE_ITEM,
} = require("../controller/product.controller");
const HANDLE_SINGLE_IMG_UPLOAD = require("../middleware/upload_single_img.middleware");

router.get("/item/populate/:userID", POPULATE_ITEM);
router.get("/:productID", FETCH_ONE_PRODOCT);
router.post("/add/new/:userID", HANDLE_SINGLE_IMG_UPLOAD, ADD_PRODUCT);
router.patch("/update/:productID", UPDATE_PRODUCT);
router.delete("/delete/:productID/:userID", DELETE_PRODUCT);
//search
router.get("/search/:userID", SEARCH_PRODUCT);

module.exports = router;
