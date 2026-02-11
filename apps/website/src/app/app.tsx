import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Tokenomics from '../components/Tokenomics';
import Litepaper from '../components/Litepaper';
import Dashboard from '../components/Dashboard';
import Founder from '../components/Founder';
import Footer from '../components/Footer';

export function App() {
  return (
    <div className="font-sans antialiased">
      <Navigation />
      <Hero />
      <Tokenomics />
      <Litepaper />
      <Dashboard />
      <Founder />
      <Footer />
    </div>
  );
}

export default App;