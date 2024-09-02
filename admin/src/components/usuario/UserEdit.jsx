import { useEffect, useState } from "react";
import Config from "../../Config";

const UserEdit = ({ id }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await Config.getUserById(id);
        setUser({
          name: response.data.name,
          email: response.data.email,
        });
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    if (id) fetchUser();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Config.putUsers(user, id);
      window.location.reload();
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };


  return (
    <>
      {/* Botón para abrir el modal */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#editModal-${id}`}
      >
        <span className="material-symbols-outlined">
edit
</span>
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id={`editModal-${id}`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby={`editModalLabel-${id}`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id={`editModalLabel-${id}`}>
                Editar Usuario
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="container">
              <div className="modal-body">
                <form onSubmit={handleSubmit} className="d-flex flex-column">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={user.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Email
                    </label>
                    <input
                      className="form-control"
                      id="email"
                      name="email"
                      value={user.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary">
                    Actualizar
                  </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserEdit;
