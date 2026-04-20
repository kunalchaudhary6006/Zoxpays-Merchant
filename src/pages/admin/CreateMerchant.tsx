import React from 'react';

export default function CreateMerchant() {
  return (
    <div className="w-full animate-in fade-in duration-300">
      <div className="mb-4">
        <h2 className="text-[#2b3a4a] text-[1.2rem] font-medium">Create a New Merchant with PG Setting</h2>
        <div className="text-[0.7rem] text-gray-400 mt-1">Home / Merchant / Create with PG settings</div>
      </div>

      <div className="bg-white border rounded shadow-sm p-6 max-w-5xl">
        {/* Top Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-10">
          
          <div className="flex items-center">
            <label className="w-32 lg:w-40 text-sm text-[#4b5563]">Merchant/Admin ID</label>
            <input type="text" placeholder="Keep Same as username" className="flex-1 border border-gray-200 rounded px-3 py-1.5 text-sm text-gray-600 outline-none focus:border-[#0d6efd]" />
          </div>
          
          <div className="hidden md:block"></div>
          
          <div className="flex items-center">
            <label className="w-32 lg:w-40 text-sm text-[#4b5563]">Login Server</label>
            <input type="text" placeholder="Enter login password" className="flex-1 border border-gray-200 rounded px-3 py-1.5 text-sm text-gray-600 outline-none focus:border-[#0d6efd]" />
          </div>
          <div className="flex items-center">
            <label className="w-32 lg:w-40 text-sm text-[#4b5563]">Withdraw Password</label>
            <input type="text" placeholder="Enter withdraw password" className="flex-1 border border-gray-200 rounded px-3 py-1.5 text-sm text-gray-600 outline-none focus:border-[#0d6efd]" />
          </div>

          <div className="flex items-center">
            <label className="w-32 lg:w-40 text-sm text-[#4b5563]">Role</label>
            <select className="flex-1 border border-gray-200 rounded px-3 py-1.5 text-sm bg-white text-gray-600 outline-none focus:border-[#0d6efd]">
              <option>User</option>
              <option>Merchant</option>
            </select>
          </div>
          <div className="flex items-center">
            <label className="w-32 lg:w-40 text-sm text-[#4b5563]">Account Status</label>
            <select className="flex-1 border border-gray-200 rounded px-3 py-1.5 text-sm bg-white text-gray-600 outline-none focus:border-[#0d6efd]">
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>

        <h3 className="text-[1.3rem] text-[#2b3a4a] font-normal mb-5">Gateway Settings</h3>
        
        <div className="space-y-4 max-w-4xl">
           <div>
             <label className="block text-sm text-[#4b5563] mb-1.5">Api key</label>
             <input type="text" defaultValue="4logxdcitsv5em796y82" className="w-full border border-gray-200 rounded px-3 py-1.5 text-sm text-gray-600 outline-none focus:border-[#0d6efd]" />
           </div>
           <div>
             <label className="block text-sm text-[#4b5563] mb-1.5">Withdraw key</label>
             <input type="text" defaultValue="CGR0FUW6J3TNKMA" className="w-full border border-gray-200 rounded px-3 py-1.5 text-sm text-gray-600 outline-none focus:border-[#0d6efd]" />
           </div>
           <div>
             <label className="block text-sm text-[#4b5563] mb-1.5">Alloted channel collection</label>
             <input type="text" defaultValue="101" className="w-full border border-gray-200 rounded px-3 py-1.5 text-sm text-gray-600 outline-none focus:border-[#0d6efd]" />
           </div>
           <div>
             <label className="block text-sm text-[#4b5563] mb-1.5">Alloted withdraw collection</label>
             <input type="text" defaultValue="101" className="w-full border border-gray-200 rounded px-3 py-1.5 text-sm text-gray-600 outline-none focus:border-[#0d6efd]" />
           </div>
           <div>
             <label className="block text-sm text-[#4b5563] mb-1.5">Email</label>
             <input type="email" defaultValue="merchant@woompays.com" className="w-full border border-gray-200 rounded px-3 py-1.5 text-sm text-gray-600 outline-none focus:border-[#0d6efd]" />
           </div>
           <div>
             <label className="block text-sm text-[#4b5563] mb-1.5">Collection tax</label>
             <input type="text" defaultValue="10" className="w-full border border-gray-200 rounded px-3 py-1.5 text-sm text-gray-600 outline-none focus:border-[#0d6efd]" />
           </div>
           <div>
             <label className="block text-sm text-[#4b5563] mb-1.5">Withdraw tax</label>
             <input type="text" defaultValue="4" className="w-full border border-gray-200 rounded px-3 py-1.5 text-sm text-gray-600 outline-none focus:border-[#0d6efd]" />
           </div>
           <div>
             <label className="block text-sm text-[#4b5563] mb-1.5">Withdraw fix amount</label>
             <input type="text" defaultValue="6" className="w-full border border-gray-200 rounded px-3 py-1.5 text-sm text-gray-600 outline-none focus:border-[#0d6efd]" />
           </div>
           <div>
             <label className="block text-sm text-[#4b5563] mb-1.5">Withdraw ip whitelist</label>
             <input type="text" defaultValue="103.124.172.21," className="w-full border border-gray-200 rounded px-3 py-1.5 text-sm text-gray-600 outline-none focus:border-[#0d6efd]" />
           </div>
           <div>
             <label className="block text-sm text-[#4b5563] mb-1.5">Status</label>
             <input type="text" defaultValue="1" className="w-full border border-gray-200 rounded px-3 py-1.5 text-sm text-gray-600 outline-none focus:border-[#0d6efd]" />
           </div>
        </div>

        <button className="mt-8 bg-[#0d6efd] text-white px-5 py-1.5 rounded text-sm hover:bg-[#0b5ed7] transition-colors shadow-sm">
          Save Changes
        </button>
      </div>
    </div>
  );
}
