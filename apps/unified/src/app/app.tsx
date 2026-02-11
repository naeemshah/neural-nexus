import { useState, useEffect } from 'react';
import { WalletProvider } from '../context/WalletContext';
import Navigation from '../components/Navigation';
import WebsiteContent from '../components/WebsiteContent';
import LaunchpadContent from '../components/LaunchpadContent';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';

export function App() {
  const [activeTab, setActiveTab] = useState<'website' | 'launchpad'>('website');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Reduced from 1500ms for better UX

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="font-sans antialiased min-h-screen bg-gray-950 flex items-center justify-center">
        <LoadingSpinner message="Loading Neural Nexus..." size="lg" />
      </div>
    );
  }

  return (
    <WalletProvider>
      <div className="font-sans antialiased min-h-screen flex flex-col">
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
        
        <main className="flex-grow animate-fadeIn">
          {activeTab === 'website' ? <WebsiteContent /> : <LaunchpadContent />}
        </main>
        
        <Footer />
      </div>
    </WalletProvider>
  );
}

export default App;