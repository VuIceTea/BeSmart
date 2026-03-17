import { Routes, Route } from "react-router-dom";
import ChooseProfile from "./pages/ChooseProfile";
import HomePage from "./pages/HomePage";
import LessonPage from "./pages/LessonPage";
import KhamPhaPage from "./pages/KhamPhaPage";
import NhatKyPage from "./pages/NhatKyPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/choose-profile" element={<ChooseProfile />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/lesson" element={<LessonPage />} />
        <Route path="/khampha" element={<KhamPhaPage />} />
        <Route path="/nhatky" element={<NhatKyPage />} />
      </Routes>
    </>
  );
}

export default App;
