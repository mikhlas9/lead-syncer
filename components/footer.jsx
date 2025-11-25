"use client"

import Link from "next/link"
import { Mail, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-bold text-lg text-primary mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-sm font-bold">
                S
              </div>
              <span>Lead Syncer</span>
            </div>
            <p className="text-foreground/60 text-sm">
              Powerful CRM software for modern sales teams. Manage leads, track pipeline, and close deals faster.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/features" className="text-foreground/60 hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-foreground/60 hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/" className="text-foreground/60 hover:text-primary transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/" className="text-foreground/60 hover:text-primary transition-colors">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-foreground/60 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground/60 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/" className="text-foreground/60 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="text-foreground/60 hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-foreground/60 hover:text-primary transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/" className="text-foreground/60 hover:text-primary transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/" className="text-foreground/60 hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/" className="text-foreground/60 hover:text-primary transition-colors">
                  GDPR
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-foreground/60 text-sm">© {currentYear} Lead Syncer. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="mailto:hello@leadsyncer.com" className="text-foreground/60 hover:text-primary transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
