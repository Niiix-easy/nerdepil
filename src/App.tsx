/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  ChevronRight, 
  Layers, 
  Cpu, 
  Smartphone, 
  CheckCircle2, 
  Send,
  Menu,
  X
} from 'lucide-react';

// --- Components ---

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-8 px-6">
        {/* Zone 1: Brand */}
        <a href="/" className="font-display text-lg font-extrabold tracking-tighter text-slate-900 whitespace-nowrap shrink-0">
          Lumina Studio
        </a>

        {/* Zone 2: Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#capabilities" className="transition-colors hover:text-slate-900 whitespace-nowrap shrink-0">Capabilities</a>
          <a href="#work" className="transition-colors hover:text-slate-900 whitespace-nowrap shrink-0">Our Work</a>
          <a href="#approach" className="transition-colors hover:text-slate-900 whitespace-nowrap shrink-0">Approach</a>
          <a href="#contact" className="transition-colors hover:text-slate-900 whitespace-nowrap shrink-0">Contact</a>
        </nav>

        {/* Zone 3: Action */}
        <div className="flex items-center gap-4 shrink-0">
          <button className="hidden sm:inline-flex h-9 items-center justify-center rounded-lg bg-slate-900 px-4 text-xs font-semibold text-white transition-all hover:bg-slate-800 whitespace-nowrap shrink-0">
            Start a Project
          </button>
          <button 
            className="md:hidden text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-0 w-full bg-white border-b border-slate-200 p-6 md:hidden"
          >
            <nav className="flex flex-col gap-4 text-base font-medium">
              <a href="#capabilities" onClick={() => setIsMenuOpen(false)}>Capabilities</a>
              <a href="#work" onClick={() => setIsMenuOpen(false)}>Our Work</a>
              <a href="#approach" onClick={() => setIsMenuOpen(false)}>Approach</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <button className="mt-2 w-full h-11 rounded-lg bg-slate-900 text-sm font-semibold text-white">
                Start a Project
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const ImageFallback = ({ text, className }: { text: string; className?: string }) => (
  <div className={`flex items-center justify-center bg-slate-100 border border-slate-200 overflow-hidden ${className}`}>
    <div className="text-center px-4">
      <div className="mb-2 flex justify-center">
        <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center">
          <Layers className="h-5 w-5 text-slate-400" />
        </div>
      </div>
      <p className="text-xs font-medium text-slate-500 uppercase tracking-widest">{text}</p>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              <span>Premium Digital Agency</span>
              <span aria-hidden="true" className="text-slate-300">/</span>
              <span>Based in London</span>
            </div>
            <h1 className="mb-8 text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] text-balance">
              Digital products that define tomorrow.
            </h1>
            <p className="mb-10 max-w-xl text-lg lg:text-xl text-slate-600 leading-relaxed">
              We design and engineer high-fidelity digital experiences and automated systems for ambitious brands worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="h-12 items-center justify-center rounded-xl bg-slate-900 px-8 text-sm font-bold text-white transition-all hover:bg-slate-800 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0">
                View Showcase
              </button>
              <button className="group flex h-12 items-center justify-center rounded-xl border border-slate-200 px-8 text-sm font-bold text-slate-900 transition-all hover:bg-slate-50">
                Contact Us
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="font-display text-2xl font-bold text-slate-900 tabular-nums">48+</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider">Success Projects</p>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div>
                <p className="font-display text-2xl font-bold text-slate-900 tabular-nums">12</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider">Design Awards</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <ImageFallback text="Lumina Studio Environment" className="aspect-[16/9] w-full rounded-2xl shadow-2xl lg:aspect-auto lg:h-[600px]" />
            <div className="absolute -bottom-6 -left-6 hidden xl:block">
              <div className="rounded-xl bg-white p-6 shadow-xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">High-Fidelity Delivery</p>
                    <p className="text-xs text-slate-500">Industry leading standards</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Capabilities = () => {
  const services = [
    {
      id: "01",
      title: "Product Strategy & Research",
      description: "We dive deep into market trends and user behavior to architect products that win.",
      icon: Layers,
      span: "lg:col-span-2"
    },
    {
      id: "02",
      title: "UI/UX Engineering",
      description: "Pixel-perfect interfaces backed by robust frontend architecture.",
      icon: Smartphone,
      span: "lg:col-span-1"
    },
    {
      id: "03",
      title: "Automated Workflows",
      description: "Streamlining operations through custom internal tools and AI integration.",
      icon: Cpu,
      span: "lg:col-span-1"
    },
    {
      id: "04",
      title: "Growth Engineering",
      description: "Data-driven experiments to scale your digital presence effectively.",
      icon: ArrowUpRight,
      span: "lg:col-span-2"
    }
  ];

  return (
    <section id="capabilities" className="py-24 bg-slate-50">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="mb-16 max-w-2xl">
          <h2 className="mb-6 text-4xl font-extrabold text-slate-900 lg:text-5xl">
            Our Core Capabilities
          </h2>
          <p className="text-lg text-slate-600">
            We combine high-level design thinking with deep technical expertise to solve complex business challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${service.span} group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:shadow-lg`}
            >
              <div className="mb-12 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 transition-colors group-hover:bg-slate-900 group-hover:text-white">
                <service.icon className="h-6 w-6" />
              </div>
              <div>
                <span className="mb-2 block text-xs font-bold text-slate-400 tabular-nums">{service.id}.</span>
                <h3 className="mb-4 text-2xl font-bold text-slate-900">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Work = () => {
  const projects = [
    {
      title: "Nexus Fintech",
      category: "Fintech",
      impact: "+140% User Retention",
      description: "Re-engineering a complex financial trading platform for the modern era.",
      color: "bg-blue-600"
    },
    {
      title: "Aura Home",
      category: "E-Commerce",
      impact: "$2.4M Pipeline Growth",
      description: "A luxury furniture retail experience optimized for conversion.",
      color: "bg-orange-500"
    },
    {
      title: "Veritas AI",
      category: "SaaS",
      impact: "85% Automation Efficiency",
      description: "A custom internal dashboard for managing large-scale AI operations.",
      color: "bg-indigo-600"
    }
  ];

  return (
    <section id="work" className="py-24">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="mb-6 text-4xl font-extrabold text-slate-900 lg:text-5xl">
              Proof of Impact
            </h2>
            <p className="text-lg text-slate-600">
              We don't just deliver designs; we deliver measurable business outcomes.
            </p>
          </div>
          <button className="group flex items-center text-sm font-bold text-slate-900">
            View All Projects
            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <ImageFallback text={project.title} className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-4 left-4">
                  <div className="rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-900">
                    {project.category}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-2 text-xs text-slate-500 font-medium">
                <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                <span>{project.impact}</span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">{project.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-800/50 to-transparent pointer-events-none" />
      
      <div className="mx-auto max-w-[1440px] px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          <div>
            <h2 className="mb-8 text-4xl font-extrabold lg:text-6xl text-balance">
              Let's build the next big thing.
            </h2>
            <p className="mb-12 text-lg text-slate-400 leading-relaxed max-w-md">
              Whether you're starting from scratch or looking to scale, we're here to help you navigate the digital landscape.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 h-2 w-2 rounded-full bg-slate-700" />
                <div>
                  <p className="text-sm font-bold text-white">General Inquiries</p>
                  <p className="text-sm text-slate-400">hello@lumina.studio</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 h-2 w-2 rounded-full bg-slate-700" />
                <div>
                  <p className="text-sm font-bold text-white">Office</p>
                  <p className="text-sm text-slate-400">Canary Wharf, London, UK</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-800/50 p-8 border border-slate-700 backdrop-blur-sm">
            <AnimatePresence mode="wait">
              {formState !== 'success' ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-400">Full Name</label>
                      <input 
                        required
                        type="text" 
                        id="name"
                        placeholder="John Doe"
                        className="w-full h-12 bg-slate-900 border border-slate-700 rounded-xl px-4 text-sm focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</label>
                      <input 
                        required
                        type="email" 
                        id="email"
                        placeholder="john@example.com"
                        className="w-full h-12 bg-slate-900 border border-slate-700 rounded-xl px-4 text-sm focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="interest" className="text-xs font-bold uppercase tracking-wider text-slate-400">What can we help with?</label>
                    <select 
                      id="interest"
                      className="w-full h-12 bg-slate-900 border border-slate-700 rounded-xl px-4 text-sm focus:outline-none focus:border-white transition-colors appearance-none"
                    >
                      <option>Digital Product Design</option>
                      <option>Custom Engineering</option>
                      <option>Strategy & Research</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-400">Message</label>
                    <textarea 
                      id="message"
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 text-sm focus:outline-none focus:border-white transition-colors resize-none"
                    />
                  </div>
                  <button 
                    disabled={formState === 'submitting'}
                    className="w-full h-14 bg-white text-slate-900 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors disabled:opacity-50"
                  >
                    {formState === 'submitting' ? (
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-900 border-t-transparent" />
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold">Message Received</h3>
                  <p className="text-slate-400 max-w-xs">
                    Thank you for reaching out. A partner from our studio will contact you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="mt-8 text-sm font-bold text-white hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <a href="/" className="font-display text-lg font-extrabold tracking-tighter text-slate-900">
            Lumina Studio
          </a>
          <nav className="flex gap-8 text-sm font-medium text-slate-500">
            <a href="#capabilities" className="hover:text-slate-900">Capabilities</a>
            <a href="#work" className="hover:text-slate-900">Our Work</a>
            <a href="#approach" className="hover:text-slate-900">Approach</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">LinkedIn</a>
            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">Twitter</a>
            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">Instagram</a>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 uppercase tracking-widest font-bold">
          <p>© 2026 Lumina Studio Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-900">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Process = () => {
  const steps = [
    {
      id: "01",
      title: "Discovery",
      description: "We start by understanding your business goals, user needs, and the competitive landscape."
    },
    {
      id: "02",
      title: "Architecture",
      description: "Defining the technical structure and user flows that will power your product."
    },
    {
      id: "03",
      title: "Design",
      description: "Crafting a high-fidelity visual language that resonates with your target audience."
    },
    {
      id: "04",
      title: "Engineering",
      description: "Building resilient, performant code that brings the vision to life."
    }
  ];

  return (
    <section id="approach" className="py-24 bg-white">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="mb-16">
          <h2 className="mb-6 text-4xl font-extrabold text-slate-900 lg:text-5xl">
            Our Process
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            A disciplined approach to building digital products that balance aesthetic excellence with technical rigor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="relative">
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-900 font-bold text-sm">
                {step.id}
              </div>
              <h3 className="mb-4 text-xl font-bold text-slate-900">{step.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
              {step.id !== "04" && (
                <div className="hidden lg:block absolute top-5 left-12 right-0 h-px bg-slate-100 -z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Lumina Studio transformed our legacy platform into a high-performance engine. Their attention to detail in both design and code is unparalleled.",
      author: "Sarah Jenkins",
      role: "CTO",
      company: "Nexus Fintech"
    },
    {
      quote: "The team didn't just build a website; they architected a growth strategy. Our conversion rates have seen a significant jump since launch.",
      author: "Marcus Thorne",
      role: "Head of Digital",
      company: "Aura Home"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <h2 className="mb-8 text-4xl font-extrabold text-slate-900 lg:text-5xl">
              What leaders say about us.
            </h2>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-slate-200" />
                ))}
              </div>
              <p className="text-sm font-medium text-slate-600">
                Trusted by 50+ innovative companies.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm"
              >
                <p className="mb-6 text-lg text-slate-700 italic leading-relaxed">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-bold text-slate-900">{t.author}</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                    {t.role} · {t.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustBar = () => {
  const logos = ["Vertex", "Quantum", "Pulse", "Helix", "Nova", "Aura", "Zenith", "Flux"];
  return (
    <div className="border-y border-slate-100 bg-white py-10 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6">
        <p className="mb-8 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
          Trusted by Global Innovators
        </p>
        <div className="relative flex overflow-hidden">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex min-w-full shrink-0 items-center justify-around gap-12"
          >
            {[...logos, ...logos].map((logo, i) => (
              <span key={i} className="font-display text-xl font-black tracking-tighter text-slate-200 transition-colors hover:text-slate-900 cursor-default px-4">
                {logo}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const FeaturedVideo = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-6 inline-flex items-center rounded-full bg-slate-900 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              Studio Spotlight
            </div>
            <h2 className="mb-6 text-4xl font-extrabold text-slate-900 lg:text-5xl">
              Precision in every frame.
            </h2>
            <p className="mb-8 text-lg text-slate-600 leading-relaxed max-w-xl">
              Take a behind-the-scenes look at our creative process. We blend high-fidelity aesthetics with technical rigor to build products that don't just look good—they perform.
            </p>
            <ul className="space-y-4">
              {[
                "Pixel-perfect UI design",
                "Scalable frontend architecture",
                "Automated creative workflows",
                "Performance-first engineering"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-[315px] aspect-[9/16] rounded-[2.5rem] border-[8px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/9crJfHxd0Lc?autoplay=0&controls=1&rel=0"
                title="Lumina Studio Showcase"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Capabilities />
        <Work />
        <FeaturedVideo />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
