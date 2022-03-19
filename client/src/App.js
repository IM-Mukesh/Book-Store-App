import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import BootstrapCarousel from "./components/BootstrapCarousel ";
import Signup from "./components/User/Signup";
import Login from "./components/User/Login";
import DisplayPopup from "./components/DisplayPopup";
import Home from "./components/ValidUser/Home";
import GetBooks from "./components/ValidUser/GetBooks";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<BootstrapCarousel />}/>
          <Route path="/register" element={<Signup />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/user" element={<Home />}/>
          <Route path="/popup" element={<DisplayPopup />}/>
          <Route path="/fetchbook" element={<GetBooks />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
