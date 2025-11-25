"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-sm font-bold">
              S
            </div>
            <span className="hidden sm:inline">Lead Syncer</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/features"
              className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
            >
              Pricing
            </Link>
            <Link href="/about" className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium">
              About
            </Link>
            <Link
              href="/contact"
              className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
            >
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="http://159.65.148.76:7285/login"
              className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
            >
              Log in
            </a>
            <a
              href="http://159.65.148.76:7285/signup"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Try Free
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-muted rounded-lg">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-4 py-4">
              <Link href="/features" className="text-foreground/80 hover:text-primary transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-foreground/80 hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link href="/about" className="text-foreground/80 hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-foreground/80 hover:text-primary transition-colors">
                Contact
              </Link>
              <div className="flex gap-3 pt-2">
                <a
                  href="http://159.65.148.76:7285/login"
                  className="flex-1 text-center text-foreground/80 hover:text-primary transition-colors"
                >
                  Log in
                </a>
                <a
                  href="http://159.65.148.76:7285/signup"
                  className="flex-1 text-center bg-primary hover:bg-primary/90 text-primary-foreground px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Try Free
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
