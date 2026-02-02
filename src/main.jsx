import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Product from "./components/Product";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import "./index.css";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import Index from "./components/Index";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/products",
        element: (
          <Suspense fallback={<h1>Loading ......</h1>}>
            <Product />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
