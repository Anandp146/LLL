import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import Footer from "./components/Footer";
import WorkPage from "./pages/WorkPage";
import WebsiteForm from "./pages/WebsiteForm";
import Admin from "./pages/Admin";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
          {/* <Route path="/websiteform" element={<WebsiteForm />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
