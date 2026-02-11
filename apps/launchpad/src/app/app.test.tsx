import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './app';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    
    // Check for main heading
    expect(screen.getByText(/Neural Nexus/i)).toBeInTheDocument();
    
    // Check for launchpad section
    expect(screen.getByText(/Nexus Launchpad/i)).toBeInTheDocument();
    
    // Check for tokenomics section
    expect(screen.getByText(/Tokenomics/i)).toBeInTheDocument();
  });

  it('has wallet connect button', () => {
    render(<App />);
    
    // Check for wallet connect button
    expect(screen.getByText(/Connect Wallet/i)).toBeInTheDocument();
  });
});