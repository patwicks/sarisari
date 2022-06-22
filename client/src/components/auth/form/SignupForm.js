import React from "react";
import { Link } from "react-router-dom";
//images
import Logo from "../../../assets/logo.png";
//local imports

const SignupForm = (props) => {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    errors,
    isSubmitting,
  } = props;
  return (
    <div className="center mt-10 w-full flex-col sm:w-4/5 md:w-[450px]">
      {/* Form header start */}
      <div className="h-10 w-10 animate-bounce">
        <img
          className="h-full w-full object-center"
          src={Logo}
          alt="sarisaristore"
        />
      </div>
      <p className="my-2 text-sm uppercase text-subBlack">sari sari store</p>
      <h1 className="text-2xl font-semibold">Signup</h1>
      <p className="text-center text-sm text-subBlack">
        Track, monitor, and record your daily sales
      </p>
      <div className="my-5 w-4/5 border md:w-full"></div>
      {/* Form header End / Form body Start */}
      <form className="w-full" autoComplete="off" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          name="username"
          id="username"
          placeholder="Enter your username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {errors.username && touched.username && (
          <p className="error">{errors.username}</p>
        )}

        <input
          className="form-input"
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {errors.password && touched.password && (
          <p className="error">{errors.password}</p>
        )}

        <input
          className="form-input"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm your password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {errors.confirmPassword && touched.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}

        <button disabled={isSubmitting} className="form-btn" type="submit">
          {isSubmitting ? "Signing up..." : "Signup"}
        </button>
        <p className="my-4 w-full text-center text-sm text-subBlack">
          Don't have an account?
          <span className="smooth-animation cursor-pointer text-blacky hover:text-primary">
            <Link to="/signin">Signin</Link>
          </span>
        </p>
      </form>
      {/* form body end */}
    </div>
  );
};
export default SignupForm;
