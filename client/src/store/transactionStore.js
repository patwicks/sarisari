import create from "zustand";
import API from "../api/Api";

const transactionStore = (set) => ({
  transaction: [],
  serverError: "",
  fetchTransaction: async (userID) => {
    try {
      const res = await API.get(`/transaction/populate/${userID}`);
      if (res) {
        set({ transaction: res.data });
      }
    } catch (error) {
      set({ serverError: error.response.data.errorMessage });
    }
  },
});

const useTransactionStore = create(transactionStore);

export default useTransactionStore;
