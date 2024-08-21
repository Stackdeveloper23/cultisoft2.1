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
        <div className="col-sm-6" style={{ paddingRight: "15px" }}>
            <div className="btn-group">
                <button
                    type="button"
                    className="btn btn-outline-warning dropdown-toggle d-flex align-items-center"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-person"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"
                        />
                    </svg>
                    <span className="ms-2">Cuenta</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                    <li><a className="dropdown-item" href="#!">Settings</a></li>
                    <li><a className="dropdown-item" href="#!">Activity Log</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" onClick={logoutUser}>Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
    )
}

export default SessionCustomer;