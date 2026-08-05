import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CustomCursor from "../ui/CustomCursor";
import ParticleBackground from "../ui/ParticleBackground";
import ScrollProgress from "../ui/ScrollProgress";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <ParticleBackground />
      <Navbar />
      <main id="top" className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
