import PropTypes from "prop-types";
import { IoStar } from "react-icons/io5";

const CardOpiniao = ({ feedback, autor, img }) => {
  return (
    <div className="bg-white dark:bg-zinc-900 p-6 dark:text-gray-100 rounded-xl w-4/5 h-[272px] sm:w-96 sm:h-56 xl:h-72 xl:w-[250px] 2xl:w-[360px] 2xl:h-60 hover:scale-105 duration-500">
      <div className="flex gap-2 mb-4">
        <IoStar size={20} className="text-yellow-400" />
        <IoStar size={20} className="text-yellow-400" />
        <IoStar size={20} className="text-yellow-400" />
        <IoStar size={20} className="text-yellow-400" />
        <IoStar size={20} className="text-yellow-400" />
      </div>
      <div className="flex items-center gap-2">
        <img src={img} alt={`Foto paciente ${autor}`} />
        <span>{autor}</span>
      </div>
      <p className="mt-2">{feedback}</p>
    </div>
  );
};

CardOpiniao.propTypes = {
  feedback: PropTypes.string.isRequired,
  autor: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default CardOpiniao;
