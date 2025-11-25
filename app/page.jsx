"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowRight, BarChart3, Users, Zap, Target, Workflow, Shield, CheckCircle } from "lucide-react"
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
                ElanceCRM is the CRM built for modern sales teams. Track leads, manage pipelines, and close deals 40%
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
                <img src="/professional-crm-dashboard-interface-with-lead-pip.jpg" alt="ElanceCRM Dashboard" className="w-full rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-slate-500 text-sm font-semibold mb-10 uppercase tracking-wide">
            Trusted by leading sales teams
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {['TechCorp', 'SalesHub', 'DataFlow', 'CloudSync', 'GrowthLabs'].map((company, idx) => (
              <div key={idx} className="text-slate-300 hover:text-slate-400 transition-colors">
                <span className="font-bold text-lg">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Preview Section */}
       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Everything You Need to Close More Deals
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Powerful features designed to help your team sell smarter, faster, and better
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: BarChart3,
                title: "Advanced Analytics",
                desc: "Real-time insights into your sales pipeline with customizable dashboards",
                color: "blue"
              },
              {
                icon: Users,
                title: "Team Collaboration",
                desc: "Built-in communication tools keep your team aligned and improve velocity",
                color: "cyan"
              },
              {
                icon: Zap,
                title: "Workflow Automation",
                desc: "Automate repetitive tasks and focus on what matters - closing deals",
                color: "blue"
              },
              {
                icon: Target,
                title: "Lead Scoring",
                desc: "AI-powered lead scoring helps you prioritize high-value opportunities",
                color: "cyan"
              },
              {
                icon: Workflow,
                title: "Integrations",
                desc: "Connect with your favorite tools and streamline your entire workflow",
                color: "blue"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                desc: "Bank-level security with SOC 2 compliance to protect your data",
                color: "cyan"
              }
            ].map((feature, idx) => {
              const Icon = feature.icon
              const isBlue = feature.color === "blue"
              return (
                <div
                  key={idx}
                  className="group p-8 rounded-2xl border border-slate-200 hover:border-blue-300 bg-white hover:bg-gradient-to-br hover:from-blue-50 to-white transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all ${
                    isBlue 
                      ? "bg-gradient-to-br from-blue-100 to-blue-50 group-hover:from-blue-200 group-hover:to-blue-100" 
                      : "bg-gradient-to-br from-cyan-100 to-cyan-50 group-hover:from-cyan-200 group-hover:to-cyan-100"
                  }`}>
                    <Icon className={`${isBlue ? "text-blue-600" : "text-cyan-600"}`} size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-lg cursor-pointer group transition-colors">
              Explore all features
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </div>
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
            Join hundreds of sales teams already using ElanceCRM to close more deals and grow faster.
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
