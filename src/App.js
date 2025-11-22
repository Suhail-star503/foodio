import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/landing";
import Navbar from "./component/Navbar";
import Footer from "./component/footer";
import NotFoundPage from "./component/notfound";
import AnimatedLoginPage from "./component/login";
import ProtectRoot from "./component/protectRoot";
import Shop from "./pages/shop";
import Restaurant from "./component/restaurent";
 

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
