import { useState,useEffect } from "react";
function useOnlineStatus() {
    const [isOnline, setOnline] = useState('online');
  
    useEffect(() => {
      window.addEventListener('online', () => setOnline(true));
      window.addEventListener('offline', () => setOnline(false));
  
      return () => {
        window.removeEventListener('online', () => setOnline(true));
        window.removeEventListener('offline', () => setOnline(false));
      };
    }, []);
  
    return isOnline;
  }
export default useOnlineStatus;