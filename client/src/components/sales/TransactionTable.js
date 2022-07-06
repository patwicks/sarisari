import React from "react";
import moment from "moment";
import useTransactionStore from "../../store/transactionStore";
const TransactionTable = () => {
  const transaction = useTransactionStore((state) => state.transaction);

  return (
    <div className="overflow-x-auto mt-5 w-full">
      <table className="w-full border">
        <thead>
          <tr className="truncate border text-left text-sm">
            <th className="p-2">Transaction ID</th>
            <th className="p-2">Date</th>
            <th className="p-2">Grand Total</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {transaction?.map((data) => (
            <tr className="border truncate" key={data._id}>
              <td className="p-2 text-sm">{data._id}</td>
              <td className="p-2 text-sm">
                {moment(data.date).format("MMM Do YY")}{" "}
              </td>
              <td className="p-2 text-sm">₱ {data.grandTotal}</td>
              <td className="p-2 text-sm text-green-600">success</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
