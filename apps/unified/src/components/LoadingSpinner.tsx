import React from 'react';

interface LoadingSpinnerProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  message = 'Loading...', 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6 border-2',
    md: 'w-12 h-12 border-3',
    lg: 'w-16 h-16 border-4'
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[200px]">
      <div className={`${sizeClasses[size]} border-emerald-cyber/30 border-t-emerald-cyber rounded-full animate-spin mb-4`}></div>
      <p className="text-gray-400 text-sm sm:text-base animate-pulse">{message}</p>
      <p className="text-gray-500 text-xs mt-2">Neural Nexus • Unified App</p>
    </div>
  );
};

export default LoadingSpinner;