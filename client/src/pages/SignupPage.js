import React from "react";
import { useFormik } from "formik";
import { signupValueValidator } from "../components/auth/validator/formValidator";

import SignupForm from "../components/auth/form/SignupForm";

const SignupPage = () => {
  //formik
  const onSubmit = (values, actions) => {
    console.log(values);
  };
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    errors,
    isSubmitting,
  } = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signupValueValidator,
    onSubmit,
  });
  return (
    <div className="center min-w-[320px] p-4">
      <SignupForm
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

export default SignupPage;
