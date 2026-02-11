import { useState } from 'react';
import { WalletProvider } from '../context/WalletContext';
import Navigation from '../components/Navigation';
import WebsiteContent from '../components/WebsiteContent';
import LaunchpadContent from '../components/LaunchpadContent';
import Footer from '../components/Footer';

export function App() {
  const [activeTab, setActiveTab] = useState<'website' | 'launchpad'>('website');

  return (
    <WalletProvider>
      <div className="font-sans antialiased min-h-screen flex flex-col">
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
        
        <main className="flex-grow">
          {activeTab === 'website' ? <WebsiteContent /> : <LaunchpadContent />}
        </main>
        
        <Footer />
      </div>
    </WalletProvider>
  );
}

export default App;