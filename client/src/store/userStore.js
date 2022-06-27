import create from "zustand";
import API from "../api/Api";

const refreshCurrentPage = () => {
  return window.location.reload();
};
const userStore = (set) => ({
  //main state
  user: {},
  //request state
  isLogin: false,
  //Response message state for login
  serverError: "",
  serverSuccess: "",
  //Response message state for create user
  serverErrorCreate: "",
  serverSuccessCreate: "",

  //   login user
  loginUser: async (data) => {
    try {
      const res = await API.post("/user/login", data, {
        withCredentials: true,
      });
      if (res.data) {
        set({ serverSuccesss: res.data.successMessage });
        set({ serverError: "" });
        refreshCurrentPage();
      }
    } catch (error) {
      set({ serverError: error.response.data.errorMessage });
    }
  },
  //   Auto Login user
  autoLoginUser: async () => {
    try {
      const res = await API.get("/user/login/auto", { withCredentials: true });
      if (res) {
        set({ isLogin: res.data.isLogin });
        set({ user: res.data.user });
      }
    } catch (error) {
      set({ serverError: "Login token has expired!" });
    }
  },
  //register a user
  createUser: async (data) => {
    try {
      const res = await API.post("/user/create", data);
      if (res.data) {
        console.log(res.data.successMessage);
        set({ serverSuccessCreate: res.data.successMessage });
        set({ serverErrorCreate: "" });
      }
    } catch (error) {
      console.log(error.response.data.errorMessage);
      set({ serverErrorCreate: error.response.data.errorMessage });
      set({ serverSuccessCreate: "" });
    }
  },
});

const useUserStore = create(userStore);
export default useUserStore;
