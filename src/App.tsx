import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import Footer from "./components/Footer";
import WorkPage from "./pages/WorkPage";
// import WebsiteForm from "./pages/WebsiteForm";
import Admin from "./pages/Admin";
import Mvsir from "./pages/DetailWork/Mvsir";
import Blog from "./pages/Blog";
import Service from "./pages/Service";
<<<<<<< HEAD
import Caption from "./pages/DetailWork/Caption";
import Shahi from "./pages/DetailWork/Shahi";
import Sobuj from "./pages/DetailWork/Sobuj";
import ThreeAi from "./pages/DetailWork/ThreeAi";
=======
import WebsiteForm from "./pages/WebsiteForm";
>>>>>>> fc65d9696e75e187d07a09620109318d546c959b

const App: React.FC = () => {
  // console.log(import.meta.env.VITE_SUPABASE_URL);
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
          <Route path="/mvsir" element={<Mvsir />} />
          <Route path="/captionPoint" element={<Caption />} />
          <Route path="/shahi" element={<Shahi />} />
          <Route path="/sobujPutra" element={<Sobuj />} />
          <Route path="/threeAi" element={<ThreeAi />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/service" element={<Service />} />
          <Route path="/form" element={<WebsiteForm/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
