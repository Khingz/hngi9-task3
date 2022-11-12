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
  const [toggleIsOpen, setToggleIsOpen] = useState(false)

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  const toggleOpen = () => setToggleIsOpen(true)
  const toggleClose = () => setToggleIsOpen(false)

  return (
    <div className={openModal ? 'App overlay__effect' : 'App'}>
      <Router>
        <Nav open={handleOpen} toggleOpen={toggleOpen} toggleClose={toggleClose} toggleIsOpen={toggleIsOpen}/>
        <Modal close={handleClose} openModal={openModal} />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home toggleClose={toggleClose}/>} />
            <Route path="/places" element={<Places toggleClose={toggleClose}/>} />
          </Routes>
        </ScrollToTop>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
