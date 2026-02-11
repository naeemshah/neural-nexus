import { useState, useEffect } from 'react';
import { useWallet } from '../context/WalletContext';

interface Transaction {
  id: string;
  type: 'contribution' | 'withdrawal' | 'token_claim';
  amount: number;
  tokenAmount?: number;
  timestamp: Date;
  status: 'pending' | 'confirmed' | 'failed';
  hash?: string;
}

const TransactionHistory = () => {
  const { address, isConnected } = useWallet();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState<'all' | 'contributions' | 'claims'>('all');

  // Mock transaction data - in real implementation, this would come from blockchain
  const mockTransactions: Transaction[] = [
    {
      id: '1',
      type: 'contribution',
      amount: 0.1,
      tokenAmount: 1000,
      timestamp: new Date(Date.now() - 3600000), // 1 hour ago
      status: 'confirmed',
      hash: '0x1234...5678'
    },
    {
      id: '2',
      type: 'contribution',
      amount: 0.25,
      tokenAmount: 2500,
      timestamp: new Date(Date.now() - 7200000), // 2 hours ago
      status: 'confirmed',
      hash: '0x2345...6789'
    },
    {
      id: '3',
      type: 'token_claim',
      amount: 0,
      tokenAmount: 3500,
      timestamp: new Date(Date.now() - 10800000), // 3 hours ago
      status: 'pending',
      hash: '0x3456...7890'
    },
    {
      id: '4',
      type: 'contribution',
      amount: 0.05,
      tokenAmount: 500,
      timestamp: new Date(Date.now() - 14400000), // 4 hours ago
      status: 'confirmed',
      hash: '0x4567...8901'
    }
  ];

  useEffect(() => {
    if (isConnected && address) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setTransactions(mockTransactions);
        setIsLoading(false);
      }, 1000);
    } else {
      setTransactions([]);
    }
  }, [isConnected, address]);

  const filteredTransactions = transactions.filter(tx => {
    if (filter === 'all') return true;
    if (filter === 'contributions') return tx.type === 'contribution';
    if (filter === 'claims') return tx.type === 'token_claim';
    return true;
  });

  const formatTime = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${diffDays}d ago`;
  };

  const getStatusColor = (status: Transaction['status']) => {
    switch (status) {
      case 'confirmed': return 'text-emerald-cyber';
      case 'pending': return 'text-yellow-500';
      case 'failed': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getTypeIcon = (type: Transaction['type']) => {
    switch (type) {
      case 'contribution': return '⬆️';
      case 'withdrawal': return '⬇️';
      case 'token_claim': return '🎁';
      default: return '📄';
    }
  };

  const getTypeLabel = (type: Transaction['type']) => {
    switch (type) {
      case 'contribution': return 'Contribution';
      case 'withdrawal': return 'Withdrawal';
      case 'token_claim': return 'Token Claim';
      default: return 'Transaction';
    }
  };

  if (!isConnected || !address) {
    return (
      <div className="bg-obsidian-deep/60 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Transaction History</h3>
        <div className="text-center py-6 sm:py-8">
          <div className="text-gray-500 mb-2">Connect your wallet to view transaction history</div>
          <div className="text-xs text-gray-600">Your contributions and claims will appear here</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-obsidian-deep/60 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
        <h3 className="text-lg sm:text-xl font-bold">Transaction History</h3>
        
        <div className="flex gap-1 sm:gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
              filter === 'all' 
                ? 'bg-emerald-cyber text-obsidian-deep' 
                : 'bg-white/5 text-gray-400 hover:text-white'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('contributions')}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
              filter === 'contributions' 
                ? 'bg-emerald-cyber text-obsidian-deep' 
                : 'bg-white/5 text-gray-400 hover:text-white'
            }`}
          >
            Contributions
          </button>
          <button
            onClick={() => setFilter('claims')}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
              filter === 'claims' 
                ? 'bg-emerald-cyber text-obsidian-deep' 
                : 'bg-white/5 text-gray-400 hover:text-white'
            }`}
          >
            Claims
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="space-y-3 sm:space-y-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="animate-pulse">
              <div className="flex items-center justify-between p-3 sm:p-4 rounded-lg bg-white/5">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10"></div>
                  <div className="space-y-2">
                    <div className="h-3 sm:h-4 w-16 sm:w-24 bg-white/10 rounded"></div>
                    <div className="h-2 sm:h-3 w-12 sm:w-16 bg-white/10 rounded"></div>
                  </div>
                </div>
                <div className="space-y-2 text-right">
                  <div className="h-3 sm:h-4 w-12 sm:w-20 bg-white/10 rounded ml-auto"></div>
                  <div className="h-2 sm:h-3 w-8 sm:w-12 bg-white/10 rounded ml-auto"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : filteredTransactions.length === 0 ? (
        <div className="text-center py-6 sm:py-8">
          <div className="text-gray-500 mb-2">No transactions found</div>
          <div className="text-xs text-gray-600">Your transactions will appear here once you make contributions</div>
        </div>
      ) : (
        <div className="space-y-2 sm:space-y-3">
          {filteredTransactions.map(tx => (
            <div 
              key={tx.id} 
              className="flex items-center justify-between p-3 sm:p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-cyber/10 flex items-center justify-center text-lg">
                  {getTypeIcon(tx.type)}
                </div>
                <div>
                  <div className="font-medium text-sm sm:text-base">{getTypeLabel(tx.type)}</div>
                  <div className="text-xs text-gray-500">{formatTime(tx.timestamp)}</div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="font-bold text-sm sm:text-base">
                  {tx.type === 'contribution' ? `-${tx.amount} ETH` : `+${tx.tokenAmount} $NAE`}
                </div>
                <div className={`text-xs font-medium ${getStatusColor(tx.status)}`}>
                  {tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
                </div>
                {tx.hash && (
                  <a 
                    href={`https://basescan.org/tx/${tx.hash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-emerald-cyber hover:underline mt-1 block"
                  >
                    View on Explorer
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {filteredTransactions.length > 0 && (
        <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/10">
          <div className="flex justify-between text-xs sm:text-sm">
            <span className="text-gray-500">Total Contributions:</span>
            <span className="font-bold">
              {filteredTransactions
                .filter(tx => tx.type === 'contribution')
                .reduce((sum, tx) => sum + tx.amount, 0)
                .toFixed(2)} ETH
            </span>
          </div>
          <div className="flex justify-between text-xs sm:text-sm mt-2">
            <span className="text-gray-500">Total $NAE:</span>
            <span className="font-bold">
              {filteredTransactions
                .filter(tx => tx.tokenAmount)
                .reduce((sum, tx) => sum + (tx.tokenAmount || 0), 0)
                .toLocaleString()} $NAE
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionHistory;