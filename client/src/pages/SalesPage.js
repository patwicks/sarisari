import React from "react";
import AppLayout from "./AppLayout";
import Sales from "../components/sales/Sales";
import useTransactionStore from "../store/transactionStore";
import useUserStore from "../store/userStore";
const SalesPage = () => {
  const { fetchTransaction } = useTransactionStore((state) => state);
  const user = useUserStore((state) => state.user);
  const { _id: userID } = user;

  React.useEffect(() => {
    if (userID) {
      fetchTransaction(userID);
    }
  }, [userID, fetchTransaction]);
  return (
    <AppLayout>
      <Sales />
    </AppLayout>
  );
};

export default SalesPage;
