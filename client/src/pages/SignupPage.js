import React from "react";
import { useFormik } from "formik";
//local imports
import { signupValueValidator } from "../components/auth/validator/formValidator";
import SignupForm from "../components/auth/form/SignupForm";
import useUserStore from "../store/userStore"; //zustand store

const SignupPage = () => {
  const { serverErrorCreate, serverSuccessCreate, createUser } = useUserStore(
    (state) => state
  );
  //formik
  const onSubmit = (values, actions) => {
    setTimeout(() => {
      createUser({
        username: values.username,
        password: values.password,
        profile: values.profile,
      });
      actions.setSubmitting(false);
      if (serverErrorCreate === "") {
        actions.resetForm();
      }
    }, 2000);
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
      profile:
        "https://res.cloudinary.com/dxcbmlxoe/image/upload/v1656124600/profile/default_fhcjxw.jpg",
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
        serverErrorCreate={serverErrorCreate}
        serverSuccessCreate={serverSuccessCreate}
      />
    </div>
  );
};

export default SignupPage;
