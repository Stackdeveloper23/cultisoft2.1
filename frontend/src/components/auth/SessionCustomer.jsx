import AuthUser from "./AuthUser";


const SessionCustomer = () => {

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
        <div>
            <div className="row">
        <div className="col-sm-6" style={{paddingRight: "15px"}}>
           
        <button type="button" className="btn btn-outline-warning">
          <a className="icon-link icon-link-hover" style={{"--bs-icon-link-transform": "translate3d(0, -.125rem, 0)" }}
            href="inicio_sesion.php">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person"
              viewBox="0 0 16 16">
              <path
                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
            </svg>
            Cuenta
          </a>
        </button>
    </div>
<div className="col-sm-6">
  <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
      <span className="material-symbols-outlined" style={{fontSize: "40px"}}>
      account_circle
      </span>
            <li className="nav-item dropdown">
            
                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#!">Settings</a></li>
                    <li><a className="dropdown-item" href="#!">Activity Log</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" onClick={logoutUser}>Logout</a></li>
                </ul>
            </li>
        </ul>
        </div>
        </div>
        </div>
    )
}

export default SessionCustomer;