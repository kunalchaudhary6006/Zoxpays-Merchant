import React from 'react';

export default function Document() {
  return (
    <div className="w-full animate-in fade-in duration-300">
      <div className="mb-4">
        <h2 className="text-[#2b3a4a] text-[1.2rem] font-medium">API Documents</h2>
        <div className="text-[0.7rem] text-gray-400 mt-1">Home / Documents</div>
      </div>

      <div className="bg-white border rounded shadow-sm p-6 min-h-[60vh] text-[#333]">
        <h3 className="text-[#104e92] text-[1.1rem] font-bold mb-4">Integration Guide</h3>
        
        <div className="space-y-6">
          <div className="border border-gray-200 rounded p-4">
            <h4 className="font-bold mb-2">1. Base URL</h4>
            <code className="bg-gray-100 text-[#e13b3b] px-2 py-1 rounded text-sm">https://api.merchant.zoxpays.com/v1/</code>
          </div>

          <div className="border border-gray-200 rounded p-4">
            <h4 className="font-bold mb-2">2. Authentication</h4>
            <p className="text-sm text-gray-600 mb-2">Include your API Key and Secret in the header of every request.</p>
            <pre className="bg-[#f8f9fa] p-3 rounded text-xs border border-gray-200 overflow-x-auto text-gray-700">
{`Header:
{
  "X-API-Key": "your_api_key",
  "X-API-Secret": "your_api_secret"
}`}
            </pre>
          </div>

          <div className="border border-gray-200 rounded p-4">
            <h4 className="font-bold mb-2">3. Create Order Endpoint</h4>
            <p className="text-sm text-gray-600 mb-2">POST <code>/order/create</code></p>
            <pre className="bg-[#f8f9fa] p-3 rounded text-xs border border-gray-200 overflow-x-auto text-gray-700">
{`Request Body:
{
  "mchOrderNo": "D200420...",
  "amount": 100.00,
  "currency": "CNY",
  "notifyUrl": "https://yourdomain.com/callback"
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
