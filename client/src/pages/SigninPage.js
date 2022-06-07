import React from "react";
//local imports
import SigninForm from "../components/auth/form/SigninForm";

const SigninPage = () => {
  return (
    <div className="center min-w-[320px] flex-col p-4">
      <SigninForm />
    </div>
  );
};

export default SigninPage;
