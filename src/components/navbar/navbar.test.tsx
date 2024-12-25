import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from './navbar';

// Mock the motion component since we don't need to test animations
jest.mock('motion/react', () => ({
  motion: {
    nav: ({ children, className }: { children: React.ReactNode; className?: string }) => (
      <nav className={className}>{children}</nav>
    ),
    menu: ({ children, className }: { children: React.ReactNode; className?: string }) => (
      <menu className={className}>{children}</menu>
    ),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  useMotionValueEvent: jest.fn(),
  useScroll: () => ({ scrollY: { get: () => 0 } }),
}));

// Mock the Lenis hook
jest.mock('lenis/dist/lenis-react', () => ({
  useLenis: () => ({ start: jest.fn(), stop: jest.fn() }),
}));

describe('NavBar', () => {
  beforeEach(() => {
    // Reset window width to desktop size
    window.innerWidth = 1024;
  });

  it('renders a nav element', () => {
    render(<NavBar />);
    const nav = document.querySelector('nav');
    expect(nav).toBeInTheDocument();
  });

  it('renders desktop navigation with docs and login buttons', () => {
    render(<NavBar />);
    expect(screen.getByText(/docs/i)).toBeInTheDocument();
    expect(screen.getByText(/log in/i)).toBeInTheDocument();
  });

  it('renders mobile navigation with burger menu when width is small', () => {
    window.innerWidth = 600;
    render(<NavBar />);
    // In mobile view, we should see the burger menu button
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders the logo in both desktop and mobile views', () => {
    const { rerender } = render(<NavBar />);
    expect(document.querySelector('svg')).toBeInTheDocument(); // Logo is an SVG

    // Test mobile view
    window.innerWidth = 600;
    rerender(<NavBar />);
    expect(document.querySelector('svg')).toBeInTheDocument();
  });
});
