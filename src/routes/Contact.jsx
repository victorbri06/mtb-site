export default function Contact() {
  return (
    <section className="w-full border-t bg-gray-50">
      <div className="w-full px-6 md:px-10 lg:px-16 py-14 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold">Let’s work together</h2>
          <p className="text-gray-700 mt-3">
            Send a short brief (event, dates, deliverables) and I’ll reply
            quickly with a simple plan.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="mailto:victorbri06@yahoo.com"
              className="rounded-2xl bg-black text-white px-5 py-2.5 font-medium"
            >
              victorbri06@yahoo.com
            </a>
            <a
              href="/gallery"
              className="rounded-2xl border px-5 py-2.5 font-medium hover:bg-white"
            >
              See gallery
            </a>
          </div>
        </div>
        <div className="border rounded-2xl p-6 bg-white">
          <h3 className="font-semibold">Availability</h3>
          <p className="text-sm text-gray-700">
            Race weekends, private sessions for teams/sponsors, or focused
            individual shoots.
          </p>
        </div>
      </div>
    </section>
  );
}
