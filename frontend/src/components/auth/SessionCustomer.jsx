import { useState } from "react";
import AuthUser from "./AuthUser";


const SessionCustomer = () => {
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
    
        <div className="nav-item dropdown">
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
            <a className="dropdown-item" href="#">
             configuracion
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" onClick={logoutUser} 
    style={{ cursor: 'pointer' }} >
              Sign out
            </a>
          </li>
        </ul>
      )}
    </div>
    )
}

export default SessionCustomer;