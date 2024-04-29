import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './pages/router';
import LoadingSpinner from './components/shared/loadingSpinner';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return <BrowserRouter>{loading ? <LoadingSpinner /> : <Router />}</BrowserRouter>;
}

export default App;
