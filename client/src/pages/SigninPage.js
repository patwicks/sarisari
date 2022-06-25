import React from "react";
import {useNavigate} from "react-router-dom"
import { useFormik } from "formik";
//local imports
import SigninForm from "../components/auth/form/SigninForm";
import { signinValueValidator } from "../components/auth/validator/formValidator";
import useUserStore from "../store/userStore";

const SigninPage = () => {
  let navigateTo = useNavigate()
  //user states
  const { loginUser, serverError } = useUserStore((state) => state);

  //formik
  const onSubmit = (values, actions) => {
    setTimeout(() => {
      loginUser(values);
      actions.setSubmitting(false);
      if(serverError === "") {
        actions.resetForm();
        navigateTo("/")
      }
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
        serverError={serverError}
      />
    </div>
  );
};

export default SigninPage;
