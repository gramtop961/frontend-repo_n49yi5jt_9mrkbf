import { Mail } from 'lucide-react';
import RailHero from './components/RailHero';
import AboutTicket from './components/AboutTicket';
import ServicesTrain from './components/ServicesTrain';
import GalleryJunction from './components/GalleryJunction';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="font-semibold tracking-tight">AB Creative Express</a>
          <nav className="hidden gap-6 text-sm text-slate-700 sm:flex">
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#gallery" className="hover:text-slate-900">Gallery</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <a href="#contact" className="rounded-full bg-slate-900 px-4 py-1.5 text-sm text-white shadow hover:bg-slate-800">Let’s Talk</a>
        </div>
      </header>

      <main>
        <RailHero />
        <AboutTicket />
        <ServicesTrain />
        <GalleryJunction />

        {/* Contact */}
        <section id="contact" className="relative bg-gradient-to-b from-slate-50 to-white py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-6 flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <h2 className="text-2xl font-bold">Final Stop: Let’s Connect</h2>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="grid gap-4 sm:grid-cols-2">
              <input required name="name" placeholder="Your Name" className="rounded-lg border border-slate-200 bg-white px-4 py-3 outline-none focus:border-slate-400" />
              <input required type="email" name="email" placeholder="Email" className="rounded-lg border border-slate-200 bg-white px-4 py-3 outline-none focus:border-slate-400" />
              <textarea required name="message" placeholder="Message" rows={5} className="sm:col-span-2 rounded-lg border border-slate-200 bg-white px-4 py-3 outline-none focus:border-slate-400" />
              <div className="sm:col-span-2 flex items-center justify-between">
                <div className="text-sm text-slate-600">You’ve reached Basit Junction — send your signal.</div>
                <button className="rounded-full bg-slate-900 px-6 py-2.5 font-medium text-white shadow hover:bg-slate-800">Send Signal</button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/80 py-6 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Abdul Basit — Designed by Visiqal
      </footer>
    </div>
  );
}

export default App;
