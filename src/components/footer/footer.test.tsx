import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './footer';

// Mock the motion component since we don't need to test animations
jest.mock('motion/react', () => ({
  motion: {
    div: ({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) => (
      <div className={className} onClick={onClick}>{children}</div>
    ),
    nav: ({ children, className }: { children: React.ReactNode; className?: string }) => (
      <nav className={className}>{children}</nav>
    ),
    button: ({ children, className }: { children: React.ReactNode; className?: string }) => (
      <button className={className}>{children}</button>
    ),
    span: ({ children, className }: { children: React.ReactNode; className?: string }) => (
      <span className={className}>{children}</span>
    ),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  cubicBezier: () => 'cubic-bezier',
  circOut: 'circOut',
}));

// Mock Next.js Link component
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, target, className }: { children: React.ReactNode; href: string; target?: string; className?: string }) => (
    <a href={href} target={target} className={className} data-testid="next-link">
      {children}
    </a>
  ),
}));

// Mock FooterLogotype component
jest.mock('@/components/logos/footerLogotype', () => ({
  __esModule: true,
  default: () => <div data-testid="footer-logotype">Footer Logo</div>,
}));

describe('Footer', () => {
  beforeEach(() => {
    // Mock clipboard API
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: jest.fn(() => Promise.resolve()),
      },
      writable: true,
    });
  });

  it('renders footer sections correctly', () => {
    render(<Footer />);
    
    // Check for main sections
    expect(screen.getByText('Product')).toBeInTheDocument();
    expect(screen.getByText('Legal')).toBeInTheDocument();
    expect(screen.getByText('Get in touch')).toBeInTheDocument();
    
    // Check for footer logo
    expect(screen.getByTestId('footer-logotype')).toBeInTheDocument();
  });

  it('renders social media links correctly', () => {
    render(<Footer />);
    
    // Check for social media links
    const socialLinks = screen.getAllByTestId('next-link');
    expect(socialLinks).toHaveLength(5); // 3 social media + 2 section links
    
    // Check specific social media URLs
    expect(socialLinks[0]).toHaveAttribute('href', 'https://discord.gg/kscale');
    expect(socialLinks[1]).toHaveAttribute('href', 'https://x.com/kscalelabs');
    expect(socialLinks[2]).toHaveAttribute('href', 'https://github.com/kscalelabs');
  });

  it('handles email copy functionality', async () => {
    render(<Footer />);
    
    // Find and click the email copy button
    const emailText = screen.getByText('ben@kscale.dev');
    fireEvent.click(emailText);
    
    // Check if clipboard.writeText was called with correct email
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('ben@kscale.dev');
    
    // Check if "Copied!" text appears
    await waitFor(() => {
      expect(screen.getByText('Copied!')).toBeInTheDocument();
    });
    
    // Check if it reverts back after timeout
    await waitFor(() => {
      expect(screen.getByText('Copy email')).toBeInTheDocument();
    }, { timeout: 3000 });
  });

  it('renders product section links correctly', () => {
    render(<Footer />);
    
    // Check for product links
    expect(screen.getByText('K-Bot')).toBeInTheDocument();
    const kbotLink = screen.getByText('K-Bot').closest('a');
    expect(kbotLink).toHaveAttribute('href', 'https://shop.kscale.dev/collections/all');
    
    expect(screen.getByText('Send feedback')).toBeInTheDocument();
    const feedbackLink = screen.getByText('Send feedback').closest('a');
    expect(feedbackLink).toHaveAttribute(
      'href',
      'https://docs.google.com/forms/d/e/1FAIpQLSemVaJ6HfieS9xDKv7SqWYArHyHLV-kraraiT_VEmPL_6lkPw/viewform'
    );
  });

  it('renders legal section links correctly', () => {
    render(<Footer />);
    
    // Check for legal links
    expect(screen.getByText('Terms of service')).toBeInTheDocument();
    const tosLink = screen.getByText('Terms of service').closest('a');
    expect(tosLink).toHaveAttribute('href', 'https://dashboard.kscale.dev/tos');
    
    expect(screen.getByText('Privacy policy')).toBeInTheDocument();
    const privacyLink = screen.getByText('Privacy policy').closest('a');
    expect(privacyLink).toHaveAttribute('href', 'https://dashboard.kscale.dev/privacy');
  });
});
