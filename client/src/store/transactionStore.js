import create from "zustand";
import API from "../api/Api";

const transactionStore = (set) => ({
  transaction: [],
  countTransaction: 0,
  serverError: "",
  fetchTransaction: async (userID) => {
    try {
      const res = await API.get(`/transaction/populate/${userID}`);
      if (res) {
        set({ transaction: res.data.latestTransaction });
        set({ countTransaction: res.data.allTransaction.length });
      }
    } catch (error) {
      set({ serverError: error.response.data.errorMessage });
    }
  },
});

const useTransactionStore = create(transactionStore);

export default useTransactionStore;
