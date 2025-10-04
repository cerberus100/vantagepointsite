import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { SkipLink } from "@/components/skip-link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vantagepoint.health"),
  title: {
    default: "VantagePoint - Education That Earns Adoption",
    template: "%s | VantagePoint",
  },
  description:
    "We help medical-device teams translate clinical evidence into confident clinical use through accredited education, compliant outreach, and measurable field enablement.",
  keywords: [
    "medical device",
    "healthcare education",
    "CME",
    "clinical training",
    "HCP engagement",
    "medical device marketing",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`}>
      <head>
        <script
          defer
          data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
          src="https://plausible.io/js/script.js"
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <SkipLink />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
