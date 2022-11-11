import { Nav, Footer } from './components';
import Home from './pages/Home/Home';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
