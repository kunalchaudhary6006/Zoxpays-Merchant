import React from 'react';

export default function LoginPasswordChange() {
  return (
    <div className="w-full animate-in fade-in duration-300">
      <div className="mb-4">
        <h2 className="text-[#2b3a4a] text-[1.2rem] font-medium">Update Login Password</h2>
        <div className="text-[0.7rem] text-gray-400 mt-1">Home / Account Settings / Update Login Password</div>
      </div>

      <div className="bg-white border rounded shadow-sm p-6 max-w-2xl min-h-[60vh]">
        <h3 className="text-[#104e92] text-[0.95rem] font-medium mb-5">Change Your Account Login Password</h3>
        
        <div className="space-y-5">
          <div>
            <label className="block text-sm text-[#4b5563] mb-1.5 font-medium">Current Login Password</label>
            <input 
              type="password" 
              placeholder="Enter current password" 
              className="w-full border border-gray-200 rounded px-3 py-2 text-sm text-gray-600 outline-none focus:border-[#0d6efd]" 
            />
          </div>
          <div className="border-t border-gray-100 pt-4">
            <label className="block text-sm text-[#4b5563] mb-1.5 font-medium">New Login Password</label>
            <input 
              type="password" 
              placeholder="Enter new password" 
              className="w-full border border-gray-200 rounded px-3 py-2 text-sm text-gray-600 outline-none focus:border-[#0d6efd]" 
            />
            <p className="text-xs text-gray-400 mt-1">Password must be at least 8 characters long.</p>
          </div>
          <div>
            <label className="block text-sm text-[#4b5563] mb-1.5 font-medium">Confirm New Login Password</label>
            <input 
              type="password" 
              placeholder="Re-enter new password" 
              className="w-full border border-gray-200 rounded px-3 py-2 text-sm text-gray-600 outline-none focus:border-[#0d6efd]" 
            />
          </div>
        </div>

        <button className="mt-8 bg-[#0d6efd] text-white px-6 py-2 rounded text-sm hover:bg-[#0b5ed7] transition-colors shadow-sm font-medium">
          Save Changes
        </button>
      </div>
    </div>
  );
}
