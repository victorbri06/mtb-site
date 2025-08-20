export default function Contact() {
  return (
    <section className="w-full bg-white">
      <div className="w-full px-6 md:px-12 lg:px-20 py-16 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-4xl font-bold">Let’s work together</h2>
          <p className="text-gray-700 mt-4 text-lg leading-8">
            Send a short brief (event, dates, deliverables) and I’ll reply
            quickly with a simple plan.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="mailto:victorbri06@yahoo.com"
              className="rounded-2xl bg-black text-white px-6 py-3 font-semibold"
            >
              victorbri06@yahoo.com
            </a>
            <a
              href="/gallery"
              className="rounded-2xl border px-6 py-3 font-semibold hover:bg-white"
            >
              See gallery
            </a>
          </div>
        </div>
        <div className="border rounded-3xl p-8 shadow-sm bg-gray-50">
          <h3 className="font-semibold text-lg">Availability</h3>
          <p className="text-gray-700 mt-2">
            Race weekends, private sessions for teams/sponsors, or focused
            individual shoots.
          </p>
        </div>
      </div>
    </section>
  );
}
