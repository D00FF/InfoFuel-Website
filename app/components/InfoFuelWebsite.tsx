'use client';

import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronRight, Target, Settings, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import CalEmbed from './CalEmbed';

type Counters = { cash: number; leads: number; deals: number; years: number };

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
);

const Section = ({
  id,
  children,
  bg,
}: {
  id: string;
  children: React.ReactNode;
  bg?: string;
}) => (
  <section id={id} className={`relative overflow-hidden py-16 sm:py-20 ${bg ?? ''}`}>
    {/* top sheen */}
    <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white/5 to-transparent" />
    {/* ember field */}
    <div className="pointer-events-none absolute inset-0 bg-embers opacity-[0.16] sm:opacity-[0.18]" />
    <Container>{children}</Container>
    {/* bottom sheen */}
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white/5 to-transparent" />
  </section>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs text-fuel-ember sm:text-sm backdrop-blur-sm">
    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-fuel-ember" />
    {children}
  </div>
);

const InfoFuelWebsite = () => {
  const [counters, setCounters] = useState<Counters>({ cash: 0, leads: 0, deals: 0, years: 0 });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Shorter, smoother mobile animation; no counter if prefers-reduced-motion
    if (prefersReducedMotion) return;
    const targets: Counters = { cash: 570, leads: 3200, deals: 850, years: 4 };
    const duration = 1600;
    const stepMs = 40;
    const steps = duration / stepMs;
    const increments: Counters = {
      cash: targets.cash / steps,
      leads: targets.leads / steps,
      deals: targets.deals / steps,
      years: targets.years / steps,
    };
    const interval = setInterval(() => {
      setCounters(prev => {
        const next: Counters = {
          cash: Math.min(prev.cash + increments.cash, targets.cash),
          leads: Math.min(prev.leads + increments.leads, targets.leads),
          deals: Math.min(prev.deals + increments.deals, targets.deals),
          years: Math.min(prev.years + increments.years, targets.years),
        };
        if (
          next.cash === targets.cash &&
          next.leads === targets.leads &&
          next.deals === targets.deals &&
          next.years === targets.years
        ) {
          clearInterval(interval);
        }
        return next;
      });
    }, stepMs);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="relative min-h-screen bg-fuel-dark font-sans text-white overflow-x-hidden">
      {/* background glows — centered & clipped to avoid horizontal scroll */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute left-1/2 top-[22%] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full blur-[100px] opacity-25 sm:h-[36rem] sm:w-[36rem]"
          style={{ background: 'radial-gradient(closest-side, rgba(255,107,44,0.30), transparent)' }}
        />
        <div
          className="absolute left-1/2 bottom-[14%] h-[24rem] w-[24rem] -translate-x-1/2 rounded-full blur-[100px] opacity-20 sm:h-[32rem] sm:w-[32rem]"
          style={{ background: 'radial-gradient(closest-side, rgba(230,57,70,0.26), transparent)' }}
        />
      </div>

      {/* NAV */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-md">
        <Container>
          <div className="flex h-14 items-center justify-between sm:h-16">
            <button
              onClick={() => scrollToSection('hero')}
              className="bg-gradient-to-r from-fuel-orange to-fuel-red bg-clip-text text-xl font-bold text-transparent sm:text-2xl"
              aria-label="Go to top"
            >
              InfoFuel
            </button>
            {/* compact mobile nav; expand on md */}
            <div className="hidden items-center gap-6 text-sm md:flex">
              {[
                { id: 'process', label: 'Process' },
                { id: 'services', label: 'Services' },
                { id: 'how', label: 'How' },
                { id: 'results', label: 'Results' },
                { id: 'team', label: 'Team' },
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 transition hover:text-white"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => scrollToSection('book-call')}
              className="rounded-lg bg-gradient-to-r from-fuel-orange to-fuel-red px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_24px_-10px_rgba(230,57,70,0.6)] transition hover:opacity-90 sm:px-5"
            >
              Book A Call
            </button>
          </div>
        </Container>
      </nav>

      {/* HERO */}
      <section id="hero" className="relative overflow-hidden pb-16 pt-24 sm:pb-20 sm:pt-28">
        <div className="pointer-events-none absolute inset-x-0 top-12 h-16 bg-gradient-to-b from-white/5 to-transparent sm:top-16" />
        <div className="pointer-events-none absolute inset-0 bg-embers opacity-[0.20]" />

        <Container>
          <div className="mx-auto max-w-3xl text-center sm:max-w-4xl">
            <Pill>3 Spots Available</Pill>

            <h1 className="mt-6 text-4xl font-bold leading-tight sm:mt-8 sm:text-6xl md:text-7xl">
              From <span className="text-fuel-orange">Creator</span> to <span className="text-fuel-red">CEO</span>
              <br className="hidden md:block" />
              Without the Guesswork
            </h1>

            <p className="mt-5 text-base leading-relaxed text-gray-300 sm:mt-6 sm:text-lg">
              We partner with creators to build{' '}
              <span className="font-semibold text-fuel-ember">scalable, systemized brands</span> that ignite growth — while you
              focus on content & community.
            </p>

            <div className="mt-8 sm:mt-10">
              <button
                onClick={() => scrollToSection('book-call')}
                className="btn-fuel group inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-base font-semibold sm:w-auto"
              >
                Book A Call
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </Container>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/5 to-transparent" />
      </section>

      {/* EXAMPLE LANDING PAGE PREVIEW */}
      <section id="example" className="relative overflow-hidden py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white/5 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-embers opacity-[0.16]" />

        <Container>
          <div className="mb-10 text-center sm:mb-12">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-fuel-ember sm:text-sm">Preview</h2>
            <h3 className="mb-3 text-3xl font-bold sm:text-4xl">Professionally Built Landing Page</h3>
            <p className="text-base text-gray-300 sm:text-lg">
              Take a look at what we envision your landing page to look like
            </p>
          </div>

          <div className="mx-auto mt-2 w-full max-w-xl sm:max-w-2xl">
            <Link href="/template" className="group block" aria-label="Open example landing page">
              <figure className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur transition hover:border-white/20 hover:shadow-[0_0_0_3px_rgba(255,255,255,0.06)]">
                {/* hover glow (desktop emphasis) */}
                <div
                  className="pointer-events-none absolute -inset-10 hidden opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30 sm:block"
                  style={{
                    background:
                      'radial-gradient(50% 50% at 50% 50%, rgba(255,146,72,0.35), rgba(230,57,70,0.25), transparent 70%)',
                  }}
                />
                <div className="relative">
                  <Image
                    src="/landingpagepreview.png"
                    alt="Preview of a professionally built landing page"
                    width={1600}
                    height={900}
                    priority
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 640px"
                    className="h-auto w-full object-cover blur-[4px] brightness-[0.8] contrast-[0.95] transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0">
                  <div className="w-full bg-gradient-to-r from-fuel-orange to-fuel-red px-4 py-3 text-center text-sm font-semibold text-white">
                    Take a peek at your potential
                  </div>
                </figcaption>
              </figure>
            </Link>

            <div className="mt-4 flex flex-col items-stretch gap-3 sm:mt-6 sm:flex-row sm:justify-center">
              <Link
                href="/template"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuel-orange to-fuel-red px-5 py-3 text-base font-semibold text-white shadow-lg transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                View Example Page
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M10.22 3.22a.75.75 0 011.06 0l5.5 5.5a.75.75 0 010 1.06l-5.5 5.5a.75.75 0 11-1.06-1.06L14.94 10 10.22 5.28a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.69a.75.75 0 010 1.5H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </Container>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white/5 to-transparent" />
      </section>

      {/* PROCESS */}
      <Section id="process">
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-fuel-ember sm:text-sm">Process</h2>
          <h3 className="mb-3 text-3xl font-bold sm:text-4xl">Your Path to Predictable Growth</h3>
          <p className="mx-auto max-w-3xl text-base text-gray-300 sm:text-lg">
            An all-in-one system that transforms niche brands into scalable, revenue-driven communities.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {[
            { icon: Target, title: 'Strategic Offer Design', text: 'Nail your niche with high-ticket offers that convert.' },
            { icon: Settings, title: 'Automated Backend Systems', text: 'Let a proven sales system work while you create.' },
            { icon: Zap, title: 'Content-to-Sales Engine', text: 'Turn views into booked calls consistently.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={!prefersReducedMotion ? { y: -4 } : undefined}
              className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 sm:p-8 backdrop-blur-sm transition hover:border-fuel-ember/50 hover:shadow-[0_10px_40px_-10px_rgba(255,146,72,0.3)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-fuel-orange to-fuel-red sm:mb-6">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h4 className="mb-1.5 text-lg font-semibold sm:text-xl">{item.title}</h4>
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section id="services">
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-fuel-ember sm:text-sm">What We Provide</h2>
          <h3 className="mb-3 text-3xl font-bold sm:text-5xl">
            Everything You Need To{' '}
            <span className="bg-gradient-to-r from-fuel-orange to-fuel-red bg-clip-text text-transparent">Scale Your Product</span>
          </h3>
          <p className="mx-auto max-w-3xl text-base text-gray-300 sm:text-lg">
            Our team covers every core function of a revenue engine—no more juggling freelancers or scattered systems.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
          {[
            {
              title: 'Product Creation',
              copy: 'Build an unstoppable high-ticket product with expert help.',
              svg: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.78 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              ),
            },
            {
              title: 'Sales Infrastructure',
              copy: 'Turn content into revenue via funnels + trained closers.',
              svg: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              ),
            },
            {
              title: 'Join Our Community',
              copy: 'Learn with driven creators and sales pros—accelerate fast.',
              svg: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                />
              ),
            },
            {
              title: 'Backend Automation',
              copy: 'Operate like a business—systems, analytics, and scale.',
              svg: (
                <>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </>
              ),
            },
          ].map((card, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-white/10 bg-white/[0.06] p-6 sm:p-8 backdrop-blur-sm transition hover:border-fuel-ember/50 hover:shadow-[0_10px_40px_-10px_rgba(255,146,72,0.3)]"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-fuel-orange to-fuel-red shadow-[0_0_30px_-8px_rgba(230,57,70,0.7)] sm:mb-6">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {card.svg}
                </svg>
              </div>
              <h4 className="mb-2 text-xl font-bold">{card.title}</h4>
              <p className="text-gray-300">{card.copy}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* HOW */}
      <Section id="how">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-fuel-ember sm:text-sm">
              How Do We Do It?
            </h2>
            <h3 className="mb-4 text-3xl font-bold leading-tight sm:text-5xl">
              From Reels to Real Profit{' '}
              <span className="block bg-gradient-to-r from-fuel-orange to-fuel-red bg-clip-text text-transparent">
                We Streamline the Entire Process
              </span>
            </h3>
            <p className="mb-5 text-base text-gray-300 sm:mb-6 sm:text-lg">
              We install the entire customer journey—lead gen to systems to trained closers—under one roof.
            </p>
            <p className="text-sm font-medium text-fuel-ember sm:text-base">
              Turn your creative passion into predictable profit with our proven 3-phase system.
            </p>

            <div className="mt-6 hidden lg:block">
              <a
                href="#book-call"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-fuel-orange to-fuel-red px-6 py-3 font-semibold text-white shadow-[0_10px_30px_-10px_rgba(230,57,70,0.6)] transition hover:opacity-90"
              >
                Interested? Book a Call
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {[
              {
                num: 1,
                title: 'LEARN',
                copy:
                  'We refine your offer with proven methods. Learn the basics of online marketing and join a community to fuel your inspiration.',
              },
              {
                num: 2,
                title: 'BUILD',
                copy:
                  'We hire/onboard a custom sales team and implement professional, automated funnels with analytics.',
              },
              {
                num: 3,
                title: 'OPERATION',
                copy:
                  'We manage the team and use data to improve weak spots. Follow a systemized model to grow revenue predictably.',
              },
            ].map(step => (
              <div key={step.num} className="relative">
                <div className="flex items-start gap-4">
                  <div className="relative shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-black bg-gradient-to-br from-fuel-orange to-fuel-red shadow-lg sm:h-14 sm:w-14">
                      <span className="text-lg font-bold text-white sm:text-xl">{step.num}</span>
                    </div>
                  </div>
                  <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.06] p-5 sm:p-6 backdrop-blur-sm transition hover:border-fuel-ember/50 hover:shadow-[0_10px_40px_-10px_rgba(255,146,72,0.3)]">
                    <h4 className="mb-1 text-lg font-bold text-fuel-ember sm:text-2xl">{step.title}</h4>
                    <p className="text-gray-300">{step.copy}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-2 lg:hidden">
              <a
                href="#book-call"
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-fuel-orange to-fuel-red px-6 py-3 font-semibold text-white shadow-[0_10px_30px_-10px_rgba(230,57,70,0.6)] transition hover:opacity-90"
              >
                Start Building Your Empire
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* RESULTS */}
      <Section id="results">
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-fuel-ember sm:text-sm">Results</h2>
          <h3 className="mb-3 text-3xl font-bold sm:text-4xl">Turning your reels into real profit</h3>
          <p className="text-base text-gray-300 sm:text-lg">
            Our creators go from burnout to predictable revenue streams.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-center sm:gap-6 md:grid-cols-4">
          {[
            { label: 'Cash Collected', value: `$${Math.round(counters.cash)}K+`, grad: true },
            { label: 'Extra Leads Generated', value: `${Math.round(counters.leads).toLocaleString()}+` },
            { label: 'Deals Closed', value: `${Math.round(counters.deals)}+` },
            { label: 'Years Of Operating', value: `${Math.round(counters.years)}+` },
          ].map((stat, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 sm:p-6 backdrop-blur-sm">
              <div
                className={
                  'mb-1 text-2xl font-bold sm:text-3xl ' +
                  (stat.grad ? 'bg-gradient-to-r from-fuel-orange to-fuel-red bg-clip-text text-transparent' : 'text-white')
                }
              >
                {stat.value}
              </div>
              <div className="text-xs text-gray-300 sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* TEAM */}
      <Section id="team">
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-fuel-ember sm:text-sm">Our Team</h2>
          <h3 className="mb-3 text-3xl font-bold sm:text-4xl">Meet the Minds Fueling Growth</h3>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 sm:gap-10 md:grid-cols-3">
          {[
            { name: 'Cory Braun', role: 'Sales', image: '/team-ceo.png' },
            { name: 'Logan Duff', role: 'Backend Development', image: '/team-cso.png' },
            { name: 'Deonne Wade', role: 'Copywriter', image: '/team-coo.png' },
          ].map((m, i) => (
            <motion.div key={i} whileHover={!prefersReducedMotion ? { y: -4 } : undefined} className="text-center">
              <div className="mx-auto mb-4 h-44 w-44 overflow-hidden rounded-full ring-4 ring-white/10 shadow-[0_10px_40px_-10px_rgba(255,146,72,0.25)] sm:h-56 sm:w-56">
                <Image
                  src={m.image}
                  alt={m.name}
                  width={224}
                  height={224}
                  className="h-full w-full object-cover"
                  priority={i === 0}
                />
              </div>
              <h4 className="text-base font-semibold sm:text-lg">{m.name}</h4>
              <p className="text-sm text-gray-300 sm:text-base">{m.role}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* BOOK A CALL */}
      <Section id="book-call">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="mb-3 text-center text-3xl font-bold sm:text-4xl">
            <span className="bg-gradient-to-r from-fuel-orange to-fuel-red bg-clip-text text-transparent">
              Let’s Build Your Growth Engine
            </span>
          </h2>
          <p className="mb-6 text-center text-base text-gray-300 sm:mb-8 sm:text-lg">
            Book a free strategy call to see how InfoFuel can install the systems, sales, and structure your brand needs.
          </p>

          {/* Full-width, responsive height embed */}
          <CalEmbed calLink="infofuel.ca/30min" height="560px" />

          <p className="mt-4 text-center text-xs text-gray-400 sm:text-sm">
            Having trouble?{' '}
            <a
              href="https://cal.com/infofuel.ca/30min"
              className="underline hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              Open Cal.com in a new tab
            </a>
          </p>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="relative overflow-hidden border-t border-white/[0.06] py-12 sm:py-16">
        <Container>
          <div className="grid gap-10 sm:gap-12 md:grid-cols-4">
            <div>
              <h3 className="bg-gradient-to-r from-fuel-orange to-fuel-red bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
                InfoFuel
              </h3>
              <p className="mt-3 text-sm text-gray-300 sm:mt-4 sm:text-base">
                We fuel small businesses and creators with systems that ignite growth and turn brands into profitable revenue
                streams.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-white sm:mb-3">Navigation</h4>
              <div className="space-y-2 text-gray-300">
                {['Process', 'Services', 'How', 'Results', 'Team'].map((item, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left text-sm transition hover:text-white"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-white sm:mb-3">Services</h4>
              <div className="space-y-2 text-gray-300 text-sm">
                <div>Offer Strategy</div>
                <div>Sales Funnels</div>
                <div>Marketing Ecosystem</div>
                <div>Automation</div>
              </div>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-white sm:mb-3">Ready to Start?</h4>
              <button
                onClick={() => scrollToSection('book-call')}
                className="w-full rounded-lg bg-white px-5 py-3 text-sm font-medium text-fuel-orange shadow transition hover:bg-gray-100 sm:w-auto"
              >
                Book a Call →
              </button>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-5 text-xs text-gray-300 sm:mt-12 sm:flex-row sm:text-sm">
            <span>© 2025 InfoFuel. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="/privacy-policy" className="transition hover:text-white">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="transition hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </Container>

        {/* footer glow */}
        <div
          className="pointer-events-none absolute inset-x-0 -bottom-32 mx-auto h-[20rem] w-[20rem] rounded-full blur-[100px] opacity-20 sm:h-[24rem] sm:w-[24rem]"
          style={{ background: 'radial-gradient(closest-side, rgba(255,146,72,0.32), transparent)' }}
        />
      </footer>
    </div>
  );
};

export default InfoFuelWebsite;

