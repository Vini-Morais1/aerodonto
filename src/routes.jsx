import { BrowserRouter, Route, Routes } from "react-router-dom";

import PaginaBase from "./Pages/PaginaBase";
import Inicio from "./Pages/Inicio";
import Sobre from "./Pages/Sobre";
import Contato from "./Pages/Contato";
import NaoEncontrada from "./Pages/NaoEncontrada";
import Endodontia from "./Pages/Endodontia";
import Implantodontia from "./Pages/Implantodontia";
import FacetasEmResina from "./Pages/FacetasEmResina";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/aerodonto" element={<PaginaBase />}>
          <Route index element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/facetas-em-resina" element={<FacetasEmResina />} />
          <Route path="/implantodontia" element={<Implantodontia />} />
          <Route path="/endodontia" element={<Endodontia />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
