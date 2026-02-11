import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import LaunchpadDashboard from '../components/LaunchpadDashboard';
import Tokenomics from '../components/Tokenomics';
import Roadmap from '../components/Roadmap';
import Founder from '../components/Founder';
import Footer from '../components/Footer';

export function App() {
  return (
    <div className="font-sans antialiased">
      <Navigation />
      <Hero />
      <LaunchpadDashboard />
      <Tokenomics />
      <Roadmap />
      <Founder />
      <Footer />
    </div>
  );
}

export default App;