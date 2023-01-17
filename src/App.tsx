import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Calculator from "./pages/Calculator";
import Timer from "./pages/Timer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="pages/calculator" element={<Calculator />} />
        <Route path="pages/Timer" element={<Timer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
