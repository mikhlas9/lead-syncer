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
  AtomIcon as Automation,
  Shield,
  RefreshCw,
  Globe,
  Lock,
} from "lucide-react"

export default function FeaturesPage() {
  const features = [
    {
      category: "Lead Management",
      items: [
        {
          icon: Database,
          title: "Centralized Database",
          description: "Store all your leads in one secure, easy-to-access location",
        },
        {
          icon: Target,
          title: "Lead Scoring",
          description: "AI-powered scoring identifies your hottest opportunities",
        },
        { icon: BarChart3, title: "Lead Analytics", description: "Track source, quality, and conversion metrics" },
      ],
    },
    {
      category: "Sales Pipeline",
      items: [
        { icon: Clock, title: "Pipeline Management", description: "Visual pipeline view with customizable stages" },
        { icon: Zap, title: "Deal Tracking", description: "Real-time deal progress and forecasting" },
        {
          icon: RefreshCw,
          title: "Activity Timeline",
          description: "Complete history of all interactions and activities",
        },
      ],
    },
    {
      category: "Automation & Productivity",
      items: [
        {
          icon: Automation,
          title: "Workflow Automation",
          description: "Automate repetitive tasks and save hours per week",
        },
        { icon: Users, title: "Team Collaboration", description: "Built-in messaging and task assignment" },
        { icon: Globe, title: "Multi-Channel", description: "Email, calls, SMS - all in one platform" },
      ],
    },
    {
      category: "Security & Integration",
      items: [
        { icon: Lock, title: "Enterprise Security", description: "SOC 2 certified with end-to-end encryption" },
        { icon: Shield, title: "Data Protection", description: "GDPR compliant with automatic backups" },
        { icon: RefreshCw, title: "Integrations", description: "Connect with 500+ apps and tools" },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
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

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {features.map((section, idx) => (
            <div key={idx} className="mb-20">
              <h2 className="text-3xl font-bold text-foreground mb-12 pb-6 border-b border-border">
                {section.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.items.map((feature, featureIdx) => {
                  const IconComponent = feature.icon
                  return (
                    <div
                      key={featureIdx}
                      className="p-8 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="text-primary" size={24} />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-foreground/70">{feature.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Teams Choose Lead Syncer</h2>
          <div className="space-y-6">
            {[
              "Increase sales productivity by 40% with intelligent automation",
              "Reduce sales cycle length and improve close rates",
              "Get real-time insights into your sales pipeline",
              "Improve team collaboration and reduce missed opportunities",
              "Scale your business without adding complexity",
              "Maintain data security and compliance standards",
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="text-primary" size={16} />
                </div>
                <p className="text-lg text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Ready to get started?</h2>
          <p className="text-xl text-foreground/60 mb-8">
            Experience all these features with our 30-day free trial. No credit card required.
          </p>
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
