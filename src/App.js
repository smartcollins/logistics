// import logo from './logo.svg';
// import './App.css';
// import Footer from './component/Footer';

import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import color from './data/color';
import Logo from './component/Logo';
import { Clock, Envelope, Phone } from 'phosphor-react';

import Home from './pages/Home';
// import Nav from './component/Nav';
import ErrorPage from './pages/ErrorPage';
import About from './pages/About';
import Service from './pages/Service';
import ServiceInfo from './pages/ServiceInfo';
import Project from './pages/Project';
import ProjectInfo from './pages/ProjectInfo';
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
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    // {
    //   path: "/nav",
    //   element: <Nav />,
    //   errorElement: <ErrorPage />,
    // },
    {
      path: "/about",
      element: <About />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/service",
      element: <Service />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/service-info",
      element: <ServiceInfo />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/project",
      element: <Project />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/project-info",
      element: <ProjectInfo />,
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
      <div className='text-white capitalize'>
            <div style={{ backgroundColor: color.blueBg }} className='flex items-center justify-between py-4'>
                <div className='mx-auto bg-red-500 lg:flex lg:w-3/4'>
                <div className='hidden xl:block w-1/3'>
                    <Logo />
                </div>
                <div className='flex flex-col items-center justify-between gap-4 w-full md:flex-row'>
                    <div className='flex items-center gap-4 w-full '>
                        <div className='p-3 rounded-full bg-[#111c55] border border-[#273270]'>
                            <Clock size={20} color="#f6b426" />
                        </div>
                        <div>
                            <p>Mon - Sat 9.00 - 18.00</p>
                            <p>Sunday Closed</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 w-full '>
                        <div className='p-3 rounded-full bg-[#111c55] border border-[#273270]'>
                            <Envelope size={20} color="#f6b426" />
                        </div>
                        <div>
                            <p>Email</p>
                            <p>contact@logistics.com</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 w-full '>
                        <div className='p-3 rounded-full bg-[#111c55] border border-[#273270]'>
                            <Phone size={20} color="#f6b426" />
                        </div>
                        <div>
                            <p>Call us</p>
                            <p>(00) 112 365 489</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
      {/* <Nav/> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
