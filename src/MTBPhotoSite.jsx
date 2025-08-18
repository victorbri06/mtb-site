import React, { useMemo, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";

/* Imaginile trebuie puse în: /public/images/ cu exact aceste nume sau schimbă src-urile mai jos */
const PHOTOS = [
  { src: "/images/_DSC0460.jpg" },
  { src: "/images/_DSC0690.jpg" },
  { src: "/images/_DSC0938.jpg" },
  { src: "/images/_DSC0975.jpg" },
  { src: "/images/_DSC0065.jpg" },
  { src: "/images/_DSC0108-Enhanced-NR.jpg" },
  { src: "/images/_DSC0164.jpg" },
  { src: "/images/_DSC0169.jpg" },
  { src: "/images/_DSC0231.jpg" },
  { src: "/images/_DSC0235.jpg" },
  { src: "/images/_DSC0485.jpg" },
  { src: "/images/_DSC0350.jpg" },
];

function useKey(key, handler) {
  useEffect(() => {
    const onKey = (e) => { if (e.key.toLowerCase() === key.toLowerCase()) handler(e); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [key, handler]);
}

const Header = () => (
  <header className="w-full sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
    <div className="w-full px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Camera className="w-6 h-6" />
        <span className="font-semibold tracking-tight">MTB • Photo Stories</span>
      </div>
      <nav className="hidden sm:flex gap-6 text-sm">
        <a className="hover:underline" href="#galerie">Galerie</a>
        <a className="hover:underline" href="#despre">Despre</a>
        <a className="hover:underline" href="#contact">Contact</a>
      </nav>
    </div>
  </header>
);

const Hero = ({ onScrollToGallery }) => (
  <section className="w-full min-h-[70vh] md:min-h-[80vh] flex items-center bg-gradient-to-b from-black to-gray-900 text-white">
    <div className="w-full px-6 md:px-10 grid gap-10 md:grid-cols-2 items-center">
      <div className="max-w-[900px]">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Fotografie de competiție — <span className="text-white/80">MTB</span></h1>
        <p className="mt-4 text-white/80 text-lg">Site de prezentare cu imagini mari, pe tot ecranul.</p>
        <div className="mt-8">
          <button onClick={onScrollToGallery} className="rounded-2xl bg-white text-black px-6 py-3 font-medium hover:opacity-90">Vezi galeria</button>
        </div>
      </div>
      <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
        <motion.img
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          src={PHOTOS[5].src}
          alt="cover"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  </section>
);

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = useCallback((i) => { setIndex(i); setOpen(true); }, []);
  const prev = useCallback(() => setIndex(i => (i - 1 + PHOTOS.length) % PHOTOS.length), []);
  const next = useCallback(() => setIndex(i => (i + 1) % PHOTOS.length), []);

  useKey("ArrowLeft", () => open && prev());
  useKey("ArrowRight", () => open && next());
  useKey("Escape", () => setOpen(false));

  return (
    <section id="galerie" className="w-full bg-white">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-10">
        {/* Grilă mare, fără titluri/filtre/căutare */}
        <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PHOTOS.map((p, i) => (
            <motion.button
              key={p.src}
              className="relative aspect-[3/2] md:aspect-[16/10] rounded-2xl overflow-hidden focus:outline-none shadow-lg"
              onClick={() => openAt(i)}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
            >
              <img src={p.src} alt="photo" className="w-full h-full object-cover"/>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox full-screen */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/90 flex flex-col">
          <div className="relative flex-1 flex items-center justify-center">
            <img src={PHOTOS[index]?.src} alt="preview" className="max-h-[90vh] w-auto object-contain" />
            <button aria-label="Închide" onClick={() => setOpen(false)} className="absolute top-3 right-3 bg-white/90 hover:bg-white rounded-full p-1">
              <X className="w-5 h-5 text-black" />
            </button>
            <button aria-label="Anterior" onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2">
              <ChevronLeft className="w-6 h-6 text-black" />
            </button>
            <button aria-label="Următor" onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2">
              <ChevronRight className="w-6 h-6 text-black" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

const About = () => (
  <section id="despre" className="w-full bg-white">
    <div className="w-full px-6 md:px-10 py-12 grid md:grid-cols-3 gap-6 items-start">
      <div className="md:col-span-2 border rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-2">Despre proiect</h2>
        <p className="text-gray-600">Site de prezentare pentru fotografia de MTB. Imagini mari, fără distrageri.</p>
      </div>
      <div className="border rounded-xl p-6">
        <h3 className="font-semibold">Contact rapid</h3>
        <p className="text-sm text-gray-600">Email: hello@exemplu.ro</p>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="w-full border-t bg-gray-50">
    <div className="w-full px-6 md:px-10 py-12 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-2xl font-semibold">Hai să lucrăm împreună</h2>
        <p className="text-gray-600 mt-2">Brief rapid pe email, apoi propunere de acoperire și livrabile.</p>
        <div className="mt-4 flex gap-3">
          <a href="mailto:hello@exemplu.ro" className="rounded-2xl bg-black text-white px-5 py-2.5 font-medium">hello@exemplu.ro</a>
          <a href="#galerie" className="rounded-2xl border px-5 py-2.5 font-medium hover:bg-gray-100">Vezi portofoliu</a>
        </div>
      </div>
      <div className="border rounded-xl p-6">
        <h3 className="font-semibold">Disponibilitate</h3>
        <p className="text-sm text-gray-600">Weekend-uri de concurs + sesiuni dedicate pentru echipe / sponsori.</p>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="w-full border-t">
    <div className="w-full px-6 md:px-10 py-6 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-2">
      <div>© {new Date().getFullYear()} MTB Photo Stories. Toate drepturile rezervate.</div>
      <div className="flex gap-3">
        <a className="hover:underline" href="#despre">Despre</a>
        <a className="hover:underline" href="#contact">Contact</a>
      </div>
    </div>
  </footer>
);

export default function MTBPhotoSite() {
  const scrollToGallery = () => document.getElementById("galerie")?.scrollIntoView({ behavior: "smooth" });
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Header />
      <Hero onScrollToGallery={scrollToGallery} />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}