import { createBrowserRouter } from "react-router-dom";

import App from "./src/App";
import ChooseProfile from "./src/pages/ChooseProfile";
import HomePage from "./src/pages/HomePage";
import LessonPage from "./src/pages/LessonPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/choose-profile",
    element: <ChooseProfile />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/lesson",
    element: <LessonPage />,
  },

  // 404
  {
    path: "*",
    element: <h1>404 - Không tìm thấy trang</h1>,
  },
]);

export default router;
