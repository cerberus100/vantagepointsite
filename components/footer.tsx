import Link from "next/link";
import { Shield, Award, FileCheck } from "lucide-react";

const navigation = {
  solutions: [
    { name: "Commercial Acceleration", href: "/solutions/commercial-acceleration" },
    { name: "Education Programs", href: "/solutions/education-programs" },
    { name: "Patient Pathways", href: "/solutions/patient-pathways" },
    { name: "Data & Insights", href: "/solutions/data-insights" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Programs & Blueprints", href: "/programs" },
    { name: "Resources", href: "/resources" },
  ],
  legal: [
    { name: "Compliance", href: "/compliance" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Contact", href: "/contact" },
  ],
};

const trustBadges = [
  {
    icon: Shield,
    label: "HIPAA Compliant",
  },
  {
    icon: Award,
    label: "SOC 2 Type II",
  },
  {
    icon: FileCheck,
    label: "BAA Available",
  },
];

export function Footer() {
  return (
    <footer className="bg-navy" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <span className="text-2xl font-bold text-white">VantagePoint</span>
            <p className="text-sm leading-6 text-fog">
              Education that earns adoption. We help medical-device teams
              translate clinical evidence into confident clinical use.
            </p>
            <div className="flex space-x-6">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex flex-col items-center gap-1"
                  title={badge.label}
                >
                  <badge.icon
                    className="h-6 w-6 text-teal"
                    aria-hidden="true"
                  />
                  <span className="text-xs text-fog">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Solutions
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-fog hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-fog hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Legal & Support
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-fog hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-fog">
            &copy; {new Date().getFullYear()} VantagePoint Health Solutions.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
