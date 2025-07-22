import { motion, useReducedMotion } from 'framer-motion';
import { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Apple-style components
import { AppleHeader } from '@/components/apple/AppleHeader';
import { AppleHero } from '@/components/apple/AppleHero';
import { AppleBio } from '@/components/apple/AppleBio';
import { AppleProjects } from '@/components/apple/AppleProjects';
import { AppleExperience } from '@/components/apple/AppleExperience';
import { AppleContact } from '@/components/apple/AppleContact';
import { AppleFooter } from '@/components/apple/AppleFooter';

// Background and effects
import { AppleBackground } from '@/components/apple/AppleBackground';
import { SEO } from '@/components/seo';

// Query client for data fetching
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

// Motion configuration with reduced motion support
const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94], // Apple's preferred easing
    },
  },
};

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <QueryClientProvider client={queryClient}>
      <motion.div
        variants={shouldReduceMotion ? {} : pageVariants}
        initial="hidden"
        animate="visible"
        className="min-h-screen bg-white dark:bg-gray-900 font-sf-pro antialiased overflow-x-hidden"
      >
        <SEO />
        
        {/* Apple-style background with depth */}
        <AppleBackground />
        
        {/* Main content with glass morphism */}
        <div className="relative z-10">
          <AppleHeader />
          
          <main className="relative">
            <Suspense fallback={<div className="h-screen" />}>
              <AppleHero />
            </Suspense>
            
            <Suspense fallback={<div className="h-96" />}>
              <AppleBio />
            </Suspense>
            
            <Suspense fallback={<div className="h-96" />}>
              <AppleProjects />
            </Suspense>
            
            <Suspense fallback={<div className="h-96" />}>
              <AppleExperience />
            </Suspense>
            
            <Suspense fallback={<div className="h-96" />}>
              <AppleContact />
            </Suspense>
          </main>
          
          <AppleFooter />
        </div>
      </motion.div>
    </QueryClientProvider>
  );
}