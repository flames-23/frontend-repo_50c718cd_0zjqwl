import React from 'react';
import { X, GraduationCap, Lightbulb, ShieldCheck, UserCog } from 'lucide-react';

const RoleCard = ({ icon: Icon, title, desc, onSelect }) => (
  <button
    onClick={onSelect}
    className="group flex flex-col rounded-xl border border-white/10 bg-white/5 p-4 text-left transition hover:bg-white/10"
  >
    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
      <Icon size={18} />
    </div>
    <h4 className="text-base font-semibold text-white">{title}</h4>
    <p className="mt-1 text-xs text-white/70">{desc}</p>
    <span className="mt-3 text-xs font-medium text-white/80 group-hover:text-white">Continue →</span>
  </button>
);

const AuthModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div id="auth" className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="relative z-10 w-[95vw] max-w-3xl rounded-2xl border border-white/10 bg-zinc-950 p-6 text-white shadow-2xl">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">Choose your portal</h3>
            <p className="text-sm text-white/70">Sign in or create an account to continue.</p>
          </div>
          <button onClick={onClose} className="rounded-md p-2 hover:bg-white/10" aria-label="Close">
            <X size={18} />
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          <RoleCard icon={GraduationCap} title="Student" desc="Dashboard, progress, referrals, internships." onSelect={onClose} />
          <RoleCard icon={Lightbulb} title="Innovator" desc="Register ideas, form teams, build prototypes." onSelect={onClose} />
          <RoleCard icon={ShieldCheck} title="Sponsor" desc="Discover and fund validated projects." onSelect={onClose} />
          <RoleCard icon={UserCog} title="Admin" desc="Oversee users and success-based revenue." onSelect={onClose} />
        </div>

        <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
          Tip: You can personalize your profile, manage privacy & security, and track posted internships from your portal.
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
