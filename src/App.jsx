import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Header from './common/Header'
import Home from './components/Home'
import Footer from './common/Footer'
import ProdactList from './components/ProdatList'

// Correct component name (Capital letter)
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
      element: <Layout />,   // Correct component
      children: [
        {
          index: true,        // Better than path:"/"
          element: <Home />
        },
        {
          path: "/products",
          element: <ProdactList />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
