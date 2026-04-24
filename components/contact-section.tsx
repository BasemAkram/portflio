"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Linkedin, ArrowUpRight, MapPin, Clock, Phone } from "lucide-react"

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:basemakram560@gmail.com",
    label: "basemakram560@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/basemakram",
    label: "in/basemakram",
  },
  {
    name: "Phone",
    icon: Phone,
    href: "tel:+201553927779",
    label: "+20 155 3927 779",
  },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="contact" className="py-32 bg-card/30 relative overflow-hidden" ref={ref}>
      {/* Background text */}
      <div className="absolute left-0 bottom-0 text-[14rem] font-serif italic text-muted/5 pointer-events-none select-none leading-none hidden lg:block">
        hello
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs uppercase tracking-[0.3em] text-accent font-mono"
            >
              Get In Touch
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl lg:text-6xl font-bold mt-6 leading-tight"
            >
              {"Let's work "}
              <span className="font-serif italic text-muted-foreground">together</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground mt-6 max-w-md leading-relaxed text-sm"
            >
              Open to roles in Network Engineering, SOC Analysis, Incident Response, or AI/ML.
              Share your goal and I will get back to you within 24 hours.
            </motion.p>

            {/* Location + response time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 space-y-3"
            >
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Banha, Egypt · Available Worldwide</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>Typically replies today (Egypt time)</span>
              </div>
            </motion.div>

            {/* Email CTA */}
            <motion.a
              href="mailto:basemakram560@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-4 mt-12 group"
            >
              <span className="text-xl lg:text-2xl font-serif italic text-foreground group-hover:text-accent transition-colors">
                basemakram560@gmail.com
              </span>
              <div className="w-9 h-9 border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors">
                <ArrowUpRight className="w-4 h-4 group-hover:text-background transition-colors" />
              </div>
            </motion.a>
          </div>

          {/* Right Column */}
          <div className="lg:pt-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-3"
            >
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-5 font-mono">
                Connect With Me
              </p>

              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-card border border-border hover:border-accent/50 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <link.icon className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                    <div>
                      <p className="text-sm font-medium group-hover:text-accent transition-colors">
                        {link.name}
                      </p>
                      <p className="text-xs text-muted-foreground">{link.label}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-accent transition-colors" />
                </motion.a>
              ))}
            </motion.div>

            {/* Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8 p-5 bg-secondary/30 border border-border"
            >
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
                </span>
                <span className="text-sm font-medium text-foreground">
                  Available for Opportunities
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                Actively seeking Network Engineer, SOC Analyst, Incident Response Analyst, or AI/ML Engineer roles.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
