import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({ photos, index, onIndex, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onIndex((i) => (i - 1 + photos.length) % photos.length);
      if (e.key === "ArrowRight") onIndex((i) => (i + 1) % photos.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onIndex, photos.length]);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex flex-col">
      <div className="relative flex-1 flex items-center justify-center">
        <img
          src={photos[index]?.src}
          alt=""
          className="max-h-[90vh] w-auto object-contain"
        />
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute top-3 right-3 bg-white/90 hover:bg-white rounded-full p-1"
        >
          <X className="w-5 h-5 text-black" />
        </button>
        <button
          aria-label="Prev"
          onClick={() => onIndex((i) => (i - 1 + photos.length) % photos.length)}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
        >
          <ChevronLeft className="w-6 h-6 text-black" />
        </button>
        <button
          aria-label="Next"
          onClick={() => onIndex((i) => (i + 1) % photos.length)}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
        >
          <ChevronRight className="w-6 h-6 text-black" />
        </button>
      </div>
    </div>
  );
}
