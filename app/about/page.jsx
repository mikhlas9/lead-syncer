"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Users, Target, Lightbulb } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
            About <span className="bg-primary bg-clip-text text-transparent">Lead Syncer</span>
          </h1>
          <p className="text-xl text-foreground/60 text-balance">
            We're on a mission to help sales teams close more deals and grow their business faster.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-foreground/70">
                To empower sales teams with intelligent tools that help them close more deals and grow their business.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-foreground/70">
                To build the most intuitive and powerful CRM platform that every sales team loves to use.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Our Values</h3>
              <p className="text-foreground/70">
                Customer-first, innovation, and transparency drive everything we do at Lead Syncer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Our Story</h2>
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-foreground/80">
              Lead Syncer was founded in 2020 by a team of sales and software engineers who saw a gap in the market.
              Existing CRM solutions were bloated, expensive, and often required extensive training to use effectively.
            </p>
            <p className="text-foreground/80">
              We set out to build something different - a modern, intuitive CRM that sales teams would actually want to
              use. Within the first year, hundreds of companies were using Lead Syncer to manage their sales pipelines.
            </p>
            <p className="text-foreground/80">
              Today, Lead Syncer is used by companies of all sizes, from startups to enterprises, helping them close
              millions of dollars in deals every year. We're proud of what we've built and excited about the future.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Co-Founder",
                bio: "Former VP of Sales at a SaaS unicorn. Passionate about helping teams sell smarter.",
              },
              {
                name: "Mike Chen",
                role: "CTO & Co-Founder",
                bio: "Previously led engineering at multiple startups. Expert in building scalable platforms.",
              },
              {
                name: "Emily Rodriguez",
                role: "VP of Product",
                bio: "Product leader with 10+ years experience. Focused on user experience and customer success.",
              },
              {
                name: "James Wilson",
                role: "VP of Sales",
                bio: "Enterprise sales veteran. Committed to helping customers succeed with Lead Syncer.",
              },
            ].map((member, idx) => (
              <div key={idx} className="p-8 rounded-xl border border-border hover:border-primary/50 transition-all">
                <div className="w-16 h-16 bg-primary rounded-full mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">{member.name.split(" ")[0][0]}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-foreground/70">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-foreground mb-2">500+</div>
              <p className="text-primary-foreground/90">Companies Using Lead Syncer</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-foreground mb-2">50K+</div>
              <p className="text-primary-foreground/90">Leads Managed Daily</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-foreground mb-2">$100M+</div>
              <p className="text-primary-foreground/90">In Deals Closed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-foreground mb-2">98%</div>
              <p className="text-primary-foreground/90">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
