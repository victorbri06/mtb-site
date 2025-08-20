import photos from "../utils/photos";
import Lightbox from "../shared/Lightbox";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = useCallback((i) => { setIndex(i); setOpen(true); }, []);
  const close = useCallback(() => setOpen(false), []);

  return (
    <section className="w-full bg-white">
      <div className="w-full px-4 md:px-8 lg:px-16 py-10">
        {/* Masonry columns – imagini mai mari și distanțe mai generoase */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 [column-fill:_balance]">
          {photos.map((p, i) => (
            <motion.button
              key={p.src}
              onClick={() => openAt(i)}
              className="mb-6 break-inside-avoid rounded-3xl overflow-hidden shadow-xl focus:outline-none block w-full"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
            >
              <img
                src={p.src}
                alt=""
                className="w-full h-auto object-cover align-top hover:scale-[1.03] transition-transform duration-500"
                loading="lazy"
              />
            </motion.button>
          ))}
        </div>
      </div>

      {open && (
        <Lightbox
          photos={photos}
          index={index}
          onClose={close}
          onIndex={setIndex}
        />
      )}
    </section>
  );
}
