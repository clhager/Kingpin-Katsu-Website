import { useState, useEffect } from 'react';

const mobileBreakpoint = 1024;

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < mobileBreakpoint);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;
};