import React from 'react';

export default function WithdrawalPasswordChange() {
  return (
    <div className="w-full animate-in fade-in duration-300">
      <div className="mb-4">
        <h2 className="text-[#2b3a4a] text-[1.2rem] font-medium">Update Withdrawal Password</h2>
        <div className="text-[0.7rem] text-gray-400 mt-1">Home / Account Settings / Update Withdrawal Password</div>
      </div>

      <div className="bg-white border rounded shadow-sm p-6 max-w-2xl min-h-[60vh]">
        <h3 className="text-[#104e92] text-[0.95rem] font-medium mb-5">Change Your Fund/Withdrawal Password</h3>
        
        <p className="text-sm text-gray-500 mb-6 bg-red-50 p-3 rounded border border-red-100">
          <strong>Security Notice:</strong> Your withdrawal password is required to approve outgoing funds. Do not share this with anyone.
        </p>

        <div className="space-y-5">
          <div>
            <label className="block text-sm text-[#4b5563] mb-1.5 font-medium">Current Withdrawal Password</label>
            <input 
              type="password" 
              placeholder="Enter current withdrawal password" 
              className="w-full border border-gray-200 rounded px-3 py-2 text-sm text-gray-600 outline-none focus:border-[#0d6efd]" 
            />
          </div>
          <div className="border-t border-gray-100 pt-4">
            <label className="block text-sm text-[#4b5563] mb-1.5 font-medium">New Withdrawal Password</label>
            <input 
              type="password" 
              placeholder="Enter new withdrawal password" 
              className="w-full border border-gray-200 rounded px-3 py-2 text-sm text-gray-600 outline-none focus:border-[#0d6efd]" 
            />
            <p className="text-xs text-gray-400 mt-1">This should be different from your login password.</p>
          </div>
          <div>
            <label className="block text-sm text-[#4b5563] mb-1.5 font-medium">Confirm New Withdrawal Password</label>
            <input 
              type="password" 
              placeholder="Re-enter new withdrawal password" 
              className="w-full border border-gray-200 rounded px-3 py-2 text-sm text-gray-600 outline-none focus:border-[#0d6efd]" 
            />
          </div>
        </div>

        <button className="mt-8 bg-[#0d6efd] text-white px-6 py-2 rounded text-sm hover:bg-[#0b5ed7] transition-colors shadow-sm font-medium">
          Update Withdrawal Password
        </button>
      </div>
    </div>
  );
}
