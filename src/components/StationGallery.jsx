import { motion } from 'framer-motion';

const stations = [
  { name: 'Sky Station', color: 'from-sky-400 to-sky-600' },
  { name: 'Sunset Stop', color: 'from-amber-400 to-orange-600' },
  { name: 'Neon Junction', color: 'from-fuchsia-400 to-pink-600' },
  { name: 'Forest Halt', color: 'from-emerald-400 to-teal-600' },
  { name: 'Midnight Yard', color: 'from-slate-700 to-slate-900' },
  { name: 'Candy Depot', color: 'from-rose-400 to-pink-500' },
];

export default function StationGallery() {
  return (
    <section id="gallery" className="relative bg-white py-20 text-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Stations & Scenes</h2>
            <p className="mt-2 text-slate-600">A colorful whistle-stop tour through playful environments.</p>
          </div>
          <motion.div
            className="hidden rounded-full bg-slate-900 px-4 py-1.5 text-sm font-medium text-white sm:block"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            Next train in 2 mins
          </motion.div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stations.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br ${s.color}`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_60%)]" />
              <div className="absolute inset-0 flex items-end p-4">
                <div className="rounded-md bg-white/80 px-3 py-1 text-sm font-medium text-slate-900 shadow">{s.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
