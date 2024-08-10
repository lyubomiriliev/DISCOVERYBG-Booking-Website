import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from 'react-router-dom'
import Home from './pages/Home'
import SitePage from './pages/SitePage'
import SiteDetails from './pages/SiteDetails'
import WelcomePage from './pages/WelcomePage'
import Header from './components/Header'
import Footer from './components/Footer'
import Location from './pages/Location'
import TouristPackages from './pages/TouristPackages'

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/tourist-site",
        element: <SitePage />,
      },
      {
        path: "/site-details/:site/:place",
        element: <SiteDetails />,
      },
      {
        path: "/get-started",
        element: <WelcomePage />,
      },
      {
        path: "/location/:name",
        element: <Location />
      },
      {
        path: "/tourist-packages",
        element: <TouristPackages />
      }
    ]
  }

])

function App() {

  return <RouterProvider router={router} />
}

export default App
