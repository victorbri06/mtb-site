import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="w-full min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <div className="text-7xl font-black">404</div>
        <p className="text-gray-600 mt-2">Page not found.</p>
        <Link to="/" className="mt-4 inline-block rounded-2xl bg-black text-white px-5 py-2.5">
          Back home
        </Link>
      </div>
    </section>
  );
}
