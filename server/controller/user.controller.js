const bcrypt = require("bcrypt");
//local imports
const User = require("../model/user.model"); //model
const { requestBodyValidator } = require("../validation/user.data.validation"); // Joi validator

exports.CREATE_USER = async (req, res) => {
  try {
    const { username, password, profile } = req.body;
    const { error } = requestBodyValidator(req.body);
    const usernameExist = await User.findOne({ username });

    if (error) {
      return res.status(400).json({ errorMessage: error.details[0].message });
    } else {
      //check if username is existing
      if (usernameExist) {
        return res
          .status(400)
          .json({ errorMessage: "Username is already in used!" });
      } else {
        //hashed the password next after validating the username
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
          username,
          profile,
          password: hashedPassword,
        });

        //save the user data
        const saveUser = await newUser.save();
        if (!saveUser) {
          return res
            .status(400)
            .json({ errorMessage: "Failed to create an account!" });
        } else {
          return res
            .status(200)
            .json({ successMessage: "Successfully created an account!" });
        }
      }
    }
  } catch (error) {
    console.log(error); //for debugging only
    return res.status(500).json({
      errorMessage:
        "Something went wrong while creating an account, Please try again!",
    });
  }
}; //Creating new user --end function
