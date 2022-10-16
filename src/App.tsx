import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Calculator from "./pages/Calculator";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="pages/calculator" element={<Calculator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
