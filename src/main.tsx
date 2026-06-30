import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import App from './App.tsx';
import GalleryPage from './components/GalleryPage.tsx';
import ServicesPage from './components/ServicesPage.tsx';
import ReviewsPage from './components/ReviewsPage.tsx';
import AreasPage from './components/AreasPage.tsx';
import FAQPage from './components/FAQPage.tsx';
import ContactPage from './components/ContactPage.tsx';
import './index.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/areas" element={<AreasPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);
