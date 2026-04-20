import React from 'react';

export default function WithdrawTransactions() {
  return (
    <div className="w-full animate-in fade-in duration-300">
      <div className="mb-4">
        <h2 className="text-[#2b3a4a] text-[1.2rem] font-medium">Withdraw Transactions</h2>
        <div className="text-[0.7rem] text-gray-400 mt-1">Home / Withdraw Transactions</div>
      </div>

      <div className="bg-white border rounded shadow-sm p-6 overflow-x-auto min-h-[60vh]">
        <h3 className="text-[#104e92] text-[0.95rem] font-medium mb-5">Application Users Withdraw List</h3>
        
        <p className="text-sm text-[#2b3a4a] font-medium mb-3">Search using below filters</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <input type="text" placeholder="Search by Merchant ID" className="border border-gray-200 rounded px-3 py-1.5 text-sm outline-none focus:border-[#0d6efd]" />
          <input type="text" placeholder="Search by Order No" className="border border-gray-200 rounded px-3 py-1.5 text-sm outline-none focus:border-[#0d6efd]" />
          <input type="text" placeholder="Search by Amount" className="border border-gray-200 rounded px-3 py-1.5 text-sm outline-none focus:border-[#0d6efd]" />
          <select className="border border-gray-200 rounded px-3 py-1.5 text-sm outline-none focus:border-[#0d6efd] bg-white text-gray-500">
            <option value="">Select Status</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        
        <button className="bg-[#0d6efd] text-white px-5 py-1.5 rounded text-sm hover:bg-[#0b5ed7] transition-colors mb-8 shadow-sm">
          Search
        </button>

        <div className="text-[1.4rem] text-[#2b3a4a] font-normal">
          No Data Found
        </div>
      </div>
    </div>
  );
}
