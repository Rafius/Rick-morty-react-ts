import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/Header";
import Characters from "../pages/Characters";
import CharacterInfo from "../pages/CharacterInfo";

const AppRoutes = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Characters />} />

      <Route path="/character-info/:id" element={<CharacterInfo />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
