import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { RazorpayButton } from "@/components/razorpay-button";

export function PricingCard() {
  return (
    <Card className="w-full max-w-md border-0 shadow-xl bg-white">
      <CardHeader className="pb-0">
        <div className="flex flex-col items-center">
          <div className="text-center mb-4">
            <div className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
              Limited Time Offer
            </div>
            <div className="mt-2 flex items-center justify-center">
              <span className="text-5xl font-extrabold text-slate-900">
                ₹199
              </span>
              <span className="ml-2 text-xl text-slate-500 line-through">
                ₹999
              </span>
            </div>
            <div className="mt-1 text-sm text-slate-500">
              80% discount ends soon!
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
              <Check className="h-4 w-4 text-indigo-600" />
            </div>
            <span className="text-slate-700">
              Live interactive workshop (3 hours)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
              <Check className="h-4 w-4 text-indigo-600" />
            </div>
            <span className="text-slate-700">
              Complete source code & project files
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
              <Check className="h-4 w-4 text-indigo-600" />
            </div>
            <span className="text-slate-700">
              48-hours access to workshop recording
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
              <Check className="h-4 w-4 text-indigo-600" />
            </div>
            <span className="text-slate-700">Certificate of completion</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
              <Check className="h-4 w-4 text-indigo-600" />
            </div>
            <span className="text-slate-700">Access to private community</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
              <Check className="h-4 w-4 text-indigo-600" />
            </div>
            <span className="font-medium text-indigo-700">
              and 4 BONUSES worth ₹28,996- FREE!
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2 flex flex-col items-center">
        <RazorpayButton
          amount={19900}
          name="AI Agents with Python Workshop"
          className="w-full py-6 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-lg font-semibold tracking-wide rounded-md shadow-md"
          paymentPageUrl="https://rzp.io/rzp/kuseBquE"
        >
          SECURE YOUR SPOT NOW
        </RazorpayButton>
        <p className="text-xs text-center text-slate-500 mt-4">
          Secure payment via Razorpay. 7-day money-back guarantee.
        </p>
      </CardFooter>
    </Card>
  );
}
