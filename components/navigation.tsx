"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"

const navItems = [
  { name: "Home",           href: "#Home" },
  { name: "Experience",     href: "#Experience" },
  { name: "Projects",       href: "#Projects" },
  { name: "Certifications", href: "#Certifications" },
  { name: "Contact",        href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <Link href="/" className="group">
            <span className="text-base font-bold tracking-tighter text-foreground">
              BASEM
            </span>
            <span className="text-base font-serif italic text-muted-foreground ml-1 group-hover:text-accent transition-colors">
              Akram
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-7">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.08 * index, duration: 0.5 }}
              >
                <Link
                  href={item.href}
                  className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Social Links */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              GH
            </Link>
            <span className="text-border">|</span>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              LI
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background md:hidden"
          >
            <motion.nav
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full gap-8"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-serif text-foreground hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
