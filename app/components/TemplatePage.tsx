"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * Replicates the STRUCTURE of https://brandscaling.co/ while swapping ALL copy for "type here".
 * Uses InfoFuel dark/ember theme accents. Drop /public/main-video.mp4 in your project.
 * Save this as app/brandscaling-structure/page.tsx (Next.js app router).
 */

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto max-w-5xl px-6 sm:px-8">{children}</div>
);

const Section = ({ children, id, className = "" }: { children: React.ReactNode; id?: string; className?: string }) => (
  <section id={id} className={`relative py-12 sm:py-16 ${className}`}>
    <Container>
      <div className="relative z-10">{children}</div>
    </Container>
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

      {/* HEADER / LOGO (structure: logo centered above hero) */}
      <header className="border-b border-white/10 bg-black/30 backdrop-blur">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-lg font-semibold text-transparent">type here</Link>
            <nav className="hidden gap-8 sm:flex">
              <a className="text-sm text-gray-300 hover:text-white" href="#video">type here</a>
              <a className="text-sm text-gray-300 hover:text-white" href="#discover">type here</a>
              <a className="text-sm text-gray-300 hover:text-white" href="#cta">type here</a>
            </nav>
            <a href="#cta" className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-neutral-900 hover:bg-gray-100">type here</a>
          </div>
        </Container>
      </header>

      {/* HERO (structure: headline + subhead stacked, single column on mobile) */}
      <Section id="hero">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-wider text-orange-300/80">type here</p>
          <h1 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">type here</h1>
          <p className="mt-4 text-base text-gray-300 sm:text-lg">type here</p>
        </div>
      </Section>

      {/* CENTERED VIDEO (structure: single centered video with caption) */}
      <Section id="video">
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
          <p className="mt-3 text-center text-sm text-gray-300">type here</p>
        </div>
      </Section>

      {/* SOCIAL PROOF / STRIP OF LOGOS (structure: row of small logos/images) */}
      <Section id="logos">
        <div className="mx-auto grid max-w-4xl grid-cols-2 items-center gap-6 sm:grid-cols-4">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] p-6">
              <span className="text-xs text-gray-400">type here</span>
            </div>
          ))}
        </div>
      </Section>

      {/* "HERE'S WHAT YOU'LL DISCOVER" (structure: title + 3 stacked bullet items) */}
      <Section id="discover">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">type here</h2>
          <p className="mt-3 text-gray-300">type here</p>
        </div>
        <div className="mx-auto mt-8 max-w-3xl space-y-4">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-orange-400 to-red-500" />
              <p className="text-gray-200">type here</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SECONDARY MEDIA / IMAGE STRIP (structure: stacked images or repeats) */}
      <Section id="media">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="aspect-video rounded-xl border border-white/10 bg-white/[0.04]" />
          ))}
        </div>
      </Section>

      {/* CTA (structure: headline, short text, single button) */}
      <Section id="cta" className="pb-20">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-3xl font-bold sm:text-4xl">type here</h3>
          <p className="mt-3 text-gray-300">type here</p>
          <div className="mt-6 flex items-center justify-center">
            <a href="#book" className="rounded-lg bg-gradient-to-r from-orange-400 to-red-500 px-6 py-3 font-semibold text-white hover:opacity-90">type here</a>
          </div>
        </div>
      </Section>

      {/* BOOKING (full width embed area) */}
      <Section id="book">
        <div className="mx-auto max-w-5xl text-center">
          <h4 className="text-2xl font-semibold">type here</h4>
          <p className="mt-2 text-gray-300">type here</p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-3">
            <iframe
              title="type here"
              src="https://cal.com/infofuel.ca/30min?layout=month_view"
              className="h-[640px] w-full rounded-xl"
            />
          </div>
          <p className="mt-2 text-sm text-gray-400">type here</p>
        </div>
      </Section>

      {/* FOOTER (structure: minimal) */}
      <footer className="border-t border-white/10 py-10 text-sm text-gray-400">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div>type here</div>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white">type here</Link>
              <Link href="#" className="hover:text-white">type here</Link>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}
