import React, { createContext, useState, useEffect } from "react";
import API from "../api/Api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState([]);
  //server message response handler state
  const [error, setError] = useState(null);
  const [test,setTest] = useState("Sample text")
  // const [success, setSuccess] = useState(null);

  const loginUser = async (data) => {
    try {
      const res = await API.post("/user/login", data, {
        withCredentials: true,
      });
      if (res) {
        console.log(res.data);
      }
    } catch (error) {
      console.error(error.response);
    }
  };
  const autoLogin = async () => {
    try {
      console.log("Checking if Login...");
      const res = await API.get("/user/login/auto", { withCredentials: true });
      if (res.data) {
        // console.log(res.data.isLogin);
        setIsLogin(res.data.isLogin);
        // setUser(res.data.user);
        // setIsLoading(false);
      }
    } catch (error) {
      console.error(error.response);
    }
  };

  useEffect(() => {
    autoLogin();
  }, []);

  return (
    <AuthContext.Provider value={{ isLogin, isLoading, loginUser, user, test }}>
      {children}
    </AuthContext.Provider>
  );
};
