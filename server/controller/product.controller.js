const Product = require("../model/product.model"); // PRODUCT mongoose model
const { productReqValidator } = require("../validation/product.validation"); // joi validator - request data (PRODUCT)
const cloudinary = require("../utils/cloudinary.utils"); //Cloudinary config

exports.FETCH_ALL_PRODUCTS = async (req, res) => {
  try {
    const products = await Product.find();
    if (!products) {
      return res
        .status(400)
        .json({ errorMessage: "Failed to fetch product data!" });
    } else {
      return res.status(200).json(products);
    }
  } catch (error) {
    console.error(error); //debugging only
    return res.status(500).json({
      errorMessage: "Something went wrong while fetching product data!",
    });
  }
}; //FETCH ALL PRODUCTS FROM DATABASE

exports.ADD_PRODUCT = async (req, res) => {
  try {
    const { item_code, image, name, category, stock, status, price } = req.body;

    const { error } = productReqValidator(req.body);

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
        status,
        price,
      });

      const saveNewProduct = await newProduct.save();

      if (!saveNewProduct) {
        return res
          .status(400)
          .json({ errorMessage: "Failed to add new product!" });
      } else {
        return res
          .status(200)
          .json({ successMessage: "Successfully added a new product!" });
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

exports.DELETE_PRODUCT = async (req, res) => {
  try {
    const { productID } = req.params;
    if (!productID) {
      return res
        .status(400)
        .json({ errorMessage: "Cannot find a product to be deleted!" });
    } else {
      const productDelete = await Product.findByIdAndDelete({ _id: productID });

      if (!productDelete) {
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
    const searchProduct = await Product.find({
      $or: [
        { name: { $regex: req.query.name, $options: "i" } },
        { item_code: { $regex: req.query.name, $options: "i" } },
      ],
    });

    if (!searchProduct) {
      return res.status(400).json({ errorMessage: "No product is found!" });
    } else {
      return res.status(200).json(searchProduct);
    }
  } catch (error) {
    console.error(error); // for debugging only
    return res.status(500).json({
      errorMessage: "Something went wrong while searching product, try again!",
    });
  }
}; // Search query for product product
