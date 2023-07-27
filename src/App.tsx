import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Calculator from "./pages/Calculator";
import Timer from "./pages/Timer";
import Ladder from "./pages/Ladder";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="pages/calculator" element={<Calculator />} />
        <Route path="pages/Timer" element={<Timer />} />
        <Route path="pages/Ladder" element={<Ladder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
