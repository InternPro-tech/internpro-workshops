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

              <div className="pt-2">
                <a
                  href="https://wa.me/917378906495"
                  className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-5.445 4.455-9.885 9.942-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="md:col-span-2 mt-10 pt-8 border-t border-slate-800 md:mt-0 md:pt-0 md:border-t-0">
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <p className="text-slate-400 text-sm">
                  © {new Date().getFullYear()} InternPro. All rights reserved.
                </p>
                <div className="mt-4 sm:mt-0 space-x-4 text-sm text-slate-400">
                  <Link
                    href="/privacy"
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
