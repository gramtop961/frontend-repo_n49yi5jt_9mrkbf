import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Linkedin, Instagram, Mail, Globe } from 'lucide-react';
import Spline from '@splinetool/react-spline';

function useTypewriter(text, speed = 45) {
  const [display, setDisplay] = useState('');
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setDisplay(text.slice(0, i + 1));
      i += 1;
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return display;
}

export default function Hero() {
  const line1 = useTypewriter("Hi, I’m Abdul Basit — a Creative Graphic Designer & Visual Storyteller.", 22);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950/90" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6 sm:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="mb-3 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-white/80 backdrop-blur">
            Founder of Visiqal – Google Partner
          </span>
          <h1 className="font-bold leading-tight text-4xl sm:text-5xl md:text-6xl">
            Turning Ideas Into <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">Visual Reality</span>
          </h1>
          <p className="mt-4 text-lg text-white/85 min-h-[56px]">{line1}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#portfolio" className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-slate-900 shadow-lg shadow-cyan-500/10 transition hover:shadow-cyan-500/30">
              Explore My Work
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#about" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-white/90 transition hover:bg-white/10">
              About Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a aria-label="LinkedIn" href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 bg-white/5 p-2 text-white/80 transition hover:text-white hover:bg-white/10">
              <Linkedin size={22} />
            </a>
            <a aria-label="Instagram" href="https://www.instagram.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 bg-white/5 p-2 text-white/80 transition hover:text-white hover:bg-white/10">
              <Instagram size={22} />
            </a>
            <a aria-label="Email" href="mailto:hello@visiqal.com" className="rounded-full border border-white/15 bg-white/5 p-2 text-white/80 transition hover:text-white hover:bg-white/10">
              <Mail size={22} />
            </a>
            <a aria-label="Website" href="#" className="rounded-full border border-white/15 bg-white/5 p-2 text-white/80 transition hover:text-white hover:bg-white/10">
              <Globe size={22} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
