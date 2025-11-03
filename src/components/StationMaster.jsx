import { motion } from 'framer-motion';
import { BadgeCheck, Megaphone, Shield, Star } from 'lucide-react';

export default function StationMaster() {
  return (
    <section id="master" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center gap-2 text-slate-900">
          <BadgeCheck className="h-5 w-5" />
          <h2 className="text-2xl font-bold">Station Master — Cartoon Style</h2>
        </div>

        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* Character Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-sky-100 blur-2xl" />
            <div className="absolute -left-6 -bottom-6 h-24 w-24 rounded-full bg-indigo-100 blur-2xl" />

            <div className="flex items-center gap-5">
              {/* Simple cartoon avatar */}
              <div className="relative h-24 w-24 shrink-0">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-500 shadow-lg" />
                <div className="absolute inset-1 rounded-2xl bg-white" />
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Face */}
                  <div className="relative h-16 w-16 rounded-full bg-amber-200">
                    <div className="absolute left-3 top-6 h-2 w-2 rounded-full bg-slate-800" />
                    <div className="absolute right-3 top-6 h-2 w-2 rounded-full bg-slate-800" />
                    <div className="absolute left-1/2 top-9 h-2 w-8 -translate-x-1/2 rounded-full bg-slate-800" />
                    {/* Cap */}
                    <div className="absolute -top-4 left-1/2 h-6 w-14 -translate-x-1/2 rounded-t-full bg-slate-900" />
                    <div className="absolute -top-1 left-1/2 h-2 w-10 -translate-x-1/2 rounded bg-amber-400" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900">Abdul Basit — Station Master</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Your friendly guide through the Creative Express. Tickets checked, vibes set, ideas on time.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                    <Shield className="h-3.5 w-3.5" /> Quality First
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-sky-100 px-2.5 py-1 text-xs font-medium text-sky-800">
                    <Megaphone className="h-3.5 w-3.5" /> Storytelling
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-800">
                    <Star className="h-3.5 w-3.5" /> Detail Oriented
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className=""
          >
            <p className="text-lg font-medium text-slate-900">Welcome aboard!</p>
            <p className="mt-2 text-slate-700">
              I craft brand journeys with a playful railway twist — clear signals, smooth tracks, and delightful stops. From naming and logo
              to UI, print, and social, I keep the line running on schedule.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#trains" className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-slate-800">See the Trains</a>
              <a href="#walk" className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Take a Station Walk</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
