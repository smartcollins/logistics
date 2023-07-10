import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import ServiceInfo from "./pages/ServiceInfo";
import Project from "./pages/Project";
import ProjectInfo from "./pages/ProjectInfo";
import Blog from "./pages/Blog";
import BlogInfo from "./pages/BlogInfo";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Change from "./pages/Change";
import Liecenses from "./pages/Liecenses";
import Protection from "./pages/Protection";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "service",
          element: <Service />,
        },
        {
          path: "service-info",
          element: <ServiceInfo />,
        },
        {
          path: "project",
          element: <Project />,
        },
        {
          path: "project-info",
          element: <ProjectInfo />,
        },
        {
          path: "blog",
          element: <Blog />,
        },
        {
          path: "blog-info",
          element: <BlogInfo />,
        },
        {
          path: "team",
          element: <Team />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "pricing",
          element: <Pricing />,
        },
        {
          path: "change",
          element: <Change />,
        },
        {
          path: "licenses",
          element: <Liecenses />,
        },
        {
          path: "protection",
          element: <Protection />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
