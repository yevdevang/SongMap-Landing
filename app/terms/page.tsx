import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "SongMap Terms of Service — Read our terms and conditions for using the SongMap app and website.",
  alternates: {
    canonical: "/terms",
  },
};

const LAST_UPDATED = "May 1, 2026";
const CONTACT_EMAIL = "support@songmap.co";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          {/* Header */}
          <div className="mb-10 pb-8 border-b border-black/10 dark:border-white/10">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Terms of Service</h1>
            <p className="text-gray-500 text-sm">Last updated: {LAST_UPDATED}</p>
          </div>

          {/* Body */}
          <div className="prose-legal">
            <Section title="1. Acceptance of Terms">
              <p>
                By downloading, installing, or using SongMap (the &quot;App&quot;) or visiting our
                website at songmapapp.com (the &quot;Site&quot;), you agree to be bound by these Terms
                of Service (&quot;Terms&quot;). If you do not agree to these Terms, do not access or
                use the Service.
              </p>
              <p>
                These Terms apply to all visitors, users, and others who access or use the
                Service (&quot;Users&quot;). By using the Service, you represent that you are at least
                13 years of age.
              </p>
            </Section>

            <Section title="2. Description of Service">
              <p>
                SongMap is an iOS application that analyzes the structural composition of
                audio tracks — detecting sections such as Intro, Verse, Chorus, Bridge, Solo,
                Drop, and Outro — and provides AI-generated arrangement feedback powered by
                Anthropic&apos;s Claude API. The Service includes:
              </p>
              <ul>
                <li>Automatic song section detection via on-device and cloud AI processing</li>
                <li>Visual waveform and timeline display of song structure</li>
                <li>AI-powered arrangement feedback (available on all tiers)</li>
                <li>Song structure comparison against genre templates (Pro)</li>
                <li>PDF export of analysis reports (Pro)</li>
                <li>Analysis history synced across devices (all tiers)</li>
              </ul>
            </Section>

            <Section title="3. User Accounts">
              <p>
                To access certain features, you must create an account using a valid email
                address or a supported third-party sign-in provider (Apple Sign-In, Google
                Sign-In). You are responsible for:
              </p>
              <ul>
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activity that occurs under your account</li>
                <li>Notifying us immediately of any unauthorized access</li>
              </ul>
              <p>
                We reserve the right to terminate accounts that violate these Terms.
              </p>
            </Section>

            <Section title="4. Subscriptions and Payments">
              <h3>4.1 Free Tier</h3>
              <p>
                The Free tier provides unlimited analysis of songs already in our shared
                cache, plus a limited number of fresh analyses as described in the App.
                No payment is required.
              </p>

              <h3>4.2 Paid Subscriptions</h3>
              <p>
                SongMap offers paid subscription plans (Weekly, Monthly, Yearly) that provide
                additional fresh analysis credits and Pro features. Subscriptions are managed
                through Apple&apos;s App Store and are subject to Apple&apos;s subscription terms.
              </p>
              <ul>
                <li>Subscriptions automatically renew at the end of each billing period</li>
                <li>You may cancel at any time through your Apple ID Settings or the App Store</li>
                <li>No refunds are provided for unused portions of a subscription period,
                  except as required by applicable law or Apple&apos;s refund policy</li>
                <li>Pricing may change with notice; continued use after a price change
                  constitutes acceptance</li>
              </ul>

              <h3>4.3 Free Trial</h3>
              <p>
                Certain subscription plans may include a free trial period. If you do not
                cancel before the trial ends, you will be automatically charged for the
                subscription. Trials are offered at our discretion and may be limited to
                one per user.
              </p>
            </Section>

            <Section title="5. Acceptable Use">
              <p>You agree not to use the Service to:</p>
              <ul>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe the intellectual property rights of others</li>
                <li>Upload, analyze, or distribute content that is illegal, harmful, or
                  violates third-party rights</li>
                <li>Attempt to reverse-engineer, decompile, or disassemble any part of the App</li>
                <li>Use automated means to access the Service in a manner that exceeds
                  normal usage patterns</li>
                <li>Circumvent any usage limits, quota systems, or access controls</li>
                <li>Interfere with the security or integrity of the Service</li>
                <li>Share your account credentials with others</li>
              </ul>
            </Section>

            <Section title="6. Intellectual Property">
              <h3>6.1 Our Property</h3>
              <p>
                The Service, including its design, code, text, graphics, logos, and AI
                models, is owned by SongMap and protected by copyright, trademark, and other
                intellectual property laws. You may not reproduce, distribute, or create
                derivative works from any part of the Service without our prior written
                consent.
              </p>

              <h3>6.2 Your Content</h3>
              <p>
                You retain ownership of any audio files you upload. By using the Service,
                you grant us a limited, non-exclusive license to process your audio data
                solely to provide the Service features. We do not claim ownership of your
                music.
              </p>

              <h3>6.3 Analysis Results</h3>
              <p>
                Structural analysis results generated by the Service may be used for personal
                and commercial purposes by you. Cached analysis results are stored in our
                shared database and may benefit other users analyzing the same song.
              </p>
            </Section>

            <Section title="7. Disclaimer of Warranties">
              <p>
                THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF
                ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES
                OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p>
                We do not warrant that: (a) the Service will be uninterrupted or error-free;
                (b) defects will be corrected; (c) the Service or servers are free of viruses
                or harmful components; (d) section detection results will be 100% accurate
                for all musical genres.
              </p>
            </Section>

            <Section title="8. Limitation of Liability">
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, SONGMAP SHALL NOT BE
                LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
                DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE, EVEN IF WE
                HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p>
                OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM YOUR USE OF THE
                SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE 12 MONTHS PRIOR
                TO THE CLAIM, OR $50 USD IF YOU HAVE NOT MADE ANY PAYMENTS.
              </p>
            </Section>

            <Section title="9. Indemnification">
              <p>
                You agree to indemnify and hold harmless SongMap and its officers, directors,
                employees, and agents from any claims, damages, losses, or expenses
                (including reasonable attorney&apos;s fees) arising from: (a) your use of the
                Service; (b) your violation of these Terms; or (c) your violation of any
                third-party rights, including intellectual property rights.
              </p>
            </Section>

            <Section title="10. Termination">
              <p>
                We may suspend or terminate your access to the Service at our sole discretion,
                with or without notice, for conduct that we believe violates these Terms or is
                harmful to other users, us, third parties, or the integrity of the Service.
              </p>
              <p>
                Upon termination, all licenses granted to you under these Terms will
                immediately cease. Provisions that by their nature should survive termination
                shall survive (including Sections 6, 7, 8, 9, and 11).
              </p>
            </Section>

            <Section title="11. Governing Law and Disputes">
              <p>
                These Terms shall be governed by and construed in accordance with the laws of
                the State of California, United States, without regard to conflict of law
                principles.
              </p>
              <p>
                Any dispute arising from these Terms or the Service shall first be attempted
                to be resolved through good-faith negotiation. If negotiation fails, disputes
                shall be submitted to binding arbitration under the rules of the American
                Arbitration Association.
              </p>
              <p>
                Notwithstanding the above, either party may seek injunctive or equitable
                relief in a court of competent jurisdiction to protect intellectual property
                rights.
              </p>
            </Section>

            <Section title="12. Changes to Terms">
              <p>
                We reserve the right to modify these Terms at any time. We will provide
                notice of material changes by updating the &quot;Last updated&quot; date and, where
                appropriate, through an in-app notification or email. Your continued use of
                the Service after changes take effect constitutes your acceptance of the
                revised Terms.
              </p>
            </Section>

            <Section title="13. Miscellaneous">
              <ul>
                <li>
                  <strong>Entire Agreement:</strong> These Terms constitute the entire
                  agreement between you and SongMap regarding the Service.
                </li>
                <li>
                  <strong>Severability:</strong> If any provision is found invalid or
                  unenforceable, the remaining provisions will remain in full force.
                </li>
                <li>
                  <strong>No Waiver:</strong> Our failure to enforce any provision does not
                  constitute a waiver of our right to enforce it in the future.
                </li>
                <li>
                  <strong>Assignment:</strong> You may not assign these Terms without our
                  prior written consent. We may assign our rights freely.
                </li>
              </ul>
            </Section>

            <Section title="14. Contact Us">
              <p>
                Questions about these Terms should be sent to:
              </p>
              <address>
                SongMap<br />
                Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </address>
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-black/10 dark:border-white/10">
        {title}
      </h2>
      <div className="text-gray-600 dark:text-gray-400 space-y-4 leading-relaxed text-sm [&_h3]:text-gray-900 dark:[&_h3]:text-white [&_h3]:font-medium [&_h3]:text-base [&_h3]:mt-5 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_a]:text-accent [&_a]:hover:underline [&_strong]:text-gray-800 dark:[&_strong]:text-gray-300 [&_address]:not-italic [&_address]:mt-2">
        {children}
      </div>
    </section>
  );
}
