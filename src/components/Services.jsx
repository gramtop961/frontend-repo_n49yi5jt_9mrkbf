import { motion } from 'framer-motion';
import { Briefcase, Layers, Layout, PenTool, Presentation, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Design & Branding',
    items: ['Logo & Brand Kit', 'Business Cards', 'Book & Cover Design'],
    color: 'from-cyan-500 to-sky-400',
  },
  {
    icon: Layout,
    title: 'Product & Software UI',
    items: ['School Software Dashboards', 'Shop & E‑commerce UI', 'App & Web Layouts'],
    color: 'from-fuchsia-500 to-pink-400',
  },
  {
    icon: Presentation,
    title: 'Corporate & Media',
    items: ['Social Media Design', 'Presentations (PPT)', 'Excel Reports & Thumbnails'],
    color: 'from-emerald-500 to-teal-400',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Services</h2>
            <p className="mt-2 text-white/75">Each engagement tailored to your goals with strategic, modern design.</p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-transform duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              <div className={`mb-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${card.color} p-3 text-white shadow-lg shadow-black/20`}>
                <card.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <ul className="mt-3 space-y-1 text-sm text-white/80">
                {card.items.map((it) => (
                  <li key={it} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
