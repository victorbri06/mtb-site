export default function ContactCTA() {
  return (
    <section className="w-full bg-black text-white">
      <div className="w-full px-6 md:px-12 lg:px-20 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold">Have an event or project?</h3>
          <p className="text-white/80 mt-1">Let’s make strong visuals — fast and reliable.</p>
        </div>
        <div className="flex gap-3">
          <a href="mailto:victorbri06@yahoo.com" className="rounded-2xl bg-white text-black px-5 py-2.5 font-semibold">
            Contact me
          </a>
          <a href="/gallery" className="rounded-2xl border border-white/40 px-5 py-2.5 font-semibold hover:bg-white/10">
            View work
          </a>
        </div>
      </div>
    </section>
  );
}
