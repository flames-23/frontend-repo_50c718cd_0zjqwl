import React from 'react';
import { Shield, Users, Zap } from 'lucide-react';

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-6">
    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
      <Icon size={18} />
    </div>
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="mt-2 text-sm text-white/70">{desc}</p>
  </div>
);

const About = () => {
  return (
    <section id="about" className="w-full bg-zinc-950 py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-bold text-white">Why Free Space Technologies?</h2>
          <p className="mt-3 text-white/70">
            We connect talent, ideas, funding, and opportunity in one verified, real-time workflow.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Feature
            icon={Users}
            title="Collaborative by Design"
            desc="Students, innovators, sponsors, companies, and faculty work together transparently."
          />
          <Feature
            icon={Shield}
            title="Verified & Secure"
            desc="Idea registration, approvals, and progress tracking with audit trails and protections."
          />
          <Feature
            icon={Zap}
            title="Outcome Focused"
            desc="Fund only completed, validated projects and hire proven contributors."
          />
        </div>
      </div>
    </section>
  );
};

export default About;
