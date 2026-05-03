import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "SongMap Privacy Policy — Learn how we collect, use, and protect your data.",
  alternates: {
    canonical: "/privacy",
  },
};

const LAST_UPDATED = "May 1, 2026";
const CONTACT_EMAIL = "support@songmap.co";

export default function PrivacyPage() {
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
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Privacy Policy</h1>
            <p className="text-gray-500 text-sm">Last updated: {LAST_UPDATED}</p>
          </div>

          {/* Body */}
          <div className="prose-legal">
            <Section title="1. Introduction">
              <p>
                Welcome to SongMap (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting
                your personal information and your right to privacy. This Privacy Policy explains
                how we collect, use, disclose, and safeguard your information when you use our
                iOS application and website (collectively, the &quot;Service&quot;).
              </p>
              <p>
                Please read this policy carefully. If you disagree with its terms, please
                discontinue use of the Service. By using SongMap, you agree to the collection
                and use of information in accordance with this policy.
              </p>
            </Section>

            <Section title="2. Information We Collect">
              <h3>2.1 Information You Provide</h3>
              <ul>
                <li>
                  <strong>Account information:</strong> When you create an account, we collect
                  your email address, display name, and authentication credentials. You may also
                  sign in with Apple or Google, in which case we receive limited profile
                  information from those providers.
                </li>
                <li>
                  <strong>Audio file metadata:</strong> When you analyze a track, we collect
                  the song title, artist name, and duration to identify cached results and
                  display in your history. We do not permanently store the audio content of
                  your files.
                </li>
                <li>
                  <strong>Communications:</strong> If you contact us for support, we collect
                  your email address and the content of your message.
                </li>
              </ul>

              <h3>2.2 Information Collected Automatically</h3>
              <ul>
                <li>
                  <strong>Usage data:</strong> We collect information about how you use the
                  app, including features accessed, analysis counts, and session duration, via
                  Firebase Analytics.
                </li>
                <li>
                  <strong>Device information:</strong> We collect your device type, operating
                  system version, and app version to improve compatibility.
                </li>
                <li>
                  <strong>Crash reports:</strong> We collect anonymized crash and error data
                  to improve app stability.
                </li>
              </ul>

              <h3>2.3 Information We Do Not Collect</h3>
              <p>
                We do not collect or store your audio files on our servers beyond what is
                necessary to perform the analysis. Analysis results are cached to our database
                and associated with a non-identifying song key, not your personal identity.
              </p>
            </Section>

            <Section title="3. How We Use Your Information">
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, operate, and maintain the Service</li>
                <li>Process song analysis requests and deliver results</li>
                <li>Manage your account and subscription</li>
                <li>Sync your analysis history across your devices</li>
                <li>Send transactional communications (e.g., receipt emails, account notifications)</li>
                <li>Respond to your support inquiries</li>
                <li>Monitor and analyze usage to improve the Service</li>
                <li>Detect and prevent fraudulent or abusive use</li>
                <li>Comply with legal obligations</li>
              </ul>
            </Section>

            <Section title="4. Third-Party Services">
              <p>
                We use the following third-party services that may have access to your data
                as required to perform their functions:
              </p>
              <ul>
                <li>
                  <strong>Firebase (Google):</strong> Authentication, Firestore database, and
                  Analytics. Subject to Google&apos;s Privacy Policy.
                </li>
                <li>
                  <strong>RevenueCat:</strong> Subscription management and payment processing.
                  Subject to RevenueCat&apos;s Privacy Policy.
                </li>
                <li>
                  <strong>Replicate:</strong> Cloud AI model hosting for song structure
                  analysis. Audio metadata is sent to Replicate to perform analysis. No audio
                  content is retained after processing.
                </li>
                <li>
                  <strong>Anthropic (Claude API):</strong> AI feedback generation. Structural
                  analysis data (not audio) is sent to generate arrangement feedback. Subject
                  to Anthropic&apos;s Privacy Policy.
                </li>
              </ul>
              <p>
                We do not sell your personal information to any third party for advertising
                or marketing purposes.
              </p>
            </Section>

            <Section title="5. Data Retention">
              <p>
                We retain your account information and analysis history for as long as your
                account is active. If you delete your account, we will delete your personal
                data within 30 days, except where retention is required by law.
              </p>
              <p>
                Shared song analysis results (the structural map of a song) may be retained
                in our cache indefinitely as they are not personally identifiable and benefit
                all users.
              </p>
            </Section>

            <Section title="6. Data Security">
              <p>
                We implement appropriate technical and organizational measures to protect
                your personal information against unauthorized access, alteration, disclosure,
                or destruction. These include encryption in transit (TLS), Firestore security
                rules, and restricted access controls.
              </p>
              <p>
                However, no method of transmission over the internet or electronic storage
                is 100% secure. We cannot guarantee absolute security.
              </p>
            </Section>

            <Section title="7. Your Rights">
              <p>
                Depending on your jurisdiction, you may have the following rights:
              </p>
              <ul>
                <li>
                  <strong>Access:</strong> Request a copy of the personal data we hold about you.
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate data.
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your account and personal data.
                </li>
                <li>
                  <strong>Portability:</strong> Request your data in a machine-readable format.
                </li>
                <li>
                  <strong>Opt-out of analytics:</strong> You can disable analytics tracking
                  in the app&apos;s Settings screen.
                </li>
              </ul>
              <p>
                To exercise any of these rights, contact us at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              </p>
            </Section>

            <Section title="8. Children's Privacy">
              <p>
                SongMap is not directed at children under 13 years of age. We do not
                knowingly collect personal information from children under 13. If you believe
                we have collected data from a child under 13, please contact us immediately
                at {CONTACT_EMAIL}.
              </p>
            </Section>

            <Section title="9. International Data Transfers">
              <p>
                Your information may be transferred to and maintained on computers located
                outside your state, province, or country where data protection laws may
                differ. By using the Service, you consent to this transfer.
              </p>
            </Section>

            <Section title="10. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. We will notify you of
                significant changes by updating the &quot;Last updated&quot; date at the top of this
                page and, where appropriate, through an in-app notification. Your continued
                use of the Service after changes are made constitutes acceptance of the
                updated policy.
              </p>
            </Section>

            <Section title="11. Contact Us">
              <p>
                If you have questions or concerns about this Privacy Policy or our data
                practices, please contact us at:
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
