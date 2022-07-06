import React from "react";

const TransactionTable = () => {
  return (
    <table className="w-full mt-5">
      <thead>
        <tr className="text-left border text-sm">
          <th className="p-2">Transaction ID</th>
          <th className="p-2">Date</th>
          <th className="p-2">Grand Total</th>
          <th className="p-2">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-1 text-sm">62c2eb0f88691584c838fad5</td>
          <td className="p-1 text-sm">July 05, 2022</td>
          <td className="p-1 text-sm"> $ 560</td>
          <td className="p-1 text-sm text-green-600">successfull</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TransactionTable;
