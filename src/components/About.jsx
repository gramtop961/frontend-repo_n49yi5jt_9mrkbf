import { motion } from 'framer-motion';
import { Sparkles, PenTool, Presentation, Bot } from 'lucide-react';

const highlights = [
  { icon: Sparkles, title: 'Branding & Identity', desc: 'Logos, brand kits, typography and visual systems that speak.' },
  { icon: PenTool, title: 'UI/UX & Product', desc: 'Clean, modern interfaces for school and e‑commerce software.' },
  { icon: Presentation, title: 'Presentation Mastery', desc: 'PPT, Excel dashboards and corporate storytelling that converts.' },
  { icon: Bot, title: 'Content & Strategy', desc: 'Narratives, scripts and social media strategy for brands.' },
];

export default function About() {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(217,70,239,0.12),transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">About Abdul Basit</h2>
            <p className="mt-4 text-white/80">
              I’m Abdul Basit, a passionate Graphic Designer with a mission to make design meaningful. I specialize in
              brand design, school and e‑commerce software UI, and presentation mastery across PPT, Excel and Word.
            </p>
            <div className="mt-6 flex items-end gap-6">
              <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-4">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">3.5+</div>
                <div className="text-sm text-white/70">Years Experience</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-4">
                <div className="text-4xl font-bold">50+</div>
                <div className="text-sm text-white/70">Projects Delivered</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10"
              >
                <div className="mb-3 inline-flex rounded-lg bg-gradient-to-br from-cyan-400/20 to-fuchsia-400/20 p-2 text-cyan-300">
                  <h.icon size={22} />
                </div>
                <h3 className="font-semibold">{h.title}</h3>
                <p className="mt-1 text-sm text-white/70">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
