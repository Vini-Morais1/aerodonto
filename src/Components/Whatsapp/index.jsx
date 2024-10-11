import { Link } from "react-router-dom";
import whatsLogo from "./whats-logo.png";

const Whatsapp = () => {
  return (
    <Link
      className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 hover:scale-125 duration-300"
      to="https://wa.me/5512987013110?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="h-14 sm:h-20" src={whatsLogo} alt="Logo WhatsApp" />
    </Link>
  );
};

export default Whatsapp;
