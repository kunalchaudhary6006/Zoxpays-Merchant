import React from 'react';

export default function BankStatement() {
  return (
    <div className="w-full animate-in fade-in duration-300">
      <div className="mb-4">
        <h2 className="text-[#2b3a4a] text-[1.2rem] font-medium">Bank Statement</h2>
        <div className="text-[0.7rem] text-gray-400 mt-1">Home / Bank Statement</div>
      </div>

      <div className="bg-white border rounded shadow-sm p-6 overflow-x-auto min-h-[60vh]">
        <h3 className="text-[#104e92] text-[0.95rem] font-medium mb-5">Bank Account Statement</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <input type="date" className="border border-gray-200 rounded px-3 py-1.5 text-sm outline-none focus:border-[#0d6efd] text-gray-600" />
          <input type="text" placeholder="Search by Account No" className="border border-gray-200 rounded px-3 py-1.5 text-sm outline-none focus:border-[#0d6efd]" />
          <select className="border border-gray-200 rounded px-3 py-1.5 text-sm outline-none focus:border-[#0d6efd] bg-white text-gray-500">
            <option value="">Transaction Type</option>
            <option value="credit">Credit (In)</option>
            <option value="debit">Debit (Out)</option>
          </select>
        </div>
        
        <button className="bg-[#0d6efd] text-white px-5 py-1.5 rounded text-sm hover:bg-[#0b5ed7] transition-colors mb-6 shadow-sm">
          Generate Statement
        </button>

        <div className="min-w-[800px]">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 text-[#212529]">
                <th className="py-3 px-2 font-bold">Date</th>
                <th className="py-3 px-2 font-bold">Txn Refference</th>
                <th className="py-3 px-2 font-bold">Description</th>
                <th className="py-3 px-2 font-bold">Type</th>
                <th className="py-3 px-2 font-bold">Amount</th>
                <th className="py-3 px-2 font-bold">Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                <td className="py-3 px-2 text-gray-600">2026-04-20 10:15:00</td>
                <td className="py-3 px-2 text-gray-600">TXN-93821004</td>
                <td className="py-3 px-2 text-gray-600">Merchant Payout Settlement</td>
                <td className="py-3 px-2">
                   <span className="bg-[#dc3545] text-white text-[0.7rem] px-2 py-0.5 rounded shadow-sm">Debit</span>
                </td>
                <td className="py-3 px-2 text-gray-600 font-medium">¥ 12,400.00</td>
                <td className="py-3 px-2 text-[#0d6efd] font-bold">¥ 72,840.50</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                <td className="py-3 px-2 text-gray-600">2026-04-19 14:22:15</td>
                <td className="py-3 px-2 text-gray-600">INC-88319402</td>
                <td className="py-3 px-2 text-gray-600">Collection Aggregation</td>
                <td className="py-3 px-2">
                   <span className="bg-[#198754] text-white text-[0.7rem] px-2 py-0.5 rounded shadow-sm">Credit</span>
                </td>
                <td className="py-3 px-2 text-gray-600 font-medium">¥ 45,900.00</td>
                <td className="py-3 px-2 text-[#0d6efd] font-bold">¥ 85,240.50</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
