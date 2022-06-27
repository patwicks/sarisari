import * as Yup from "yup";

const formProductValidation = new Yup.object().shape({
  item_code: Yup.string()
    .min(12, "Minimum of 12 characters")
    .max(12, "Maximum of 12 characters")
    .required("Item code is required"),
  name: Yup.string()
    .min(5, "Product name is too short")
    .required("Product name is required"),
  category: Yup.string().required("Choose a category"),
  purchasePrice: Yup.number().min(1).required("Purchased price is required"),
  stock: Yup.number().positive().min(1).required(),
  sellPrice: Yup.number()
    .positive()
    .min(1)
    .required("Selling Price is required!"),
});
export default formProductValidation;
