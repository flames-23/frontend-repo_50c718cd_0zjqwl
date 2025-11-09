import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[88vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/90" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start px-6 pb-24 pt-24 text-left md:px-8 lg:pt-28">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
          Build. Fund. Launch.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/80">
          A real-time platform where students, innovators, sponsors, companies, and faculty collaborate to turn ideas into validated products and careers.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#auth"
            className="pointer-events-auto rounded-md bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90"
          >
            Get Started
          </a>
          <a
            href="#about"
            className="pointer-events-auto rounded-md border border-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
