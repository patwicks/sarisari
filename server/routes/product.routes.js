const router = require("express").Router();
const {
  FETCH_ALL_PRODUCTS,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  SEARCH_PRODUCT,
  UPDATE_PRODUCTS_STOCK,
  FETCH_ONE_PRODOCT,
} = require("../controller/product.controller");
const HANDLE_SINGLE_IMG_UPLOAD = require("../middleware/upload_single_img.middleware");

router.get("/all", FETCH_ALL_PRODUCTS);
router.get("/:productID", FETCH_ONE_PRODOCT);
router.post("/add/new", HANDLE_SINGLE_IMG_UPLOAD, ADD_PRODUCT);
router.patch("/update/:productID", UPDATE_PRODUCT);
router.delete("/delete/:productID", DELETE_PRODUCT);
//search
router.get("/search", SEARCH_PRODUCT);
router.patch("/stock/new", UPDATE_PRODUCTS_STOCK);

module.exports = router;
