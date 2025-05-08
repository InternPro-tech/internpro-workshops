"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Clock,
  Calendar,
  MapPin,
  CheckCircle,
  User,
  Code,
  Bot,
  Brain,
  Zap,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CountdownTimer } from "@/components/countdown-timer";
import { PricingCard } from "@/components/pricing-card";
import { RazorpayButton } from "@/components/razorpay-button";
import { StickyBanner } from "@/components/sticky-banner";
import { Footer } from "@/components/footer";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { AI_AGENTS_PAYMENT_URL } from "@/utils/constants";
import Marquee from "react-fast-marquee";

export default function WebinarLanding() {
  const [currentDate, setCurrentDate] = useState("");
  const [sundayDate, setSundayDate] = useState("");

  useEffect(() => {
    // Format today's date
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    setCurrentDate(today.toLocaleDateString("en-US", options));
  }, []);

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
      {/* Sticky Banner */}
      <StickyBanner />

      {/* Hero Section */}
      <header className="bg-white py-12 md:py-20 border-b border-slate-100">
        <MaxWidthWrapper>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-8 md:flex-row">
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                    <Image
                      src="/internpro-short.png"
                      alt="InternPro Logo"
                      width={40}
                      height={40}
                    />
                  </div>
                  |<p className="text-slate-700">an AICTE Accredited Company</p>
                </div>
                <h1 className="text-3xl font-bold tracking-tighter text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
                  Master <span className="text-indigo-600">AI Agents</span>{" "}
                  <br />
                  with Python
                </h1>
                <p className="max-w-[600px] text-slate-600 md:text-xl">
                  In just 3 hours, learn to build production-ready AI agents
                  that can think, decide, and act using Python and LangChain
                </p>
                <div className="grid grid-cols-2 gap-4">
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
                    <span className="text-slate-700">Zoom</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-indigo-600" />
                    <span className="text-slate-700">Limited Seats</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 md:gap-8 md:justify-start">
                  <RazorpayButton
                    amount={19900}
                    name="AI Agents with Python Workshop"
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium px-6 py-2 rounded-md shadow-md"
                    paymentPageUrl={AI_AGENTS_PAYMENT_URL}
                  >
                    Register Now - ₹199 Only
                  </RazorpayButton>
                  <p className="text-sm text-slate-500">Regular Price: ₹999</p>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative mx-auto aspect-video max-w-md overflow-hidden rounded-xl shadow-xl border border-slate-200">
                  <Image
                    src="\ai-agents\instructor.jpg"
                    alt="AI Agents with Python"
                    width={600}
                    height={600}
                  />
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>

      {/* Who Section */}
      <section className="py-16 bg-white">
        <MaxWidthWrapper>
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                Who Is This Workshop For?
              </h2>
              <p className="mt-4 text-slate-600">
                This workshop is designed for anyone interested in AI
                development with Python.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-indigo-600" />
                    Students
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Enhance your programming portfolio with practical AI agent
                    development skills that employers are seeking.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-indigo-600" />
                    Developers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Add AI capabilities to your existing applications and expand
                    your programming toolkit.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bot className="h-5 w-5 text-indigo-600" />
                    Professionals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Learn how to automate tasks and build intelligent systems
                    that can transform your workflow.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* What Section */}
      <section className="py-16 bg-slate-50">
        <MaxWidthWrapper>
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                What You'll Learn
              </h2>
              <p className="mt-4 text-slate-600">
                Our comprehensive curriculum covers everything you need to build
                functional AI agents.
              </p>
            </div>
            <div className="mt-12 mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left hover:text-indigo-600">
                    <span className="flex items-center gap-2">
                      <Bot className="h-5 w-5 flex-shrink-0 text-indigo-600" />
                      Fundamentals of AI Agents
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    Understand the architecture and components that make up an
                    intelligent agent. Learn about different types of agents and
                    their applications.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left hover:text-indigo-600">
                    <span className="flex items-center gap-2">
                      <Brain className="h-5 w-5 flex-shrink-0 text-indigo-600" />
                      Natural Language Processing
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    Master NLP techniques to enable your agents to understand
                    and generate human language. Work with libraries like NLTK,
                    spaCy, and transformers.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left hover:text-indigo-600">
                    <span className="flex items-center gap-2">
                      <Code className="h-5 w-5 flex-shrink-0 text-indigo-600" />
                      Integration with LLMs
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    Learn how to integrate with powerful Large Language Models
                    like GPT-4, Claude, and open-source alternatives. Build
                    agents that leverage these models.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left hover:text-indigo-600">
                    <span className="flex items-center gap-2">
                      <Zap className="h-5 w-5 flex-shrink-0 text-indigo-600" />
                      Agent Workflows and Tools
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    Design workflows that allow agents to take intelligent
                    actions. Connect your agents to APIs, databases, and other
                    tools to expand their capabilities.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left hover:text-indigo-600">
                    <span className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-indigo-600" />
                      Deployment and Optimization
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    Take your agents from development to production. Learn best
                    practices for deployment, monitoring, and optimizing
                    performance and cost.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Register Before Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-700 text-white">
        <MaxWidthWrapper>
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Register Before {currentDate} to get 80% off!
              </h2>
              <div className="mt-4 flex items-center justify-center gap-4 sm:gap-8">
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold line-through opacity-75">
                    ₹999
                  </span>
                  <span className="text-sm">Regular Price</span>
                </div>
                <div className="text-3xl font-bold">→</div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold">₹199</span>
                  <span className="text-sm">Today's Special Price</span>
                </div>
              </div>
              <div className="mt-8 flex flex-col items-center">
                <CountdownTimer className="text-7xl" />
                <p className="mt-2 text-sm text-white/80">
                  Hurry! This special offer expires in the next 15 minutes
                </p>
              </div>
              <div className="mt-8 grid gap-8 md:grid-cols-4">
                <Card className="bg-white/10 backdrop-blur-sm border-0">
                  <CardHeader>
                    <CardTitle className="text-white">Bonus #1</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/90">
                      30+ AI Agent Templates Pack worth ₹14999 - FREE
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur-sm border-0">
                  <CardHeader>
                    <CardTitle className="text-white">Bonus #2</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/90">
                      Exclusive AI Toolkit worth ₹5999 - FREE
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur-sm border-0">
                  <CardHeader>
                    <CardTitle className="text-white">Bonus #3</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/90">
                      50+ AI Agents Prompts Library worth ₹3999 - FREE
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur-sm border-0">
                  <CardHeader>
                    <CardTitle className="text-white">Bonus #3</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/90">
                      30+ Top AI Tools worth ₹3999 - FREE
                    </p>
                  </CardContent>
                </Card>
              </div>
              <RazorpayButton
                amount={19900}
                name="AI Agents with Python Workshop"
                className="mt-12 bg-white text-indigo-700 hover:bg-slate-100 font-semibold text-lg px-8 py-3 rounded-md shadow-md"
                paymentPageUrl={AI_AGENTS_PAYMENT_URL}
              >
                CLAIM YOUR SEAT NOW
              </RazorpayButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Outcomes Section */}
      <section className="py-16 bg-white">
        <MaxWidthWrapper>
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                By the End of This Workshop You Will...
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="flex items-start gap-4">
                <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-indigo-600" />
                <div>
                  <h3 className="font-bold text-slate-900">
                    Build Your Own AI Assistant
                  </h3>
                  <p className="text-slate-600">
                    Create a fully-functional AI assistant that can understand
                    natural language and perform tasks for you.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-indigo-600" />
                <div>
                  <h3 className="font-bold text-slate-900">
                    Master Agent Frameworks
                  </h3>
                  <p className="text-slate-600">
                    Gain hands-on experience with popular frameworks like
                    LangChain, AutoGen, and CrewAI.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-indigo-600" />
                <div>
                  <h3 className="font-bold text-slate-900">
                    Customize Agent Behavior
                  </h3>
                  <p className="text-slate-600">
                    Learn how to fine-tune agent personalities, capabilities,
                    and decision-making processes.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-indigo-600" />
                <div>
                  <h3 className="font-bold text-slate-900">
                    Create Multi-Agent Systems
                  </h3>
                  <p className="text-slate-600">
                    Design systems where multiple agents collaborate to solve
                    complex problems efficiently.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 flex items-center justify-center">
              <RazorpayButton
                amount={19900}
                name="AI Agents with Python Workshop"
                className="text-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium px-6 py-2 rounded-md shadow-md"
                paymentPageUrl={AI_AGENTS_PAYMENT_URL}
              >
                CLAIM YOUR SEAT NOW
              </RazorpayButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Instructor Section */}
      <section className="py-16 bg-slate-50">
        <MaxWidthWrapper>
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
                <div className="relative aspect-square overflow-hidden rounded-xl shadow-md">
                  <Image
                    src="/ai-agents/instructor.jpg"
                    alt="Instructor"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    Meet Your Instructor
                  </h2>
                  <div className="flex items-center justify-start gap-4">
                    <span className="text-xl bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent font-bold">
                      Abhay Yeole
                    </span>
                    <a
                      href="https://www.linkedin.com/in/abhay-yeole-17641779/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="h-6 w-6"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-1.378-.028-3.152-1.922-3.152-1.922 0-2.218 1.502-2.218 3.052v5.6h-3v-10h2.888v1.367h.041c.402-.761 1.384-1.562 2.849-1.562 3.045 0 3.608 2.004 3.608 4.609v5.586z" />
                      </svg>
                    </a>
                  </div>
                  {/* <h3 className="mt-2 text-xl font-semibold text-indigo-600">
                    Abhay Yeole
                  </h3> */}
                  <p className="mt-2 text-slate-600">
                    AI Expert with 5+ years of experience
                  </p>
                  <div className="mt-6 space-y-4 text-slate-600">
                    <p>
                      Meet Abhay Yeole, an AI expert and dedicated mentor with
                      over 5 years of industry experience. He has applied
                      machine learning and AI solutions across various domains,
                      turning complex challenges into smart, scalable results.
                    </p>
                    <p>
                      As a trainer and speaker, Abhay simplifies advanced AI
                      topics through real-world examples and clear, engaging
                      delivery. From neural networks to ethical AI, his sessions
                      are known for making tough concepts easy to grasp and
                      immediately useful.
                    </p>
                    <p>
                      Abhay is also a hands-on mentor, guiding learners in
                      building portfolios, acing interviews, and growing in the
                      AI field. His support goes beyond the technical—helping
                      individuals confidently step into impactful tech careers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <MaxWidthWrapper>
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                Limited Time Special Offer
              </h2>
              <p className="mt-4 text-slate-600">
                Secure your spot today and start your journey into AI agent
                development.
              </p>
            </div>
            <div className="mt-12 flex justify-center">
              <PricingCard />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <MaxWidthWrapper>
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="mt-12 mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="faq-1">
                  <AccordionTrigger className="text-left text-slate-900 hover:text-indigo-600">
                    Do I need prior Python experience?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    Basic Python knowledge is recommended. You should be
                    familiar with concepts like variables, functions, loops, and
                    basic data structures. However, we'll provide a pre-workshop
                    refresher guide to help you get up to speed.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-2">
                  <AccordionTrigger className="text-left text-slate-900 hover:text-indigo-600">
                    Will I need to pay for AI APIs?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    For the workshop, we'll use free tiers of APIs and provide
                    sample API keys for educational purposes. We'll also cover
                    open-source alternatives that can run locally on your
                    machine.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-3">
                  <AccordionTrigger className="text-left text-slate-900 hover:text-indigo-600">
                    What if I can't attend live?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    We recommend attending live to participate in the
                    interactive exercises and Q&A sessions.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-4">
                  <AccordionTrigger className="text-left text-slate-900 hover:text-indigo-600">
                    What kind of projects will we build?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    You'll build practical AI agents including a research
                    assistant, a data analyst, a customer support bot, and a
                    multi-agent system for solving complex tasks. All code will
                    be yours to keep and modify for your own projects.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-5">
                  <AccordionTrigger className="text-left text-slate-900 hover:text-indigo-600">
                    Is there a refund policy?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    Yes, we offer a 7-day money-back guarantee. If you're not
                    satisfied with the workshop content, you can request a full
                    refund within 7 days of purchase.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-6">
                  <AccordionTrigger className="text-left text-slate-900 hover:text-indigo-600">
                    What are the system requirements?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    You'll need a computer with Python 3.8+ installed, a modern
                    web browser, and an internet connection. Most exercises can
                    run on standard laptops, and we'll provide cloud options for
                    more intensive tasks.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-700 text-white">
        <MaxWidthWrapper>
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Don't Miss This Opportunity
              </h2>
              <p className="mt-4">
                Seats are limited and filling up fast. Secure your spot today.
              </p>
              <RazorpayButton
                amount={19900}
                name="AI Agents with Python Workshop"
                className="mt-8 bg-white text-indigo-700 hover:bg-slate-100 font-semibold text-lg px-8 py-3 rounded-md shadow-md"
                paymentPageUrl={AI_AGENTS_PAYMENT_URL}
              >
                REGISTER NOW - ₹199 ONLY
              </RazorpayButton>
              <p className="mt-4 text-sm text-white/80">
                Limited time offer. Regular price: ₹999
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
