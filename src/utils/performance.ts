// Performance monitoring utilities for smooth scrolling optimization

export const perfUtils = {
  // Check if device supports hardware acceleration
  hasHardwareAcceleration: (): boolean => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return !!gl;
  },

  // Detect if user prefers reduced motion
  prefersReducedMotion: (): boolean => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },

  // Get device memory if available
  getDeviceMemory: (): number => {
    return (navigator as any).deviceMemory || 4; // Default to 4GB
  },

  // Check if device is likely low-powered
  isLowPowerDevice: (): boolean => {
    const memory = perfUtils.getDeviceMemory();
    const cores = navigator.hardwareConcurrency || 2;
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    return memory <= 2 || cores <= 2 || isMobile;
  },

  // Optimized requestAnimationFrame for smooth scrolling
  raf: (callback: () => void): number => {
    return requestAnimationFrame(callback);
  },

  // Throttle function for scroll events
  throttle: <T extends (...args: any[]) => void>(
    func: T,
    delay: number
  ): ((...args: Parameters<T>) => void) => {
    let lastCall = 0;
    return (...args: Parameters<T>) => {
      const now = Date.now();
      if (now - lastCall >= delay) {
        lastCall = now;
        func(...args);
      }
    };
  },

  // Initialize performance optimizations
  init: (): void => {
    // Enable CSS containment for better performance
    document.documentElement.style.contain = 'layout style paint';
    
    // Optimize scroll behavior
    if (perfUtils.isLowPowerDevice()) {
      document.documentElement.classList.add('low-power-device');
    }
    
    // Set up passive event listeners for better scroll performance
    const passiveOptions = { passive: true };
    
    // Override smooth scroll for low-power devices
    if (perfUtils.isLowPowerDevice() || perfUtils.prefersReducedMotion()) {
      document.documentElement.style.scrollBehavior = 'auto';
    }
  }
};

// Auto-initialize on import
if (typeof window !== 'undefined') {
  perfUtils.init();
}