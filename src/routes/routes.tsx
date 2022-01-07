import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/Header";
import Characters from "../pages/Characters";
import Character from "../pages/Character";

const AppRoutes = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Characters />} />

      <Route path="/character/:id" element={<Character />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
