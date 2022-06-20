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

const HANDLE_SINGLE_IMG_UPLOAD = multer({ storage, fileFilter }).single(
  "image"
);

module.exports = HANDLE_SINGLE_IMG_UPLOAD;
