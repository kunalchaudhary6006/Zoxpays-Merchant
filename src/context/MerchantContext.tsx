import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Transaction = {
  id: string;
  type: 'withdrawal' | 'recharge' | 'collection';
  amount: number;
  status: 'Pending' | 'Completed' | 'Rejected' | 'Processing';
  date: string;
  method: string;
};

interface MerchantContextType {
  balance: number;
  transactions: Transaction[];
  addRecharge: (amount: number, method: string) => void;
  requestWithdrawal: (amount: number, method: string, details: string) => void;
  approveWithdrawal: (id: string) => void;
  rejectWithdrawal: (id: string) => void;
}

const MerchantContext = createContext<MerchantContextType | undefined>(undefined);

export const MerchantProvider = ({ children }: { children: ReactNode }) => {
  const [balance, setBalance] = useState(85240.50);
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 'REQ-83921', type: 'withdrawal', amount: 5000, status: 'Pending', date: new Date().toISOString().split('T')[0], method: 'Bank Transfer' }
  ]);

  const addRecharge = (amount: number, method: string) => {
    setBalance(prev => prev + amount);
    setTransactions(prev => [{
      id: `REC-${Math.floor(Math.random() * 100000)}`,
      type: 'recharge',
      amount,
      status: 'Completed',
      date: new Date().toISOString().split('T')[0],
      method
    }, ...prev]);
  };

  const requestWithdrawal = (amount: number, method: string, details: string) => {
    if (balance >= amount) {
      setBalance(prev => prev - amount);
      setTransactions(prev => [{
        id: `REQ-${Math.floor(Math.random() * 100000)}`,
        type: 'withdrawal',
        amount,
        status: 'Pending',
        date: new Date().toISOString().split('T')[0],
        method
      }, ...prev]);
    } else {
      throw new Error("Insufficient Available Balance");
    }
  };

  const approveWithdrawal = (id: string) => {
    setTransactions(prev => prev.map(t => t.id === id ? { ...t, status: 'Completed' } : t));
  };

  const rejectWithdrawal = (id: string) => {
    setTransactions(prev => {
      const tx = prev.find(t => t.id === id);
      if (tx && tx.status === 'Pending') {
        setBalance(b => b + tx.amount);
        return prev.map(t => t.id === id ? { ...t, status: 'Rejected' } : t);
      }
      return prev;
    });
  };

  return (
    <MerchantContext.Provider value={{ balance, transactions, addRecharge, requestWithdrawal, approveWithdrawal, rejectWithdrawal }}>
      {children}
    </MerchantContext.Provider>
  );
};

export const useMerchant = () => {
  const context = useContext(MerchantContext);
  if (!context) throw new Error("useMerchant must be used within MerchantProvider");
  return context;
};
