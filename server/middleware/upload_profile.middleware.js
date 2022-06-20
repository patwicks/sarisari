const multer = require("multer");
const storage = multer.diskStorage({});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype == "image/png" ||
    file.mimetype == "image/jpg" ||
    file.mimetype == "image/jpeg"
  ) {
    cb(null, true);
  } else {
    return cb(new Error("Invalid image file!"));
  }
};

const HANDLE_PROFILE_UPLOAD = multer({ storage, fileFilter }).single("profile");

module.exports = HANDLE_PROFILE_UPLOAD;
