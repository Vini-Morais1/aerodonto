import draBarbosa from "./dra.png";
import raioX from "./raiox.png";
import faceta from "./faceta-img.png";
import implante from "./implante.png";

import CardEspecialidades from "../../Components/CardEspecialidades";
import OpiniaoClientes from "../../Components/OpiniaoClientes";
import FormMensagem from "../../Components/FormMensagem";
import Botao from "../../Components/Botao";

import { FaFacebook, FaInstagram } from "react-icons/fa";

const Inicio = () => {
  return (
    <main className="overflow-hidden">
      <section className="relative flex items-center justify-between sm:static pl-1 py-6 px-0 w-full sml:px-14 md:justify-center xl:w-auto md:gap-10 bg-white dark:bg-zinc-900">
        <div className="relative z-[2] w-72 md:w-[400px] sm:static sm:z-0 flex flex-col gap-8">
          <h3 className="text-gray-500 text-sm w-full ml:text-2xl dark:text-stone-100">
            CONSULTÓRIO ODONTOLÓGICO
          </h3>
          <h1 className="text-4xl md:text-6xl text-gray-500 font-bold dark:text-stone-100">
            Dra. Bárbara Cardoso
          </h1>
          <a
            href="https://wa.me/5512987013110?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Botao>Agendar Consulta Grátis</Botao>
          </a>
        </div>
        <img
          className="absolute z-0 bottom-1 -right-6 sml:right-auto sml:bottom-auto h-64 filter drop-shadow-[0px_0px_8px_grey] dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] sml:static md:h-[400px] lg:h-[600px]"
          src={draBarbosa}
          alt="Foto da Dra. Bárbara Cardoso"
        />
      </section>
      <section className="bg-zinc-200 text-black dark:bg-zinc-950 py-8">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl sm:text-4xl font-semibold mb-4 dark:text-gray-100">
            Especialidades
          </h3>
          <span className="sm:text-2xl dark:text-gray-100">
            Principais especialidades que atuamos.
          </span>
        </div>
        <div className="mt-5 grid gap-5 px-4 items-center place-items-center lg:grid-cols-2 xl:grid-cols-3">
          <CardEspecialidades
            img={raioX}
            title="ENDODONTIA"
            url="endodontia"
            text="Endodontia alivia dores, previne infecções e preserva dentes e estética do sorriso."
          />
          <CardEspecialidades
            img={faceta}
            title="FACETAS EM RESINA"
            url="facetas-em-resina"
            text="Transforme seu sorriso com dentes perfeitos e naturais rapidamente!"
          />
          <CardEspecialidades
            img={implante}
            title="IMPLANTES"
            url="implantodontia"
            text="Recupere seu sorriso e confiança com dentes fixos e naturais!"
          />
        </div>
      </section>
      <section className="pl-1 p-6 md:py-12 px-0 flex flex-col items-center sml:px-14 justify-center gap-6 bg-white dark:bg-zinc-900">
        <h3 className="text-4xl sm:text-5xl font-montserrat dark:text-white">
          Redes sociais
        </h3>
        <div className="flex gap-8">
          <a
            href="https://www.instagram.com/consultorio.aerodonto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              size={70}
              className="dark:text-white hover:text-[#E0306A] dark:hover:text-[#E0306A] duration-500 hover:scale-110"
            />
          </a>

          <a
            href="https://www.facebook.com/aerodonto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook
              size={70}
              className="dark:text-white hover:text-[#1877f2] dark:hover:text-[#1877f2] duration-500 hover:scale-110"
            />
          </a>
        </div>
      </section>
      <OpiniaoClientes />
      <FormMensagem />
    </main>
  );
};

export default Inicio;
