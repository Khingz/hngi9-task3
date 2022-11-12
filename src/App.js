import { Nav, Footer } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/scrolTop';
import Home from './pages/Home/Home';
import Places from './pages/Place/Place';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
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
