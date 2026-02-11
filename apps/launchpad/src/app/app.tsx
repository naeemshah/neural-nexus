import { WalletProvider } from '../context/WalletContext';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import LaunchpadDashboard from '../components/LaunchpadDashboard';
import TransactionHistory from '../components/TransactionHistory';
import Tokenomics from '../components/Tokenomics';
import Roadmap from '../components/Roadmap';
import Founder from '../components/Founder';
import Footer from '../components/Footer';
import NotificationSystem from '../components/NotificationSystem';

export function App() {
  return (
    <WalletProvider>
      <div className="font-sans antialiased">
        <Navigation />
        <NotificationSystem />
        <Hero />
        <LaunchpadDashboard />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <TransactionHistory />
        </div>
        <Tokenomics />
        <Roadmap />
        <Founder />
        <Footer />
      </div>
    </WalletProvider>
  );
}

export default App;