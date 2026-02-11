import React, { createContext, useContext, useState, ReactNode } from 'react';

interface WalletContextType {
  isConnected: boolean;
  address: string | null;
  balance: string;
  connect: () => void;
  disconnect: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};

interface WalletProviderProps {
  children: ReactNode;
}

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState('0.00');

  const connect = () => {
    // Simulate wallet connection
    setIsConnected(true);
    setAddress('0x1234...5678');
    setBalance('1,234.56');
    
    // In a real app, this would connect to MetaMask, WalletConnect, etc.
    console.log('Wallet connected (simulated)');
  };

  const disconnect = () => {
    setIsConnected(false);
    setAddress(null);
    setBalance('0.00');
    console.log('Wallet disconnected');
  };

  return (
    <WalletContext.Provider
      value={{
        isConnected,
        address,
        balance,
        connect,
        disconnect,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};