import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'

import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import MainPage from './Page/MainPage/MainPage'
import About from './Page/About/About'
import Leadership from './Page/Leadership/Leadership'
import Board from './Page/Board/Board'
import Service from './Page/Service/Service'
import Contact from './Page/Contact/Contact'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true,
        element: <MainPage />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/leadership",
        element: <Leadership />
      },
      {
        path: "/board",
        element: <Board />
      },
      {
        path: "/our-services",
        element: <Service />
      },
      {
        path: "/contact",
        element: <Contact />
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} >
      <Navbar />
      <Footer />
    </RouterProvider>
  )
}

export default App
