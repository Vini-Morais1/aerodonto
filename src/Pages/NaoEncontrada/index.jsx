import { TbFaceIdError } from "react-icons/tb";
import Botao from "../../Components/Botao";
import { Link } from "react-router-dom";

const NaoEncontrada = () => {
  return (
    <main className="dark:text-gray-100 dark:bg-zinc-900 p-6 flex flex-col justify-center items-center text-center min-h-[72vh]">
      <div className="flex flex-col items-center lg:flex-row sm:justify-center lg:gap-20">
        <TbFaceIdError className="dark:text-white text-[100px] lg:text-[250px]" />
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-4xl">ERRO 404</h1>
          <p className="text-xl">Página não encontrada</p>
        </div>
      </div>
      <div className="w-[300px] mt-8 hover:scale-110 duration-500">
        <Link to="/">
          <Botao>Voltar a home</Botao>
        </Link>
      </div>
    </main>
  );
};

export default NaoEncontrada;
