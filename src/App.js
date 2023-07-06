// Issues
// 1. can't place a component above routeProvider.
// 2. can't place a link tag as a child in either select or option tag.

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Nav from './component/Nav';
import Footer from './component/Footer';
import ErrorPage from "./pages/ErrorPage";
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
import Layout from "./Layout";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //     errorElement: <ErrorPage />,
  //   },
  //   {
  //     path: "/nav",
  //     element: <Nav />,
  //     errorElement: <ErrorPage />,
  //   },
  //   {
  //     path: "/about",
  //     element: <About />,
  //     errorElement: <ErrorPage />,
  //   },
  //   {
  //     path: "/service",
  //     element: <Service />,
  //     errorElement: <ErrorPage />,
  //   },
  //   {
  //     path: "/service-info",
  //     element: <ServiceInfo />,
  //     errorElement: <ErrorPage />,
  //   },
  //   {
  //     path: "/project",
  //     element: <Project />,
  //     errorElement: <ErrorPage />,
  //   },
  //   {
  //     path: "/project-info",
  //     element: <ProjectInfo />,
  //     errorElement: <ErrorPage />,
  //   },
  //   {
  //     path: "/blog",
  //     element: <Blog />,
  //     errorElement: <ErrorPage />,
  //   },
  //   {
  //     path: "/blog-info",
  //     element: <BlogInfo />,
  //     errorElement: <ErrorPage />,
  //   },
  //   {
  //     path: "/team",
  //     element: <Team />,
  //     errorElement: <ErrorPage />,
  //   },
  //   {
  //     path: "/contact",
  //     element: <Contact />,
  //     errorElement: <ErrorPage />,
  //   },
  //   {
  //     path: "/pricing",
  //     element: <Pricing />,
  //     errorElement: <ErrorPage />,
  //   },
  //   {
  //     path: "/change",
  //     element: <Change />,
  //     errorElement: <ErrorPage />,
  //   },
  //   {
  //     path: "/liecenses",
  //     element: <Liecenses />,
  //     errorElement: <ErrorPage />,
  //   },
  //   {
  //     path: "/protection",
  //     element: <Protection />,
  //     errorElement: <ErrorPage />,
  //   },
  // ]);

  const routes = createBrowserRouter([{
    path: '/',
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [{
      path: 'home',
      element: <Home/>
    },{
      path: "about",
      element: <About />,
      errorElement: <ErrorPage />,
    },{
        path: "/service",
        element: <Service />,
        errorElement: <ErrorPage />,
    },
      ]
  }])

  return (
    <div>

      {/* <RouterProvider router={router} /> */}
      <RouterProvider router={routes} />

    </div>
  );
}

export default App;
