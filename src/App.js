import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Clients from "./pages/Clients";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Mission from "./pages/Mission";
import Contact from "./pages/Contact";
import WhatsApp from "./components/WhatsApp";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <WhatsApp />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
