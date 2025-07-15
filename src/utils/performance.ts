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
    const isTouch = 'ontouchstart' in window;
    const screenWidth = window.screen.width;
    
    // More aggressive detection for mobile and low-end devices
    return memory <= 4 || cores <= 4 || isMobile || isTouch || screenWidth <= 768;
  },

  // Detect if user is on an old/slow device
  isSlowDevice: (): boolean => {
    const memory = perfUtils.getDeviceMemory();
    const cores = navigator.hardwareConcurrency || 2;
    const connection = (navigator as any).connection;
    const slowConnection = connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g');
    
    return memory <= 2 || cores <= 2 || slowConnection;
  },

  // Optimized requestAnimationFrame for smooth scrolling
  raf: (callback: () => void): number => {
    return requestAnimationFrame(callback);
  },

  // Throttle function for scroll events - more aggressive for mobile
  throttle: <T extends (...args: any[]) => void>(
    func: T,
    delay: number
  ): ((...args: Parameters<T>) => void) => {
    let lastCall = 0;
    const adaptiveDelay = perfUtils.isLowPowerDevice() ? Math.max(delay * 2, 16) : delay;
    
    return (...args: Parameters<T>) => {
      const now = Date.now();
      if (now - lastCall >= adaptiveDelay) {
        lastCall = now;
        func(...args);
      }
    };
  },

  // Debounce for resize and other expensive events
  debounce: <T extends (...args: any[]) => void>(
    func: T,
    delay: number
  ): ((...args: Parameters<T>) => void) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  },

  // Initialize performance optimizations
  init: (): void => {
    // Enable CSS containment for better performance
    document.documentElement.style.contain = 'layout style paint';
    
    // More aggressive optimizations for mobile/low-power devices
    if (perfUtils.isLowPowerDevice()) {
      document.documentElement.classList.add('low-power-device');
      document.body.classList.add('mobile-performance');
      
      // Disable expensive CSS features
      document.documentElement.style.setProperty('--blur-enabled', '0');
      document.documentElement.style.setProperty('--backdrop-filter', 'none');
    }

    // Extra optimizations for very slow devices
    if (perfUtils.isSlowDevice()) {
      document.documentElement.classList.add('slow-device');
      // Disable all animations for very slow devices
      document.documentElement.style.setProperty('--animation-duration', '0s');
      document.documentElement.style.setProperty('--transition-duration', '0s');
    }
    
    // Set up passive event listeners for better scroll performance
    const passiveOptions = { passive: true };
    
    // Override smooth scroll for low-power devices or reduced motion preference
    if (perfUtils.isLowPowerDevice() || perfUtils.prefersReducedMotion()) {
      document.documentElement.style.scrollBehavior = 'auto';
    }
    
    // Force hardware acceleration for supported devices only
    if (perfUtils.hasHardwareAcceleration() && !perfUtils.isLowPowerDevice()) {
      document.body.style.transform = 'translateZ(0)';
      document.body.style.backfaceVisibility = 'hidden';
      document.body.style.perspective = '1000px';
    }

    // Optimize for 60fps on capable devices, 30fps on slower devices
    const targetFPS = perfUtils.isSlowDevice() ? 30 : 60;
    const frameTime = 1000 / targetFPS;
    
    // Set CSS custom properties for adaptive frame rates
    document.documentElement.style.setProperty('--frame-time', `${frameTime}ms`);
  },

  // Monitor frame rate and adjust performance accordingly
  frameRateMonitor: {
    frames: 0,
    lastTime: performance.now(),
    
    start: () => {
      const monitor = () => {
        const now = performance.now();
        perfUtils.frameRateMonitor.frames++;
        
        if (now >= perfUtils.frameRateMonitor.lastTime + 1000) {
          const fps = Math.round((perfUtils.frameRateMonitor.frames * 1000) / (now - perfUtils.frameRateMonitor.lastTime));
          
          // If FPS drops below 30, enable performance mode
          if (fps < 30 && !document.documentElement.classList.contains('performance-mode')) {
            document.documentElement.classList.add('performance-mode');
            console.log('Performance mode enabled due to low FPS:', fps);
          }
          
          perfUtils.frameRateMonitor.frames = 0;
          perfUtils.frameRateMonitor.lastTime = now;
        }
        
        requestAnimationFrame(monitor);
      };
      
      requestAnimationFrame(monitor);
    }
  }
};

// Auto-initialize on import
if (typeof window !== 'undefined') {
  perfUtils.init();
  // Start frame rate monitoring after a delay to allow page to settle
  setTimeout(() => perfUtils.frameRateMonitor.start(), 2000);
}