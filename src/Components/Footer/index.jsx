import { Link } from "react-router-dom";
import logoWhite from "../../assets/aerodonto-logo-white.png";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-8 max-w-full bg-gray-800 py-6 lg:px-12 lg:flex-row lg:justify-between">
      <div className="flex flex-col gap-2 items-center">
        <Link to={"/"}>
          <img
            className="h-14 block text-center"
            src={logoWhite}
            alt="Logo Consultório Aerodonto"
          />
        </Link>
        <span className="font-montserrat text-gray-100 text-base">
          Dra Barbara Cardoso | CRO 120288
        </span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-gray-100 text-lg">Onde estamos</span>
        <Link
          className="px-6 lg:w-72 lg:px-0 text-center"
          to="https://www.google.com/maps/place/Consult%C3%B3rio+Odontol%C3%B3gico+Aerodonto+-+Barbara+Cardoso/@-23.0131263,-45.5831186,17z/data=!3m1!4b1!4m6!3m5!1s0x94ccf92134c3666f:0x3f2fbf40d53db8d6!8m2!3d-23.0131263!4d-45.5831186!16s%2Fg%2F11fpv6h4_t?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-center text-gray-100 transition duration-300 hover:underline hover:text-blue-500 dark:hover:text-blue-500 underline">
            R. Padre José Rubens Bonafé, 759 - Jardim das Bandeiras, Taubaté-SP,
            CEP 12051-250
          </span>
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-gray-100">Nosso WhatsApp</span>
        <Link
          className="px-6 lg:w-72 lg:px-0 text-center"
          to="https://wa.me/5512987013110?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-center underline text-gray-100 transition duration-300 hover:underline hover:text-green-500 dark:hover:text-green-500 ">
            12 98701-3110
          </span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
