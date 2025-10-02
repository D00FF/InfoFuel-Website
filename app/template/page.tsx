'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import CalEmbed from './CalEmbed';

/** ---------------- THEME SYSTEM ---------------- */
type ThemeKey = 'original' | 'neon' | 'pastel' | 'monochrome' | 'earthy';

type ThemeTokens = {
  name: string;
  bg: string;
  glows: { a: string; b: string; opacityA: string; opacityB: string };
  emberOpacity: string;
  gradText: string;
  btn: string;
  card: string;
  cardHover: string;
  border: string;
  textAccent: string;
  linkHover: string;
  baseHex: string;
  headingOnBase: string; // color for titles sitting on the page background (not in a card)
  baseText: string;      // body text color when on page background
  resetBtn: string;      // style for the “Reset to Original” button
};


const THEMES: Record<ThemeKey, ThemeTokens> = {
  original: {
    name: 'Original',
    bg: 'bg-neutral-950',
    glows: {
      a: 'rgba(255,146,72,.35)',
      b: 'rgba(230,57,70,.30)',
      opacityA: 'opacity-25',
      opacityB: 'opacity-20',
    },
    emberOpacity: 'opacity-[0.16]',
    gradText: 'bg-gradient-to-r from-fuel-orange to-fuel-red bg-clip-text text-transparent',
    btn: 'rounded-lg bg-gradient-to-r from-fuel-orange to-fuel-red px-6 py-3 font-semibold text-white shadow-[0_8px_24px_-10px_rgba(230,57,70,0.6)] hover:opacity-90',
    card: 'rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur',
    cardHover: 'hover:border-fuel-ember/50 hover:shadow-[0_10px_40px_-10px_rgba(255,146,72,0.3)]',
    border: 'border-white/10',
    textAccent: 'text-fuel-ember',
    linkHover: 'hover:text-white',
    baseHex: '#0a0a0a',
    headingOnBase: 'text-white',
    baseText: 'text-gray-300',
    resetBtn:
      'inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur hover:bg-white/15',
  },
  neon: {
    name: 'Neon',
    bg: 'bg-gradient-to-br from-[#0e1a40] via-[#1a1f60] to-[#311a5a]', // dark blue → indigo gradient
    glows: {
      a: 'rgba(56,189,248,0.45)', // bright cyan glow
      b: 'rgba(168,85,247,0.35)', // violet glow
      opacityA: 'opacity-40',
      opacityB: 'opacity-30',
    },
    emberOpacity: 'opacity-[0.22]',
    gradText: 'bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent',
    btn: 'rounded-lg bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-500 px-6 py-3 font-semibold text-[#07101E] shadow-[0_10px_40px_-10px_rgba(99,102,241,0.55)] hover:brightness-110',
    card: 'rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur',
    cardHover: 'hover:border-cyan-300/50 hover:shadow-[0_10px_40px_-10px_rgba(56,189,248,0.4)]',
    border: 'border-white/10',
    textAccent: 'text-cyan-300',
    linkHover: 'hover:text-cyan-200',
    baseHex: '#1a1f60',
    headingOnBase: 'text-white',
    baseText: 'text-gray-200',
    resetBtn:
      'inline-flex items-center rounded-full border border-cyan-300/40 bg-white/10 px-4 py-2 text-sm text-cyan-100 backdrop-blur hover:border-cyan-300/60',
  },
  pastel: {
    name: 'Pastel',
    bg: 'bg-gradient-to-br from-[#f0f9ff] via-[#e0f2fe] to-[#dbeafe]', // light pastel background
    glows: {
      a: 'rgba(165,243,252,0.45)',
      b: 'rgba(186,230,253,0.35)',
      opacityA: 'opacity-40',
      opacityB: 'opacity-30',
    },
    emberOpacity: 'opacity-[0.08]',
    gradText:
      'bg-gradient-to-r from-sky-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent',
    btn: 'rounded-lg bg-gradient-to-r from-sky-600 to-emerald-600 px-6 py-3 font-semibold text-white shadow-[0_8px_24px_-10px_rgba(56,189,248,0.45)] hover:opacity-90',
    card: 'rounded-2xl border border-sky-300/50 bg-slate-800/75 backdrop-blur-sm text-slate-50',
    cardHover:
      'hover:border-sky-400 hover:shadow-[0_10px_40px_-10px_rgba(56,189,248,0.35)]',
    border: 'border-sky-300/50',
    textAccent: 'text-sky-700',
    linkHover: 'hover:text-sky-900',
    baseHex: '#e0f2fe',
    headingOnBase: 'text-slate-900',   // section titles outside cards → dark
    baseText: 'text-slate-800',        // body text outside cards → dark
    resetBtn:
      'inline-flex items-center rounded-full border border-sky-400 bg-white/90 px-4 py-2 text-sm font-medium text-slate-900 shadow hover:bg-white', // clear on light bg
  },

  monochrome: {
    name: 'Monochrome',
    bg: 'bg-[#0B0B0C]', // keep dark
    glows: {
      a: 'rgba(255,255,255,0.10)',
      b: 'rgba(255,255,255,0.06)',
      opacityA: 'opacity-20',
      opacityB: 'opacity-15',
    },
    emberOpacity: 'opacity-[0.10]',
    gradText: 'bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent',
    btn: 'rounded-lg bg-gradient-to-r from-zinc-200 to-white px-6 py-3 font-semibold text-black shadow-[0_8px_24px_-10px_rgba(255,255,255,0.35)] hover:brightness-95',
    card: 'rounded-2xl border border-white/10 bg-white/[0.08] backdrop-blur',
    cardHover: 'hover:border-white/30 hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.2)]',
    border: 'border-white/10',
    textAccent: 'text-zinc-300',
    linkHover: 'hover:text-white',
    baseHex: '#0b0b0c',
    headingOnBase: 'text-white',
    baseText: 'text-zinc-300',
    resetBtn:
      'inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur hover:bg-white/15',
  },
  earthy: {
    name: 'Earthy',
    bg: 'bg-gradient-to-br from-[#0b2e1f] via-[#1a3d2b] to-[#274e3a]', // deep green tones
    glows: {
      a: 'rgba(34,197,94,0.35)',  // emerald glow
      b: 'rgba(245,158,11,0.25)', // amber glow
      opacityA: 'opacity-30',
      opacityB: 'opacity-25',
    },
    emberOpacity: 'opacity-[0.16]',
    gradText: 'bg-gradient-to-r from-emerald-400 via-amber-300 to-emerald-500 bg-clip-text text-transparent',
    btn: 'rounded-lg bg-gradient-to-r from-emerald-500 to-amber-400 px-6 py-3 font-semibold text-emerald-950 shadow-[0_8px_24px_-10px_rgba(16,185,129,0.45)] hover:opacity-95',
    card: 'rounded-2xl border border-emerald-700/40 bg-emerald-950/50 backdrop-blur-sm',
    cardHover: 'hover:border-emerald-400 hover:shadow-[0_10px_40px_-10px_rgba(16,185,129,0.35)]',
    border: 'border-emerald-700/40',
    textAccent: 'text-emerald-300',
    linkHover: 'hover:text-emerald-200',
    baseHex: '#1a3d2b',
    headingOnBase: 'text-emerald-100',
    baseText: 'text-emerald-200',
    resetBtn:
      'inline-flex items-center rounded-full border border-emerald-400/50 bg-emerald-900/40 px-4 py-2 text-sm text-emerald-100 backdrop-blur hover:bg-emerald-900/55',
  },
};


