import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import Company from './pages/Company';
import GroupTours from './pages/GroupTours';
import Packages from './pages/Packages';
import IndiaDestinations from './pages/IndiaDestinations';
import Honeymoon from './pages/Honeymoon';
import InternationalDestinations from './pages/InternationalDestinations';
import Contact from './pages/Contact';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="company" element={<Company />} />
          <Route path="group-tours" element={<GroupTours />} />
          <Route path="packages" element={<Packages />} />
          <Route path="india-destinations" element={<IndiaDestinations />} />
          <Route path="honeymoon" element={<Honeymoon />} />
          <Route path="international-destinations" element={<InternationalDestinations />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
