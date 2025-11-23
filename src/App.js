import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/landing";
import Navbar from "./component/Navbar";
import Footer from "./component/footer";
import NotFoundPage from "./component/notfound";
import AnimatedLoginPage from "./component/login";
import ProtectRoot from "./component/protectRoot";
import Shop from "./pages/shop";
import Restaurant from "./component/restaurent";
import Cart from "./component/cart";
import Help from "./component/help";
 

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />
          {/* Login Page */}
          <Route path="/login" element={<AnimatedLoginPage />} />

          
          {/* Protected Routes */}
          <Route element={<ProtectRoot />}>
            <Route path="/account" element={<Shop/>} />
            <Route path="/restaurant/:id" element={<Restaurant/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/help" element={<Help/>} />
          </Route>

          {/* Not Found Route */}
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
