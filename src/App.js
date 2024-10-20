import './App.css';
import HomePage from './components/HomePage.jsx';
import About from './components/About.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactPage from './components/ContactPage.jsx';
import ItSupport from './components/ItSupport.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/mission" element={<About section="mission" />} />
            <Route path="/about/choose-us" element={<About section="chooseUs" />} />
            <Route path="/about/story" element={<About section="history" />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services/it-support" element={<ItSupport />} />
            <Route path="/services/cloud-services" element={<ItSupport />} />

          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
