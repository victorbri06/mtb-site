import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="w-full bg-white">
      <div className="w-full px-6 md:px-10 lg:px-16 py-12 grid md:grid-cols-3 gap-10 items-start">
        <motion.div
          className="md:col-span-2 border rounded-2xl p-6"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl font-bold mb-3">About me</h2>
          <p className="text-gray-700 leading-relaxed">
            I’ve been racing through the junior ranks; when that chapter
            closed, I moved behind the lens. Over the last years I’ve focused
            on MTB events—technical sections, raw effort, and honest emotion.
            My work has been used by the Romanian Cycling Federation and
            Dinamo–Mit Clima–BikeXpert (UCI team). I’m looking for new
            partners and opportunities.
          </p>
          <div className="mt-6">
            <Link to="/contact" className="rounded-2xl bg-black text-white px-5 py-2.5 font-medium">
              Get in touch
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="border rounded-2xl p-6"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="font-semibold">Quick facts</h3>
          <ul className="mt-2 text-sm text-gray-700 space-y-1">
            <li>Based in Romania • Available EU-wide</li>
            <li>Delivery for social in race-day window</li>
            <li>Private galleries for teams/partners</li>
          </ul>
          <h3 className="font-semibold mt-6">Contact</h3>
          <p className="text-sm text-gray-700">victorbri06@yahoo.com</p>
        </motion.div>
      </div>
    </section>
  );
}
