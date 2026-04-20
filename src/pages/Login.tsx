import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { User, Lock, KeyRound, ShieldAlert } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [merchantNo, setMerchantNo] = useState('');
  const [password, setPassword] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [googleCode, setGoogleCode] = useState('');
  const [captchaValue, setCaptchaValue] = useState('');
  const [toastMsg, setToastMsg] = useState('');

  const generateCaptcha = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let captcha = '';
    for (let i = 0; i < 4; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setCaptchaValue(captcha);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg('');
    }, 3000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (captchaInput !== captchaValue) {
      showToast('验证码错误：您输入的验证码不正确！');
      generateCaptcha();
      return;
    }
    
    if (merchantNo && password) {
      navigate('/auth-bind');
    } else {
      showToast('Please enter credentials');
    }
  };

  return (
    <div 
      className="min-h-screen w-full flex justify-center items-center p-5 box-border font-arial"
      style={{
        backgroundImage: 'linear-gradient(to right bottom, #dfe9f3, #ffffff)', // fallback background
        // Real site uses url("/assets/wkweb/images/bg.jpg"), we use a pleasant light gradient overlay
      }}
    >
      <div className="w-full max-w-[400px] p-5 bg-white/80 rounded-[10px] shadow-[0px_4px_12px_rgba(0,0,0,0.1)] text-center box-border relative backdrop-blur-sm">
        <div className="text-[#333] font-bold text-[40px] mb-[20px]">
          <span>zoxpays</span>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-[20px]">
          {/* Merchant No */}
          <div className="relative">
            <User className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a78369] w-6 h-6 z-10" />
            <input 
              type="text" 
              placeholder="商户号" 
              value={merchantNo}
              onChange={(e) => setMerchantNo(e.target.value)}
              className="w-full h-[50px] border border-[#a78369] rounded-[5px] text-[16px] px-3 pr-[40px] bg-transparent outline-none placeholder:text-[#a78369]/70 focus:border-[#d8b29f]"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a78369] w-6 h-6 z-10" />
            <input 
              type="password" 
              placeholder="登录密码" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-[50px] border border-[#a78369] rounded-[5px] text-[16px] px-3 pr-[40px] bg-transparent outline-none placeholder:text-[#a78369]/70 focus:border-[#d8b29f]"
              required
            />
          </div>

          {/* Captcha */}
          <div className="relative flex items-center">
            <ShieldAlert className="absolute right-[110px] top-1/2 -translate-y-1/2 text-[#a78369] w-6 h-6 z-10 pointer-events-none" />
            <input 
              type="text" 
              placeholder="验证码" 
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              className="w-full h-[50px] border border-[#a78369] rounded-[5px] text-[16px] px-3 pr-[140px] bg-transparent outline-none placeholder:text-[#a78369]/70 focus:border-[#d8b29f]"
              required
            />
            <div 
              onClick={generateCaptcha} 
              className="absolute right-[10px] top-1/2 -translate-y-1/2 cursor-pointer w-[90px] h-[30px] bg-gray-500 flex items-center justify-center rounded-[3px]"
            >
              <span className="font-arial text-[16px] font-bold text-black tracking-[4px]">{captchaValue}</span>
            </div>
          </div>

          {/* Google Code */}
          <div className="relative">
            <KeyRound className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a78369] w-6 h-6 z-10" />
            <input 
              type="text" 
              placeholder="6位谷歌验证码" 
              value={googleCode}
              onChange={(e) => setGoogleCode(e.target.value)}
              className="w-full h-[50px] border border-[#a78369] rounded-[5px] text-[16px] px-3 pr-[40px] bg-transparent outline-none placeholder:text-[#a78369]/70 focus:border-[#d8b29f]"
              required
            />
          </div>            
          
          <button 
            type="submit" 
            className="w-full h-[50px] mt-[20px] bg-[#a78369] border border-[#d8b29f] rounded-[5px] text-white font-bold text-[18px] hover:bg-[#8f6d53] transition-colors"
          >
            登录
          </button>
        </form>
      </div>

      {/* Toast */}
      <div 
        className={`fixed bottom-5 left-1/2 -translate-x-1/2 bg-black/70 text-white px-5 py-3 rounded-lg text-[16px] font-arial transition-all duration-500 ${toastMsg ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        {toastMsg}
      </div>
    </div>
  );
}
