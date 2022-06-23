import create from "zustand";
import API from "../api/Api";

const productStore = (set) => ({
  // response messages
  serverError: "",
  serverSuccess: "",
  // state
  isLoading: false,
  //main
  product: [],

  fetchAllProducts: async () => {
    try {
      const res = await API.get("/product/all");
      if (res.data) {
        set({ product: res.data });
        console.log(res.data);
      }
    } catch (error) {
      set({ serverError: error.response.data.errorMessage });
    }
  },

  addNewProduct: async (data) => {
    try {
      const res = await API.post("/product/add/new", data);
      set({ isLoading: true });
      if (res.data) {
        set({ serverSuccess: res.data.successMessage });
        set({ isLoading: false });
        set({ serverError: "" });
      }
    } catch (error) {
      set({ serverError: error.response.data.errorMessage });
      set({ isLoading: false });
    }
  },
});

const useProductStore = create(productStore);

export default useProductStore;
