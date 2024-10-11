import PropTypes from "prop-types";

const Botao = ({ children }) => {
  return (
    <button className="text-base border-none border-transparent py-4 px-1 sm:px-2 w-48 sm:w-full transition duration-500 bg-blue-800 text-gray-100 rounded-lg hover:bg-blue-950">
      {children}
    </button>
  );
};

Botao.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Botao;
