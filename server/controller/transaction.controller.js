const Transaction = require("../model/transaction.model");
const User = require("../model/user.model");
const transactionValidation = require("../validation/transaction.validation");
const Product = require("../model/product.model");

exports.SAVE_TRANSACTION = async (req, res) => {
  try {
    const { userID } = req.params;
    const { error } = transactionValidation(req.body);
    const currentDate = new Date();

    //check first there's an error
    if (error) {
      return res.status(400).json({ errorMessage: error.details[0].message });
    } else {
      //create new transaction
      const newTransantion = new Transaction({
        cart: req.body.cart,
        grandTotal: req.body.grandTotal,
        date: currentDate,
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
          $push: { transaction: transaction._id },
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

exports.POPULATE_TRANSACTIONS = async (req, res) => {
  try {
    const { userID } = req.params;
    const { transaction } = await User.findById(userID).populate("transaction");

    const sortedTransaction = await transaction.sort((a, b) => b.date - a.date);
    const sliceData = sortedTransaction.slice(0, 5);

    if (!transaction) {
      return res
        .status(400)
        .json({ errorMessage: "Failed to load transaction data!" });
    } else {
      return res
        .status(200)
        .json({
          latestTransaction: sliceData,
          allTransaction: sortedTransaction,
        });
    }
  } catch (error) {
    console.error(error.message); //for debugging only
    return res.status(500).json({
      errorMessage: "Something went wrong while getting transaction data!",
    });
  }
};
