import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import MaxWidthWrapper from "./max-width-wrapper";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <MaxWidthWrapper>
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-16">
            <div className="space-y-4 md:flex md:items-center">
              <Image
                src="/internpro-short.png"
                alt="InternPro Logo"
                width={80}
                height={80}
              />
              <p className="text-slate-300">
                Empowering students and professionals with cutting-edge AI
                skills through high-quality, hands-on workshops.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
              <ContactItem
                icon={<Mail className="h-5 w-5" />}
                href="mailto:contactus@internpro.tech"
              >
                contactus@internpro.tech
              </ContactItem>
            </div>

            <div className="md:col-span-2 mt-10 pt-8 border-t border-slate-800 md:mt-0 md:pt-0 md:border-t-0">
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <p className="text-slate-400 text-sm">
                  © {new Date().getFullYear()} InternPro. All rights reserved.
                </p>
                <div className="mt-4 sm:mt-0 space-x-4 text-sm text-slate-400">
                  <Link
                    href="/privacyPolicy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms"
                    className="hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}

function ContactItem({
  icon,
  children,
  href,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
  href?: string;
}) {
  const content = (
    <div className="flex items-start">
      <div className="flex-shrink-0 mt-1 text-indigo-400">{icon}</div>
      <div className="ml-3 text-slate-300">{children}</div>
    </div>
  );

  return href ? (
    <a href={href} className="block hover:text-white transition-colors">
      {content}
    </a>
  ) : (
    <div>{content}</div>
  );
}
