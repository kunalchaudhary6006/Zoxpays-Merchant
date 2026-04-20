import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Menu, User, ChevronRight } from 'lucide-react';
import WithdrawTransactions from './admin/WithdrawTransactions';
import CollectionTransactions from './admin/CollectionTransactions';
import AdminAccounts from './admin/AdminAccounts';
import CreateMerchant from './admin/CreateMerchant';
import Withdrawal from './admin/Withdrawal';
import Recharge from './admin/Recharge';
import WithdrawalRequest from './admin/WithdrawalRequest';
import Document from './admin/Document';
import BankStatement from './admin/BankStatement';
import BankWithdrawalRequest from './admin/BankWithdrawalRequest';
import LoginPasswordChange from './admin/LoginPasswordChange';
import WithdrawalPasswordChange from './admin/WithdrawalPasswordChange';

export default function Dashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('withdraw');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Map active tab to component
  const renderContent = () => {
    switch (activeTab) {
      case 'withdraw': return <WithdrawTransactions />;
      case 'collection': return <CollectionTransactions />;
      case 'accounts': return <AdminAccounts />;
      case 'create_merchant': return <CreateMerchant />;
      case 'withdrawal_new': return <Withdrawal />;
      case 'recharge': return <Recharge />;
      case 'withdrawal_request': return <WithdrawalRequest />;
      case 'document': return <Document />;
      case 'bank_statement': return <BankStatement />;
      case 'bank_withdrawal_request': return <BankWithdrawalRequest />;
      case 'change_login_password': return <LoginPasswordChange />;
      case 'change_withdrawal_password': return <WithdrawalPasswordChange />;
      default: return <WithdrawTransactions />;
    }
  };

  const menuItems = [
    { id: 'withdraw', label: 'Withdraw Transactions' },
    { id: 'collection', label: 'Collection Transactions' },
    { id: 'accounts', label: 'Admin Accounts' },
    { id: 'create_merchant', label: 'Create with PG Settings' },
    { id: 'withdrawal_new', label: 'Withdrawal' },
    { id: 'recharge', label: 'Recharge' },
    { id: 'withdrawal_request', label: 'Withdrawal Requests' },
    { id: 'document', label: 'API Documents' },
    { id: 'bank_statement', label: 'Bank Statement' },
    { id: 'bank_withdrawal_request', label: 'Bank Withdrawal Request' },
    { id: 'change_login_password', label: 'Update Login Password' },
    { id: 'change_withdrawal_password', label: 'Update Withdraw Password' }
  ];

  return (
    <div className="min-h-screen bg-[#f4f7fc] text-[#333] font-sans flex flex-col">
      {/* Top Navbar */}
      <header className="h-14 bg-white shadow-sm flex items-center justify-between px-4 z-20 relative">
        <div className="flex items-center space-x-6">
          <div className="text-[1.3rem] font-bold tracking-tight select-none">
            <span className="text-[#e13b3b]">A</span><span className="italic mr-[1px]">K</span><span className="font-medium text-[#111]">soft</span>
          </div>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-500 hover:text-[#0d6efd] transition-colors"
          >
            <Menu className="w-[22px] h-[22px] stroke-[2]" />
          </button>
        </div>
        
        <div className="flex items-center">
          <button className="text-gray-400 hover:text-[#0d6efd] transition-colors" title="Profile">
            <User className="w-[18px] h-[18px] stroke-[2]" />
          </button>
        </div>
      </header>

      {/* Main Body */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Sidebar Nav */}
        <aside 
          className={`${sidebarOpen ? 'w-64 translate-x-0' : 'w-0 -translate-x-full'} transition-all duration-300 ease-in-out bg-[#2b3a4a] text-white overflow-y-auto shrink-0 z-10 flex flex-col`}
        >
          <div className="py-4">
            <div className="px-5 text-xs text-gray-400 font-semibold mb-2 uppercase tracking-wide">Menu</div>
            <nav className="flex flex-col">
              {menuItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center justify-between px-5 py-3 text-[0.85rem] transition-colors ${
                    activeTab === item.id 
                      ? 'bg-[#104e92] text-white border-l-4 border-[#0d6efd]' 
                      : 'text-gray-300 hover:bg-[#1a2836] border-l-4 border-transparent'
                  }`}
                >
                  {item.label}
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>
              ))}
            </nav>
          </div>
          
          <div className="mt-auto p-4">
            <button 
              onClick={() => navigate('/')} 
              className="w-full text-left px-5 py-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              Sign Out
            </button>
          </div>
        </aside>

        {/* Dynamic Content Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 flex flex-col">
          <div className="flex-1">
            {renderContent()}
          </div>
          
          {/* Footer exactly as requested */}
          <footer className="mt-12 text-center text-[0.65rem] text-[#6c757d]">
            <p>© Copyright <span className="font-bold font-sans">zoxpays Admin</span>. All Rights Reserved</p>
            <p>Secured By zoxpays Admin</p>
          </footer>
        </main>

      </div>
    </div>
  );
}
