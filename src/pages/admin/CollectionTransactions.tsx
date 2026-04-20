import React from 'react';

const mockData = [
  { id: 69304, amount: "999.00", paid: "", charge: "99.9", mOrder: "D20042026IEvZS01UlXi894V4", pOrder: "D20042026IEvZS01UlXi894V4" },
  { id: 69303, amount: "100", paid: "", charge: "11", mOrder: "D20042026r4hz1PanSd5R0Q8T", pOrder: "D20042026r4hz1PanSd5R0Q8T" },
  { id: 69302, amount: "100.00", paid: "", charge: "13", mOrder: "D20042026z4cRHaloSAaFbMhH", pOrder: "D20042026z4cRHaloSAaFbMhH" },
  { id: 69301, amount: "100", paid: "", charge: "9", mOrder: "D20042026Elpci9zl8EAodu1r", pOrder: "D20042026Elpci9zl8EAodu1r" },
  { id: 69300, amount: "548.90", paid: "", charge: "54.89", mOrder: "D20042026Z1uKkD5FSb6TyidN", pOrder: "D20042026Z1uKkD5FSb6TyidN" },
  { id: 69299, amount: "500.00", paid: "", charge: "45", mOrder: "D19042026pBBuizH5BCO8jQLE", pOrder: "D19042026pBBuizH5BCO8jQLE" },
  { id: 69298, amount: "200.00", paid: "", charge: "18", mOrder: "D19042026sGd27hA3KSx7PX82", pOrder: "D19042026sGd27hA3KSx7PX82" },
  { id: 69297, amount: "200.00", paid: "", charge: "18", mOrder: "D19042026roOFmwHTRcRgwBuq", pOrder: "D19042026roOFmwHTRcRgwBuq" },
  { id: 69296, amount: "999.00", paid: "", charge: "99.9", mOrder: "D19042026YWEqGj33AqVL0uEx", pOrder: "D19042026YWEqGj33AqVL0uEx" }
];

export default function CollectionTransactions() {
  return (
    <div className="w-full animate-in fade-in duration-300">
      <div className="mb-4">
        <h2 className="text-[#2b3a4a] text-[1.2rem] font-medium">Collection Transactions</h2>
        <div className="text-[0.7rem] text-gray-400 mt-1">Home / Collection Transactions</div>
      </div>

      <div className="bg-white border rounded shadow-sm p-6 overflow-x-auto min-h-[60vh]">
        <h3 className="text-[#104e92] text-[0.95rem] font-medium mb-5">Application Users Collection List</h3>
        
        <p className="text-sm text-[#2b3a4a] font-medium mb-3">Search using below filters</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <input type="text" placeholder="Search by Merchant ID" className="border border-gray-200 rounded px-3 py-1.5 text-sm outline-none focus:border-[#0d6efd]" />
          <input type="text" placeholder="Search by Order No" className="border border-gray-200 rounded px-3 py-1.5 text-sm outline-none focus:border-[#0d6efd]" />
          <input type="text" placeholder="Search by Amount" className="border border-gray-200 rounded px-3 py-1.5 text-sm outline-none focus:border-[#0d6efd]" />
          <select className="border border-gray-200 rounded px-3 py-1.5 text-sm outline-none focus:border-[#0d6efd] bg-white text-gray-500">
            <option value="">Select Status</option>
          </select>
        </div>
        
        <button className="bg-[#0d6efd] text-white px-5 py-1.5 rounded text-sm hover:bg-[#0b5ed7] transition-colors mb-6 shadow-sm">
          Search
        </button>

        <div className="min-w-[800px]">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 text-[#212529]">
                <th className="py-3 px-2 font-bold">#</th>
                <th className="py-3 px-2 font-bold">Amount</th>
                <th className="py-3 px-2 font-bold">Paid</th>
                <th className="py-3 px-2 font-bold">Charge</th>
                <th className="py-3 px-2 font-bold">Merchant Order No</th>
                <th className="py-3 px-2 font-bold">Platform Order No</th>
              </tr>
            </thead>
            <tbody>
              {mockData.map((row, i) => (
                <tr key={i} className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="py-3 px-2 text-gray-600 font-medium">{row.id}</td>
                  <td className="py-3 px-2 text-gray-600">{row.amount}</td>
                  <td className="py-3 px-2 text-gray-600">{row.paid}</td>
                  <td className="py-3 px-2 text-gray-600">{row.charge}</td>
                  <td className="py-3 px-2 text-gray-600">{row.mOrder}</td>
                  <td className="py-3 px-2 text-gray-600">{row.pOrder}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
