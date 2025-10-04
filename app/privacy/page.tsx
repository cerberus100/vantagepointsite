import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
      <h1 className="font-serif text-4xl font-bold tracking-tight text-navy sm:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-6 text-lg leading-8 text-slate">
        Last updated: October 4, 2024
      </p>

      <div className="mt-16 prose prose-lg prose-slate max-w-none">
        <h2>Information We Collect</h2>
        <p>
          We collect information you provide directly to us, such as when you:
        </p>
        <ul>
          <li>Fill out our contact form</li>
          <li>Subscribe to our newsletter</li>
          <li>Request information about our services</li>
        </ul>
        <p>
          This may include your name, email address, organization, and any
          messages you send us.
        </p>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to your inquiries and provide customer support</li>
          <li>Send you information about our services</li>
          <li>Improve our website and services</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>Information Sharing</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personal information
          to third parties without your consent, except as described in this
          policy.
        </p>

        <h2>Data Security</h2>
        <p>
          We implement appropriate security measures to protect your personal
          information against unauthorized access, alteration, disclosure, or
          destruction.
        </p>

        <h2>Cookies and Tracking</h2>
        <p>
          We use cookies and similar tracking technologies to enhance your
          experience on our website. You can control cookie settings through
          your browser preferences.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices of these external sites.
        </p>

        <h2>Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Opt out of marketing communications</li>
        </ul>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. We will notify
          you of any changes by posting the new policy on this page.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this privacy policy, please{" "}
          <Link href="/contact" className="text-teal hover:underline">
            contact us
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
