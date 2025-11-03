import { motion } from 'framer-motion';
import { Package, Image, FileText, PenTool, Layout, Share2 } from 'lucide-react';

const services = [
  { title: 'Branding Express', desc: 'Logo, Identity, Stationery', icon: Package },
  { title: 'Product Coach', desc: 'UI/UX for School & Shop Software', icon: Layout },
  { title: 'Media Wagon', desc: 'Posters, Social, Thumbnails', icon: Share2 },
  { title: 'Office Mastery', desc: 'PPT, Excel, Word Templates', icon: FileText },
  { title: 'Book Engine', desc: 'Covers & Layouts', icon: Image },
  { title: 'Script Cabin', desc: 'Writing & Content Creation', icon: PenTool },
];

function Car({ title, desc, Icon, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: i * 0.05 }}
      className="group relative rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-sky-700">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-sm text-slate-600">{desc}</p>

      {/* Wheels */}
      <div className="mt-6 flex items-center justify-between">
        <div className="h-2 w-full rounded bg-slate-200" />
      </div>
      <div className="mt-2 flex items-center justify-between">
        <div className="h-3 w-3 rounded-full bg-slate-400" />
        <div className="h-3 w-3 rounded-full bg-slate-400" />
      </div>
    </motion.div>
  );
}

export default function ServicesTrain() {
  return (
    <section id="services" className="bg-gradient-to-b from-sky-50 to-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Cargo of Creativity</h2>
          <p className="mt-1 text-slate-600">Each car delivers a focused service to move your brand forward.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Car key={s.title} title={s.title} desc={s.desc} Icon={s.icon} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