/** ---------------- LAYOUT PRIMITIVES ---------------- */
/** ---------------- Seamless divider: current theme -> Original ---------------- */
/** ---------------- Thin, intricate divider: current theme -> Original ---------------- */
/** ---------- Minimal gradient fade divider ---------- */
const ORIGINAL = THEMES['original'];

function ThemeFade({ from }: { from: ThemeTokens }) {
  return (
    <div
      className="relative h-[56px] w-full"
      style={{
        // clean vertical gradient from current theme base to Original base
        background: `linear-gradient(180deg, ${from.baseHex} 0%, rgba(255,255,255,0) 50%, ${ORIGINAL.baseHex} 100%)`,
      }}
    >
      {/* Optional micro-blur to avoid banding on some displays */}
      <div className="absolute inset-0 [backdrop-filter:blur(0.5px)]" />
    </div>
  );
};

const Container = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={`mx-auto max-w-6xl px-6 lg:px-8 ${className}`}>{children}</div>;

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const Section = ({
  id,
  children,
  className = '',
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <section id={id} className={`relative py-16 sm:py-20 ${className}`}>
    <Container>{children}</Container>
  </section>
);

/** ---------------- PAGE ---------------- */
export default function BrandScalingStructure() {
  const [theme, setTheme] = useState<ThemeKey>('original');
  const t = THEMES[theme];

  const gallery: Array<{
    key: ThemeKey;
    title: string;
    desc: string;
    preview: React.ReactNode;
  }> = [
      {
        key: 'neon',
        title: 'Neon Gradient',
        desc: 'High-energy gradients + glow accents.',
        preview: (
          <div className="h-full w-full bg-[radial-gradient(100%_60%_at_20%_20%,rgba(56,189,248,0.35),transparent_60%),radial-gradient(120%_80%_at_80%_30%,rgba(168,85,247,0.45),transparent_60%),linear-gradient(90deg,#38bdf8,#a855f7)] blur-[1px]" />
        ),
      },
      {
        key: 'pastel',
        title: 'Pastel Pop',
        desc: 'Soft, upbeat palettes with space.',
        preview: (
          <div className="h-full w-full bg-[conic-gradient(at_30%_30%,#99f6e4,#a5f3fc,#bae6fd,#93c5fd,#99f6e4)] blur-[0.5px]" />
        ),
      },
      {
        key: 'monochrome',
        title: 'Monochrome Minimal',
        desc: 'High contrast, editorial clarity.',
        preview: <div className="h-full w-full bg-gradient-to-br from-black via-neutral-900 to-neutral-800" />,
      },
      {
        key: 'earthy',
        title: 'Earthy Organic',
        desc: 'Grounded neutrals with botanical accents.',
        preview: <div className="h-full w-full bg-gradient-to-r from-[#8b7a5a] via-[#b9a78b] to-[#2e6f62]" />,
      },
    ];

  return (
    <main className={`relative min-h-screen ${t.bg} text-white overflow-x-hidden`}>
      {/* themed ambient glows (centered + clipped) */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className={`absolute left-1/2 top-24 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full blur-[120px] ${t.glows.opacityA}`}
          style={{ background: `radial-gradient(closest-side, ${t.glows.a}, transparent)` }}
        />
        <div
          className={`absolute left-1/2 bottom-10 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full blur-[120px] ${t.glows.opacityB}`}
          style={{ background: `radial-gradient(closest-side, ${t.glows.b}, transparent)` }}
        />
      </div>

      {/* NAV */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-md">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className={`${t.gradText} text-2xl font-bold`}
              aria-label="Go to Home"
            >
              InfoFuel
            </Link>
            <div className="hidden items-center gap-8 text-sm md:flex">
              {['Your VSL', 'What You Will Povide', 'Sign Up For Customers'].map((s) => (
                <button
                  key={s}
                  onClick={() => scrollToSection(s)}
                  className={`transition text-gray-300 ${t.linkHover}`}
                >
                  {s}
                </button>
              ))}
            </div>
            <button
              onClick={() => scrollToSection('book')}
              className={t.btn}
            >
              Book A Call
            </button>
          </div>
        </Container>
      </nav>

      {/* HERO */}
      <Section id="Your VSL">
        <div className="mx-auto max-w-3xl text-center">
          <p className={`text-xl uppercase tracking-wider ${t.textAccent}`}>Brand Name</p>
          <h1 className={`mt-3 text-3xl font-black leading-tight sm:text-5xl ${t.headingOnBase}`}>
            Learn Exactly How I Went From {' '}
            <span className={t.gradText}>________</span>
            To{' '}
            <span className={t.gradText}>________</span>
          </h1>
          <p className={`mt-4 text-base ${t.baseText} sm:text-lg`}>
            And exactly how you can... <em>an achievable result from your offer</em>.
          </p>
        </div>

        <div className="mt-10" />
        <div className="mx-auto max-w-3xl">
          <div className={`${t.card} overflow-hidden p-2`}>
            <div className="relative aspect-video w-full overflow-hidden rounded-xl">
              <video src="/main-video.mp4" controls className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center">
            <a href="#book" className={t.btn}>
              Sign Up
            </a>
          </div>
        </div>
      </Section>

      {/* DISCOVER + THEME GALLERY */}
      <Section id="What You Will Povide">
        {/* themed ember field */}
        <div className={`pointer-events-none absolute inset-0 bg-embers ${t.emberOpacity}`} />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className={`text-2xl font-bold sm:text-3xl ${t.headingOnBase}`}>
            Discover <span className={t.gradText}>What You’ll Learn</span>
          </h2>
          <p className={`mt-3 ${t.baseText}`}>Key takeaways from your offer</p>
        </div>

        <div className="relative z-10 mx-auto mt-8 max-w-3xl space-y-4">
          {[
            'Investing Course Eg. You’ll master the core principles of financial analysis — balance sheets, cash flow, and earnings — so you can spot companies with true staying power versus those built on hype.',
            'Public Speaking Course Eg. You’ll be guided through rehearsal methods that mimic real-world conditions, ensuring that when it’s time to perform, you feel prepared, polished, and unstoppable.',
            'How to Run a Startup Eg. We’ll teach you lean, effective marketing strategies — from social media to word-of-mouth — that bring in your first customers without needing a corporate-sized budget.',
          ].map((tcopy, i) => (
            <div key={i} className={`flex items-start gap-3 ${t.card} p-5 transition ${t.cardHover}`}>
              <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-white/70" />
              <p className="text-gray-200">{tcopy}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className={`mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl ${t.headingOnBase}`}>
            Unlimited <span className={t.gradText}>Designs</span>
          </h2>
          <p className={`mt-2 text-base ${t.baseText} sm:text-lg`}>
            We can incorporate any design you like or choose from a catalogue of styles
          </p>

          {/* Reset pill */}
          <div className="mt-5">
            <button
              onClick={() => setTheme('original')}
              className={t.resetBtn}
              aria-label="Reset to original theme"
            >
              Reset to Original
            </button>
          </div>
        </div>

        {/* 4 interactive theme cards */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map(({ key, title, desc, preview }) => {
            const active = theme === key;
            return (
              <button
                key={key}
                onClick={() => setTheme(key)}
                className={`group text-left ${t.card} p-5 transition ${t.cardHover} focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60`}
                aria-pressed={active}
                aria-label={`Apply ${title} theme`}
              >
                <div className="relative h-28 w-full overflow-hidden rounded-xl ring-1 ring-white/10">
                  {preview}
                  {active && (
                    <span className="absolute right-2 top-2 rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-semibold text-white">
                      Selected
                    </span>
                  )}
                </div>
                <div className="mt-4 text-sm font-semibold">{title}</div>
                <p className="mt-1 text-xs text-gray-300">{desc}</p>
              </button>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <Section id="Sign Up For Customers" className="pb-20">
        <div className={`pointer-events-none absolute inset-0 bg-embers ${t.emberOpacity}`} />
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <h3 className={`text-3xl font-bold sm:text-4xl ${t.headingOnBase}`}>Interested?</h3>
          <p className={`mt-3 ${t.baseText}`}>This is where potential customers will enter their information</p>
          <div className="mt-6 flex items-center justify-center">
            <a href="#book" className={t.btn}>
              Get The Full Offer
            </a>
          </div>
        </div>
      </Section>

      {/* Minimal, modern divider from selected theme into Original */}
      <ThemeFade from={t} />


      {/* BOOKING — always Original theme */}
      <section id="book" className="relative isolate overflow-hidden py-16 sm:py-20">
        {/* Hard paint Original theme background (independent of parent) */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          {/* Solid base */}
          <div className={`absolute inset-0 ${ORIGINAL.bg}`} />
          {/* Original glows */}
          <div
            className={`absolute left-1/2 top-[18%] h-[26rem] w-[26rem] -translate-x-1/2 rounded-full blur-[110px] ${ORIGINAL.glows.opacityA}`}
            style={{ background: `radial-gradient(closest-side, ${ORIGINAL.glows.a}, transparent)` }}
          />
          <div
            className={`absolute left-1/2 bottom-[12%] h-[22rem] w-[22rem] -translate-x-1/2 rounded-full blur-[110px] ${ORIGINAL.glows.opacityB}`}
            style={{ background: `radial-gradient(closest-side, ${ORIGINAL.glows.b}, transparent)` }}
          />
          {/* Original ember texture */}
          <div className={`absolute inset-0 bg-embers ${ORIGINAL.emberOpacity}`} />
        </div>

        {/* Content (force text colors locally) */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-white">
          <div className="mx-auto max-w-5xl text-center">
            <h4 className="text-2xl font-semibold">Like What You See?</h4>
            <p className="mt-2 text-gray-300">Book a free consultation</p>

            <div className="mt-8">
              <CalEmbed calLink="infofuel.ca/30min" height="620px" />
              <p className="mt-4 text-center text-sm text-gray-400">
                Having trouble?{' '}
                <a
                  href="https://cal.com/infofuel.ca/30min"
                  className={`underline ${ORIGINAL.linkHover}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Cal.com in a new tab
                </a>
              </p>
            </div>

            <div className="mt-8">
              <a href="#top" className={ORIGINAL.btn}>
                Back to Top
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* FOOTER */}
      <footer className={`border-t ${t.border} py-10 text-sm text-gray-400`}>
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div>Theme: <span className="font-medium">{THEMES[theme].name}</span></div>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className={t.linkHover}>
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className={t.linkHover}>
                Terms of Service
              </Link>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}
