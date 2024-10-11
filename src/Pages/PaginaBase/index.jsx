import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer";
import Whatsapp from "../../Components/Whatsapp";
import NavBar from "../../Components/NavBar";

const PaginaBase = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Whatsapp />
      <Footer />
    </>
  );
};

export default PaginaBase;
