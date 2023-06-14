import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Exchanges from "./pages/Exchanges";
import Home from "./pages/Home";
import Mentor from "./pages/Mentor";
import Signal from "./pages/Signal";
import Blogs from "./pages/Blogs";
import Resources from "./pages/Resources";
import PaystackForm from "./pages/PaystackForm";
import { ToastContainer } from "react-toastify";
import { RingLoader } from "react-spinners";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/mentorship",
    element: <Mentor />,
  },
  {
    path: "/exchange",
    element: <Exchanges />,
  },
  {
    path: "/signal",
    element: <Signal />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/blog",
    element: <Blogs />,
  },
  {
    path: "/resource",
    element: <Resources />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/pay/:id",
    element: <PaystackForm />,
  },
]);
function App() {


  
  return (
    <>
      <div>
        <ToastContainer />
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
