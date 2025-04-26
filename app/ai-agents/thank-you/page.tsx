"use client";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { useEffect, useState } from "react";

export default function ThankYouPage() {
  const [sundayDate, setSundayDate] = useState("");

  useEffect(() => {
    const getNextSunday = () => {
      const today = new Date();
      const dayOfWeek = today.getDay(); // 0 (Sun) to 6 (Sat)
      const daysUntilSunday = (7 - dayOfWeek) % 7 || 7; // If today is Sunday, move to next Sunday
      const nextSunday = new Date(today);
      nextSunday.setDate(today.getDate() + daysUntilSunday);
      return nextSunday.toDateString();
    };

    setSundayDate(getNextSunday());
  }, []);
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <main className="flex-1">
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-8">
                <Image
                  src="/placeholder.svg?height=40&width=120"
                  alt="Company Logo"
                  width={120}
                  height={40}
                  className="h-10 mx-auto"
                />
              </div>
              <div className="inline-flex items-center justify-center p-1 mb-8 bg-green-100 text-green-700 rounded-full">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Payment Successful</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter text-slate-900 sm:text-4xl md:text-5xl">
                Thank You for Registering!
              </h1>
              <p className="mt-4 text-slate-600 md:text-xl">
                Your seat for the AI Agents with Python Workshop has been
                confirmed.
              </p>

              <div className="mt-8 p-6 bg-slate-50 rounded-lg shadow-sm border border-slate-200">
                <h2 className="text-xl font-bold mb-4 text-slate-900">
                  Webinar Details
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 text-left">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-indigo-600" />
                    <span className="text-slate-700">{sundayDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-indigo-600" />
                    <span className="text-slate-700">11 AM - 2 PM IST</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-indigo-600" />
                    <span className="text-slate-700">Zoom Webinar</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-slate-600">
                  We've sent a confirmation email with all the details and
                  instructions to access the webinar.
                </p>
                <p className="mt-2 text-slate-600">
                  If you have any questions, please contact us at
                  support@internpro.tech
                </p>
              </div>

              {/* <div className="mt-8">
                <Link href="/">
                  <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                    Return to Homepage
                  </Button>
                </Link>
              </div> */}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
