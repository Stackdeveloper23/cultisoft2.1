import { useEffect, useRef, useState } from "react";
import logo from "../assets/img/logoCultisoft.svg";
import "../assets/style/login.css";
import { Link, useNavigate } from "react-router-dom";
import Config from "../Config";
import AuthUser from "../components/auth/AuthUser";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const { setToken, getToken } = AuthUser();
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (getToken()) {
      navigate("/");
    }
  }, []);

  const submitLogin = async (e) => {
    e.preventDefault();
    await axios.get("/santum/csrf-cookie").then(() => {
      Config.getLogin({ email, password }).then(({ data }) => {
        if (data.success) {
          console.log(data);
          setToken(data.user, data.token, data.user.roles[0].name);
        } else {
          setMessage(data.message || "incorrect username or password");
        }
      });
    });
  };

  /* register */
  const Change = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const Submit = async (e) => {
    e.preventDefault();
    try {
      const data = await Config.getRegister(formData);
      setMessage("Registration successful!"); // Mensaje de éxito
      setErrors({});
      setIsModalOpen(true);
      // window.location.reload();
      console.log(data);
    } catch (error) {
      if (error.response && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        setMessage("An error occurred. Please try again."); // Mensaje de error genérico
      }
    }
  };
  const closeModal = () => {
    setIsModalOpen(false);
    window.location.reload();
  };

  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef(null);
  const handleRegisterClick = () => {
    setIsActive(true);
  };
  const handleLoginClick = () => {
    setIsActive(false);
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.classList.toggle("active", isActive);
    }
  }, [isActive]);

  return (
    <div className="login">
      <div className="container" id="container" ref={containerRef}>
        <div className="form-container sign-up ">
          <form onSubmit={Submit} className="m-3">
            <h1>Crear cuenta</h1>
            <label className="w-100">Nombre:</label>
            <input
              type="text"
              placeholder="Nombre"
              required
              name="name"
              value={formData.name}
              onChange={Change}
            />
            {errors.name && <p>{errors.name[0]}</p>}

            <label className="w-100">Email:</label>
            <input
              type="text"
              placeholder="Correo"
              required
              name="email"
              value={formData.email}
              onChange={Change}
            />
            {errors.email && <p>{errors.email[0]}</p>}

            <label className="w-100">Password:</label>
            <input
              type="password"
              placeholder="Contraseña"
              required
              name="password"
              value={formData.password}
              onChange={Change}
            />
            {errors.password && <p>{errors.password[0]}</p>}

            <label className="w-100">Confirm Password:</label>
            <input
              type="password"
              placeholder="confirma contraseña"
              required
              name="password_confirmation"
              onChange={Change}
            />
            {errors.password_confirmation && (
              <p>{errors.password_confirmation[0]}</p>
            )}

            <button type="submit" value="crear cuenta" name="botonreg">
              Enviar
            </button>
          </form>

          {/* Modal */}
          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <p>Su registro fue exitoso</p>

                <button onClick={closeModal}>Cerrar</button>
              </div>
            </div>
          )}
        </div>



        <div className="form-container sign-in">
          {/* fill-rule="evenodd" */}
          <button
            type="button"
            className="btn btn-outline-danger"
            style={{ backgroundColor: "white", color: "rgb(0, 163, 71)" }}
          >
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-bar-left"
                viewBox="0 0 16 16"
              >
                <path d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5"></path>
              </svg>
              Salir
            </Link>
          </button>

          <form onSubmit={submitLogin}>
            <img src={logo} height="50px" />
            <h1>Ingresar</h1>
           
            {message && (
              <div className="text-center text-wrap alert alert-danger">
                <span className="material-symbols-outlined">error</span>
                {message}
              </div>
            )}

            <input
              type="email"
              placeholder="Correo"
              required
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Contraseña"
              required
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <a href="#">¿Olvidaste tu contraseña?</a>
            <button type="submit" value="iniciar sesion" name="boton" >
                Iniciar Sesion</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <img src={logo} height="50px" />
              <h1>Registro</h1>
              <p>
                Ingrese sus datos personales para utilizar todas las funciones
                del sitio.
              </p>
              <button className="hidden" id="login" onClick={handleLoginClick}>
                Ingresar
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>¡Bienvenid@ de nuevo!</h1>
              <p>
                Regístrese con sus datos personales para utilizar todas las
                funciones del sitio
              </p>
              <button
                className="hidden"
                id="register"
                onClick={handleRegisterClick}
              >
                Crear cuenta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
