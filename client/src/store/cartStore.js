import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const cartStore = (set) => ({
  cart: [],
  //add to cart
  addToCart: (item, quantity, total) => {
    set((state) => ({
      cart: [{ item, quantity, total }, ...state.cart],
    }));
  },
  //remove from the cart
  removeToCart: (itemID, currentCart) => {
    const newItemList = currentCart.filter((item) => item.item._id !== itemID);
    return set({ cart: newItemList });
  },
  //decrease quantity
  decreaseQuantity: (itemID, currentCart) => {
    const updatedCart = currentCart.map((product) =>
      product.item._id === itemID
        ? {
            ...product,
            quantity: product.quantity - 1,
            total: product.total - product.item.sellPrice,
          }
        : product
    );
    set({ cart: updatedCart });
  },
  // increase quantity
  increaseQuantity: (itemID, currentCart) => {
    const updatedCart = currentCart.map((product) =>
      product.item._id === itemID
        ? {
            ...product,
            quantity: product.quantity + 1,
            total: product.total + product.item.sellPrice,
          }
        : product
    );
    set({ cart: updatedCart });
  },
});

const useCartStore = create(devtools(persist(cartStore, { name: "cart" })));

export default useCartStore;
