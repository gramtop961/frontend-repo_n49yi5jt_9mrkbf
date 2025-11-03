import { motion } from 'framer-motion';
import { Map, Flag } from 'lucide-react';

const stops = [
  { title: 'Departure', desc: 'We kick off with discovery and a shared vision.', color: 'bg-emerald-500' },
  { title: 'Design Yard', desc: 'Wireframes and style exploration to set the vibe.', color: 'bg-fuchsia-500' },
  { title: 'Build Tunnel', desc: 'Coding the experience with performance in mind.', color: 'bg-amber-500' },
  { title: 'Grand Station', desc: 'Launch day sparkle and continuous iteration.', color: 'bg-sky-500' },
];

export default function Journey() {
  return (
    <section id="journey" className="relative bg-white py-20 text-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="rounded-full bg-slate-900 p-2 text-white"><Map className="h-5 w-5" /></div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Journey Map</h2>
        </div>
        <div className="relative">
          <div className="absolute left-5 top-0 h-full w-1 rounded bg-slate-200" />
          <ul className="space-y-8">
            {stops.map((s, i) => (
              <motion.li
                key={s.title}
                className="relative pl-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className={`absolute left-0 top-1.5 h-10 w-10 rounded-full ${s.color} ring-8 ring-white`} />
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-1 text-slate-600">{s.desc}</p>
              </motion.li>
            ))}
          </ul>
          <div className="mt-10 flex items-center gap-2 text-slate-600">
            <Flag className="h-4 w-4" />
            <span className="text-sm">Your ticket is flexible — hop on anywhere.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
