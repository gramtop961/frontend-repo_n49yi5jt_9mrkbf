import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const DATA = [
  { id: 1, title: 'Visiqal Branding', tag: 'Branding', color: 'from-fuchsia-500 to-pink-500' },
  { id: 2, title: 'School ERP UI', tag: 'UI', color: 'from-cyan-500 to-sky-500' },
  { id: 3, title: 'E‑commerce Dashboard', tag: 'UI', color: 'from-emerald-500 to-teal-500' },
  { id: 4, title: 'Print Campaign', tag: 'Print', color: 'from-orange-500 to-amber-500' },
  { id: 5, title: 'Social Media Kit', tag: 'Social', color: 'from-violet-500 to-indigo-500' },
  { id: 6, title: 'Book Cover', tag: 'Branding', color: 'from-rose-500 to-red-500' },
];

const FILTERS = ['All', 'Branding', 'UI', 'Social', 'Print'];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const items = useMemo(() => (filter === 'All' ? DATA : DATA.filter((d) => d.tag === filter)), [filter]);

  return (
    <section id="portfolio" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Portfolio</h2>
            <p className="mt-2 text-white/75">A snapshot of selected work across branding, UI and media.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-3 py-1.5 text-sm transition ${
                  filter === f
                    ? 'border-white bg-white text-slate-900'
                    : 'border-white/15 bg-white/5 text-white/85 hover:bg-white/10'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <div className={`h-40 w-full rounded-xl bg-gradient-to-br ${card.color} opacity-90`} />
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <div className="text-sm text-white/70">{card.tag}</div>
                  <h3 className="font-semibold">{card.title}</h3>
                </div>
                <a
                  href="#contact"
                  className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm backdrop-blur transition hover:bg-white/20"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
