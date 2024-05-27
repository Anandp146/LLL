import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home"; // Import Home component correctly
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import Footer from "./components/Footer";
import WebsiteForm from "./pages/WebsiteForm";
import WorkP from "./pages/WorkP";
import  Admin  from "./pages/Admin";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path = "/work" element ={<WorkP/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin/>}/>
        <Route path ="/WebsiteForm" element={<WebsiteForm/>}/>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;