"use client"

import Link from "next/link"
import { Mail, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* Using the uploaded logo (local path) */}
              <div className="w-14 h-14 rounded-xl overflow-hidden shadow-sm">
                <img
                  src="logo.png"
                  alt="ElanceCRM Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-blue-600 bg-clip-text text-transparent">
                  ElanceCRM
                </span>
                <span className="text-sm text-foreground/60">Powerful CRM for modern sales teams</span>
              </div>
            </div>

            <p className="text-foreground/60 text-sm">
              Manage leads, track pipelines, and close deals faster with automation and powerful analytics.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/features" className="text-foreground/60 hover:text-blue-600 transition-colors block">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-foreground/60 hover:text-blue-600 transition-colors block">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-foreground/60 hover:text-blue-600 transition-colors block">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-foreground/60 hover:text-blue-600 transition-colors block">
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
                <Link href="/about" className="text-foreground/60 hover:text-blue-600 transition-colors block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground/60 hover:text-blue-600 transition-colors block">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-foreground/60 hover:text-blue-600 transition-colors block">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-foreground/60 hover:text-blue-600 transition-colors block">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal + CTA */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2 text-sm mb-6">
              <li>
                <Link href="/privacy" className="text-foreground/60 hover:text-blue-600 transition-colors block">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-foreground/60 hover:text-blue-600 transition-colors block">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-foreground/60 hover:text-blue-600 transition-colors block">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/gdpr" className="text-foreground/60 hover:text-blue-600 transition-colors block">
                  GDPR
                </Link>
              </li>
            </ul>


          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-foreground/60 text-sm">© {currentYear} ElanceCRM. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="p-2 rounded-md text-foreground/60 hover:text-white hover:bg-blue-600 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-md text-foreground/60 hover:text-white hover:bg-blue-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:hello@elancecrm.com"
              className="p-2 rounded-md text-foreground/60 hover:text-white hover:bg-blue-600 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
