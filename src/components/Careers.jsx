import React from 'react';
import { Briefcase, ArrowRight } from 'lucide-react';

const roles = [
  {
    title: 'Student Internships',
    desc: 'Earn certificates by contributing to validated, real projects.',
  },
  {
    title: 'Innovation Fellows',
    desc: 'Own ideas, build teams, and ship working prototypes.',
  },
  {
    title: 'Sponsor Partners',
    desc: 'Fund only finished, verified solutions with clear impact.',
  },
  {
    title: 'Faculty Coordinators',
    desc: 'Mentor, approve, and track cohort progress within your college.',
  },
];

const Careers = () => {
  return (
    <section id="careers" className="w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">Careers & Roles</h2>
            <p className="mt-2 text-white/70">Explore paths across the ecosystem.</p>
          </div>
          <div className="hidden rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm sm:flex items-center gap-2">
            <Briefcase size={16} /> Open opportunities
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((r) => (
            <div key={r.title} className="group rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm text-white/70">{r.desc}</p>
              <button className="mt-4 inline-flex items-center gap-1 text-sm text-white/80 group-hover:text-white">
                Learn more <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Careers;
