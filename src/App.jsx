import { Routes, Route } from "react-router-dom";
import ChooseProfile from "./pages/ChooseProfile";
import HomePage from "./pages/HomePage";
import LessonPage from "./pages/LessonPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ChooseProfile />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/lesson" element={<LessonPage />} />
      </Routes>
    </>
  );
}

export default App;
