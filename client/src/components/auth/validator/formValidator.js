import * as Yup from "yup";

export const signinValueValidator = new Yup.object().shape({
  username: Yup.string().required("Username is required!"),
  password: Yup.string().required("Password is required!"),
});
const passwordRules = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9].{6,}$/;
export const signupValueValidator = new Yup.object().shape({
  username: Yup.string()
    .min(5, "Username must be atleast 5 characters long!")
    .required("Username is required!"),
  password: Yup.string()
    .min(8, "Password must be atleast 8 characters long!")
    .matches(passwordRules, "Password must have atleast 1 numerical character!")
    .required("Password is  required!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password not matched!")
    .required("Confirm password is required!"),
});
