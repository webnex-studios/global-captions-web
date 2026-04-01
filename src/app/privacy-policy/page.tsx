import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Global Captions",
  description:
    "Privacy Policy for Global Captions - Real-Time Audio Translation & Live Captions app.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen pt-28 pb-20">
        <article className="max-w-3xl mx-auto px-6">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-dark-text mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-text mb-12">
            Last updated: April 2, 2026
          </p>

          <div className="space-y-10 text-dark-text text-base leading-[1.8]">
            <Section title="Introduction">
              <p>
                Global Captions (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the Global Captions
                mobile application. This Privacy Policy explains how we collect,
                use, and protect your information when you use our app.
              </p>
              <p>
                By using Global Captions, you agree to the collection and use of
                information in accordance with this policy.
              </p>
            </Section>

            <Section title="Information We Collect">
              <p>We collect the following types of information:</p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li>
                  <strong>Account Information:</strong> Email address and display
                  name when you create an account.
                </li>
                <li>
                  <strong>Usage Data:</strong> Translation minutes used, language
                  preferences, and feature usage for service improvement.
                </li>
                <li>
                  <strong>Device Information:</strong> Device type, operating
                  system version, and app version for compatibility and
                  troubleshooting purposes.
                </li>
                <li>
                  <strong>Subscription Data:</strong> Purchase tokens and
                  subscription status processed through Google Play Billing.
                </li>
              </ul>
            </Section>

            <Section title="Audio Data Processing">
              <p>
                This is a critical section to understand. Global Captions
                captures audio from your device&apos;s microphone or system audio to
                provide real-time transcription and translation services.
              </p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li>
                  Audio is streamed in real-time to our processing servers for
                  transcription and translation.
                </li>
                <li>
                  <strong>Audio data is NOT stored, recorded, or retained</strong>{" "}
                  after processing. Once audio is transcribed and translated, it
                  is immediately discarded.
                </li>
                <li>
                  Caption text is displayed on your device and is not stored on
                  our servers.
                </li>
                <li>
                  We do not use your audio data for training, analytics, or any
                  purpose other than providing the captioning service.
                </li>
              </ul>
            </Section>

            <Section title="How We Use Information">
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li>
                  Provide and maintain the real-time captioning and translation
                  service.
                </li>
                <li>
                  Process subscriptions and payments through Google Play Billing.
                </li>
                <li>
                  Improve translation quality and app performance.
                </li>
                <li>
                  Send service-related communications (e.g., subscription
                  updates, security notices).
                </li>
                <li>
                  Diagnose technical issues when you report a problem.
                </li>
              </ul>
            </Section>

            <Section title="Third-Party Services">
              <p>
                Global Captions uses the following third-party services:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li>
                  <strong>Google Play Billing:</strong> For processing
                  subscription payments. Governed by{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan hover:underline"
                  >
                    Google&apos;s Privacy Policy
                  </a>
                  .
                </li>
                <li>
                  <strong>Google Cloud Speech-to-Text:</strong> For real-time
                  audio transcription processing.
                </li>
                <li>
                  <strong>Google Cloud Translation:</strong> For translating
                  transcribed text between languages.
                </li>
              </ul>
              <p className="mt-2">
                These services may process data in accordance with their own
                privacy policies.
              </p>
            </Section>

            <Section title="Data Storage & Security">
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  All data is encrypted in transit using HTTPS/TLS.
                </li>
                <li>
                  User credentials are securely hashed and stored using
                  industry-standard encryption.
                </li>
                <li>
                  Audio streams are processed in real-time and never persisted
                  to disk or database.
                </li>
                <li>
                  We implement appropriate technical and organizational measures
                  to protect your personal information.
                </li>
              </ul>
            </Section>

            <Section title="Your Rights">
              <p>You have the right to:</p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li>
                  <strong>Delete your account</strong> at any time through the
                  app&apos;s Settings screen. This permanently removes all your
                  account data.
                </li>
                <li>
                  <strong>Request data export</strong> by contacting us at the
                  email below.
                </li>
                <li>
                  <strong>Opt out</strong> of non-essential communications.
                </li>
                <li>
                  <strong>Manage permissions</strong> for microphone and overlay
                  access through your device settings.
                </li>
              </ul>
            </Section>

            <Section title="Children's Privacy">
              <p>
                Global Captions is not directed at children under 13 years of
                age. We do not knowingly collect personal information from
                children under 13. If you are a parent or guardian and believe
                your child has provided us with personal information, please
                contact us so we can take appropriate action.
              </p>
            </Section>

            <Section title="Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. We will
                notify users of any material changes by posting the updated
                policy in the app and updating the &quot;Last updated&quot; date above.
                Your continued use of the app after changes constitutes
                acceptance of the updated policy.
              </p>
            </Section>

            <Section title="Contact Us">
              <p>
                If you have questions or concerns about this Privacy Policy,
                please contact us at:
              </p>
              <p className="mt-2">
                <a
                  href="mailto:contact@globalcaptions.app"
                  className="text-cyan hover:underline"
                >
                  contact@globalcaptions.app
                </a>
              </p>
            </Section>
          </div>
        </article>
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
    <section>
      <h2 className="font-display text-xl font-bold text-dark-text mb-3 border-l-4 border-cyan pl-4">
        {title}
      </h2>
      <div className="space-y-3 text-dark-text/85">{children}</div>
    </section>
  );
}
