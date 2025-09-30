// app/terms-of-service/page.tsx
import type { Metadata } from "next";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — InfoFuel",
  description:
    "The rules and conditions that govern your access to and use of InfoFuel’s website and services.",
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="mb-3 text-xl font-semibold bg-gradient-to-r from-fuel-orange to-fuel-red bg-clip-text text-transparent">
      {title}
    </h2>
    <div className="space-y-3 text-gray-200">{children}</div>
  </section>
);

export default function TermsOfServicePage() {
  const updated = "September 29, 2025";

  return (
    <div className="overflow-x-hidden">
      <main className="relative min-h-screen bg-fuel-dark text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div
            className="absolute left-1/2 top-24 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full blur-[120px] opacity-20"
            style={{ background: "radial-gradient(closest-side, rgba(255,107,44,0.30), transparent)" }}
          />
        </div>

        <div className="mx-auto max-w-4xl px-6 pb-24 pt-28">
          <header className="mb-8">
            <p className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-sm text-fuel-ember backdrop-blur-sm">
              Last updated: {updated}
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight">
              Terms of <span className="bg-gradient-to-r from-fuel-orange to-fuel-red bg-clip-text text-transparent">Service</span>
            </h1>
            <p className="mt-3 text-gray-300">
              These Terms of Service (“Terms”) govern your access to and use of InfoFuel’s website, content, and services
              (“Services”). By using the Services, you agree to these Terms.
            </p>
          </header>

          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm">
            <Section title="1) Eligibility & Acceptance">
              <p>
                You must be at least the age of majority in your jurisdiction and have authority to accept these Terms. If you
                use the Services on behalf of an organization, you represent that you have authority to bind that organization.
              </p>
            </Section>

            <Section title="2) Accounts & Communications">
              <ul className="list-inside list-disc space-y-2">
                <li>You are responsible for the accuracy of information you provide and for maintaining account security.</li>
                <li>
                  By providing contact details, you consent to receive service-related messages. You may opt out of marketing
                  emails at any time.
                </li>
              </ul>
            </Section>

            <Section title="3) Services; No Professional Advice">
              <p>
                Our content and consultations are for informational/educational purposes and operational support. We do not
                provide legal, tax, medical, accounting, or investment advice. You are responsible for decisions made based on
                our content or recommendations.
              </p>
            </Section>

            <Section title="4) Fees, Payments & Trials">
              <p>
                Some Services may be paid. Prices, billing intervals, and refund policies will be presented at checkout or in a
                separate agreement or Order Form. By purchasing, you authorize us or our processors to charge the payment method
                you provide.
              </p>
            </Section>

            <Section title="5) User Content & License">
              <p>
                If you submit or upload content, you grant InfoFuel a worldwide, non-exclusive, royalty-free license to host,
                use, reproduce, and display it solely to operate and improve the Services and fulfill our engagement. You
                represent you have rights to the content and that it does not infringe third-party rights.
              </p>
            </Section>

            <Section title="6) Intellectual Property">
              <p>
                The Services, site design, text, graphics, logos, and software are owned by or licensed to InfoFuel and are
                protected by IP laws. Except as expressly permitted, you may not copy, modify, distribute, or create derivative
                works from our materials.
              </p>
            </Section>

            <Section title="7) Acceptable Use">
              <ul className="list-inside list-disc space-y-2">
                <li>No unlawful, harmful, or abusive activity; no interference with or disruption of the Services.</li>
                <li>No reverse engineering, scraping, or automated extraction except as allowed by written permission.</li>
                <li>No uploading of malicious code, or content that is illegal, defamatory, or infringes rights.</li>
              </ul>
            </Section>

            <Section title="8) Confidentiality (Client Work)">
              <p>
                Each party may access the other’s non-public information in the course of an engagement. Both parties agree to
                protect such information and use it only as necessary to perform under the engagement, subject to legal
                obligations.
              </p>
            </Section>

            <Section title="9) Third-Party Services & Links">
              <p>
                We may integrate third-party tools (e.g., CRM, calendars, analytics). Your use of such tools is subject to their
                terms and privacy policies. We are not responsible for third-party content or practices.
              </p>
            </Section>

            <Section title="10) Disclaimers">
              <p className="italic">
                THE SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL
                WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
            </Section>

            <Section title="11) Limitation of Liability">
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, INFOFUEL WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL,
                CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR LOST PROFITS/REVENUES. OUR TOTAL LIABILITY FOR ANY CLAIMS
                RELATING TO THE SERVICES WILL NOT EXCEED THE AMOUNTS YOU PAID TO US FOR THE SERVICES IN THE 3 MONTHS PRECEDING
                THE EVENT GIVING RISE TO THE CLAIM.
              </p>
            </Section>

            <Section title="12) Indemnification">
              <p>
                You agree to defend, indemnify, and hold harmless InfoFuel and its personnel from and against claims, damages,
                liabilities, and expenses arising out of your use of the Services or violation of these Terms.
              </p>
            </Section>

            <Section title="13) Termination">
              <p>
                We may suspend or terminate your access at any time if you violate these Terms or if required for security,
                legal, or operational reasons. Upon termination, provisions intended to survive will remain in effect.
              </p>
            </Section>

            <Section title="14) Changes to the Services or Terms">
              <p>
                We may modify the Services or these Terms from time to time. Continued use after changes become effective
                constitutes acceptance of the updated Terms. We’ll reflect changes by updating the “Last updated” date.
              </p>
            </Section>

            <Section title="15) Governing Law & Dispute Resolution">
              <p>
                These Terms are governed by the laws of British Columbia and applicable federal laws of Canada, without regard to
                conflict-of-laws rules. Courts located in British Columbia will have exclusive jurisdiction, unless otherwise
                agreed in a written engagement agreement.
              </p>
            </Section>

            <Section title="16) Miscellaneous">
              <ul className="list-inside list-disc space-y-2">
                <li>If any provision is unenforceable, the remainder remains in effect.</li>
                <li>No waiver of any term is a further or continuing waiver.</li>
                <li>You may not assign these Terms without our consent; we may assign as part of a restructuring or sale.</li>
                <li>These Terms constitute the entire agreement unless superseded by a signed agreement.</li>
              </ul>
            </Section>

            <Section title="17) Contact">
              <p>
                Questions? Email{" "}
                <a className="underline hover:text-white" href="mailto:hello@infofuel.io">
                  hello@infofuel.io
                </a>
                .
              </p>
            </Section>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            <Link href="/" className="underline hover:text-white">
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
