import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface WalletContextType {
  isConnected: boolean;
  address: string | null;
  chainId: number | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  isLoading: boolean;
  error: string | null;
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
  const [chainId, setChainId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check if wallet was previously connected
  useEffect(() => {
    const savedAddress = localStorage.getItem('walletAddress');
    if (savedAddress) {
      setAddress(savedAddress);
      setIsConnected(true);
    }
  }, []);

  const connectWallet = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Check if Ethereum provider is available
      if (!window.ethereum) {
        throw new Error('Please install MetaMask or another Ethereum wallet');
      }

      // Request account access
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      if (accounts.length === 0) {
        throw new Error('No accounts found');
      }

      const userAddress = accounts[0];
      setAddress(userAddress);
      setIsConnected(true);
      
      // Get chain ID
      const chainIdHex = await window.ethereum.request({
        method: 'eth_chainId',
      });
      const chainIdDecimal = parseInt(chainIdHex, 16);
      setChainId(chainIdDecimal);

      // Save to localStorage
      localStorage.setItem('walletAddress', userAddress);

      // Listen for account changes
      window.ethereum.on('accountsChanged', (newAccounts: string[]) => {
        if (newAccounts.length === 0) {
          disconnectWallet();
        } else {
          setAddress(newAccounts[0]);
          localStorage.setItem('walletAddress', newAccounts[0]);
        }
      });

      // Listen for chain changes
      window.ethereum.on('chainChanged', (newChainId: string) => {
        setChainId(parseInt(newChainId, 16));
      });

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to connect wallet');
      setIsConnected(false);
      setAddress(null);
      setChainId(null);
    } finally {
      setIsLoading(false);
    }
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setAddress(null);
    setChainId(null);
    localStorage.removeItem('walletAddress');
    
    // Remove event listeners
    if (window.ethereum) {
      window.ethereum.removeAllListeners();
    }
  };

  return (
    <WalletContext.Provider
      value={{
        isConnected,
        address,
        chainId,
        connectWallet,
        disconnectWallet,
        isLoading,
        error,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

// Type declaration for window.ethereum
declare global {
  interface Window {
    ethereum?: any;
  }
}