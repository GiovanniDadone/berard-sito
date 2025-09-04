// src/App.jsx
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from '@vuer-ai/react-helmet-async';
import Layout from './components/layout/Layout';
import ChiSono from './pages/ChiSono';
import Proposte from './pages/Proposte';
import Contatti from './pages/Contatti';
import Home from './pages/Home';
import './Global.css';
// Importa le altre pagine qui...

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chi-sono" element={<ChiSono />} />
            <Route path="/proposte" element={<Proposte />} />
            <Route path="/contatti" element={<Contatti />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
