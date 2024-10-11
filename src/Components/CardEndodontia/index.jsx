import PropTypes from "prop-types";

const CardEndodontia = ({ title, children }) => {
  return (
    <li className="flex flex-col gap-4 bg-white rounded-xl p-6 dark:bg-dark-100 dark:text-white shadow-lg w-11/12 ml:w-96 h-auto md:h-48 hover:scale-105 duration-300">
      <h2 className="text-xl font-medium">{title}</h2>
      <p className="font-light">{children}</p>
    </li>
  );
};

CardEndodontia.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default CardEndodontia;
