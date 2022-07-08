import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
//local imports
import SigninForm from "../components/auth/form/SigninForm";
import { signinValueValidator } from "../components/auth/validator/formValidator";
import useUserStore from "../store/userStore";

//image
import storeIMG from "../assets/store.svg";

const SigninPage = () => {
  let navigateTo = useNavigate();
  //user states
  const { loginUser, serverError } = useUserStore((state) => state);

  //formik
  const onSubmit = (values, actions) => {
    setTimeout(() => {
      loginUser(values);
      actions.setSubmitting(false);
      if (serverError === "") {
        actions.resetForm();
        navigateTo("/");
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
    <div className="center h-screen w-screen min-w-[320px] flex-col p-4 md:flex-row">
      <div className="md:center w-full md:w-1/2">
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
      <div className="center hidden h-[60vh] w-1/2 overflow-hidden md:block">
        <div className="center h-full w-full drop-shadow-lg">
          <img
            className="h-full w-full object-contain object-center drop-shadow-lg"
            src={storeIMG}
            alt="store"
          />
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
