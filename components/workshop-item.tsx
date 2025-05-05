import React from "react";
import { RazorpayButton } from "./razorpay-button";
import Link from "next/link";

const WorkShopItem = ({
  hasPaymentButton = false,
  title,
  description,
  href,
  paymentPageUrl,
  isDisabled = false,
}: {
  hasPaymentButton: boolean;
  title: string;
  description: string;
  href: string;
  paymentPageUrl: string;
  isDisabled?: boolean;
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm border border-slate-200 hover:bg-slate-50 transition duration-300 ease-in-out">
      <div className="flex flex-col items-center justify-center mt-8">
        <h2 className="text-2xl font-bold text-slate-900 text-left">{title}</h2>
        <p className="mt-4 text-slate-600 md:text-xl">{description}</p>
        {hasPaymentButton && (
          <div className="mt-8 flex items-center gap-5">
            {!isDisabled && (
              <Link href={href} className=" text-black  hover:underline">
                Learn More
              </Link>
            )}
            {!isDisabled ? (
              <RazorpayButton
                amount={1999 * 100}
                name="AI Agents with Python Workshop"
                className="bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 rounded-lg px-4 py-2"
                paymentPageUrl={paymentPageUrl}
              >
                Register Now
              </RazorpayButton>
            ) : (
              "Coming Soon!!"
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkShopItem;
