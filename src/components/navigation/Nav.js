import { Link } from "react-router-dom";
import Logo from "../../assets/images/gromada.png";
import "./nav.css";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li className="parent logo">
          <Link className="logo_link" to="/">
            <img src={Logo} alt="" />
          </Link>
          <div className="clip-logo"></div>
        </li>
        <div className="menu">
          <li className="parent menu-text">
            <Link className="menu-item-main " to="/">
              Home
            </Link>
            <div className="clip"></div>
            <div className="child-div">
              <ul className="child child_home ul-sub_text">
                <li className="menu-sub_text">
                  <Link className="menu-item-sub " to="/">
                    Features
                  </Link>
                </li>
                <li className="menu-sub_text">
                  <Link className="menu-item-sub" to="/about">
                    Showcase
                  </Link>
                </li>
                <li className="menu-sub_text">
                  <Link className="menu-item-sub" to="/services">
                    Comunity
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="parent menu-text">
            <Link className="menu-item-main" to="/about">
              About
            </Link>
            <div className="clip-about"></div>
            <div className="child-div">
              <ul className="child child_about ul-sub_text">
                <li className="menu-sub_text">
                  <Link className="menu-item-sub " to="/">
                    User guides
                  </Link>
                </li>
                <li className="menu-sub_text">
                  <Link className="menu-item-sub" to="/about">
                    Forum
                  </Link>
                </li>
                <li className="menu-sub_text">
                  <Link className="menu-item-sub" to="/services">
                    Showcase
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="parent menu-text">
            <Link className="menu-item-main" to="/services">
              Services
            </Link>
            <div className="clip-services"></div>
            <div className="child-div-services">
              <ul className="child child_services ul-sub_text">
                <li className="menu-sub_text">
                  <Link className="menu-item-sub " to="/">
                    Resources
                  </Link>
                </li>
                <li className="menu-sub_text">
                  <Link className="menu-item-sub" to="/about">
                    Tutorials
                  </Link>
                </li>
                <li className="menu-sub_text">
                  <Link className="menu-item-sub" to="/services">
                    Job board
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
