import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//local imports
//utils
import Loader from "../utils/Loader";
//images
import Logo from "../assets/logo.png";
import Main from "../components/main/Main";
const HomePage = () => {
  let navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLogin === false) {
      navigate("/signin");
    } else {
      navigate("/");
    }
  }, [isLogin, navigate]);
  return (
    <>
      {isLoading === true ? (
        <div className="center h-screen w-screen flex-col bg-white">
          <div className="mb-2 h-10 w-10 animate-bounce animation-delay-100">
            <img
              className="h-full w-full object-center"
              src={Logo}
              alt="sarisaristore"
            />
          </div>
          <Loader />
        </div>
      ) : (
        <Main />
      )}
    </>
  );
};

export default HomePage;
