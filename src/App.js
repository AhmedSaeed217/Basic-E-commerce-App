import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import ProductsList from './Components/ProductsList/ProductsList';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import About from './Components/About/About';
import ContactUs from './Components/Contactus/ContactUs';


let routers = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <ProductsList /> },
      { path: 'about', element: <About /> },
      { path: 'contactus', element: <ContactUs /> },
      { path: '/product/:productId', element: <ProductDetails /> },
    ]
  }
])

function App() {
  return <>
    <RouterProvider router={routers}></RouterProvider>
  </>

}

export default App;
