import React from "react";
import TransactionTable from "./TransactionTable";
import DailySalesChart from "./DailySalesChart";
const Sales = () => {
  return (
    <div className="center min-w-[288px] flex-col p-2">
      <h1 className="my-5 w-full text-left text-xl font-semibold">
        Daily Sales
      </h1>
      <div className="h-full w-full bg-slate-200 md:w-[95%]">
        <DailySalesChart />
      </div>
      <div className="mt-5 w-full">
        <h1 className="text-xl font-semibold">Latest Transaction</h1>
        <TransactionTable />
      </div>
    </div>
  );
};

export default Sales;
