import { useEffect, useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (input.trim() === "") return;

    setMessages([...messages, { sender: "user", text: input }]);

    try {
      const response = await fetch("http://localhost:8000/api/v1/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();
      setMessages((prev) => [...prev, { sender: "bot", text: data.response }]);
    } catch (error) {
      console.error("Error al comunicarse con el chatbot:", error);
    }

    setInput("");
  };

  useEffect(() => {
    const modalElement = document.getElementById("staticBackdrop");

    // Función para limpiar los mensajes cuando se cierra el modal
    const handleModalClose = () => {
      setMessages([]);
    };

    // Agregar listener al evento de cierre del modal
    modalElement.addEventListener("hidden.bs.modal", handleModalClose);

    // Limpiar el listener cuando el componente se desmonte
    return () => {
      modalElement.removeEventListener("hidden.bs.modal", handleModalClose);
    };
  }, []);
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content bg-dark text-white">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Escribele a nuestro Chatbot tus Inquietudes
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="chatbot w-100">
              <div className="chat-window">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={
                      msg.sender === "user" ? "user-message" : "bot-message"
                    }
                  >
                    {msg.text}
                  </div>
                ))}
              </div>
              <input
                className="input form-control mt-3 bg-secondary text-white"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Escribe tu mensaje..."
              />
              <div className="d-flex justify-content-center">
              <button
                className="button btn btn-primary mt-2 w-50"
                onClick={sendMessage}
              >
                Enviar
              </button>
              </div>
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
  );
};

export default Chatbot;
