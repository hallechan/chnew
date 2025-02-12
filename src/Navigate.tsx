import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Creatives from "./pages/Creatives";
import Projects from "./pages/Projects";

function Navigate() {
  return (
    <Router>
      <nav className="m-12 subtitle text-right">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'underline mx-4' : 'mx-4')}>home</NavLink>/
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'underline mx-4' : 'mx-4')}>about</NavLink>/
        <NavLink to="/projects" className={({ isActive }) => (isActive ? 'underline mx-4' : 'mx-4')}>projects</NavLink>/
        <NavLink to="/creatives" className={({ isActive }) => (isActive ? 'underline mx-4' : 'mx-4')}>creatives</NavLink>/
        <a target="_blank" href="https://drive.google.com/file/d/1zKbU-PUF634j93C1r45TKtg-WzNxVKwq/view?usp=sharing" className="mx-4">cv</a>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/creatives" element={<Creatives />} />
      </Routes>
    </Router>
  );
}

export default Navigate;
