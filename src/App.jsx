import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Header from './common/Header'
import Home from './components/Home'
import Footer from './common/Footer'
import ProdactList from './components/ProdatList'
import ProdactDetail from './components/ProdactDetail'

// Layout Component
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/products",
          element: <ProdactList />
        },
        {
          path: "/product/:id",   
          element: <ProdactDetail />
        },
        {
          path: "*",              
          element: <h1 className='text-center mt-5'>404! Page Not Found</h1>
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
