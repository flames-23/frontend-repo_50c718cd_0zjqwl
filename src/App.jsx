import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Careers from './components/Careers';
import AuthModal from './components/AuthModal';

function App() {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-black font-inter text-white">
      <Navbar onOpenAuth={() => setAuthOpen(true)} />
      <main className="w-full">
        <Hero />
        <About />
        <Careers />
      </main>
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
      <footer className="border-t border-white/10 bg-zinc-950 py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Free Space Technologies. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
