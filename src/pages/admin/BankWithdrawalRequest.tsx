import React from 'react';

export default function BankWithdrawalRequest() {
  return (
    <div className="w-full animate-in fade-in duration-300">
      <div className="mb-4">
        <h2 className="text-[#2b3a4a] text-[1.2rem] font-medium">Bank Withdrawal Requests</h2>
        <div className="text-[0.7rem] text-gray-400 mt-1">Home / Bank Withdrawal Requests</div>
      </div>

      <div className="bg-white border rounded shadow-sm p-6 overflow-x-auto min-h-[60vh]">
        <h3 className="text-[#104e92] text-[0.95rem] font-medium mb-5">Manage Bank Payouts</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <input type="text" placeholder="Search by Merchant ID" className="border border-gray-200 rounded px-3 py-1.5 text-sm outline-none focus:border-[#0d6efd]" />
          <input type="text" placeholder="Search by Bank Account" className="border border-gray-200 rounded px-3 py-1.5 text-sm outline-none focus:border-[#0d6efd]" />
          <select className="border border-gray-200 rounded px-3 py-1.5 text-sm outline-none focus:border-[#0d6efd] bg-white text-gray-500">
            <option value="">Select Status</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
        
        <button className="bg-[#0d6efd] text-white px-5 py-1.5 rounded text-sm hover:bg-[#0b5ed7] transition-colors mb-6 shadow-sm">
          Search
        </button>

        <div className="min-w-[900px]">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 text-[#212529]">
                <th className="py-3 px-2 font-bold">Request ID</th>
                <th className="py-3 px-2 font-bold">Bank Name</th>
                <th className="py-3 px-2 font-bold">Account Name</th>
                <th className="py-3 px-2 font-bold">Account Number</th>
                <th className="py-3 px-2 font-bold">Amount</th>
                <th className="py-3 px-2 font-bold">Status</th>
                <th className="py-3 px-2 font-bold">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                <td className="py-3 px-2 text-gray-600">B-REQ-001</td>
                <td className="py-3 px-2 text-gray-600">ICBC Bank</td>
                <td className="py-3 px-2 text-gray-600">Test Merchant Ltd</td>
                <td className="py-3 px-2 text-gray-600">**** **** **** 8821</td>
                <td className="py-3 px-2 text-gray-600 font-medium">¥ 15,000.00</td>
                <td className="py-3 px-2">
                   <span className="bg-[#ffc107] text-[#212529] text-[0.7rem] px-2 py-0.5 rounded shadow-sm">Pending</span>
                </td>
                <td className="py-3 px-2 text-gray-600 flex gap-2">
                  <button className="bg-[#198754] text-white px-2 py-1 rounded text-xs hover:bg-green-700">Process</button>
                  <button className="bg-[#dc3545] text-white px-2 py-1 rounded text-xs hover:bg-red-700">Deny</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
