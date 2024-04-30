import { useState, useEffect } from 'react';
import HomeContainer from '@/containers/home';
import LoadingSpinner from '@/components/shared/loadingSpinner';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <LoadingSpinner /> : <HomeContainer />}</>;
};

export default Home;
