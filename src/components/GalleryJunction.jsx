import { motion } from 'framer-motion';

const stations = [
  { title: 'Branding Station', color: 'from-pink-500 to-rose-500' },
  { title: 'UI Platform', color: 'from-sky-500 to-cyan-500' },
  { title: 'Social Media Yard', color: 'from-violet-500 to-fuchsia-500' },
  { title: 'Print Depot', color: 'from-amber-500 to-orange-500' },
  { title: 'Poster Lane', color: 'from-emerald-500 to-teal-500' },
  { title: 'Thumbnail Row', color: 'from-indigo-500 to-blue-500' },
];

export default function GalleryJunction() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Gallery Junction</h2>
            <p className="mt-1 text-slate-600">Stops across branding, UI, social, and print.</p>
          </div>
          <a href="#contact" className="hidden rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-slate-800 sm:inline-block">Book a Ticket</a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stations.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <div className={`aspect-[4/3] bg-gradient-to-tr ${s.color} opacity-90`} />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4">
                <h3 className="text-base font-semibold text-white drop-shadow">{s.title}</h3>
                <span className="rounded-full bg-white/20 px-2 py-1 text-xs text-white backdrop-blur">View</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
