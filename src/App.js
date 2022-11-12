import { Nav, Footer } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/scrolTop';
import Home from './pages/Home/Home';
import Places from './pages/Place/Place';
import { Modal } from '../src/components';

import './App.css';
import { useState } from 'react';

const App = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <div className={openModal ? 'App overlay__effect' : 'App'}>
      <Router>
        <Nav open={handleOpen} />
        <Modal close={handleClose} openModal={openModal} />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/places" element={<Places />} />
          </Routes>
        </ScrollToTop>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
