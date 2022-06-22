import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
//local imports
import SigninForm from "../components/auth/form/SigninForm";
import { signinValueValidator } from "../components/auth/validator/formValidator";
import useUserStore from "../store/userStore";

const SigninPage = () => {
  let navigate = useNavigate();
  const { loginUser } = useUserStore((state) => ({
    loginUser: state.loginUser,
    autoLoginUser: state.autoLoginUser,
    isLogin: state.isLogin,
  }));

  //formik
  const onSubmit = (values, actions) => {
    setTimeout(() => {
      loginUser(values);
      navigate("/");
      // actions.resetForm();
    }, 2000);
  };

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    touched,
    errors,
    isSubmitting,
  } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: signinValueValidator,
    onSubmit,
  });
  return (
    <div className="center min-w-[320px] flex-col p-4">
      <SigninForm
        values={values}
        handleBlur={handleBlur}
        handleChange={handleChange}
        touched={touched}
        handleSubmit={handleSubmit}
        errors={errors}
        isSubmitting={isSubmitting}
      />
    </div>
  );
};

export default SigninPage;
