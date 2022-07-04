const Transaction = require("../model/transaction.model");
const User = require("../model/user.model");
const transactionValidation = require("../validation/transaction.validation");
const Product = require("../model/product.model");

exports.SAVE_TRANSACTION = async (req, res) => {
  try {
    const { userID } = req.params;
    const { error } = transactionValidation(req.body);

    //check first there's an error
    if (error) {
      return res.status(400).json({ errorMessage: error.details[0].message });
    } else {
      //create new transaction
      const newTransantion = new Transaction({
        cart: req.body.cart,
        grandTotal: req.body.grandTotal,
      });

      const transaction = await newTransantion.save();

      transaction?.cart?.forEach(async (product) => {
        const updateStock = await Product.findByIdAndUpdate(
          { _id: product.productID },
          { $inc: { stock: -product.quantity } }
        );
        await updateStock.save();
      });

      if (!transaction) {
        return res.status(400).json({ errorMessage: "Failed to checkout!" });
      } else {
        const pushTransaction = await User.findByIdAndUpdate(userID, {
          $push: { dailySale: transaction._id },
        });

        if (pushTransaction) {
          return res
            .status(200)
            .json({ successMessage: "Successfully checkout!" });
        }
      }
    }
  } catch (error) {
    console.error(error?.message); //for Debugging only
    return res
      .status(500)
      .json({ errorMessage: "Something went wrong while checking out!" });
  }
};
