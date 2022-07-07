const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cloudinary = require("../utils/cloudinary.utils");

//local imports
const User = require("../model/user.model"); //model
const {
  requestBodyValidator,
  loginReqBodyValidator,
} = require("../validation/user.data.validation"); // Joi validator

//create token function
const expiration = 1 * 24 * 60 * 60;
const createToken = (id, token_secret) => {
  return jwt.sign({ id }, token_secret, { expiresIn: expiration });
};

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

exports.LOGIN_USER = async (req, res) => {
  try {
    const { username, password } = req.body;
    const { error } = loginReqBodyValidator(req.body); //Joi validator
    const isUsernameExist = await User.findOne({ username });

    //check if theres an error on request
    if (error) {
      return res.status(400).json({ errorMessage: error.details[0].message });
    } else {
      //check if username is existing
      if (!isUsernameExist) {
        return res
          .status(400)
          .json({ errorMessage: "Incorrect username or password!" });
      } else {
        //compare password
        const isValidPassword = await bcrypt.compare(
          password,
          isUsernameExist.password
        );
        if (!isValidPassword) {
          return res
            .status(400)
            .json({ errorMessage: "Incorrect username or password!" });
        } else {
          const token = createToken(
            isUsernameExist._id,
            process.env.TOKEN_SECRET
          );
          if (token) {
            res.cookie("token", token, {
              httpOnly: true,
              secure: true,
              maxAge: expiration * 1000,
              sameSite: "none",
            });

            res.status(200).json({ successMessage: "Successfully Login!" });
          }
        }
      }
    }
  } catch (error) {
    console.log(error); //for debugging only
    return res.status(500).json({
      errorMessage: "Something went wrong while logging in, try again!",
    });
  }
}; // Login user and throw login cookie in user broswer --end function

exports.AUTO_LOGIN = async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(200).json({ isLogin: false, user: null });
    } else {
      const { id } = jwt.verify(token, process.env.TOKEN_SECRET);
      //find the user
      const user = await User.findById({ _id: id });
      //is there is a user throw the user data else not
      if (!user) {
        return res.status(400).json({ isLogin: false, user: null });
      } else {
        return res.status(200).json({ isLogin: true, user });
      }
    }
  } catch (error) {
    return res.status(200).json({ isLogin: false, user: null });
  }
}; //Auto login user base on cookies browser

exports.LOGOUT_USER = async (req, res) => {
  try {
    res.cookie("token", null, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 1,
    });
    res.status(200).json({ successMessage: "Successfully logout!" });
  } catch (error) {
    return res.cookie("token", null, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 1,
    });
  }
}; //logout user by throwing cookie with very low maxAge

exports.UPDATE_PROFILE_PIC = async (req, res) => {
  try {
    const { userID } = req.params;
    const uploadResult = await cloudinary.uploader.upload(req.file.path, {
      folder: "profile",
      public_id: `${userID}_profile`,
    });

    const user = await User.findById(userID);

    if (uploadResult.url === null) {
      return res
        .status(400)
        .json({ errorMessage: "Failed to upload new profile image!" });
    } else {
      const update = await User.findByIdAndUpdate(user._id, {
        profile: uploadResult.url,
      });
      if (!update) {
        return res
          .status(400)
          .json({ errorMessage: "Failed to update profile!" });
      } else {
        return res.status(200).json({
          successMessage: "You have Successfully update your profile!",
        });
      }
    }
  } catch (error) {
    return res.status(500).json({
      errorMessage: "Something went wrong while updating profile, try again!",
    });
  }
}; //update profile profile picture


