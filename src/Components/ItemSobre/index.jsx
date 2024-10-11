import PropTypes from "prop-types";

const ItemSobre = ({ title, children }) => {
  return (
    <li className="flex flex-col gap-4 bg-white rounded-xl p-6 w-11/12 ml:w-96 h-auto md:h-64 lg:h-80 dark:bg-dark-100 dark:text-white shadow-lg hover:scale-105 duration-300 xl:h-64">
      <span className="text-xl font-medium">{title}</span>
      <p className="font-light">{children}</p>
    </li>
  );
};

ItemSobre.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default ItemSobre;
