import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardEspecialidades = ({ img, title, url, text }) => {
  return (
    <div className="flex flex-col w-80 sm:px-0 sm:w-96 items-center justify-center">
      <img
        className="w-auto rounded-t-xl"
        src={img}
        alt="Imagem de um raio X"
      />
      <div className="flex flex-col items-start pt-4 gap-4 px-6 h-52 bg-white dark:bg-zinc-900 rounded-b-xl">
        <h3 className="text-lg font-bold text-gray-900 underline dark:text-slate-100 hover:text-blue-500 dark:hover:text-blue-500 duration-500">
          <Link to={url}>{title}</Link>
        </h3>
        <p className="text-base text-black dark:text-slate-100">{text}</p>
      </div>
    </div>
  );
};

CardEspecialidades.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default CardEspecialidades;
