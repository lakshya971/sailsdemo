import React from "react";

// DEPENDENCIES
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

// COMPONENTS
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// PAGES
import Home from "./pages/Home";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
        <Footer />
      </div>
    ),
  },
  {
    path: "/About",
    element: (
      <div>
        <Navbar />
        <About />
        <Footer />
      </div>
    ),
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
