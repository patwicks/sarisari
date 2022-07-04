import create from "zustand";
import { devtools, persist } from "zustand/middleware";

import API from "../api/Api";
const cartStore = (set) => ({
  cart: [],
  serverSuccess: "",
  serverError: "",
  //add to cart
  addToCart: (productID, name, image, sellPrice, quantity, total) => {
    set((state) => ({
      cart: [
        { productID, name, image, sellPrice, quantity, total },
        ...state.cart,
      ],
    }));
  },
  //remove from the cart
  removeToCart: (itemID, currentCart) => {
    const newItemList = currentCart.filter((item) => item.productID !== itemID);
    return set({ cart: newItemList });
  },
  //decrease quantity
  decreaseQuantity: (itemID, currentCart) => {
    const updatedCart = currentCart.map((product) =>
      product.productID === itemID
        ? {
            ...product,
            quantity: product.quantity - 1,
            total: product.total - product.sellPrice,
          }
        : product
    );
    set({ cart: updatedCart });
  },
  // increase quantity
  increaseQuantity: (itemID, currentCart) => {
    const updatedCart = currentCart.map((product) =>
      product.productID === itemID
        ? {
            ...product,
            quantity: product.quantity + 1,
            total: product.total + product.sellPrice,
          }
        : product
    );
    set({ cart: updatedCart });
  },
  checkout: async (userID, data) => {
    try {
      const res = await API.post(`/transaction/save/${userID}`, data);
      if (res.data) {
        set({ cart: [] });
        set({ serverSuccess: res.data.successMessage });
        set({ serverError: "" });
      }
    } catch (error) {
      set({ serverSuccess: "" });
      set({ serverError: error.response.data.successMessage });
    }
  },
});

const useCartStore = create(devtools(persist(cartStore, { name: "cart" })));

export default useCartStore;
