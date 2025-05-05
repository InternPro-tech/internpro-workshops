"use client";

import Image from "next/image";
import WorkShopItem from "@/components/workshop-item";
import { Footer } from "@/components/footer";

export default function Main() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
      <div className="container p-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 flex items-center justify-center">
            <Image
              src="/internpro-white.jpg"
              alt="Company Logo"
              width={120}
              height={120}
            />
          </div>
          <h1 className="text-3xl font-bold tracking-tighter text-slate-900 sm:text-4xl md:text-5xl">
            Workshops by <span className="bg-yellow-500">InternPro</span>
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Join our expert-led workshops to enhance your skills and stay ahead
            in the tech industry.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3 py-4">
          <WorkShopItem
            hasPaymentButton={true}
            title="AI Agents with Python"
            description="Learn to build AI agents using Python in this hands-on workshop."
            href={"/ai-agents"}
            paymentPageUrl="https://rzp.io/rzp/kuseBquE"
          />
          <WorkShopItem
            hasPaymentButton={true}
            title="AI-Powered Frontend Development"
            description="Master frontend development . Register now!"
            href="/frontend-using-ai"
            paymentPageUrl="https://example.com/payment-page-js"
            isDisabled={true}
          />
          <WorkShopItem
            hasPaymentButton={true}
            title="UI/UX Design with Figma"
            description="Learn UI/UX design principles and tools in this workshop."
            href="/ui-ux-design"
            paymentPageUrl="https://example.com/payment-page-figma"
            isDisabled={true}
          />
        </div>
        {/* <footer className="mt-12 border-t border-slate-200 pt-6 text-center">
          <div className="flex flex-col items-center">
            <Image
              src="/placeholder.svg"
              alt="Footer Logo"
              width={40}
              height={40}
            />
            <h2 className="text-xl font-semibold text-slate-800">Contact Us</h2>
            <p className="mt-2 text-slate-600">
              Have questions or need assistance? Reach out to us at{" "}
              <a
                href="mailto:support@internpro.com"
                className="text-blue-600 hover:underline"
              >
                contactus@internpro.tech
              </a>{" "}
              or call us at{" "}
              <a
                href="tel:+917378906495"
                className="text-blue-600 hover:underline"
              >
                +91 737 890 6495
              </a>
              .
            </p>
            <a
              href="https://wa.me/7378906495"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-500 rounded hover:bg-green-600"
            >
              Connect on WhatsApp
            </a>
            <p className="mt-4 text-xs text-slate-500">
              © {new Date().getFullYear()} InternPro. All rights reserved.
            </p>
          </div>
        </footer> */}
        <Footer />
      </div>
    </div>
  );
}
