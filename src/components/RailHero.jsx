import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Star, Train } from 'lucide-react';

export default function RailHero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Soft gradient overlay that doesn't block interactions */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0)_0%,rgba(2,6,23,0.25)_55%,rgba(2,6,23,0.6)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 shadow backdrop-blur"
        >
          <Train className="h-3.5 w-3.5" />
          Creativity Express — Destination: Innovation
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-4 text-4xl font-extrabold leading-tight text-white drop-shadow sm:text-5xl md:text-6xl"
        >
          Abdul Basit — Creative Express
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-3 max-w-2xl text-base text-white/90 sm:text-lg"
        >
          Graphic Designer & Founder of Visiqal. I turn brands into memorable journeys with playful motion and solid strategy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 flex flex-wrap items-center gap-3"
        >
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow hover:bg-slate-100"
          >
            <Rocket className="h-4 w-4" /> Hop On My Journey
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur hover:bg-white/20"
          >
            <Star className="h-4 w-4" /> See Stations
          </a>
        </motion.div>
      </div>
    </section>
  );
}
