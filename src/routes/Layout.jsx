import { Outlet, NavLink, useLocation } from "react-router-dom";
import { Camera } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ContactCTA from "../shared/ContactCTA";

const navLink =
  "px-3 py-2 rounded-xl text-sm md:text-base hover:bg-black/5 transition font-medium";

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
        <div className="w-full px-6 md:px-10 lg:px-16 py-3 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2">
            <Camera className="w-6 h-6" />
            <span className="font-semibold tracking-tight text-base md:text-lg">
              Victor Brinza — MTB Photography
            </span>
          </NavLink>
          <nav className="hidden sm:flex gap-2">
            <NavLink to="/gallery" className={navLink}>Gallery</NavLink>
            <NavLink to="/about" className={navLink}>About</NavLink>
            <NavLink to="/contact" className={navLink}>Contact</NavLink>
          </nav>
        </div>
      </header>

      {/* PAGE TRANSITIONS */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="flex-1"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      {/* CONTACT CTA – apare pe fiecare pagină */}
      <ContactCTA />

      {/* FOOTER */}
      <footer className="border-t">
        <div className="w-full px-6 md:px-10 lg:px-16 py-6 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>© {new Date().getFullYear()} Victor Brinza. All rights reserved.</div>
          <div className="flex gap-3">
            <NavLink to="/about" className="hover:underline">About</NavLink>
            <NavLink to="/contact" className="hover:underline">Contact</NavLink>
          </div>
        </div>
      </footer>
    </div>
  );
}
