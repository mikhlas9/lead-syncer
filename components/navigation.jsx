"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-lg" 
            : "bg-white border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo with Name - Desktop */}
            <a href="/" className="flex items-center gap-3 group cursor-pointer transition-transform duration-300 hover:scale-105">
              <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden transform transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/30">
                <img 
                  src="/logo.png" 
                  alt="ElanceCRM Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="hidden sm:inline text-xl md:text-2xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-blue-600 bg-clip-text text-transparent">
                ElanceCRM
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {["Features", "Pricing", "About", "Contact"].map((item, idx) => (
                <a
                  key={idx}
                  href={`/${item.toLowerCase()}`}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* CTA Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="http://159.65.148.76:7285/login"
                className="px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 rounded-lg hover:bg-gray-100"
              >
                Log in
              </a>
              <a
                href="http://159.65.148.76:7285/signup"
                className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5"
              >
                Try Free
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-all duration-300 transform hover:scale-110"
            >
              {isOpen ? (
                <X size={24} className="text-gray-900 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu size={24} className="text-gray-900 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Full Page */}
      <div 
        className={`fixed inset-0 z-40 transition-all duration-500 ease-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{
          top: "64px"
        }}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isOpen ? "opacity-50" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Menu Content */}
        <div 
          className={`relative bg-white h-full overflow-y-auto transition-all duration-500 ease-out transform ${
            isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Navigation Links */}
            <div className="flex-1 pt-8 px-6">
              <div className="flex flex-col gap-1">
                {["Features", "Pricing", "About", "Contact"].map((item, idx) => (
                  <a
                    key={idx}
                    href={`/${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="px-6 py-4 text-lg font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-300 transform hover:translate-x-2"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="border-t border-gray-200 p-6 space-y-3 bg-gradient-to-t from-gray-50 to-transparent">
              <a
                href="http://159.65.148.76:7285/login"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-5 py-3 text-base font-medium text-gray-700 border border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
              >
                Log in
              </a>
              <a
                href="http://159.65.148.76:7285/signup"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-5 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                Try Free
              </a>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}