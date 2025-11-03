import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased">
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 sm:px-8">
          <a href="#home" className="font-semibold tracking-tight">Abdul Basit</a>
          <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
          </nav>
          <a href="#contact" className="rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm hover:bg-white/20">Contact</a>
        </div>
      </header>

      <main className="mt-16">
        <Hero />
        <About />
        <Services />
        <Portfolio />

        <section id="contact" className="relative w-full bg-slate-950 py-20">
          <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold sm:text-4xl">Let’s Collaborate</h2>
              <p className="mt-2 text-white/75">Have a project in mind? I’d love to hear about it.</p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="grid gap-4 sm:grid-cols-2"
            >
              <input required name="name" placeholder="Name" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-white/30" />
              <input required type="email" name="email" placeholder="Email" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-white/30" />
              <textarea required name="message" placeholder="Message" rows={5} className="sm:col-span-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-white/30" />
              <div className="sm:col-span-2 flex items-center justify-between">
                <div className="text-white/60 text-sm">Or email: hello@visiqal.com</div>
                <button className="rounded-full bg-white px-6 py-2.5 font-medium text-slate-900 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/30">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80 py-6 text-center text-sm text-white/70">
        © 2025 Abdul Basit • Designed by Visiqal • Powered by Google Partner
      </footer>
    </div>
  );
}

export default App;
