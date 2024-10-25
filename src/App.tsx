import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/root";
import StyledErrorPage from "./pages/Error";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <Intro />,
    errorElement: <StyledErrorPage />,
  },
  {
    path: "/home",
    element: <RootLayout />,
    children: [{ path: "/home/", element: <Home /> }],
    errorElement: <StyledErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
