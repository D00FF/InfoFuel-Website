// app/privacy-policy/page.tsx
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Privacy Policy — InfoFuel",
  description:
    "How InfoFuel collects, uses, and protects your information across our website, funnels, and services.",
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="mb-3 text-xl font-semibold bg-gradient-to-r from-fuel-orange to-fuel-red bg-clip-text text-transparent">
      {title}
    </h2>
    <div className="space-y-3 text-gray-200">{children}</div>
  </section>
);

export default function PrivacyPolicyPage() {
  const updated = "September 29, 2025";

  return (
    // Page-scoped fix: prevents horizontal scroll without touching RootLayout
    <div className="overflow-x-hidden">
      <main className="relative min-h-screen bg-fuel-dark text-white">
        {/* Decorative background glows (clipped & centered) */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div
            className="absolute left-1/2 top-24 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full blur-[120px] opacity-20"
            style={{ background: "radial-gradient(closest-side, rgba(255,107,44,0.30), transparent)" }}
          />
          <div
            className="absolute left-1/2 bottom-[10%] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full blur-[120px] opacity-20"
            style={{ background: "radial-gradient(closest-side, rgba(230,57,70,0.28), transparent)" }}
          />
        </div>

        <div className="mx-auto max-w-4xl px-6 pb-24 pt-28">
          <header className="mb-8">
            <p className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-sm text-fuel-ember backdrop-blur-sm">
              Last updated: {updated}
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight">
              Privacy <span className="bg-gradient-to-r from-fuel-orange to-fuel-red bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="mt-3 text-gray-300">
              This Privacy Policy explains how InfoFuel (“we,” “us,” or “our”) collects, uses, and protects information when you
              visit our website, interact with our funnels and automations, or use our services.
            </p>
          </header>

          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm">
            <Section title="1) Information We Collect">
              <ul className="list-inside list-disc space-y-2">
                <li>
                  <span className="font-semibold">Contact & Account Info:</span> name, email, phone, social handles, company,
                  role, and preferences you provide (e.g., forms, bookings).
                </li>
                <li>
                  <span className="font-semibold">Usage & Device Data:</span> pages viewed, clicks, referring pages, IP address,
                  timestamps, approximate location, browser/OS. Collected via cookies, pixels, and analytics tools.
                </li>
                <li>
                  <span className="font-semibold">Transactional Data:</span> purchase details, invoices, support interactions.
                </li>
                <li>
                  <span className="font-semibold">Lead & CRM Data:</span> information you submit through our funnels, calendars,
                  chat, or integrated CRM systems (e.g., GoHighLevel/LeadConnector).
                </li>
              </ul>
            </Section>

            <Section title="2) How We Use Information">
              <ul className="list-inside list-disc space-y-2">
                <li>Provide, maintain, and improve our website, offers, and client services.</li>
                <li>Personalize content, offers, and onboarding workflows.</li>
                <li>Send transactional emails, service notifications, and marketing communications (with opt-out options).</li>
                <li>Measure performance, run A/B tests, and troubleshoot issues.</li>
                <li>Protect against fraud, abuse, and misuse; comply with legal obligations.</li>
              </ul>
            </Section>

            <Section title="3) Cookies & Similar Technologies">
              <p>
                We use cookies, pixels, and local storage to remember settings, analyze traffic, and attribute conversions. You
                can adjust browser settings to refuse cookies; some features may not function properly without them.
              </p>
            </Section>

            <Section title="4) Sharing & Disclosures">
              <ul className="list-inside list-disc space-y-2">
                <li>
                  <span className="font-semibold">Vetted Providers:</span> hosting, analytics, CRM, payment, communications, and
                  project tools (only to the extent necessary to deliver our services).
                </li>
                <li>
                  <span className="font-semibold">Legal & Safety:</span> if required by law, to protect rights, security, or enforce terms.
                </li>
                <li>
                  <span className="font-semibold">Business Transfers:</span> as part of a merger, acquisition, or asset sale, with
                  appropriate safeguards.
                </li>
              </ul>
            </Section>

            <Section title="5) Data Retention">
              <p>
                We retain information only as long as necessary for the purposes outlined here, to comply with legal
                requirements, resolve disputes, and enforce agreements.
              </p>
            </Section>

            <Section title="6) Your Choices & Rights">
              <ul className="list-inside list-disc space-y-2">
                <li>Opt out of marketing emails via the unsubscribe link in those emails.</li>
                <li>Request access, correction, or deletion where applicable by law.</li>
                <li>Manage cookie preferences via your browser settings and any on-site consent tools.</li>
              </ul>
            </Section>

            <Section title="7) Security">
              <p>
                We implement reasonable technical and organizational measures to safeguard personal information. No method of
                transmission or storage is 100% secure; we cannot guarantee absolute security.
              </p>
            </Section>

            <Section title="8) International Transfers">
              <p>
                Our providers may process data in locations outside your province, state, or country. We use safeguards consistent
                with applicable law when transferring data.
              </p>
            </Section>

            <Section title="9) Children’s Privacy">
              <p>
                Our site and services are not directed to children under 13 (or the age required by your jurisdiction). We do not
                knowingly collect data from children.
              </p>
            </Section>

            <Section title="10) Third-Party Links">
              <p>
                Our website may link to third-party sites. Their practices are governed by their own privacy policies; we are not
                responsible for their content or practices.
              </p>
            </Section>

            <Section title="11) Changes to This Policy">
              <p>
                We may update this Policy periodically. The “Last updated” date reflects the most recent changes. Material updates
                may be communicated by posting a notice on our site.
              </p>
            </Section>

            <Section title="12) Contact Us">
              <p>
                Questions or requests? Email us at{" "}
                <a className="underline hover:text-white" href="mailto:hello@infofuel.io">
                  hello@infofuel.io
                </a>
                .
              </p>
            </Section>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            <a href="/" className="underline hover:text-white">
              ← Back to Home
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
