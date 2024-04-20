import { BrowserRouter, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import LoadingSpinner from "./components/shared/loadingSpinner";
import Router from "./pages/router";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, Math.floor(Math.random() * (2500 - 1500 + 1)) + 1500);

    return () => clearTimeout(timeout);
  }, [location]);

  return <>{loading ? <LoadingSpinner /> : <Router />}</>;
}

export default App;
