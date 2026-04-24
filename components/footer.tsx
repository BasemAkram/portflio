"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const navLinks = [
  { name: "Home",           href: "#Home" },
  { name: "Experience",     href: "#Experience" },
  { name: "Projects",       href: "#Projects" },
  { name: "Certifications", href: "#Certifications" },
  { name: "Contact",        href: "#contact" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="group">
              <span className="text-xl font-bold tracking-tighter text-foreground">BASEM</span>
              <span className="text-xl font-serif italic text-muted-foreground ml-1 group-hover:text-accent transition-colors">
                Akram
              </span>
            </Link>
            <p className="text-xs text-muted-foreground mt-1 font-mono">Network · Security · AI</p>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-5"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.nav>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-xs text-muted-foreground"
          >
            <span>&copy; {currentYear} Basem Akram Younis. All rights reserved.</span>
          </motion.div>
        </div>

        {/* Back to top */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center"
        >
          <a
            href="#Home"
            className="text-xs text-muted-foreground hover:text-accent transition-colors font-mono uppercase tracking-widest"
          >
            Back to top ↑
          </a>
        </motion.div>

        {/* Large decorative text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <span className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-muted/10 select-none">
            BASEM AKRAM
          </span>
        </motion.div>
      </div>
    </footer>
  )
}
