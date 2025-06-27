import {Link} from 'react-router-dom'
import "./Header.css"
import { useState } from "react";
const Header =() => {
  const [isMobileMenuOpen, SetIsMobileOpen] = useState(false);
  return(
    <div>
        <header>
          <Link to="/"  className="logo">
          Vivekanand Collage
          </Link>
          <button
          className="hamburger-menu"
          onClick={() => SetIsMobileOpen(true)}
          >
            <span className="hamburger-icon"></span>
            <span className="hamburger-icon"></span>
            <span className="hamburger-icon"></span>
            </button>
            {isMobileMenuOpen ? (
              <>
              <div className="mobile-menus">
              <button 
              className="close-button"
              onClick={() => SetIsMobileOpen(false)}
              >
                X
              </button>
              <ul>
                <li>
                  <Link
                  to="/home"
                  className="link"
                  onClick={() => SetIsMobileOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                  to="/about"
                  className="link"
                  onClick={() => SetIsMobileOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                  to="/courses"
                  className="link"
                  onClick={() => SetIsMobileOpen(false)}
                  >
                    courses
                  </Link>
                  </li>
                  <li>
                  <Link
                  to="/contact"
                  className="link"
                  onClick={() => SetIsMobileOpen(false)}
                  >
                    contact
                  </Link>
                  </li>
                  <li>
                  <Link
                  to="/admission"
                  className="button"
                  onClick={() => SetIsMobileOpen(false)}
                  >
                    Apply Now!
                  </Link>
                  </li>
              </ul>
              </div>
            
              </>
            ) : (
          <div className='right'>
            <nav>
                <Link to="/home" className="link">Home</Link>
                <Link to= "/about" className="link">About</Link>
                <Link to= "/courses" className="link">Courses</Link>
                <Link to= "/contact" className="link">Contact</Link>
            </nav>
            <Link to={"/admission"} className="button">
            Apply Now!
            </Link>
            </div>
            )}
        </header>

    </div>
  );
};

export default Header;