import * as Yup from "yup";

const addProductValidation = new Yup.object().shape({
  item_code: Yup.string()
    .min(12, "Minimum of 12 characters")
    .max(12, "Maximum of 12 characters")
    .required("Item code is required"),
  name: Yup.string()
    .min(5, "Product name is too short")
    .required("Product name is required"),
  category: Yup.string().required("Choose a category"),
  status: Yup.string().required("Status is required"),
  stock: Yup.number().positive().min(1).required(),
  price: Yup.number().positive().min(1).required(),
});
export default addProductValidation;
