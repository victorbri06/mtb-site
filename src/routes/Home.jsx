import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import photos from "../utils/photos";

export default function Home() {
  // un mic slideshow din primele 4 imagini
  const slides = photos.slice(0, 4);

  return (
    <section className="w-full min-h-[92vh] bg-black text-white relative overflow-hidden">
      {/* BACKGROUND SLIDES */}
      <div className="absolute inset-0 -z-10">
        {slides.map((p, i) => (
          <motion.img
            key={p.src}
            src={p.src}
            alt="slide"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: [0, 1, 1, 0], scale: [1.05, 1, 1, 1.05] }}
            transition={{ duration: 12, delay: i * 3, repeat: Infinity }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      </div>

      <div className="w-full px-6 md:px-12 lg:px-20 py-24 md:py-28 grid gap-10 md:grid-cols-2 items-center">
        <div className="max-w-[900px]">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold leading-tight"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            MTB Photography
            <span className="block text-white/80">by Victor Brinza</span>
          </motion.h1>
          <motion.p
            className="mt-5 text-white/85 text-lg max-w-2xl"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Racing roots. Fast shutters. Real emotion. Editorial-grade images
            from European MTB races.
          </motion.p>
          <motion.div
            className="mt-8 flex gap-4"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <Link
              to="/gallery"
              className="rounded-2xl bg-white text-black px-6 py-3 font-semibold hover:opacity-90"
            >
              View Gallery
            </Link>
            <Link
              to="/contact"
              className="rounded-2xl border border-white/30 px-6 py-3 font-semibold hover:bg-white/10"
            >
              Work with me
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
