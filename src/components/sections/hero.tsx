'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { Section } from './section-wrapper';

export const Hero = () => {
  return (
    <Section id="home" className="min-h-screen flex items-center pt-24 md:pt-32 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-10 w-72 h-72 bg-primary/20 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[128px] -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-12 text-center flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="px-4 py-1 rounded-full text-sm font-medium border border-primary/20 bg-primary/5 text-primary mb-6"
          >
            Available for new opportunities
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight mb-8"
          >
            Crafting Digital <br />
            <span className="text-gradient">Experiences That Matter</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl px-4 mb-10"
          >
            I'm a full-stack developer and designer focused on building high-performance, 
            beautiful, and accessible web applications using Next.js and Tailwind CSS.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href="#projects"
              className="group h-12 inline-flex items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link 
              href="#contact"
              className="h-12 inline-flex items-center justify-center rounded-full border border-border bg-background/50 px-8 text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground backdrop-blur-sm"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="h-6 w-6 animate-bounce text-muted-foreground" />
      </motion.div>
    </Section>
  );
};
