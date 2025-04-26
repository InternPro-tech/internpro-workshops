"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { createOrder, verifyPayment } from "@/app/actions"
import { env } from "@/app/env"

interface RazorpayButtonProps {
  amount: number
  name: string
  className?: string
  children: React.ReactNode
  paymentPageUrl?: string
}

export function RazorpayButton({ amount, name, className, children, paymentPageUrl }: RazorpayButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handlePayment = async () => {
    try {
      setIsLoading(true)

      // Track click event
      if (typeof window !== "undefined") {
        // Google Analytics event
        if (typeof window.gtag === "function") {
          window.gtag("event", "begin_checkout", {
            currency: "INR",
            value: amount / 100,
            items: [{ item_name: name }],
          })
        }

        // Facebook Pixel event
        if (typeof window.fbq === "function") {
          window.fbq("track", "InitiateCheckout", {
            currency: "INR",
            value: amount / 100,
            content_name: name,
          })
        }
      }

      // If payment page URL is provided, redirect to it
      if (paymentPageUrl) {
        window.location.href = paymentPageUrl
        return
      }

      // Otherwise use the standard Razorpay flow
      // Create order on server
      const order = await createOrder(amount, name)

      // Load Razorpay script if not already loaded
      if (!(window as any).Razorpay) {
        await loadRazorpayScript()
      }

      const options = {
        key: env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Using the public key
        amount: order.amount,
        currency: order.currency,
        name: "AI Agents Webinar",
        description: name,
        order_id: order.id,
        handler: async (response: any) => {
          try {
            // Verify the payment
            const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = response

            const verification = await verifyPayment(razorpay_order_id, razorpay_payment_id, razorpay_signature)

            if (verification.valid) {
              // Payment successful
              if (typeof window.gtag === "function") {
                window.gtag("event", "purchase", {
                  transaction_id: razorpay_payment_id,
                  value: amount / 100,
                  currency: "INR",
                  items: [{ item_name: name }],
                })
              }

              if (typeof window.fbq === "function") {
                window.fbq("track", "Purchase", {
                  currency: "INR",
                  value: amount / 100,
                  content_name: name,
                })
              }

              // Redirect to thank you page
              window.location.href = "/thank-you"
            } else {
              alert("Payment verification failed. Please contact support.")
            }
          } catch (error) {
            console.error("Verification error:", error)
            alert("Payment verification failed. Please contact support.")
          }
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        theme: {
          color: "#4F46E5",
        },
      }

      const razorpay = new (window as any).Razorpay(options)
      razorpay.open()
    } catch (error) {
      console.error("Payment error:", error)
      alert("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button onClick={handlePayment} disabled={isLoading} className={className}>
      {isLoading ? "Processing..." : children}
    </Button>
  )
}

// Helper function to load Razorpay script
function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    const script = document.createElement("script")
    script.src = "https://checkout.razorpay.com/v1/checkout.js"
    script.onload = () => resolve(true)
    script.onerror = () => resolve(false)
    document.body.appendChild(script)
  })
}

// Add this to global.d.ts or a similar file
declare global {
  interface Window {
    gtag: any
    fbq: any
  }
}
