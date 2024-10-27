import React, { Suspense, lazy, useState, useEffect } from 'react';
import * as Sentry from '@sentry/react';
import InitialLoader from './components/InitialLoader';

// Lazy load components
const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./components/Hero'));
const Highlights = lazy(() => import('./components/Highlights'));
const Model = lazy(() => import('./components/Model'));
const Features = lazy(() => import('./components/Features'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const Footer = lazy(() => import('./components/Footer'));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate or handle actual asset loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust this time based on your actual loading needs

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <InitialLoader />;
  }

  return (
    <Suspense fallback={<InitialLoader />}>
      <main className="bg-black">
        <Navbar />
        <Hero />
        <Highlights />
        <Model />
        <Features />
        <HowItWorks />
        <Footer />
      </main>
    </Suspense>
  );
};

export default Sentry.withProfiler(App);
