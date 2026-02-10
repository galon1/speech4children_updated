import { createHashRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Facility from "./pages/Facility.tsx";
import Testimonials from "./pages/Testimonials.tsx";
import Contact from "./pages/Contact.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "facility", element: <Facility /> },
      { path: "testimonials", element: <Testimonials /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default router;
