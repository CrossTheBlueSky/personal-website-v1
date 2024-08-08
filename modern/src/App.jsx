import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Home from './routes/Home';
import About from './routes/About';
import Projects from './routes/Projects';
import Contact from './routes/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="container mt-4">
          <Routes>
            <Route path="/modern" element={<Home />} />
            <Route path="/modern/about" element={<About />} />
            <Route path="/modern/projects" element={<Projects />} />
            <Route path="/modern/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;