import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/Header";
import Characters from "../pages/Characters";
import CharacterInfo from "../pages/CharacterInfo";
import Episodes from "../components/Episodes";
import { Suspense } from "react";

const AppRoutes = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback="Loading Characters...">
            <Characters />
          </Suspense>
        }
      />
      <Route
        path="/character-info/:id"
        element={
          <Suspense fallback="Loading CharacterInfo...">
            <CharacterInfo />
          </Suspense>
        }
      />
      <Route
        path="/episodes"
        element={
          <Suspense fallback="Loading Episodes...">
            <Episodes />
          </Suspense>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
