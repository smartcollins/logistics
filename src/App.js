import logo from './logo.svg';
import './App.css';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Footer from './component/Footer';
import Nav from './component/Nav';
import ErrorPage from './component/ErrorPage';

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
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
