"use client";

import CalEmbed from "./CalEmbed";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from "next/link";

const Container = ({
  children,
  className = "",
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
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <section id={id} className={`relative py-16 sm:py-20 ${className}`}>
    <Container>{children}</Container>
  </section>
);

export default function BrandScalingStructure() {
  return (
    <main className="relative min-h-screen bg-neutral-950 text-white">
      {/* ambient glows */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-40 top-24 h-[32rem] w-[32rem] rounded-full opacity-20 blur-[120px]" style={{ background: "radial-gradient(closest-side, rgba(255,146,72,.35), transparent)" }} />
        <div className="absolute right-[-15%] bottom-10 h-[28rem] w-[28rem] rounded-full opacity-20 blur-[120px]" style={{ background: "radial-gradient(closest-side, rgba(230,57,70,.30), transparent)" }} />
      </div>

    {/* NAV */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/[0.06] bg-black/40 backdrop-blur-md">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <Link
            href="/"
            className="bg-gradient-to-r from-fuel-orange to-fuel-red bg-clip-text text-2xl font-bold text-transparent"
            aria-label="Go to Home"
>            InfoFuel
            </Link>
            <div className="hidden items-center gap-8 text-sm md:flex">
              {['Your VSL', 'What You Will Povide', 'Sign Up For Customers'].map(s => (
                <button
                  key={s}
                  onClick={() => scrollToSection(s)}
                  className="transition text-gray-300 hover:text-white"
                >
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </button>
              ))}
            </div>
            <button
              onClick={() => scrollToSection('book-call')}
              className="rounded-lg bg-gradient-to-r from-fuel-orange to-fuel-red px-5 py-2 font-semibold text-white shadow-[0_8px_24px_-10px_rgba(230,57,70,0.6)] transition hover:opacity-90"
            >
              Book A Call
            </button>
          </div>
        </Container>
      </nav>

      {/* HERO (structure: headline + subhead stacked, single column on mobile) */}
      <Section id="Your VSL">
          {/* match section blends used elsewhere */}
  <div className="pointer-events-none absolute inset-0 bg-embers opacity-[0.16]" />
  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/5 to-transparent" />

  <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
    {/* Hero Section */}
  </div>
  <div className="mt-10"> </div>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xl uppercase tracking-wider text-fuel-ember">Brand Name</p>
          <h1 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">Learn Exactly How I Went From ________ To ________</h1>
          <p className="mt-4 text-base text-gray-300 sm:text-lg">And exactly how you can... *An acheivable result from your offer*</p>
        </div>
        <div className="mt-20"> </div>
        <div className="mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-2 backdrop-blur">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl">
              <video
                src="/main-video.mp4"
                controls
                className="h-full w-full object-cover"
              />
            </div>
          </div> 
          <div className="mt-10"> </div>
          <div className="mx-auto max-w-3xl text-center">
          <a className="text-2xl uppercase tracking-wider text-fuel-ember" href="#Sign Up For Customers">Sign Up</a>
          </div>
        </div>
        <div className="mt-20"> </div>
      </Section>



      {/* "HERE'S WHAT YOU'LL DISCOVER" (structure: title + 3 stacked bullet items) */}
      <Section id="What You Will Povide">
          {/* match section blends used elsewhere */}
  <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/5 to-transparent" />
  <div className="pointer-events-none absolute inset-0 bg-embers opacity-[0.16]" />
  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/5 to-transparent" />

  <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
    {/* Discover Section */}
  </div>
  <div className="mt-20"> </div>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Discover</h2>
          <p className="mt-3 text-gray-300">Key Takeaways from your offer</p>
        </div>
        <div className="mx-auto mt-8 max-w-3xl space-y-4">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-orange-400 to-red-500" />
              <p className="text-gray-200">test</p>
            </div>
          ))}
        </div>
        <div className="mt-20"> </div>

    {/* Label / Title / Subtitle (same pattern as other sections) */}
    <div className="text-center">
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">Modern Themes Young Adults Love</h2>
      <p className="mt-2 text-base text-gray-300 sm:text-lg">Four vibe-tested looks you can apply to your landing page in minutes.</p>
    </div>

    {/* 4 Glass Panels */}
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {/* 1) Neon Gradient (Glow) */}
      <div className="group rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur transition hover:border-white/20 hover:shadow-[0_0_0_3px_rgba(255,255,255,0.06)]">
        <div className="h-28 w-full overflow-hidden rounded-xl ring-1 ring-white/10">
          <div className="h-full w-full bg-[radial-gradient(100%_60%_at_20%_20%,rgba(132,204,22,0.35),transparent_60%),radial-gradient(120%_80%_at_80%_30%,rgba(99,102,241,0.55),transparent_60%),linear-gradient(90deg,#a855f7,#22d3ee)] blur-[1px]" />
        </div>
        <div className="mt-4 text-sm font-semibold">Neon Gradient</div>
        <p className="mt-1 text-xs text-gray-300">High-energy gradients + glow accents for bold CTAs.</p>
        <div className="mt-3 flex items-center gap-2">
          <span className="h-4 w-4 rounded-full" style={{ background: "#a855f7" }} />
          <span className="h-4 w-4 rounded-full" style={{ background: "#22d3ee" }} />
          <span className="h-4 w-4 rounded-full" style={{ background: "#84cc16" }} />
        </div>
      </div>

      {/* 2) Pastel Pop */}
      <div className="group rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur transition hover:border-white/20 hover:shadow-[0_0_0_3px_rgba(255,255,255,0.06)]">
        <div className="h-28 w-full overflow-hidden rounded-xl ring-1 ring-white/10">
          <div className="h-full w-full bg-[conic-gradient(at_30%_30%,#84dcc6,#a5ffd6,#ffa69e,#ff686b,#84dcc6)] blur-[0.5px]" />
        </div>
        <div className="mt-4 text-sm font-semibold">Pastel Pop</div>
        <p className="mt-1 text-xs text-gray-300">Soft, upbeat palettes with generous white space.</p>
        <div className="mt-3 flex items-center gap-2">
          <span className="h-4 w-4 rounded-full" style={{ background: "#84dcc6" }} />
          <span className="h-4 w-4 rounded-full" style={{ background: "#a5ffd6" }} />
          <span className="h-4 w-4 rounded-full" style={{ background: "#ffa69e" }} />
        </div>
      </div>

      {/* 3) Monochrome / Brutalist */}
      <div className="group rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur transition hover:border-white/20 hover:shadow-[0_0_0_3px_rgba(255,255,255,0.06)]">
        <div className="h-28 w-full overflow-hidden rounded-xl ring-1 ring-white/10">
          <div className="h-full w-full bg-gradient-to-br from-black via-neutral-900 to-neutral-800" />
          <div className="pointer-events-none absolute mt-[-112px] h-28 w-[calc(100%-2.5rem)] translate-x-[2.5rem] rounded-xl border-2 border-white/15"></div>
        </div>
        <div className="mt-4 text-sm font-semibold">Monochrome Minimal</div>
        <p className="mt-1 text-xs text-gray-300">High contrast, bold type, clean hierarchy.</p>
        <div className="mt-3 flex items-center gap-2">
          <span className="h-4 w-4 rounded-full" style={{ background: "#0a0a0a" }} />
          <span className="h-4 w-4 rounded-full" style={{ background: "#ffffff" }} />
          <span className="h-4 w-4 rounded-full" style={{ background: "#9ca3af" }} />
        </div>
      </div>

      {/* 4) Earthy Organic */}
      <div className="group rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur transition hover:border-white/20 hover:shadow-[0_0_0_3px_rgba(255,255,255,0.06)]">
        <div className="h-28 w-full overflow-hidden rounded-xl ring-1 ring-white/10">
          <div className="h-full w-full bg-gradient-to-r from-[#8b7a5a] via-[#b9a78b] to-[#2e6f62]" />
        </div>
        <div className="mt-4 text-sm font-semibold">Earthy Organic</div>
        <p className="mt-1 text-xs text-gray-300">Grounded neutrals with fresh botanical accents.</p>
        <div className="mt-3 flex items-center gap-2">
          <span className="h-4 w-4 rounded-full" style={{ background: "#8b7a5a" }} />
          <span className="h-4 w-4 rounded-full" style={{ background: "#b9a78b" }} />
          <span className="h-4 w-4 rounded-full" style={{ background: "#2e6f62" }} />
        </div>
      </div>
    </div>
    <div className="mt-20"> </div>
  </Section>


      {/* CTA Section */}
      <Section id="Sign Up For Customers" className="pb-20">
        {/* match section blends used elsewhere */}
  <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/5 to-transparent" />
  <div className="pointer-events-none absolute inset-0 bg-embers opacity-[0.16]" />
  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-red-500/20 to-transparent" />

  <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
    {/* CTA Section */}
  </div>
  <div className="mt-10"> </div>
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-3xl font-bold sm:text-4xl">Interested?</h3>
          <p className="mt-3 text-gray-300">This is where potential customers will enter their information</p>
          <div className="mt-6 flex items-center justify-center">
            <a href="#book" className="rounded-lg bg-gradient-to-r from-orange-400 to-red-500 px-6 py-3 font-semibold text-white hover:opacity-90">Get The Full Offer</a>
          </div>
        </div>
        <div className="mt-10"> </div>
      </Section>

      {/* BOOKING (full width embed area) */}
      <Section id="book">
                {/* match section blends used elsewhere */}
  <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-red-500/20 to-transparent" />
  <div className="pointer-events-none absolute inset-0 bg-embers opacity-[0.16]" />
        <div className="mt-10"> </div>
        <div className="mx-auto max-w-5xl text-center">
          <h4 className="text-2xl font-semibold">Like What You See?</h4>
          <p className="mt-2 text-gray-300">Book a free consultation</p>
          <div className="mt-10"> </div>
          {/* Full-width Cal embed */}
              <CalEmbed calLink="infofuel.ca/30min" height="620px" />
          
              <p className="mt-4 text-center text-sm text-gray-400">
                Having trouble?{" "}
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

      {/* FOOTER (structure: minimal) */}
      <footer className="border-t border-white/10 py-10 text-sm text-gray-400">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div>type here</div>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white">Privacy Policy</Link>
              <Link href="#" className="hover:text-white">Terms of Service</Link>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}
