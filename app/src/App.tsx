import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import Home from './pages/Home';
import { Listings } from './pages/Listings';
import { PropertyDetail } from './pages/PropertyDetail';
import { Philosophy } from './pages/Philosophy';
import { Collection } from './pages/Collection';
import { Investments } from './pages/Investments';
import { Branches } from './pages/Branches';
import { Concierge } from './pages/Concierge';
import { NotFound } from './pages/NotFound';

function ScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => {
    const w = window as any;
    if (w.lenis) {
      w.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollReset />
      <div className="min-h-screen flex flex-col bg-brand-bg">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/property/:id" element={<PropertyDetail />} />
            <Route path="/philosophy" element={<Philosophy />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/investments" element={<Investments />} />
            <Route path="/branches" element={<Branches />} />
            <Route path="/concierge" element={<Concierge />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
