// src/App.jsx
import { HelmetProvider } from "@vuer-ai/react-helmet-async";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import "./Global.css";
import ChiSono from "./pages/ChiSono";
import Contatti from "./pages/Contatti";
import Home from "./pages/Home";
import Proposte from "./pages/Proposte";
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
