import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/pages/Layout/Layout.js";
import Home from "./components/pages/Home/Home.js";
import ProductsDetail from "./components/Products/ProductsDetail.jsx";
import { CartProvider } from "./components/context/CartContext";
import ShoppingCart from "./components/Shopping/ShoppingCart"
import OrderDetails from './components/orders/OrderDetail.jsx';
import ProductsCategory from "./components/Products/ProductsCategory.jsx";
import NotFound from "./components/pages/NotFound.js";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/product/:id" element={<ProductsDetail />} />
            <Route path="/products/:category" element={<ProductsCategory />} />
            <Route path="/shoppingcart" element={<ShoppingCart />} />
            <Route path="/order-details" element={<OrderDetails />} />
            <Route path="*" element={<NotFound/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;