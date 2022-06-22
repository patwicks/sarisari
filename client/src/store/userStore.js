import create from "zustand";
import API from "../api/Api";

const userStore = (set) => ({
  isLogin: false,
  isLoading: true,
  user: {},

  //   login user
  loginUser: async (data) => {
    try {
      const res = await API.post("/user/login", data, {
        withCredentials: true,
      });
      if (res.data) {
        console.log(res.data);
      }
    } catch (error) {
      console.error(error.response);
    }
  },

  //   Auto Login user
  autoLoginUser: async () => {
    try {
      const res = await API.get("/user/login/auto", { withCredentials: true });
      if (res) {
        set({ isLogin: res.data.isLogin });
        set({ user: res.data.user });
        set({ isLoading: false });
      }
    } catch (error) {
      console.error(error.response);
    }
  },
});

const useUserStore = create(userStore);
export default useUserStore;
