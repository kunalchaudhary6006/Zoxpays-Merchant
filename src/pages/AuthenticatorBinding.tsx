import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { QRCodeSVG } from 'qrcode.react';
import * as OTPAuth from 'otpauth';

export default function AuthenticatorBinding() {
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const [errorText, setErrorText] = useState('');

  // Use useMemo to generate/load a persistent secret for the session
  const totp = useMemo(() => {
    let secretStr = localStorage.getItem('zoxpays_mock_totp_secret');
    let secret;
    if (secretStr) {
      secret = OTPAuth.Secret.fromBase32(secretStr);
    } else {
      secret = new OTPAuth.Secret({ size: 20 });
      localStorage.setItem('zoxpays_mock_totp_secret', secret.base32);
    }
    
    return new OTPAuth.TOTP({
      issuer: 'zoxpays',
      label: 'TestMerchant',
      algorithm: 'SHA1',
      digits: 6,
      period: 30,
      secret: secret
    });
  }, []);

  const handleVerify = () => {
    setErrorText('');
    
    // Validate the token (window: 1 allows +/- 30 seconds to account for slight clock drift)
    const isValid = totp.validate({ token: code, window: 1 });
    
    if (isValid !== null) {
      navigate('/dashboard');
    } else {
      setErrorText('Invalid verification code. Please try again.');
    }
  };

  const otpauthUrl = totp.toString();

  return (
    <div className="min-h-screen bg-[#1c1d22] flex flex-col items-center justify-center p-4 font-arial">
      <div className="bg-white w-full max-w-3xl rounded-[4px] overflow-hidden">
        {/* Header */}
        <div className="py-4 text-center border-b border-gray-200">
          <h1 className="text-xl text-gray-800 tracking-wide font-normal">Google Authenticator Binding</h1>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-[#333] text-[15px] mb-4">
            Please use your Google Authenticator to scan the following QR code:
          </p>

          <div className="inline-block p-1 border border-gray-200 rounded-[4px] mb-8 bg-white">
            <QRCodeSVG value={otpauthUrl} size={160} />
          </div>

          <hr className="border-gray-200 mb-6" />

          <p className="text-[#333] text-[15px] mb-3">
            Please enter the verification code.
          </p>

          <input
            type="text"
            className="w-full h-10 border border-gray-300 rounded-[4px] px-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 mb-2"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              if (errorText) setErrorText('');
            }}
            placeholder="6-digit code"
            maxLength={6}
          />
          
          {errorText && (
            <p className="text-red-500 text-sm mb-4">{errorText}</p>
          )}

          <div className={!errorText ? "mt-4" : ""}>
            <button
              onClick={handleVerify}
              className="bg-[#0066ff] hover:bg-blue-600 text-white px-6 py-2 rounded-[4px] text-[15px] transition-colors"
            >
              verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
