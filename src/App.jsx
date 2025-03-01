import Header from "./components/Header";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pizza from "./pages/Pizza";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { Route, Routes, useLocation } from "react-router-dom";
import NotFound from "./pages/NotFound";

const App = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <div className="app-container">
      <Navbar />

      {isHome ? (
        <Home />
      ) : (
        <main className="main-content">
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/p001" element={<Pizza />} />
            <Route path="/*" element = {<NotFound/>}/>
            {/* AGREGAR COMPONENTE NOTFOUND */}
          </Routes>
        </main>
      )}
      <Footer />
    </div>
  );
};

export default App;
