import React from 'react';

const mockAccounts = [
  { id: 991991319, email: '991991319', name: '991991319' },
  { id: 991991318, email: '991991318', name: '991991318' },
  { id: 991991317, email: '991991317', name: '991991317' },
  { id: 991991316, email: '991991316', name: '991991316' },
  { id: 991991315, email: '991991315', name: '991991315' },
  { id: 991991314, email: '991991314', name: '991991314' },
  { id: 991991313, email: '991991313', name: '991991313' },
  { id: 991991312, email: '991991312', name: '991991312' },
  { id: 991991311, email: '991991311', name: '991991311' },
  { id: 991991310, email: 'indianminer4u', name: '991991310' },
  { id: 991991309, email: 'usdtminer777', name: '991991309' }
];

export default function AdminAccounts() {
  return (
    <div className="w-full animate-in fade-in duration-300">
      <div className="mb-4">
        <h2 className="text-[#2b3a4a] text-[1.2rem] font-medium">Admin Accounts</h2>
        <div className="text-[0.7rem] text-gray-400 mt-1">Home / Admin Accounts</div>
      </div>

      <div className="bg-white border rounded shadow-sm p-6 overflow-x-auto min-h-[60vh]">
        <h3 className="text-[#104e92] text-[0.95rem] font-medium mb-5">Search Admin Accounts</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <input type="text" placeholder="Search by Name" className="border border-gray-200 rounded px-3 py-1.5 text-sm outline-none focus:border-[#0d6efd]" />
          <input type="text" placeholder="Search by Email" className="border border-gray-200 rounded px-3 py-1.5 text-sm outline-none focus:border-[#0d6efd]" />
          <select className="border border-gray-200 rounded px-3 py-1.5 text-sm outline-none focus:border-[#0d6efd] bg-white text-gray-500">
            <option value="">Select Status</option>
            <option value="active">Active</option>
          </select>
          <select className="border border-gray-200 rounded px-3 py-1.5 text-sm outline-none focus:border-[#0d6efd] bg-white text-gray-500">
            <option value="">Select Role</option>
            <option value="merchant">Merchant</option>
          </select>
        </div>
        
        <button className="bg-[#0d6efd] text-white px-5 py-1.5 rounded text-sm hover:bg-[#0b5ed7] transition-colors mb-6 shadow-sm">
          Search
        </button>

        <div className="min-w-[1000px]">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 text-[#212529]">
                <th className="py-3 px-2 font-bold">#</th>
                <th className="py-3 px-2 font-bold">Name</th>
                <th className="py-3 px-2 font-bold">Email</th>
                <th className="py-3 px-2 font-bold">Login Pass</th>
                <th className="py-3 px-2 font-bold leading-tight">Withdraw<br/>Pass</th>
                <th className="py-3 px-2 font-bold">Status</th>
                <th className="py-3 px-2 font-bold">Role</th>
                <th className="py-3 px-2 font-bold w-[220px]">Action</th>
              </tr>
            </thead>
            <tbody>
              {mockAccounts.map((acc, i) => (
                <tr key={i} className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="py-4 px-2 font-medium text-[#212529]">{acc.id}</td>
                  <td className="py-4 px-2 text-gray-600">{acc.name}</td>
                  <td className="py-4 px-2 text-gray-600">{acc.email}</td>
                  <td className="py-4 px-2 text-gray-600">123456</td>
                  <td className="py-4 px-2 text-gray-600">123456</td>
                  <td className="py-4 px-2">
                    <span className="bg-[#198754] text-white text-[0.7rem] px-2 py-0.5 rounded shadow-sm">Active</span>
                  </td>
                  <td className="py-4 px-2">
                    <span className="bg-[#ffc107] text-[#212529] text-[0.7rem] px-2 py-0.5 rounded shadow-sm">Merchant</span>
                  </td>
                  <td className="py-4 px-2">
                    <div className="flex flex-wrap gap-1">
                      <button className="border border-gray-300 text-gray-600 px-2 py-[2px] text-xs rounded hover:bg-gray-50 bg-white">View Ledger</button>
                      <button className="border border-gray-300 text-gray-600 px-2 py-[2px] text-xs rounded hover:bg-gray-50 bg-white">Edit</button>
                      <button className="border border-gray-300 text-gray-600 px-2 py-[2px] text-xs rounded hover:bg-gray-50 mt-[2px] bg-white">Gateway Settings</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
