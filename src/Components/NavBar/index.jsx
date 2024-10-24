import { Navbar, Dropdown } from "flowbite-react";
import ToggleTheme from "../ToggleTheme";
import logo from "../../assets/aerodonto-logo.avif";
import logoGreen from "../../assets/aerodonto-logo-green.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NavBar = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="h-36 dark:bg-dark-100"></div>
      <Navbar
        fluid
        rounded
        className="p-6 shadow fixed top-0 w-full z-[99999] bg-white dark:text-gray-100 dark:bg-dark-100 dark:shadow-none"
      >
        <div className="flex-col gap-2 items-center">
          <Link to="/" onClick={scrollToTop}>
            <img
              src={logo}
              className="mr-3 h-14 block dark:hidden"
              alt="Flowbite React Logo"
            />
            <img
              src={logoGreen}
              className="mr-3 h-14 hidden dark:block"
              alt="Flowbite React Logo"
            />
          </Link>
          <span className="self-center whitespace-nowrap font-montserrat text-xs dark:text-[#00A085] lg:text-base">
            Dra Barbara Cardoso | CRO 120288
          </span>
        </div>
        <div className="flex md:order-2">
          <div className="hidden ml:block mr-4 ">
            <ToggleTheme />
          </div>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link
            to="/"
            onClick={scrollToTop}
            className="text-lg ml:text-xl border-y border-black/15 dark:border-gray-100/50 md:border-none"
          >
            <span className="text-gray-800 hover:text-blue-500 dark:text-gray-400 dark:hover:text-gray-100 duration-300">
              Home
            </span>
          </Link>
          <div className="hidden md:block">
            <Dropdown
              arrowIcon={true}
              inline
              style="dark"
              className="bg-white dark:bg-dark-100"
              label={
                <span className="text-sm ml:text-xl text-gray-800 hover:text-blue-500 dark:text-gray-400 dark:hover:text-gray-100 duration-300">
                  Principais Atividades
                </span>
              }
            >
              <div className="flex flex-col remover-padding">
                <Link
                  to="/implantodontia"
                  className="text-sm ml:text-xl px-4 py-2 hover:bg-[#F6F6F7] dark:hover:bg-zinc-900 duration-300 text-gray-800 hover:text-blue-500 dark:text-gray-400 dark:hover:text-gray-100 border-b border-black/15 dark:border-gray-100/50"
                >
                  <span className="">Implantodontia</span>
                </Link>
                <Link
                  to="/facetas-em-resina"
                  className="text-sm ml:text-xl px-4 py-2 hover:bg-[#F6F6F7] dark:hover:bg-zinc-900 duration-300 text-gray-800 hover:text-blue-500 dark:text-gray-400 dark:hover:text-gray-100 border-b border-black/15 dark:border-gray-100/50"
                >
                  <span>Facetas em resina</span>
                </Link>
                <Link
                  to="/endodontia"
                  className="text-sm ml:text-xl px-4 py-2 hover:bg-[#F6F6F7] dark:hover:bg-zinc-900 duration-300  text-gray-800 hover:text-blue-500 dark:text-gray-400 dark:hover:text-gray-100"
                >
                  <span>Endodontia</span>
                </Link>
              </div>
            </Dropdown>
          </div>
          <Link
            to="/sobre"
            onClick={scrollToTop}
            className="text-lg ml:text-xl border-b border-black/15 dark:border-gray-100/50 md:border-none"
          >
            <span className="text-gray-800 hover:text-blue-500 dark:text-gray-400 dark:hover:text-gray-100 duration-300">
              Sobre
            </span>
          </Link>
          <Link
            to="/contato"
            onClick={scrollToTop}
            className="text-lg ml:text-xl border-b border-black/15 dark:border-gray-100/50 md:border-none"
          >
            <span className="text-gray-800 hover:text-blue-500 dark:text-gray-400 dark:hover:text-gray-100 duration-300">
              Contato
            </span>
          </Link>
          <div className="ml:hidden ml:text-xl py-1 ml:m-0 border-b border-black/15 dark:border-gray-100/50 md:border-none">
            <ToggleTheme />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
