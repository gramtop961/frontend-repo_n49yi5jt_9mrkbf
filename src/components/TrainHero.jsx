import { motion } from 'framer-motion';
import { Train, Sparkles, Star } from 'lucide-react';

export default function TrainHero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-gradient-to-b from-sky-400 via-sky-300 to-sky-200 text-slate-900">
      {/* Moving clouds */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute top-10 left-[-20%] h-24 w-64 rounded-full bg-white/70 blur-2xl"
          animate={{ x: ['-10%', '120%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-24 left-[-30%] h-16 w-40 rounded-full bg-white/60 blur-xl"
          animate={{ x: ['-20%', '130%'] }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-40 left-[-25%] h-12 w-56 rounded-full bg-white/60 blur-xl"
          animate={{ x: ['-15%', '125%'] }}
          transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-sm font-medium text-slate-900 shadow-sm">
            <Sparkles className="h-4 w-4" />
            Cartoon Railway Experience
          </div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            All Aboard the Creative Express
          </h1>
          <p className="mt-4 text-base text-slate-800 sm:text-lg">
            A playful, animated journey through design and code — inspired by classic railways and Saturday-morning cartoons.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#services" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-white shadow-lg shadow-slate-900/20 hover:bg-slate-800">
              <Train className="h-4 w-4" /> Board Now
            </a>
            <a href="#gallery" className="inline-flex items-center gap-2 rounded-full border border-slate-900/20 bg-white/90 px-5 py-2.5 text-slate-900 hover:bg-white">
              <Star className="h-4 w-4 text-amber-500" /> See Stations
            </a>
          </div>
        </div>

        {/* Track */}
        <div className="mt-16 h-2 w-full rounded-full bg-slate-900/20" />

        {/* Train */}
        <div className="relative mt-6 h-40 w-full">
          <motion.div
            className="absolute left-1/2 top-6 -translate-x-1/2"
            animate={{ x: [-120, 120, -120] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="flex items-end gap-3">
              {/* Engine */}
              <div className="relative h-28 w-40 rounded-xl bg-slate-900 p-3 text-white shadow-xl">
                <div className="absolute -top-4 left-6 h-4 w-10 rounded-sm bg-slate-900" />
                <div className="absolute -top-8 left-8 h-8 w-6 rounded-t-md bg-slate-900" />
                <div className="absolute -top-10 left-10 h-3 w-20 rounded bg-gradient-to-r from-amber-400 to-amber-600" />
                <div className="h-full w-full rounded-md bg-gradient-to-br from-slate-800 to-slate-950" />
                <div className="absolute inset-x-4 bottom-2 flex items-center justify-between">
                  <Wheel />
                  <Wheel />
                </div>
              </div>
              {/* Car 1 */}
              <TrainCar colorFrom="from-fuchsia-400" colorTo="to-pink-500" label="Design" />
              {/* Car 2 */}
              <TrainCar colorFrom="from-emerald-400" colorTo="to-teal-500" label="Code" />
              {/* Car 3 */}
              <TrainCar colorFrom="from-amber-400" colorTo="to-orange-500" label="Motion" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TrainCar({ colorFrom, colorTo, label }: { colorFrom: string; colorTo: string; label: string }) {
  return (
    <div className="relative h-24 w-36 rounded-xl bg-white p-2 shadow-lg">
      <div className={`h-full w-full rounded-md bg-gradient-to-br ${colorFrom} ${colorTo} text-white`}>
        <div className="flex h-full items-center justify-center text-sm font-semibold tracking-wide drop-shadow">{label}</div>
      </div>
      <div className="absolute inset-x-4 bottom-1 flex items-center justify-between">
        <Wheel small />
        <Wheel small />
      </div>
    </div>
  );
}

function Wheel({ small = false }: { small?: boolean }) {
  return (
    <motion.div
      className={`rounded-full border-2 border-white/80 bg-slate-900 ${small ? 'h-5 w-5' : 'h-7 w-7'}`}
      animate={{ rotate: 360 }}
      transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
    />
  );
}
