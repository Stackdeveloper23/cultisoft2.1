import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState } from 'react';
import AuthUser from "../pageauth/AuthUser";
import ButtonTheme from './ButtonTheme';
const Navbar = () => {
        const [isOpen, setIsOpen] = useState(false);
      
        const toggleDropdown = () => {
          setIsOpen(!isOpen);
        };

        const { getLogout, getToken } = AuthUser();

        const logoutUser = () => {
            const token = getToken();
            if (!token) {
                console.error('No token found. User may already be logged out.');
                return;
            }
            getLogout(token)
                .then((response) => {
                    console.log('logout successful', response);
                })
                .catch((error) => {
                    console.error('logout error',error);
                });
        };
      
    return(
        <nav className="navbar  navbar-dark bg-dark border-bottom border-secondary" style={{height: "70px"}}>
           
            <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
           
            <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div className="input-group">
                    
                    
          <ButtonTheme/>
                </div>
            </form>
            <div className="nav-item dropdown me-3">
      <a
        className="nav-link dropdown-toggle" 
        href="#" 
        role="button" 
        onClick={toggleDropdown}
      >
        <img
          src="https://github.com/hih.png"
          alt=""
          width="32"
          height="32"
          className="rounded-circle me-2"
        />
      </a>
      {isOpen && (
        <ul className="dropdown-menu show" style={{ top: '50px', right: '0', left: 'auto' }}>
          
          <li>
            <a className="dropdown-item" onClick={logoutUser} style={{ cursor: 'pointer' }}>
              Sign out
            </a>
          </li>
        </ul>
      )}
    </div>
        
        </nav>
    )
}
export default Navbar;