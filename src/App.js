// import logo from './logo.svg';
// import './App.css';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Footer from './component/Footer';
import Nav from './component/Nav';
import ErrorPage from './pages/ErrorPage';
import Project from './pages/Project';
import Blog from './pages/Blog';
import BlogInfo from './pages/BlogInfo';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Change from './pages/Change';
import Liecenses from './pages/Liecenses';
import Protection from './pages/Protection';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Footer />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/nav",
      element: <Nav />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/project",
      element: <Project />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/blog",
      element: <Blog />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/blog-info",
      element: <BlogInfo />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/team",
      element: <Team />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/contact",
      element: <Contact />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/pricing",
      element: <Pricing />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/change",
      element: <Change />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/liecenses",
      element: <Liecenses />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/protection",
      element: <Protection />,
      errorElement: <ErrorPage />,
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
