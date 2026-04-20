import React from 'react';

export default function Recharge() {
  return (
    <div className="w-full animate-in fade-in duration-300">
      <div className="mb-4">
        <h2 className="text-[#2b3a4a] text-[1.2rem] font-medium">Recharge</h2>
        <div className="text-[0.7rem] text-gray-400 mt-1">Home / Recharge</div>
      </div>
      <div className="bg-white border rounded shadow-sm p-6 max-w-3xl min-h-[60vh]">
        <h3 className="text-[#104e92] text-[0.95rem] font-medium mb-5">Account Recharge</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-[#4b5563] mb-1.5">Recharge Amount</label>
            <input type="text" placeholder="Enter amount..." className="w-full border border-gray-200 rounded px-3 py-1.5 text-sm text-gray-600 outline-none focus:border-[#0d6efd]" />
          </div>
          <div>
            <label className="block text-sm text-[#4b5563] mb-1.5">Payment Method</label>
            <select className="w-full border border-gray-200 rounded px-3 py-1.5 text-sm bg-white text-gray-600 outline-none focus:border-[#0d6efd]">
              <option>Alipay</option>
              <option>WeChat Pay</option>
              <option>Bank Transfer</option>
              <option>USDT</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-[#4b5563] mb-1.5">Remarks (Optional)</label>
            <input type="text" placeholder="Note for the recharge..." className="w-full border border-gray-200 rounded px-3 py-1.5 text-sm text-gray-600 outline-none focus:border-[#0d6efd]" />
          </div>
        </div>
        <button className="mt-8 bg-[#0d6efd] text-white px-5 py-1.5 rounded text-sm hover:bg-[#0b5ed7] transition-colors shadow-sm">
          Proceed to Pay
        </button>
      </div>
    </div>
  );
}
