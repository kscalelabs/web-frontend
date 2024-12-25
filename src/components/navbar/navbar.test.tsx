import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from './navbar';

// Mock all the component dependencies
jest.mock('@/components/logos/logotype', () => ({
  __esModule: true,
  default: ({ atTop, isMenuOpen }: { atTop: boolean; isMenuOpen: boolean }) => (
    <div data-testid="logotype">
      <svg />
    </div>
  ),
}));

jest.mock('@/components/navbar/burgerMenu', () => ({
  __esModule: true,
  default: (isOpen: boolean) => (
    isOpen ? <div data-testid="burger-menu">Burger Menu</div> : null
  ),
}));

jest.mock('@/components/navbar/burgerOpenButton', () => ({
  __esModule: true,
  default: ({ onClick, atTop, isOpen }: { onClick: (open: boolean) => void; atTop: boolean; isOpen: boolean }) => (
    <button onClick={() => onClick(!isOpen)} data-testid="burger-button">
      Toggle Menu
    </button>
  ),
}));

jest.mock('@/components/navbar/navButtons', () => ({
  NavDocsButton: ({ atTop }: { atTop: boolean }) => (
    <button data-testid="docs-button">Docs</button>
  ),
  NavLogInButton: ({ atTop }: { atTop: boolean }) => (
    <button data-testid="login-button">Log In</button>
  ),
}));

jest.mock('@/components/util/functions', () => ({
  useWindowSize: () => ({ width: 1024, height: 768 }),
}));

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
    expect(screen.getByTestId('docs-button')).toBeInTheDocument();
    expect(screen.getByTestId('login-button')).toBeInTheDocument();
  });

  it('renders mobile navigation with burger menu when width is small', () => {
    // Mock window width to mobile size
    jest.spyOn(require('@/components/util/functions'), 'useWindowSize').mockReturnValue({ width: 600, height: 768 });
    render(<NavBar />);
    // In mobile view, we should see the burger menu button
    expect(screen.getByTestId('burger-button')).toBeInTheDocument();
  });

  it('renders the logo in both desktop and mobile views', () => {
    const { rerender } = render(<NavBar />);
    expect(screen.getByTestId('logotype')).toBeInTheDocument();

    // Test mobile view
    jest.spyOn(require('@/components/util/functions'), 'useWindowSize').mockReturnValue({ width: 600, height: 768 });
    rerender(<NavBar />);
    expect(screen.getByTestId('logotype')).toBeInTheDocument();
  });
});
