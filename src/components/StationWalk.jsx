import { motion } from 'framer-motion';
import { MapPin, Ticket, Clock, Camera, Train, Star } from 'lucide-react';

const steps = [
  { title: 'Arrival', desc: 'Step onto the platform — set goals and gather context.', icon: MapPin },
  { title: 'Ticketing', desc: 'Define scope, deliverables, and timelines clearly.', icon: Ticket },
  { title: 'Platform', desc: 'Moodboards, references, and creative direction.', icon: Camera },
  { title: 'Boarding', desc: 'Design sprints with frequent check-ins.', icon: Clock },
  { title: 'Journey', desc: 'Refine, iterate, and polish details.', icon: Train },
  { title: 'Destination', desc: 'Final delivery with assets and guidelines.', icon: Star },
];

export default function StationWalk() {
  return (
    <section id="walk" className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Station Walk — Process Tour</h2>
          <p className="mt-1 text-slate-600">Follow the signs for a smooth and timely creative journey.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-sky-700">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-sky-50" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
