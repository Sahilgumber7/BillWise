'use client';

import { useState } from 'react';
import { bills as initialBills } from '@/lib/dummyData';

export default function BillTable() {
  const [bills] = useState(initialBills);

  return (
    <div className="mt-6 border rounded-md overflow-x-auto">
      <h2 className="text-xl font-semibold p-4 border-b">Bills</h2>
      <table className="w-full text-left">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="p-3">Bill ID</th>
            <th className="p-3">Customer</th>
            <th className="p-3">Date</th>
            <th className="p-3">Amount (₹)</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill) => (
            <tr key={bill.id} className="border-t hover:bg-gray-50 dark:hover:bg-gray-900 transition">
              <td className="p-3 font-medium">{bill.id}</td>
              <td className="p-3">{bill.customer}</td>
              <td className="p-3">{bill.date}</td>
              <td className="p-3">₹{bill.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
