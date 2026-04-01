import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delete Account — Global Captions",
  description:
    "Request deletion of your Global Captions account and associated data.",
};

export default function DeleteAccountPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen pt-28 pb-20">
        <article className="max-w-3xl mx-auto px-6">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-dark-text mb-2">
            Delete Your Account
          </h1>
          <p className="text-sm text-slate-text mb-12">
            We respect your right to delete your data at any time.
          </p>

          <div className="space-y-10 text-dark-text text-base leading-[1.8]">
            <Section title="How to Delete Your Account">
              <p>
                You can delete your Global Captions account using either of the
                following methods:
              </p>

              <div className="mt-4 space-y-6">
                <div className="bg-ice rounded-xl p-6 border border-dark-text/5">
                  <h3 className="font-display font-semibold text-dark-text mb-2">
                    Option 1: Delete from the App
                  </h3>
                  <ol className="list-decimal pl-5 space-y-1.5 text-dark-text/85">
                    <li>Open the Global Captions app on your device.</li>
                    <li>
                      Go to <strong>Settings</strong> (gear icon).
                    </li>
                    <li>
                      Tap <strong>Delete Account</strong>.
                    </li>
                    <li>
                      Confirm the deletion by entering your password when
                      prompted.
                    </li>
                    <li>
                      Your account and all associated data will be permanently
                      deleted.
                    </li>
                  </ol>
                </div>

                <div className="bg-ice rounded-xl p-6 border border-dark-text/5">
                  <h3 className="font-display font-semibold text-dark-text mb-2">
                    Option 2: Request Deletion via Email
                  </h3>
                  <p className="text-dark-text/85">
                    If you are unable to access the app, you can request account
                    deletion by sending an email to{" "}
                    <a
                      href="mailto:contact@globalcaptions.app?subject=Account%20Deletion%20Request"
                      className="text-cyan hover:underline font-medium"
                    >
                      contact@globalcaptions.app
                    </a>{" "}
                    with the subject line{" "}
                    <strong>&quot;Account Deletion Request&quot;</strong>. Please include
                    the email address associated with your account. We will
                    process your request within 3 business days.
                  </p>
                </div>
              </div>
            </Section>

            <Section title="What Data Gets Deleted">
              <p>
                When you delete your account, the following data is permanently
                removed from our servers:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li>
                  <strong>Account information:</strong> Your email address,
                  display name, and hashed password.
                </li>
                <li>
                  <strong>Subscription data:</strong> Google Play purchase
                  tokens, subscription status, and billing history stored on our
                  servers.
                </li>
                <li>
                  <strong>Usage data:</strong> Translation minutes used, language
                  preferences, and feature usage logs.
                </li>
                <li>
                  <strong>Device logs:</strong> Any diagnostic logs sent from
                  your device for troubleshooting.
                </li>
              </ul>
            </Section>

            <Section title="What Is Not Stored">
              <p>
                Global Captions does <strong>not</strong> store the following
                data, so there is nothing to delete:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li>
                  <strong>Audio recordings:</strong> Audio is streamed in
                  real-time for transcription and is never recorded or saved.
                </li>
                <li>
                  <strong>Caption text:</strong> Translated captions are
                  displayed on your device and not stored on our servers.
                </li>
              </ul>
            </Section>

            <Section title="Important Notes">
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  Account deletion is <strong>permanent and irreversible</strong>
                  . You will not be able to recover your account or data after
                  deletion.
                </li>
                <li>
                  If you have an active subscription, please cancel it through
                  the Google Play Store before deleting your account. Deleting
                  your account does not automatically cancel your Google Play
                  subscription.
                </li>
                <li>
                  After deletion, you may create a new account using the same
                  email address, but none of your previous data will be
                  available.
                </li>
              </ul>
            </Section>

            <Section title="Data Retention">
              <p>
                Upon account deletion, all personally identifiable data is
                removed immediately. Anonymized, aggregated analytics data (such
                as total user counts) may be retained but cannot be linked back
                to you in any way.
              </p>
            </Section>

            <Section title="Contact Us">
              <p>
                If you have questions about account deletion or your data,
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
              <p className="mt-4 text-sm text-slate-text">
                See also our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-cyan hover:underline"
                >
                  Privacy Policy
                </Link>{" "}
                for more details on how we handle your data.
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
