import { useState } from "react";
import { FloatingLabel } from "flowbite-react";
import Toastify from "toastify-js";

const FormMensagem = () => {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [colorNome, setColorNome] = useState("default");
  const [colorMensagem, setColorMensagem] = useState("default");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!nome.trim()) {
      setColorNome("error");
    }
    if (!mensagem.trim()) {
      setColorMensagem("error");
    }
    if (!nome.trim() || !mensagem.trim()) {
      Toastify({
        text: "Por favor, complete todos os campos para prosseguir.",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          boxShadow: "0 10px 10px rgba(0, 0, 0, 0.1)",
          background: "#ef4444",
        },
      }).showToast();
      return;
    }

    setColorNome("default");
    setColorMensagem("default");
    setNome("");
    setMensagem("");

    window.open(
      `https://wa.me/5512987013110?text=Nome:%20${nome}%0AMensagem:%20${mensagem}`,
      "_blank"
    );
  };

  return (
    <section className="dark:text-gray-100 dark:bg-black p-6 w-full flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center mb-4 2xl:w-[700px]">
        Tem alguma dúvida? Envie sua mensagem e ficaremos felizes em ajudar!
      </h2>
      <form
        className="w-full mx-auto flex flex-col sm:items-center justify-center"
        onSubmit={handleSubmit}
      >
        <div className="sm:w-96 md:w-2/3 lg:w-800px xl:w-1/2">
          <FloatingLabel
            id="float-label-name"
            variant="outlined"
            label="Nome"
            className="dark:bg-black cursor-text"
            color={colorNome}
            onChange={(e) => {
              const valor = e.target.value;
              setNome(valor);

              if (valor.length > 0 && valor.trim() !== "") {
                setColorNome("success");
              } else if (colorNome === "success" && valor.length === 0) {
                setColorNome("default");
              } else if (valor.length > 1 && colorNome === "error") {
                setColorNome("success");
              }
            }}
            value={nome}
          />
        </div>

        <div className="sm:w-96 md:w-2/3 lg:w-800px xl:w-1/2">
          <FloatingLabel
            id="float-label-msg"
            variant="outlined"
            label="Mensagem"
            className="dark:bg-black cursor-text"
            color={colorMensagem}
            onChange={(e) => {
              const valor = e.target.value;
              setMensagem(valor);

              if (valor.length > 0 && valor.trim() !== "") {
                setColorMensagem("success");
              } else if (colorMensagem === "success" && valor.length === 0) {
                setColorMensagem("default");
              } else if (valor.length > 1 && colorMensagem === "error") {
                setColorMensagem("success");
              }
            }}
            value={mensagem}
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white text-center mx-auto px-4 py-2 rounded-lg w-24 sm:w-[150px] xl:w-[10%]"
        >
          Enviar
        </button>
      </form>
    </section>
  );
};

export default FormMensagem;
