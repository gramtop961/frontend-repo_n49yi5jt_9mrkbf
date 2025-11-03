import { motion } from 'framer-motion';
import { Train, BadgeCheck } from 'lucide-react';

function TrainCar({ label, color, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      className="relative mx-3 inline-flex h-24 w-48 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm"
    >
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${color} opacity-10`} />
      <span className="relative z-10 text-sm font-semibold text-slate-800">{label}</span>
      {/* Wheels */}
      <div className="absolute -bottom-3 left-6 h-6 w-6 rounded-full border-4 border-slate-700 bg-slate-200" />
      <div className="absolute -bottom-3 right-6 h-6 w-6 rounded-full border-4 border-slate-700 bg-slate-200" />
    </motion.div>
  );
}

export default function RealisticTrains() {
  return (
    <section id="trains" className="relative overflow-hidden bg-gradient-to-b from-white to-sky-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center gap-2 text-slate-900">
          <BadgeCheck className="h-5 w-5" />
          <h2 className="text-2xl font-bold">Realistic Trains</h2>
        </div>

        {/* Track */}
        <div className="relative">
          <div className="pointer-events-none absolute left-0 right-0 top-1/2 -z-0 h-1 -translate-y-1/2 bg-slate-300" />
          <div className="pointer-events-none absolute left-0 right-0 top-[calc(50%+12px)] -z-0 h-1 bg-slate-300" />
          <div className="pointer-events-none absolute left-0 right-0 top-[calc(50%-12px)] -z-0 h-1 bg-slate-300" />

          {/* Locomotive */}
          <motion.div
            initial={{ x: '-20%' }}
            whileInView={{ x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="mb-6 flex items-end"
          >
            <div className="mx-3 inline-flex h-28 w-56 shrink-0 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-white shadow-lg">
              <Train className="mr-2 h-5 w-5" />
              <span className="font-semibold">AB Loco 01</span>
              <div className="absolute -bottom-3 left-6 h-6 w-6 rounded-full border-4 border-slate-200 bg-slate-700" />
              <div className="absolute -bottom-3 right-6 h-6 w-6 rounded-full border-4 border-slate-200 bg-slate-700" />
            </div>
          </motion.div>

          {/* Cars row - animated slide */}
          <motion.div
            initial={{ x: '20%' }}
            whileInView={{ x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="no-scrollbar relative flex w-full snap-x snap-mandatory overflow-x-auto py-6"
          >
            <TrainCar label="Branding" color="from-pink-400 to-rose-500" delay={0.05} />
            <TrainCar label="Product UI" color="from-sky-400 to-cyan-500" delay={0.1} />
            <TrainCar label="Social Media" color="from-violet-400 to-fuchsia-500" delay={0.15} />
            <TrainCar label="Print" color="from-amber-400 to-orange-500" delay={0.2} />
            <TrainCar label="Scripts" color="from-emerald-400 to-teal-500" delay={0.25} />
            <TrainCar label="Office" color="from-indigo-400 to-blue-500" delay={0.3} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
