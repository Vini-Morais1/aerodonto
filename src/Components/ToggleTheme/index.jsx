import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const ToggleTheme = () => {
  const pageClasses = document.documentElement.classList;
  const toggle = () => {
    pageClasses.toggle("dark");
  };

  return (
    <div>
      <MoonIcon
        onClick={toggle}
        className="h-8 cursor-pointer block transition-all dark:hidden"
      />
      <SunIcon
        onClick={toggle}
        className="h-8 cursor-pointer hidden dark:block"
      />
    </div>
  );
};

export default ToggleTheme;
