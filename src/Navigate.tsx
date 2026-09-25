import { HashRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Creatives from "./pages/Creatives";

function Navigate() {
  return (
    <Router>
      <nav className="m-4 md:m-12 subtitle text-center md:text-right">
        <div className="flex flex-wrap justify-center md:justify-end gap-2 md:gap-4">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'underline' : '')}>home</NavLink>
          <span className="hidden md:inline">/</span>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'underline' : '')}>about</NavLink>
          <span className="hidden md:inline">/</span>
          <NavLink to="/creatives" className={({ isActive }) => (isActive ? 'underline' : '')}>creatives</NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/creatives" element={<Creatives />} />
      </Routes>
    </Router>
  );
}

export default Navigate;
