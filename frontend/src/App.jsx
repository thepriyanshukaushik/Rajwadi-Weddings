import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import 'remixicon/fonts/remixicon.css';
import "locomotive-scroll/dist/locomotive-scroll.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import WeddingPage from "./components/WeddingPage";
import AboutPage from "./components/AboutPage";
import ServicesPage from "./components/ServicesPage";
import ContactPage from "./components/Contactpage";
import "./global.css";

import Login from "./components/adminsection/Login";
import Panel_home from "./components/adminsection/Panel_home";
import Customer_inquiry from "./components/adminsection/Customer_inquiry";
import Settings from "./components/adminsection/Settings";
import Wedding_section from "./components/adminsection/Wedding_section";
import ClientNotes from "./components/ClientNotes";
import Venues from "./components/Venuepage";

const App = () => {
  const containerRef = useRef(null);
  const location = useLocation();
  const locomotiveInstance = useRef(null);
  useEffect(() => {
    const isAdminRoute = location.pathname.startsWith("/admin");

    if (!isAdminRoute) {
      if (locomotiveInstance.current) locomotiveInstance.current.destroy();

      locomotiveInstance.current = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
        multiplier: 1.3,
      });

      locomotiveInstance.current.update();
    }

    return () => {
      if (locomotiveInstance.current) {
        locomotiveInstance.current.destroy();
        locomotiveInstance.current = null;
      }
    };
  }, [location.pathname]);

  const isAdminRoute = location.pathname.startsWith("/admin");
  const isWeddingRoute = location.pathname.endsWith("/wedding");

  return (
    <div data-scroll-container ref={containerRef} className="w-full h-[100%] relative ">
      {!isAdminRoute && <Nav />}

      

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/weddings" element={<WeddingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/lovenotes" element={<ClientNotes />} />
        <Route path="/venues" element={<Venues/>} />

        <Route path="/admin" element={<Login />} />
        <Route path="/admin/home" element={<Panel_home />} />
        <Route path="/admin/home/customer_inquiries" element={<Customer_inquiry />} />
        <Route path="/admin/home/wedding_section" element={<Wedding_section />} />
        <Route path="/admin/home/settings" element={<Settings />} />
      </Routes>

      {!isAdminRoute && !isWeddingRoute && <Footer />}
    </div>
  );
};

export default App;
