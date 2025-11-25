"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import {
  Check,
  Database,
  Clock,
  BarChart3,
  Users,
  Zap,
  Target,
  RefreshCw,
  Shield,
  Lock,
  Globe,
} from "lucide-react"

export default function FeaturesPage() {
  const features = [
    {
      category: "Lead Management",
      items: [
        {
          icon: Database,
          title: "Centralized Database",
          description: "Store all your leads in one secure, easy-to-access location.",
        },
        {
          icon: Target,
          title: "Lead Scoring",
          description: "AI-powered scoring identifies your hottest opportunities.",
        },
        {
          icon: BarChart3,
          title: "Lead Analytics",
          description: "Track source, quality, and conversion metrics.",
        },
      ],
    },
    {
      category: "Sales Pipeline",
      items: [
        {
          icon: Clock,
          title: "Pipeline Management",
          description: "Visual pipeline view with customizable stages and drag & drop.",
        },
        {
          icon: Zap,
          title: "Deal Tracking",
          description: "Real-time deal progress, forecasts and reminders.",
        },
        {
          icon: RefreshCw,
          title: "Activity Timeline",
          description: "Complete history of interactions, notes and follow-ups.",
        },
      ],
    },
    {
      category: "Automation & Productivity",
      items: [
        {
          icon: Zap,
          title: "Workflow Automation",
          description: "Automate repetitive tasks and save hours per week.",
        },
        {
          icon: Users,
          title: "Team Collaboration",
          description: "Assign tasks, mention teammates and track ownership.",
        },
        {
          icon: Globe,
          title: "Multi-Channel",
          description: "Email, calls, SMS — all centralized in one platform.",
        },
      ],
    },
    {
      category: "Security & Integration",
      items: [
        {
          icon: Lock,
          title: "Enterprise Security",
          description: "SOC 2 level security with encryption at rest and transit.",
        },
        {
          icon: Shield,
          title: "Data Protection",
          description: "GDPR-ready, automated backups and role-based access controls.",
        },
        {
          icon: RefreshCw,
          title: "Integrations",
          description: "Connect with hundreds of apps (Zapier, Slack, Gmail, etc.).",
        },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
            Powerful Features for{" "}
            <span className="bg-primary bg-clip-text text-transparent">Modern Sales</span>
          </h1>
          <p className="text-xl text-foreground/60 mb-8 text-balance">
            Everything you need to manage leads, close deals, and grow your business faster
          </p>
        </div>
      </section>

      {/* Features List (grid cards styled like Home) */}
      <section id="features-list" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {features.map((section, idx) => (
            <div key={idx} className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">{section.category}</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((feature, i) => {
                  const Icon = feature.icon
                  return (
                    <article
                      key={i}
                      className="group bg-white rounded-2xl border border-border p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl flex items-center justify-center transition-all group-hover:scale-105"
                             style={{ background: "rgba(105,108,255,0.08)" }}>
                          <Icon className="text-[rgb(105,108,255)]" size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                          <p className="text-foreground/70 mt-2">{feature.description}</p>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights section (same as home) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Why Teams Choose ElanceCRM</h2>

          <div className="space-y-4">
            {[
              "Increase sales productivity by 40% with intelligent automation",
              "Reduce sales cycle length and improve close rates",
              "Get real-time insights into your sales pipeline",
              "Improve team collaboration and reduce missed opportunities",
              "Scale your business without adding complexity",
              "Maintain data security and compliance standards",
            ].map((benefit, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="text-primary" size={14} />
                </div>
                <p className="text-lg text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to see ElanceCRM in action?</h2>
          <p className="text-lg text-foreground/70 mb-8">Start your free trial today — 30 days, no credit card required.</p>
          <a
            href="http://159.65.148.76:7285/signup"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
