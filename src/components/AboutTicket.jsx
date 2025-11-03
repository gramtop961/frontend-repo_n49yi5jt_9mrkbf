import { motion } from 'framer-motion';
import { BadgeCheck, Palette, PenTool, Layout } from 'lucide-react';

const lines = [
  { label: 'Name', value: 'Abdul Basit' },
  { label: 'Profession', value: 'Graphic Designer & Visual Storyteller' },
  { label: 'Experience', value: '3.5 Years' },
  { label: 'Founder', value: 'VISIQAL (Google Partner Project)' },
  { label: 'Skills', value: 'Branding | Product UI | School Software | Shop Software | Social Media | Script Writing' },
];

export default function AboutTicket() {
  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-b from-white to-sky-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center gap-2 text-slate-900">
          <BadgeCheck className="h-5 w-5" />
          <h2 className="text-2xl font-bold">Ticket to Imagination</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10"
        >
          <div className="absolute -left-6 top-10 hidden h-12 w-12 rounded-full border-8 border-sky-100 bg-white sm:block" />
          <div className="absolute -right-6 bottom-10 hidden h-12 w-12 rounded-full border-8 border-sky-100 bg-white sm:block" />

          <div className="grid gap-4 sm:grid-cols-2">
            {lines.map((l, i) => (
              <motion.div
                key={l.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50/60 px-4 py-3"
              >
                <span className="text-sm font-medium text-slate-600">{l.label}:</span>
                <span className="text-sm font-semibold text-slate-900 sm:text-base">{l.value}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-slate-700">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium"><Palette className="h-3.5 w-3.5"/>Branding</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium"><Layout className="h-3.5 w-3.5"/>Product UI</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium"><PenTool className="h-3.5 w-3.5"/>Writing</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
