import { motion } from 'framer-motion';
import { PenTool, Code, Rocket } from 'lucide-react';

const services = [
  {
    title: 'Brand Car',
    desc: 'Playful visual identities with character and clarity.',
    icon: PenTool,
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Dev Car',
    desc: 'Fast, accessible React apps tuned like bullet trains.',
    icon: Code,
    gradient: 'from-sky-500 to-indigo-500',
  },
  {
    title: 'Launch Car',
    desc: 'Deploy, monitor, iterate — arrive right on schedule.',
    icon: Rocket,
    gradient: 'from-emerald-500 to-teal-500',
  },
];

export default function CarServices() {
  return (
    <section id="services" className="relative bg-gradient-to-b from-white to-slate-50 py-20 text-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Cars on the Line</h2>
          <p className="mt-2 text-slate-600">Each car has a job — together they deliver delightful products.</p>
        </div>
        <div className="relative">
          {/* Track */}
          <div className="absolute left-0 right-0 top-1/2 -z-[1] h-2 -translate-y-1/2 rounded-full bg-slate-200" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-900/5"
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${s.gradient}`} />
                <s.icon className="mb-3 h-6 w-6 text-slate-900" />
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
                <motion.div
                  className="mt-6 h-8 w-full rounded-md bg-slate-900/5"
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
