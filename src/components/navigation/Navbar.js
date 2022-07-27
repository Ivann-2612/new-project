import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Services from "../../pages/Services";
import Nav from "./Nav";

const Navbar = () => {
  return (
    <div>
      <Nav />
      {/* <div className="clip"></div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
      </Routes>
    </div>
  );
};

export default Navbar;
