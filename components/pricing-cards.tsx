import { Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RazorpayButton } from "@/components/razorpay-button"

export function PricingCards() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle>Basic</CardTitle>
          <CardDescription>Perfect for individuals</CardDescription>
          <div className="mt-4 flex items-baseline text-5xl font-extrabold">
            $299
            <span className="ml-1 text-xl font-medium text-muted-foreground">/person</span>
          </div>
        </CardHeader>
        <CardContent className="flex-1">
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>2-day workshop access</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Workshop materials</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Certificate of completion</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>30-day replay access</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <RazorpayButton
            amount={29900}
            name="Basic Package"
            className="w-full bg-black text-[#f0d87a] hover:bg-gray-900"
          >
            Book Your Seat Now
          </RazorpayButton>
        </CardFooter>
      </Card>

      <Card className="flex flex-col border-[#f0d87a] shadow-lg">
        <CardHeader>
          <div className="mx-auto mb-4 rounded-full bg-[#f0d87a] px-3 py-1 text-sm text-black">Most Popular</div>
          <CardTitle>Premium</CardTitle>
          <CardDescription>Best for professionals</CardDescription>
          <div className="mt-4 flex items-baseline text-5xl font-extrabold">
            $499
            <span className="ml-1 text-xl font-medium text-muted-foreground">/person</span>
          </div>
        </CardHeader>
        <CardContent className="flex-1">
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Everything in Basic</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>1-hour private consultation</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Advanced marketing toolkit</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Lifetime replay access</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Priority Q&A access</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <RazorpayButton
            amount={49900}
            name="Premium Package"
            className="w-full bg-black text-[#f0d87a] hover:bg-gray-900"
          >
            Book Your Seat Now
          </RazorpayButton>
        </CardFooter>
      </Card>

      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle>Team</CardTitle>
          <CardDescription>For organizations</CardDescription>
          <div className="mt-4 flex items-baseline text-5xl font-extrabold">
            $1999
            <span className="ml-1 text-xl font-medium text-muted-foreground">/team of 5</span>
          </div>
        </CardHeader>
        <CardContent className="flex-1">
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Everything in Premium</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Access for 5 team members</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Team implementation session</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Custom marketing strategy</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>3 months of email support</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <RazorpayButton
            amount={199900}
            name="Team Package"
            className="w-full bg-black text-[#f0d87a] hover:bg-gray-900"
          >
            Book Your Seat Now
          </RazorpayButton>
        </CardFooter>
      </Card>
    </div>
  )
}
