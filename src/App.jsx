import TrainHero from './components/TrainHero';
import Journey from './components/Journey';
import CarServices from './components/CarServices';
import StationGallery from './components/StationGallery';
import { Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-sky-200 text-slate-900 antialiased">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 border-b border-slate-900/10 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="font-semibold tracking-tight">Cartoon Railway</a>
          <nav className="hidden gap-6 text-sm text-slate-700 sm:flex">
            <a href="#journey" className="hover:text-slate-900">Journey</a>
            <a href="#services" className="hover:text-slate-900">Cars</a>
            <a href="#gallery" className="hover:text-slate-900">Stations</a>
          </nav>
          <a href="#contact" className="rounded-full bg-slate-900 px-4 py-1.5 text-sm text-white shadow hover:bg-slate-800">Contact</a>
        </div>
      </header>

      <main>
        <TrainHero />
        <Journey />
        <CarServices />
        <StationGallery />

        {/* Contact */}
        <section id="contact" className="relative bg-gradient-to-b from-slate-50 to-white py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-6 flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <h2 className="text-2xl font-bold">Whistle for a Stop</h2>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="grid gap-4 sm:grid-cols-2">
              <input required name="name" placeholder="Your Name" className="rounded-lg border border-slate-200 bg-white px-4 py-3 outline-none focus:border-slate-400" />
              <input required type="email" name="email" placeholder="Email" className="rounded-lg border border-slate-200 bg-white px-4 py-3 outline-none focus:border-slate-400" />
              <textarea required name="message" placeholder="Message" rows={5} className="sm:col-span-2 rounded-lg border border-slate-200 bg-white px-4 py-3 outline-none focus:border-slate-400" />
              <div className="sm:col-span-2 flex items-center justify-between">
                <div className="text-sm text-slate-600">We’ll get back before the next train arrives.</div>
                <button className="rounded-full bg-slate-900 px-6 py-2.5 font-medium text-white shadow hover:bg-slate-800">Send</button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/80 py-6 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Cartoon Railway — Crafted with love and motion.
      </footer>
    </div>
  );
}

export default App;
