import {Link} from 'react-router-dom'
import "./Header.css"
const Header =() => {
  return(
    <div>
        <header>
          <Link to="/"  className="logo">
          Vivekanand Collage
          </Link>
          <div className='right'>
            <nav>
                <Link to="/home" className="link">Home</Link>
                <Link to= "/about" className="link">About</Link>
                <Link to= "/courses" className="link">Courses</Link>
                <Link to= "/contact" className="link">Contact</Link>
            </nav>
            <Link to={"/admission"} className="apply-btn">
            Apply Now!
            </Link>
            </div>
        </header>

    </div>
  );
};

export default Header;