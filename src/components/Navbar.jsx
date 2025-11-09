import React from 'react';
import { Rocket, LogIn, User } from 'lucide-react';

const Navbar = ({ onOpenAuth }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="group inline-flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 via-fuchsia-500 to-indigo-500 text-white shadow-lg shadow-purple-500/30">
            <Rocket size={18} />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-medium text-white/70">Free Space</p>
            <p className="-mt-0.5 text-base font-semibold text-white">Technologies</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#home" className="text-sm font-medium text-white/80 hover:text-white">Home</a>
          <a href="#about" className="text-sm font-medium text-white/80 hover:text-white">About</a>
          <a href="#careers" className="text-sm font-medium text-white/80 hover:text-white">Careers</a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenAuth}
            className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-1.5 text-sm font-medium text-white/90 hover:bg-white/10"
            aria-label="Sign in"
          >
            <LogIn size={16} />
            Sign in
          </button>
          <button
            onClick={onOpenAuth}
            className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-black hover:bg-white/90"
            aria-label="Sign up"
          >
            <User size={16} />
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
