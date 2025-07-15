import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Country } from "./Pages/Country";
import { Contact } from "./Pages/Contact";
import { About } from "./Pages/About";
import { MainLayout } from "./Components/Layout/MainLayout";
import { Error } from "./Pages/Error";
import { CountryDetails } from "./Components/Layout/CountryDetails";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement:<Error/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "country",
          element: <Country />,
        },
        {
          path: "country/:id",
          element: <CountryDetails/>,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
