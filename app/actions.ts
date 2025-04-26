"use server"

import Razorpay from "razorpay"

// This is a server action to create a Razorpay order
export async function createOrder(amount: number, name: string) {
  try {
    // Create a new Razorpay instance with the environment variables
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    })

    // Create an order
    const order = await instance.orders.create({
      amount: amount,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      notes: {
        package_name: name,
      },
    })

    return {
      id: order.id,
      amount: order.amount,
      currency: order.currency,
      receipt: order.receipt,
    }
  } catch (error) {
    console.error("Error creating Razorpay order:", error)
    throw new Error("Failed to create order")
  }
}

// Verify payment signature
export async function verifyPayment(orderId: string, paymentId: string, signature: string) {
  try {
    // The verification logic
    const crypto = require("crypto")
    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${orderId}|${paymentId}`)
      .digest("hex")

    return { valid: generatedSignature === signature }
  } catch (error) {
    console.error("Error verifying payment:", error)
    throw new Error("Failed to verify payment")
  }
}
