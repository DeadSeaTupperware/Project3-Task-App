import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom/dist";
import "./index.css";
import "semantic-ui-css/semantic.min.css";

import App from "./App.jsx";
// import Error from "./pages/Error";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import TaskBoard from "./pages/TaskBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // error: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/taskboard",
        element: <TaskBoard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
