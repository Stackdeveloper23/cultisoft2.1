import { useEffect, useState } from "react";
import Config from "../Config";
import UserEdit from "./UserEdit";
import UserCreate from "./UserCreate";

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const Users = async () => {
      try {
        const response = await Config.getUsers();
        console.log("Response completa:", response);

        if (Array.isArray(response.data)) {
            setUsers(response.data);
        } else {
          console.error("La respuesta no es un array:", response);
          setUsers([]);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setUsers([]);
      }
    };

    

    Users();
  }, []);

  const deleteUsersById = async (id) => {
    const isDelete = window.confirm("Delete User?");
    if (isDelete) {
        try {
            await Config.deleteUsers(id);
            window.location.reload();
          } catch (error) {
            console.error("Error deleting category:", error);
          }
    }
  };

  return (
    <>
      <h1 className="w-100 d-flex justify-content-center">User Table</h1>
      <div className="container">
        <div>
          <UserCreate/>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>             
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Email</th>
              <th scope="col">Creado el:</th>
              <th scope="col">Accion:</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id || index}>
                <th scope="row">{index + 1}</th>
                <td>{user.id || 'N/A'}</td>
                <td>{user.name || "N/A"}</td>
                <td>{user.email || "N/A"}</td>              
                <td>{user.created_at || "N/A"}</td>
                <td>
                  <UserEdit id={user.id} />

                  <button
                    className="btn btn-danger d-flex w-30"
                    onClick={() => deleteUsersById(user.id)}
                  >
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default UserTable;
