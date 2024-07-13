import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet
} from "react-router-dom";

import ProductsProvider from "./components/ProductsProvider";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NoFoundPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import CategoryPage from "./pages/CategoryPage";


function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
       <Route index element={<HomePage />} />
       <Route path="/category/:id" element={<CategoryPage/>} />
       <Route path="/cart" element={<CartPage />} />
       <Route path="/checkout" element={<CheckoutPage />} />
       <Route path="*" element={<NotFoundPage />} />
     
    </Route>
    
  )
  );

  return  (

         <ProductsProvider>
           <RouterProvider router={router} />
         </ProductsProvider>

    )
  
}

export default App
