// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ChiSono from './pages/ChiSono';
import Proposte from './pages/Proposte';
import Contatti from './pages/Contatti';
// Importa le altre pagine qui...

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ChiSono />} />
          <Route path="/chi-sono" element={<ChiSono />} />
          {<Route path="/proposte" element={<Proposte />} /> }
          {<Route path="/contatti" element={<Contatti />} />}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;