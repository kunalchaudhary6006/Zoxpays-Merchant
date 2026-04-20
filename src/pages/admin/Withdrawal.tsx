import React, { useState } from 'react';
import { useMerchant } from '../../context/MerchantContext';

export default function Withdrawal() {
  const { balance, requestWithdrawal } = useMerchant();
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('Bank Transfer');
  const [details, setDetails] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = () => {
    setError('');
    setSuccess('');
    
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      setError("Please enter a valid numeric amount.");
      return;
    }
    
    if (!details) {
      setError("Please provide account/address details.");
      return;
    }

    try {
      requestWithdrawal(Number(amount), method, details);
      setSuccess(`Successfully requested withdrawal of ¥ ${Number(amount).toFixed(2)}`);
      setAmount('');
      setDetails('');
    } catch (err: any) {
      setError(err.message || 'Error processing withdrawal');
    }
  };

  return (
    <div className="w-full animate-in fade-in duration-300">
      <div className="mb-4">
        <h2 className="text-[#2b3a4a] text-[1.2rem] font-medium">Withdrawal</h2>
        <div className="text-[0.7rem] text-gray-400 mt-1">Home / Withdrawal</div>
      </div>
      <div className="bg-white border rounded shadow-sm p-6 max-w-3xl min-h-[60vh]">
        <h3 className="text-[#104e92] text-[0.95rem] font-medium mb-5">Initiate a Withdrawal</h3>
        
        {error && <div className="mb-4 bg-red-50 text-red-600 px-4 py-2 rounded text-sm border border-red-100">{error}</div>}
        {success && <div className="mb-4 bg-green-50 text-green-700 px-4 py-2 rounded text-sm border border-green-100">{success}</div>}

        <div className="space-y-4">
          <div className="bg-gray-50 border rounded p-4 mb-6">
            <label className="block text-xs uppercase tracking-wide text-[#6c757d] mb-1">Available Balance</label>
            <div className="text-2xl font-bold text-[#e13b3b]">¥ {balance.toFixed(2)}</div>
          </div>

          <div>
            <label className="block text-sm text-[#4b5563] mb-1.5">Withdrawal Amount (¥)</label>
            <input 
              type="number" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount..." 
              className="w-full border border-gray-200 rounded px-3 py-2 text-sm text-gray-600 outline-none focus:border-[#0d6efd]" 
            />
          </div>
          <div>
            <label className="block text-sm text-[#4b5563] mb-1.5">Withdrawal Method</label>
            <select 
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              className="w-full border border-gray-200 rounded px-3 py-2 text-sm bg-white text-gray-600 outline-none focus:border-[#0d6efd]"
            >
              <option value="Bank Transfer">Bank Transfer</option>
              <option value="USDT-TRC20">USDT-TRC20</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-[#4b5563] mb-1.5">Account / Address Details</label>
            <input 
              type="text" 
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Enter account details..." 
              className="w-full border border-gray-200 rounded px-3 py-2 text-sm text-gray-600 outline-none focus:border-[#0d6efd]" 
            />
          </div>
        </div>
        <button 
          onClick={handleSubmit}
          className="mt-8 bg-[#0d6efd] text-white px-8 py-2 rounded text-sm hover:bg-[#0b5ed7] transition-colors shadow-sm font-medium"
        >
          Submit Withdrawal
        </button>
      </div>
    </div>
  );
}
