import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/Header";
import Characters from "../pages/Characters";
import CharacterInfo from "../pages/CharacterInfo";
import Episodes from "../components/Episodes";

const AppRoutes = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Characters />} />
      <Route path="/character-info/:id" element={<CharacterInfo />} />

      <Route path="/episodes" element={<Episodes />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
