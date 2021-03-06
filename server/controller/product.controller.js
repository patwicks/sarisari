const Product = require("../model/product.model"); // PRODUCT mongoose model
const User = require("../model/user.model"); //User mongoose model
const { productReqValidator } = require("../validation/product.validation"); // joi validator - request data (PRODUCT)
const cloudinary = require("../utils/cloudinary.utils"); //Cloudinary config

exports.POPULATE_ITEM = async (req, res) => {
  try {
    const { userID } = req.params;
    //items = product list
    const items = await User.findById(userID).populate("item");
    if (!items) {
      return res
        .status(400)
        .json({ errorMessage: "Failed to fetch product items!" });
    } else {
      return res.status(200).json(items.item);
    }
  } catch (error) {
    return res.status(500).json({
      errorMessage:
        "Something went wrong while getting data, please try again!",
    });
  }
}; //POPULAT THE PRODUCT LSIT ITEM

exports.FETCH_ONE_PRODOCT = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productID);
    if (!product) {
      return res.status(400).json({ errorMessage: "Product is not found!" });
    } else {
      return res.status(200).json(product);
    }
  } catch (error) {
    return res.status(500).json({
      errorMessage: "Something went wrong while fetching data, try again!",
    });
  }
}; //FETCH SINGLE PRODUCT

exports.ADD_PRODUCT = async (req, res) => {
  try {
    const { item_code, name, category, stock, purchasePrice, sellPrice } =
      req.body;
    const { error } = productReqValidator(req.body);
    const { userID } = req.params;

    const { item } = await User.findById(userID).populate("item");

    const filteredItem = item.filter(
      (product) => product.item_code === item_code
    );
    //return if product is existing
    if (filteredItem.length !== 0)
      return res
        .status(400)
        .json({ errorMessage: "Product is already existing!" });
    //error
    if (error) {
      return res.status(400).json({ errorMessage: error.details[0].message });
    } else {
      //product image uploader
      const { secure_url, public_id } = await cloudinary.uploader.upload(
        req.file.path,
        {
          folder: "product",
        }
      );

      const newProduct = new Product({
        item_code,
        image: [{ url: secure_url, public_id }],
        name,
        stock,
        category,
        purchasePrice,
        sellPrice,
      });

      const { _id: productID } = await newProduct.save();

      if (!productID) {
        return res
          .status(400)
          .json({ errorMessage: "Failed to add new product!" });
      } else {
        //push the id to user ITEM list
        const pushToItem = await User.findByIdAndUpdate(userID, {
          $push: { item: productID },
        });
        if (!pushToItem) {
          return res
            .status(400)
            .json({ errorMessage: "Failed to add new product!" });
        } else {
          return res
            .status(200)
            .json({ successMessage: "Successfully added a new product!" });
        }
      }
    }
  } catch (error) {
    console.error(error); // for debugging only
    return res
      .status(500)
      .json({ errorMessage: "Something went wrong while adding product!" });
  }
}; //ADD NEW PRODUCT W/ IMAGE

exports.UPDATE_PRODUCT = async (req, res) => {
  try {
    const { productID } = req.params;

    if (productID === null) {
      return res
        .status(400)
        .json({ errorMessage: "No product is found to update!" });
    } else {
      const product = await Product.findByIdAndUpdate(
        { _id: productID },
        req.body
      );

      if (!product) {
        return res
          .status(400)
          .json({ errorMessage: "Failed to update product data!" });
      } else {
        return res
          .status(200)
          .json({ successMessage: "Product successfully updated!" });
      }
    }
  } catch (error) {
    console.error(error); //for debugging only
    return res.status(500).json({
      errorMessage: "Something went wrong while updating product, try again!",
    });
  }
}; // UPDATE A SINGLE PRODUCT - IMAGE EXCLUDED TO UPDATE - NOT FORM DATA

//These are all in update
exports.DELETE_PRODUCT = async (req, res) => {
  try {
    const { productID, userID } = req.params;
    if (!productID && userID) {
      return res
        .status(400)
        .json({ errorMessage: "Cannot find a product to be deleted!" });
    } else {
      const productDelete = await Product.findByIdAndDelete({ _id: productID });
      const pullItemToUser = await User.findByIdAndUpdate(userID, {
        $pull: { item: productID },
      });
      if (!productDelete || !pullItemToUser) {
        return res
          .status(400)
          .json({ errorMessage: "Failed to delete product!" });
      } else {
        //delete the image on Cloudinary
        const deleteImageAsset = await cloudinary.uploader.destroy(
          productDelete.image[0].public_id
        );

        if (deleteImageAsset) {
          return res
            .status(200)
            .json({ successMessage: "Product successfully deleted!" });
        }
      }
    }
  } catch (error) {
    console.error(error); //for debugging only
    return res
      .status(500)
      .json({ errorMessage: "Something went wrong while deleting a product!" });
  }
}; // DELETE A SINGLE PRODUCT data and Image in Cloudinary

exports.SEARCH_PRODUCT = async (req, res) => {
  try {
    const { userID } = req.params;
    const stringQuery = req.query.data;
    //populate items by user
    const { item } = await User.findById(userID).populate("item");

    //search item from the list
    const searchResult = item.filter(
      (x) =>
        x.name.toLowerCase().includes(stringQuery.toLowerCase()) ||
        x.item_code.includes(stringQuery)
    );

    if (!searchResult) {
      return res.status(400).json({ errorMessage: "No product is found!" });
    } else {
      return res.status(200).json(searchResult);
    }
  } catch (error) {
    console.error(error.message); // for debugging only
    return res.status(500).json({
      errorMessage: "Something went wrong while searching product, try again!",
    });
  }
}; // SEARCH QUERY FOR PRODUCT - BY NAME - BY ITEM CODE
