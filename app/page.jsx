"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowRight, BarChart3, Users, Zap, Target, AtomIcon as Automation, Shield } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleTrialSignup = (e) => {
    e.preventDefault()
    if (email) {
      console.log("Trial signup:", email)
      setSubmitted(true)
      setEmail("")
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                🎉 New: AI-Powered Lead Scoring
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold text-foreground text-balance leading-tight">
                Manage Your <span className="bg-primary bg-clip-text text-transparent">Pipeline</span> Like
                Never Before
              </h1>

              <p className="text-xl text-foreground/70 text-balance leading-relaxed">
                Lead Syncer is the CRM built for modern sales teams. Track leads, manage pipelines, and close deals 40%
                faster with intelligent automation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="http://159.65.148.76:7285/signup"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition-all hover:shadow-lg"
                >
                  Start Free Trial <ArrowRight size={20} />
                </a>
                <Link
                  href="/features"
                  className="border border-border hover:bg-muted text-foreground px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center transition-all"
                >
                  See Features
                </Link>
              </div>

              <p className="text-sm text-foreground/60">
                ✓ No credit card required • 30 days free • Full access to all features
              </p>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="bg-primary/20 absolute inset-0 rounded-2xl blur-3xl opacity-50"></div>
              <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-border p-8 backdrop-blur-sm">
                <img src="/professional-crm-dashboard-interface-with-lead-pip.jpg" alt="Lead Syncer Dashboard" className="w-full rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-foreground/60 text-sm font-medium mb-8">
            Trusted by leading companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="text-2xl font-bold text-foreground/40">TechCorp</div>
            <div className="text-2xl font-bold text-foreground/40">SalesHub</div>
            <div className="text-2xl font-bold text-foreground/40">DataFlow</div>
            <div className="text-2xl font-bold text-foreground/40">CloudSync</div>
            <div className="text-2xl font-bold text-foreground/40">GrowthLabs</div>
          </div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
              Everything You Need to Close More Deals
            </h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              Powerful features designed to help your team sell smarter and faster
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-xl border border-border hover:border-primary/50 hover:bg-card transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Advanced Analytics</h3>
              <p className="text-foreground/70">
                Real-time insights into your sales pipeline with customizable dashboards and reports
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-xl border border-border hover:border-primary/50 hover:bg-card transition-all">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Team Collaboration</h3>
              <p className="text-foreground/70">
                Built-in communication tools keep your team aligned and improve deal velocity
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-xl border border-border hover:border-primary/50 hover:bg-card transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Workflow Automation</h3>
              <p className="text-foreground/70">Automate repetitive tasks and focus on what matters - closing deals</p>
            </div>

            {/* Feature 4 */}
            <div className="p-8 rounded-xl border border-border hover:border-primary/50 hover:bg-card transition-all">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Lead Scoring</h3>
              <p className="text-foreground/70">
                AI-powered lead scoring helps you prioritize high-value opportunities
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-8 rounded-xl border border-border hover:border-primary/50 hover:bg-card transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Automation className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Integrations</h3>
              <p className="text-foreground/70">Connect with your favorite tools and streamline your workflow</p>
            </div>

            {/* Feature 6 */}
            <div className="p-8 rounded-xl border border-border hover:border-primary/50 hover:bg-card transition-all">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Enterprise Security</h3>
              <p className="text-foreground/70">Bank-level security with SOC 2 compliance to protect your data</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/features"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              Explore all features <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6 text-balance">
            Ready to Transform Your Sales Process?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join hundreds of sales teams already using Lead Syncer to close more deals and grow faster.
          </p>
          <a
            href="http://159.65.148.76:7285/signup"
            className="inline-block bg-white hover:bg-white/90 text-primary px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg"
          >
            Start Your Free Trial Today
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
