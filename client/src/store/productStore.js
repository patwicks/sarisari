import create from "zustand";
import API from "../api/Api";

const productStore = (set) => ({
  // response messages
  serverError: {},
  serverSuccess: {},
  // state
  isLoading: false,
  //main
  product: [],

  fetchAllProducts: async (userID) => {
    try {
      const res = await API.get(`/product/item/populate/${userID}`);
      if (res.data) {
        set({ product: res.data });
        set({
          serverError: {
            action: "fetch",
            text: "",
          },
        });
      }
    } catch (error) {
      set({
        serverError: {
          action: "fetch",
          text: error.response.data.errorMessage,
        },
      });
    }
  },
  // ADD NEW PRODUCT
  addNewProduct: async (userID, data) => {
    try {
      const res = await API.post(`/product/add/new/${userID}`, data);
      set({ isLoading: true });
      if (res.data) {
        set({
          serverSuccess: { action: "add", text: res.data.successMessage },
        });
        set({ isLoading: false });
        set({ serverError: { action: "add", text: "" } });
      }
    } catch (error) {
      set({
        serverError: { action: "add", text: error.response.data.errorMessage },
      });
      set({
        serverSuccess: { action: "add", text: "" },
      });
      set({ isLoading: false });
    }
  },
  //EDIT A PRODUCT
  editProduct: async (productID, data) => {
    try {
      const res = await API.patch(`/product/update/${productID}`, data);
      if (res.data) {
        set({
          serverSuccess: { action: "edit", text: res.data.successMessage },
        });
        set({ serverError: { action: "edit", text: "" } });
      }
    } catch (error) {
      set({ serverSuccess: { action: "edit", text: "" } });
      set({
        serverError: { action: "edit", text: error.response.data.errorMessage },
      });
    }
  },
  //DeleteProduct
  deleteProduct: async (productID, userID) => {
    try {
      const res = await API.delete(`/product/delete/${productID}/${userID}`);
      if (res.data) {
        console.log(res.data);
        set({
          serverSuccess: { action: "delete", text: res.data.successMessage },
        });
        set({ serverError: { action: "delete", text: "" } });
      }
    } catch (error) {
      console.error(error.response);
      set({
        serverError: {
          action: "delete",
          text: error.response.data.errorMessage,
        },
      });
      set({ serverSuccess: { action: "delete", text: "" } });
    }
  },
  searchProduct: async (userID, data) => {
    try {
      const res = await API.get(`/product/search/${userID}?data=${data}`);
      set({ product: res.data });
      console.log(res.data)
    } catch (error) {
      console.log(error.response);
    }
  },
});

const useProductStore = create(productStore);

export default useProductStore;
