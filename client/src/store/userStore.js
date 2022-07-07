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
        set({ serverSuccessCreate: res.data.successMessage });
        set({ serverErrorCreate: "" });
      }
    } catch (error) {
      set({ serverErrorCreate: error.response.data.errorMessage });
      set({ serverSuccessCreate: "" });
    }
  },
  updateAvatar: async (userID, image) => {
    try {
      const res = await API.patch(`/user/profile/update/${userID}`, image);
      if (res) {
        alert(res.data.successMessage + "Reload the Page!");
      }
    } catch (error) {
      alert(error.response.data.errorMessage);
    }
  },
  //LogoutUser
  logoutUser: async () => {
    const res = await API.delete("/user/logout", { withCredentials: true });
    if (res) {
      localStorage.clear();
      sessionStorage.clear();
      window.location.reload();
    }
  },
});

const useUserStore = create(userStore);
export default useUserStore;
