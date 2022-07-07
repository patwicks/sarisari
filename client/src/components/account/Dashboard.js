import React from "react";
import productIcon from "../../assets/products.png"
import transactionIcon from "../../assets/transaction.png"
import saleIcon from "../../assets/sale.png"
import useProductStore  from "../../store/productStore"
import useTransactionStore from "../../store/transactionStore";


const Dashboard = () => {
  const product = useProductStore((state) => state.product);
  const countTransaction = useTransactionStore((state) => state.countTransaction)
  const productCount = product?.length;
  return (
    <div className="flex flex-col md:flex-row gap-x-8">
      <div className="my-5 h-40 w-full rounded-sm bg-whitey-200 p-4 shadow-lg relative md:w-[18rem]">
        <h2 className="font-semibold">Products</h2>
        <h1 className="py-4 text-4xl font-bold text-primary">{productCount}</h1>
        <h4 className="text-sm text-blacky/60">
          Total number of registered products
        </h4>
        <div className="absolute right-0 top-0 h-24 w-24 p-4 overflow-hidden opacity-50">
          <img className="w-full h-full object-center object-contain" src={productIcon} alt="product" />
        </div>
      </div>
      <div className="my-5 h-40 w-full rounded-sm bg-whitey-200 p-4 shadow-lg relative md:w-[18rem]">
        <h2 className="font-semibold">Transactions</h2>
        <h1 className="py-4 text-4xl font-bold text-primary">{countTransaction}</h1>
        <h4 className="text-sm text-blacky/60">Total number of transactions</h4>
        <div className="absolute right-0 top-0 h-24 w-24 p-4 overflow-hidden opacity-50">
          <img className="w-full h-full object-center object-contain" src={transactionIcon} alt="transaction" />
        </div>
      </div>

      <div className="my-5 h-40 w-full rounded-sm bg-whitey-200 p-4 shadow-lg relative md:w-[18rem]">
        <h2 className="font-semibold">Average Sale</h2>
        <h1 className="py-4 text-4xl font-bold text-primary">00.00</h1>
        <h4 className="text-sm text-blacky/60">Average sale per day</h4>
        <div className="absolute right-0 top-0 h-24 w-24 p-4 overflow-hidden opacity-50">
          <img className="w-full h-full object-center object-contain" src={saleIcon} alt="sale" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
