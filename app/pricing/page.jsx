"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Check, ArrowRight } from "lucide-react"
import { useState } from "react"

export default function PricingPage() {
  const [billing, setBilling] = useState("monthly")

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams getting started",
      monthlyPrice: 49,
      annualPrice: 490,
      features: [
        "Up to 5 team members",
        "5,000 contacts",
        "Basic pipeline management",
        "Email templates",
        "Mobile app access",
        "Email support",
      ],
    },
    {
      name: "Professional",
      description: "For growing sales teams",
      monthlyPrice: 99,
      annualPrice: 990,
      popular: true,
      features: [
        "Up to 20 team members",
        "50,000 contacts",
        "Advanced analytics",
        "Workflow automation",
        "API access",
        "Priority support",
        "Custom integrations",
      ],
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      monthlyPrice: 299,
      annualPrice: 2990,
      features: [
        "Unlimited team members",
        "Unlimited contacts",
        "Advanced AI features",
        "Custom workflows",
        "Dedicated support",
        "SSO & advanced security",
        "Custom training",
        "SLA guarantees",
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 px-4 sm:px-6 lg:px-8">
         <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
            Simple, Transparent <span className="bg-primary bg-clip-text text-transparent">Pricing</span>
          </h1>
          <p className="text-xl text-foreground/60 mb-8">
            Choose the perfect plan for your team. All plans include a 30-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex bg-muted rounded-lg p-1 mb-12 shadow-sm">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-5 py-2 rounded-md font-medium transition-all ${
                billing === "monthly" ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("annual")}
              className={`px-5 py-2 rounded-md font-medium transition-all ${
                billing === "annual" ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-foreground"
              }`}
            >
              Annual <span className="text-xs ml-1 opacity-80">(Save 17%)</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  plan.popular
                    ? "border-primary bg-primary/5 shadow-lg scale-105 md:scale-100"
                    : "border-border hover:border-primary/50 bg-white"
                }`}
              >
                <div className="p-8">
                  {plan.popular && (
                    <div className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4">
                      Most Popular
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-foreground/60 text-sm mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-4xl font-extrabold text-foreground">
                        ${billing === "monthly" ? plan.monthlyPrice : Math.floor(plan.annualPrice / 12)}
                      </span>
                      <span className="text-foreground/60">/month</span>
                    </div>
                    {billing === "annual" && (
                      <p className="text-sm text-foreground/60">Billed ${plan.annualPrice}/year</p>
                    )}
                  </div>

                  <a
                    href="http://159.65.148.76:7285/signup"
                    className={`w-full block text-center py-3 rounded-lg font-semibold mb-8 transition-all ${
                      plan.popular
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-md"
                        : "border border-border hover:bg-muted text-foreground"
                    }`}
                  >
                    Get Started <ArrowRight size={18} className="inline-block ml-2" />
                  </a>

                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex gap-3 items-start">
                        <Check className="text-primary flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* subtle footer row for each card */}
                <div className="bg-muted/40 px-6 py-4 text-sm text-foreground/60 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span>{plan.name} plan</span>
                    <span>{plan.popular ? "Recommended" : "Flexible"}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Can I change plans anytime?",
                a: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.",
              },
              {
                q: "Do you offer discounts for annual billing?",
                a: "Yes! Annual plans come with a 17% discount compared to monthly billing.",
              },
              {
                q: "Is there a free trial?",
                a: "Yes! All plans include a 30-day free trial with full access to all features. No credit card required.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards and wire transfers for enterprise customers.",
              },
              {
                q: "Can I get a custom plan?",
                a: "Contact our sales team for custom pricing and features tailored to your needs.",
              },
            ].map((faq, idx) => (
              <div key={idx}>
                <h3 className="font-semibold text-lg text-foreground mb-2">{faq.q}</h3>
                <p className="text-foreground/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
