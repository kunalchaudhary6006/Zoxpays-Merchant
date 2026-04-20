import React, { useState } from 'react';
import { useMerchant } from '../../context/MerchantContext';
import { QRCodeSVG } from 'qrcode.react';

export default function Recharge() {
  const { addRecharge } = useMerchant();
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('UPI');
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleProceed = () => {
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      alert("Please enter a valid recharge amount.");
      return;
    }
    setStep(2);
  };

  const handlePaymentConfirm = () => {
    setIsProcessing(true);
    // Simulate network delay for realistic "processing"
    setTimeout(() => {
      addRecharge(Number(amount), method);
      setIsProcessing(false);
      setStep(3);
    }, 2000);
  };

  const resetForm = () => {
    setAmount('');
    setStep(1);
  };

  return (
    <div className="w-full animate-in fade-in duration-300">
      <div className="mb-4">
        <h2 className="text-[#2b3a4a] text-[1.2rem] font-medium">Recharge</h2>
        <div className="text-[0.7rem] text-gray-400 mt-1">Home / Recharge</div>
      </div>
      <div className="bg-white border rounded shadow-sm p-6 max-w-3xl min-h-[60vh]">
        <h3 className="text-[#104e92] text-[0.95rem] font-medium mb-5">Account Recharge</h3>
        
        {step === 1 && (
          <div className="space-y-4 animate-in fade-in">
            <div>
              <label className="block text-sm text-[#4b5563] mb-1.5">Recharge Amount (¥)</label>
              <input 
                type="number" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount..." 
                className="w-full border border-gray-200 rounded px-3 py-2 text-sm text-gray-600 outline-none focus:border-[#0d6efd]" 
              />
            </div>
            <div>
              <label className="block text-sm text-[#4b5563] mb-1.5">Payment Method</label>
              <select 
                value={method}
                onChange={(e) => setMethod(e.target.value)}
                className="w-full border border-gray-200 rounded px-3 py-2 text-sm bg-white text-gray-600 outline-none focus:border-[#0d6efd]"
              >
                <option value="UPI">UPI (Unified Payments Interface)</option>
                <option value="Alipay">Alipay</option>
                <option value="WeChat Pay">WeChat Pay</option>
                <option value="Bank Transfer">Bank Transfer</option>
                <option value="USDT">USDT</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-[#4b5563] mb-1.5">Remarks (Optional)</label>
              <input type="text" placeholder="Note for the recharge..." className="w-full border border-gray-200 rounded px-3 py-2 text-sm text-gray-600 outline-none focus:border-[#0d6efd]" />
            </div>
            <button 
              onClick={handleProceed}
              className="mt-8 bg-[#0d6efd] text-white px-6 py-2 rounded text-sm hover:bg-[#0b5ed7] transition-colors shadow-sm font-medium"
            >
              Proceed to Pay
            </button>
          </div>
        )}

        {step === 2 && method === 'UPI' && (
          <div className="flex flex-col items-center justify-center py-8 animate-in slide-in-from-right-4">
            <h4 className="text-lg font-bold text-[#2b3a4a] mb-2">Scan to Pay via UPI</h4>
            <p className="text-gray-500 text-sm mb-6">Scan QR code using any UPI App (GPay, PhonePe, Paytm)</p>
            
            <div className="bg-white p-4 border rounded-xl shadow-sm mb-6">
               <QRCodeSVG 
                 value={`upi://pay?pa=aksoftmerchant@ybl&pn=AKsoft%20Merchant&am=${amount}&cu=INR`} 
                 size={200}
               />
            </div>
            
            <div className="bg-gray-50 border rounded w-full max-w-sm p-4 mb-6 text-center">
               <p className="text-sm text-gray-500 mb-1">UPI ID</p>
               <p className="font-mono font-medium text-[#104e92]">aksoftmerchant@ybl</p>
               <p className="text-sm text-gray-500 mt-3 mb-1">Amount to Pay</p>
               <p className="text-xl font-bold text-[#e13b3b]">¥ {Number(amount).toFixed(2)}</p>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={() => setStep(1)}
                className="bg-gray-100 text-gray-600 px-6 py-2 rounded text-sm hover:bg-gray-200 transition-colors font-medium"
              >
                Go Back
              </button>
              <button 
                onClick={handlePaymentConfirm}
                disabled={isProcessing}
                className="bg-[#198754] text-white px-8 py-2 rounded text-sm hover:bg-[#157347] transition-colors shadow-sm font-medium disabled:opacity-70 flex items-center gap-2"
              >
                {isProcessing ? 'Verifying Payment...' : 'I Have Paid'}
              </button>
            </div>
          </div>
        )}

        {/* Fallback for non-UPI methods just for demo completeness */}
        {step === 2 && method !== 'UPI' && (
           <div className="text-center py-10 animate-in fade-in">
             <h4 className="text-lg font-bold text-[#2b3a4a] mb-4">Transfer Instruction for {method}</h4>
             <p className="text-gray-600 mb-8">Please transfer ¥ {amount} to our official {method} account.</p>
             <button 
                onClick={handlePaymentConfirm}
                disabled={isProcessing}
                className="bg-[#198754] text-white px-8 py-2 rounded text-sm hover:bg-[#157347]"
              >
                {isProcessing ? 'Verifying...' : 'Confirm Transfer Complete'}
              </button>
           </div>
        )}

        {step === 3 && (
          <div className="flex flex-col items-center justify-center py-12 animate-in zoom-in-95">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
               <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h4 className="text-xl font-bold text-[#2b3a4a] mb-2">Recharge Successful</h4>
            <p className="text-gray-500 text-sm mb-6 text-center max-w-md">
              Your payment of ¥ {Number(amount).toFixed(2)} via {method} has been verified and added to your merchant balance.
            </p>
            <button 
              onClick={resetForm}
              className="bg-[#0d6efd] text-white px-6 py-2 rounded text-sm hover:bg-[#0b5ed7] transition-colors shadow-sm font-medium"
            >
              Make Another Recharge
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
