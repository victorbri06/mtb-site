import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="w-full bg-white">
      <div className="w-full px-6 md:px-12 lg:px-20 py-14 grid md:grid-cols-3 gap-10 items-start">
        <motion.div
          className="md:col-span-2 border rounded-3xl p-8 shadow-sm"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl font-bold mb-4">About me</h2>
          <p className="text-gray-700 text-lg leading-8">
            I’ve been racing through the junior ranks; when that chapter closed,
            I moved behind the lens. Over the last years I’ve focused on MTB
            events—technical sections, raw effort, and honest emotion. My work
            has been used by the Romanian Cycling Federation and Dinamo–Mit
            Clima–BikeXpert (UCI team). I’m looking for new partners and
            opportunities.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="rounded-2xl bg-black text-white px-6 py-3 font-semibold">
              Get in touch
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="border rounded-3xl p-8 shadow-sm"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="font-semibold text-lg">Quick facts</h3>
          <ul className="mt-3 text-gray-700 text-sm md:text-base space-y-2">
            <li>Based in Romania • Available EU-wide</li>
            <li>Race-day delivery for social</li>
            <li>Private galleries for teams/partners</li>
          </ul>
          <h3 className="font-semibold text-lg mt-6">Contact</h3>
          <p className="text-gray-700 text-sm md:text-base">victorbri06@yahoo.com</p>
        </motion.div>
      </div>
    </section>
  );
}
