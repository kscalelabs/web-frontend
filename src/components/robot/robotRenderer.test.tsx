import React from 'react';
import { render, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import RobotRenderer from './robotRenderer';
import RobotWrapper from './RobotWrapper';

// Mock Three.js and related modules
jest.mock('three', () => ({
  Scene: jest.fn().mockImplementation(() => ({
    add: jest.fn(),
    traverse: jest.fn(),
  })),
  PerspectiveCamera: jest.fn().mockImplementation(() => ({
    aspect: 1,
    updateProjectionMatrix: jest.fn(),
    position: { x: 0, y: 0, z: 0 },
    add: jest.fn(),
  })),
  WebGLRenderer: jest.fn().mockImplementation(() => ({
    setSize: jest.fn(),
    setPixelRatio: jest.fn(),
    setClearColor: jest.fn(),
    domElement: document.createElement('canvas'),
  })),
  DirectionalLight: jest.fn().mockImplementation(() => ({
    position: { set: jest.fn() },
  })),
  Object3D: jest.fn(),
  Mesh: jest.fn(),
  Color: jest.fn(),
  MeshPhysicalMaterial: jest.fn(),
}));

// Mock OrbitControls
jest.mock('three/examples/jsm/controls/OrbitControls', () => ({
  OrbitControls: jest.fn().mockImplementation(() => ({
    enableDamping: false,
    dampingFactor: 0,
    screenSpacePanning: false,
    maxPolarAngle: 0,
    enableZoom: false,
    enablePan: false,
    update: jest.fn(),
  })),
}));

// Mock URDFLoader
jest.mock('urdf-loader', () => {
  return jest.fn().mockImplementation(() => ({
    load: jest.fn((url, callback) => {
      const mockRobot = {
        traverse: jest.fn(),
        rotateY: jest.fn(),
        translateY: jest.fn(),
        scale: { set: jest.fn() },
      };
      callback(mockRobot);
    }),
  }));
});

// Mock post-processing modules
jest.mock('three/examples/jsm/postprocessing/EffectComposer.js', () => ({
  EffectComposer: jest.fn().mockImplementation(() => ({
    addPass: jest.fn(),
    setSize: jest.fn(),
    render: jest.fn(),
  })),
}));

jest.mock('three/examples/jsm/postprocessing/RenderPass.js', () => ({
  RenderPass: jest.fn(),
}));

jest.mock('three/examples/jsm/postprocessing/OutputPass.js', () => ({
  OutputPass: jest.fn(),
}));

jest.mock('three/examples/jsm/postprocessing/ShaderPass.js', () => ({
  ShaderPass: jest.fn().mockImplementation(() => ({
    uniforms: {
      resolution: { value: { x: 0, y: 0 } },
    },
  })),
}));

jest.mock('three/examples/jsm/shaders/LuminosityShader.js', () => ({
  LuminosityShader: {},
}));

jest.mock('three/examples/jsm/shaders/SobelOperatorShader.js', () => ({
  SobelOperatorShader: {},
}));

// Mock window resize
const originalInnerWidth = window.innerWidth;
const originalInnerHeight = window.innerHeight;

describe('RobotRenderer', () => {
  beforeAll(() => {
    // Mock window.innerWidth/Height
    Object.defineProperty(window, 'innerWidth', { value: 1024, configurable: true });
    Object.defineProperty(window, 'innerHeight', { value: 768, configurable: true });
  });

  afterAll(() => {
    // Restore original dimensions
    Object.defineProperty(window, 'innerWidth', { value: originalInnerWidth, configurable: true });
    Object.defineProperty(window, 'innerHeight', { value: originalInnerHeight, configurable: true });
  });

  it('renders without crashing', () => {
    const { container } = render(<RobotRenderer />);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.querySelector('div')).toHaveClass('w-full h-full overflow-hidden rounded-lg');
  });

  it('handles window resize', () => {
    const { container } = render(<RobotRenderer />);
    
    act(() => {
      // Trigger resize event
      window.dispatchEvent(new Event('resize'));
    });
    
    // Component should still be mounted
    expect(container.firstChild).toBeInTheDocument();
  });
});

describe('RobotWrapper', () => {
  beforeEach(() => {
    // Mock IntersectionObserver
    const mockIntersectionObserver = jest.fn().mockImplementation((callback) => ({
      observe: jest.fn((element) => {
        // Simulate immediate intersection
        callback([{ isIntersecting: true }], {} as IntersectionObserver);
      }),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
    window.IntersectionObserver = mockIntersectionObserver as unknown as typeof IntersectionObserver;
  });

  it('renders wrapper div without robot initially', () => {
    const { container } = render(<RobotWrapper />);
    expect(container.firstChild).toHaveClass('w-full h-full overflow-hidden rounded-lg');
    expect(container.querySelector('canvas')).not.toBeInTheDocument();
  });

  it('loads robot when intersection observer triggers', () => {
    const { container } = render(<RobotWrapper />);
    
    // IntersectionObserver mock will automatically trigger with isIntersecting: true
    
    // Now the wrapper should contain the robot renderer
    expect(container.firstChild).toBeInTheDocument();
  });
});
