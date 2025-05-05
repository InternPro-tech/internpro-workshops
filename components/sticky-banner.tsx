"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { CountdownTimer } from "@/components/countdown-timer";
import { RazorpayButton } from "@/components/razorpay-button";

export function StickyBanner() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 text-white p-3 shadow-lg">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <div className="text-slate-300 text-sm font-medium">
            Limited Time Offer:
          </div>
          <CountdownTimer className="text-white" />
        </div>
        <div className="flex items-center gap-4">
          <RazorpayButton
            amount={19900}
            name="AI Agents with Python Workshop"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium px-6 py-2 rounded-md shadow-md"
            paymentPageUrl="https://rzp.io/rzp/kuseBquE"
          >
            Register Now - ₹199 Only
          </RazorpayButton>
        </div>
      </div>
    </div>
  );
}
