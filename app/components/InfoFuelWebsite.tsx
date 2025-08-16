'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Phone, Target, Settings, Zap } from 'lucide-react';

const InfoFuelWebsite = () => {
  const [counters, setCounters] = useState({ cash: 0, leads: 0, deals: 0, years: 0 });

  useEffect(() => {
    const targets = { cash: 500, leads: 3000, deals: 800, years: 5 };
    const duration = 2000;
    const increments = {
      cash: targets.cash / (duration / 50),
      leads: targets.leads / (duration / 50),
      deals: targets.deals / (duration / 50),
      years: targets.years / (duration / 50),
    };
    const interval = setInterval(() => {
      setCounters(prev => {
        const next: any = { ...prev };
        let done = true;
        (Object.keys(targets) as (keyof typeof targets)[]).forEach(k => {
          if (next[k] < targets[k]) {
            next[k] = Math.min(next[k] + increments[k], targets[k]);
            done = false;
          }
        });
        if (done) clearInterval(interval);
        return next;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Shared wrappers
  const Container = ({ children }: { children: React.ReactNode }) => (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">{children}</div>
  );

  const Section = ({
    id,
    children,
  }: {
    id: string;
    children: React.ReactNode;
  }) => (
    <section
      id={id}
      className="relative py-24 overflow-hidden"
    >
      {/* subtle section top sheen to blend into previous */}
      <div className="pointer-events-none absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-white/5 to-transparent" />
      {/* ember field (light) */}
      <div className="pointer-events-none absolute inset-0 bg-embers opacity-[0.18]" />
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Container>{children}</Container>
      </motion.div>
      {/* subtle bottom blend into next section */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-white/5 to-transparent" />
    </section>
  );

  const Pill = ({ children }: { children: React.ReactNode }) => (
    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-fuel-ember backdrop-blur-sm">
      <span className="mr-2 inline-block h-2 w-2 rounded-full bg-fuel-ember" />
      {children}
    </div>
  );

  return (
    <div className="min-h-screen font-sans text-white bg-fuel-dark relative">
      {/* global background accents for seamlessness */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        {/* deep radial glow left */}
        <div className="absolute -left-40 top-1/4 h-[50rem] w-[50rem] rounded-full blur-[120px] opacity-20"
             style={{ background: 'radial-gradient(closest-side, rgba(255,107,44,0.35), transparent)' }} />
        {/* deep radial glow right */}
        <div className="absolute right-[-20%] top-[55%] h-[45rem] w-[45rem] rounded-full blur-[120px] opacity-20"
             style={{ background: 'radial-gradient(closest-side, rgba(230,57,70,0.32), transparent)' }} />
      </div>

      {/* NAV */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/[0.06] bg-black/40 backdrop-blur-md">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold bg-gradient-to-r from-fuel-orange to-fuel-red bg-clip-text text-transparent"
            >
              InfoFuel
            </button>
            <div className="hidden md:flex items-center gap-8 text-sm">
              {['process', 'services', 'how', 'results', 'team'].map((s) => (
                <button
                  key={s}
                  onClick={() => scrollToSection(s)}
                  className="text-gray-300 hover:text-white transition"
                >
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </button>
              ))}
            </div>
            <button
              onClick={() => scrollToSection('book-call')}
              className="rounded-lg px-5 py-2 font-semibold text-white bg-gradient-to-r from-fuel-orange to-fuel-red shadow-[0_8px_24px_-10px_rgba(230,57,70,0.6)] hover:opacity-90 transition"
            >
              Book A Call
            </button>
          </div>
        </Container>
      </nav>

      {/* HERO (no dim background — color in text + accents) */}
      <section
        id="hero"
        className="relative pt-32 pb-24 overflow-hidden"
      >
        {/* ambient band to separate from nav */}
        <div className="pointer-events-none absolute inset-x-0 top-16 h-24 bg-gradient-to-b from-white/5 to-transparent" />
        {/* ember field for continuity */}
        <div className="pointer-events-none absolute inset-0 bg-embers opacity-[0.22]" />

        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <Pill>3 Spots Available</Pill>

            <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">
              From <span className="text-fuel-orange">Creator</span> to{' '}
              <span className="text-fuel-red">CEO</span>
              <br className="hidden md:block" />
              Without the Guesswork
            </h1>

            <p className="mt-6 text-xl text-gray-300 leading-relaxed">
              We partner with creators to build{' '}
              <span className="text-fuel-ember font-semibold">
                scalable, systemized brands
              </span>{' '}
              that ignite growth — while you focus on content & community.
            </p>

            <div className="mt-10">
              <button
                onClick={() => scrollToSection('book-call')}
                className="btn-fuel inline-flex items-center group"
              >
                Book A Call
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </Container>

        {/* hero bottom blend */}
        <div className="pointer-events-none absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white/5 to-transparent" />
      </section>

      {/* PROCESS (glass cards, unified background) */}
      <Section id="process">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold tracking-widest text-fuel-ember uppercase">Process</h2>
          <h3 className="text-4xl font-bold mb-4">Your Path to Predictable Growth</h3>
          <p className="text-lg text-gray-300">
            A done-for-you system that transforms creators into scalable, revenue-driven brands.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Target, title: "Strategic Offer Design", text: "Nail your niche and build offers that convert." },
            { icon: Settings, title: "Backend Systems", text: "Let automation sell for you while you create." },
            { icon: Zap, title: "Content-to-Sales Engine", text: "Turn views into booked calls." }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-sm transition hover:border-fuel-ember/50 hover:shadow-[0_10px_40px_-10px_rgba(255,146,72,0.3)]"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-fuel-orange to-fuel-red">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* SERVICES (glass, no dim; color on headings and accents) */}
      <Section id="services">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold tracking-widest text-fuel-ember uppercase">What We Provide</h2>
          <h3 className="text-4xl sm:text-5xl font-bold mb-5">
            Everything You Need To Scale{' '}
            <span className="bg-gradient-to-r from-fuel-orange to-fuel-red bg-clip-text text-transparent">
              Your Brand’s Product
            </span>
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our integrated team covers every core function of a revenue engine. No more juggling freelancers or scattered systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {[
            {
              title: "Product Creation",
              copy: "Get professional help from industry experts to build an unstoppable product.",
              svg: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.78 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              )
            },
            {
              title: "Sales Infrastructure",
              copy: "Turn content into revenue with a funnel and sales stack backed by an experienced team.",
              svg: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              )
            },
            {
              title: "Join Our Community",
              copy: "Access an exclusive network of driven creators and sales pros to accelerate learning.",
              svg: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              )
            },
            {
              title: "Backend Automation",
              copy: "Operate like a company, not a creator—automations and analytics do the heavy lifting.",
              svg: (
                <>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </>
              )
            },
          ].map((card, i) => (
            <div
              key={i}
              className="relative rounded-2xl p-8 border border-white/10 bg-white/[0.06] backdrop-blur-sm transition hover:border-fuel-ember/50 hover:shadow-[0_10px_40px_-10px_rgba(255,146,72,0.3)]"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-fuel-orange to-fuel-red shadow-[0_0_30px_-8px_rgba(230,57,70,0.7)]">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {card.svg}
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-3">{card.title}</h4>
              <p className="text-gray-300">{card.copy}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* HOW (sticky copy + steps; continuous background) */}
      <Section id="how">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left copy */}
          <div className="lg:sticky lg:top-28">
            <h2 className="text-sm font-semibold tracking-widest text-fuel-ember uppercase mb-3">
              How We Do It
            </h2>
            <h3 className="text-4xl sm:text-5xl font-bold mb-5 leading-tight">
              From Reels to Real Profit{' '}
              <span className="block bg-gradient-to-r from-fuel-orange to-fuel-red bg-clip-text text-transparent">
                We Streamline the Entire Process
              </span>
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              We build the full customer journey—from backend systems to platform content to trained closers—all under one roof.
            </p>
            <p className="text-base text-fuel-ember font-medium">
              Turn your creative passion into predictable profit with our proven 3-phase system.
            </p>

            <div className="mt-8 hidden lg:block">
              <a
                href="#book-call"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-fuel-orange to-fuel-red px-8 py-4 font-semibold text-white shadow-[0_10px_30px_-10px_rgba(230,57,70,0.6)] transition hover:opacity-90"
              >
                Start Building Your Empire
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right steps */}
          <div className="relative space-y-10">
            <div className="hidden lg:block absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-fuel-red via-fuel-ember to-fuel-red opacity-40" />
            {[
              {
                num: 1,
                title: "LEARN",
                copy:
                  "Create or refine your offer. Learn the basics of online marketing and build a seamless organic sales model with working product design and funnels.",
              },
              {
                num: 2,
                title: "BUILD",
                copy:
                  "Hire and onboard a custom sales team. Align marketing and sales. Build automations and analytics to track what matters.",
              },
              {
                num: 3,
                title: "OPERATION",
                copy:
                  "We manage the sales team and use data from both sides to make decisions. Follow a growth model to predictably increase revenue month over month.",
              },
            ].map((step) => (
              <div key={step.num} className="relative">
                <div className="flex items-start gap-5">
                  <div className="relative shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-black bg-gradient-to-br from-fuel-orange to-fuel-red shadow-lg">
                      <span className="text-white text-xl font-bold">{step.num}</span>
                    </div>
                  </div>
                  <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm transition hover:border-fuel-ember/50 hover:shadow-[0_10px_40px_-10px_rgba(255,146,72,0.3)]">
                    <h4 className="text-2xl font-bold text-fuel-ember mb-2">{step.title}</h4>
                    <p className="text-gray-300">{step.copy}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="lg:hidden pt-4">
              <a
                href="#book-call"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-fuel-orange to-fuel-red px-8 py-4 font-semibold text-white shadow-[0_10px_30px_-10px_rgba(230,57,70,0.6)] transition hover:opacity-90"
              >
                Start Building Your Empire
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* RESULTS (stats pop via gradient text + bright numbers) */}
      <Section id="results">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold tracking-widest text-fuel-ember uppercase">Results</h2>
          <h3 className="text-4xl font-bold mb-4">From Zero to Revenue Machine</h3>
          <p className="text-lg text-gray-300">
            Creators go from burnout to predictable income with InfoFuel systems.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm">
            <div className="mb-1 text-4xl font-bold bg-gradient-to-r from-fuel-orange to-fuel-red bg-clip-text text-transparent">
              ${Math.round(counters.cash)}K+
            </div>
            <div className="text-gray-300">Cash Collected</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm">
            <div className="mb-1 text-4xl font-bold text-white">
              {Math.round(counters.leads).toLocaleString()}+
            </div>
            <div className="text-gray-300">Leads Generated</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm">
            <div className="mb-1 text-4xl font-bold text-white">
              {Math.round(counters.deals)}+
            </div>
            <div className="text-gray-300">Deals Closed</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm">
            <div className="mb-1 text-4xl font-bold text-white">
              {Math.round(counters.years)}+
            </div>
            <div className="text-gray-300">Years Experience</div>
          </div>
        </div>
      </Section>

      {/* TEAM (on dark, with subtle glow rings to match set) */}
      <Section id="team">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold tracking-widest text-fuel-ember uppercase">Our Team</h2>
          <h3 className="text-4xl font-bold mb-4">Meet the Minds Fueling Growth</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { name: 'Phineas', role: 'CEO', image: '/team-ceo.png' },
            { name: 'Ferb', role: 'COO', image: '/team-cso.png' },
            { name: 'Doofenshmirtz', role: 'Sales', image: '/team-coo.png' },
          ].map((m, i) => (
            <motion.div key={i} whileHover={{ y: -4 }} className="text-center">
              <div className="mx-auto mb-5 h-56 w-56 overflow-hidden rounded-full ring-4 ring-white/10 shadow-[0_10px_40px_-10px_rgba(255,146,72,0.25)]">
                <img src={m.image} alt={m.name} className="h-full w-full object-cover" />
              </div>
              <h4 className="text-lg font-semibold">{m.name}</h4>
              <p className="text-gray-300">{m.role}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* BOOK A CALL (kept cohesive; light panel on dark for focus) */}
      <Section id="book-call">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-fuel-orange to-fuel-red bg-clip-text text-transparent">
              Let’s Build Your Growth Engine
            </span>
          </h2>
          <p className="text-lg text-gray-300 mb-10">
            Book a free strategy call to see how InfoFuel can install the systems, sales, and structure your brand needs.
          </p>

          <div className="mb-6 rounded-2xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-sm">
            <Phone className="mx-auto mb-4 h-10 w-10 text-fuel-ember" />
            <p className="mb-4 text-gray-300">Choose a time that works for you:</p>
            {['Mon, Aug 11 - 2PM', 'Tue, Aug 12 - 10AM', 'Wed, Aug 13 - 3PM'].map((t, i) => (
              <div
                key={i}
                className="mb-2 cursor-pointer rounded-lg border border-white/10 p-3 text-white transition hover:border-fuel-ember/50 hover:bg-white/[0.08]"
              >
                {t}
              </div>
            ))}
          </div>

          <button className="rounded-lg bg-gradient-to-r from-fuel-orange to-fuel-red px-8 py-4 text-lg font-semibold text-white shadow-[0_10px_30px_-10px_rgba(230,57,70,0.6)] transition hover:opacity-90">
            Book Your Call
          </button>
        </div>
      </Section>

      {/* FOOTER (continuous with page; no hard break) */}
      <footer className="relative overflow-hidden py-16 border-t border-white/[0.06]">
        <Container>
          <div className="grid gap-12 md:grid-cols-4">
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-fuel-orange to-fuel-red bg-clip-text text-transparent">
                InfoFuel
              </h3>
              <p className="mt-4 text-gray-300">
                We fuel small businesses and creators with systems that ignite growth and turn ideas into revenue machines.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-white">Navigation</h4>
              <div className="space-y-2 text-gray-300">
                {['Process', 'What We Do', 'How We Do It', 'Results', 'Team'].map((item, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToSection(item.toLowerCase().replaceAll(' ', '-').replace('what-we-do', 'services').replace('how-we-do-it', 'how'))}
                    className="block text-left hover:text-white transition"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-white">Services</h4>
              <div className="space-y-2 text-gray-300">
                <div>Offer Strategy</div>
                <div>Sales Funnels</div>
                <div>Marketing Ecosystem</div>
                <div>Automation</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-white">Ready to Start?</h4>
              <button
                onClick={() => scrollToSection('book-call')}
                className="rounded-lg bg-white px-6 py-3 font-medium text-fuel-orange shadow hover:bg-gray-100 transition"
              >
                Book a Call →
              </button>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 text-sm text-gray-300 md:flex-row">
            <span>© 2025 InfoFuel. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
            </div>
          </div>
        </Container>

        {/* footer glow anchors the page end, keeps it seamless */}
        <div className="pointer-events-none absolute inset-x-0 -bottom-40 mx-auto h-[28rem] w-[28rem] rounded-full blur-[120px] opacity-20"
             style={{ background: 'radial-gradient(closest-side, rgba(255,146,72,0.35), transparent)' }} />
      </footer>
    </div>
  );
};

export default InfoFuelWebsite;
