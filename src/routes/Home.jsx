import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const heroSrc = "/images/_DSC0164.jpg"; // ← pune aici fotografia ta „wow”

export default function Home() {
  return (
    <section className="relative w-full min-h-[88vh] md:min-h-[92vh] overflow-hidden">
      {/* BACKGROUND PHOTO */}
      <img
        src={heroSrc}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* GRADIENTS PENTRU LEGIBILITATE */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

      <div className="relative w-full px-6 md:px-12 lg:px-20 py-24 md:py-28">
        <div className="max-w-[1100px]">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold leading-tight text-white"
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            MTB Photography
            <span className="block text-white/85">by Victor Brinza</span>
          </motion.h1>

          <motion.p
            className="mt-5 text-white/85 text-lg md:text-xl max-w-2xl"
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Racing roots. Fast shutters. Real emotion. Editorial-grade images from European MTB races.
          </motion.p>

          <motion.div
            className="mt-8 flex gap-4"
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/gallery"
              className="rounded-2xl bg-white text-black px-6 py-3 font-semibold hover:opacity-90"
            >
              View Gallery
            </Link>
            <Link
              to="/about"
              className="rounded-2xl border border-white/40 text-white px-6 py-3 font-semibold hover:bg-white/10"
            >
              About me
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}