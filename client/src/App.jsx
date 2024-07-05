import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import SitePage from './pages/SitePage'
import SiteDetails from './pages/SiteDetails'
import WelcomePage from './pages/WelcomePage'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/tourist-site",
    element: <SitePage />,
  },
  {
    path: "/site-details",
    element: <SiteDetails />,
  },
  {
    path: "/get-started",
    element: <WelcomePage />,
  }
])

function App() {

  return <RouterProvider router={router} />
}

export default App
