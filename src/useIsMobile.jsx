import { useState, useEffect } from 'react';

const mobileBreakpoint = 900;

export class Utils {
  static isMobile() {
    return window.innerWidth < mobileBreakpoint;
  }
}

/*export const useIsMobile = () => {
  console.log("window.innerWidth " + self.innerWidth );
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
*/

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // 992px is 'lg'

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}