'use client';

import { motion } from 'framer-motion';
import { Section } from './section-wrapper';
import { Code, Layout, Smartphone, Zap } from 'lucide-react';

const services = [
  {
    title: 'Custom Web Development',
    icon: <Code className="h-6 w-6" />,
    description: 'High-performance, scalable web applications built with modern frameworks like React and Next.js.',
    color: 'bg-blue-500/10 text-blue-500',
  },
  {
    title: 'UI/UX Interface Design',
    icon: <Layout className="h-6 w-6" />,
    description: 'User-centered design focusing on clean aesthetics, intuitive navigation, and impactful branding.',
    color: 'bg-purple-500/10 text-purple-500',
  },
  {
    title: 'Mobile App Solutions',
    icon: <Smartphone className="h-6 w-6" />,
    description: 'Responsive and cross-platform mobile experiences that engage users on any device.',
    color: 'bg-pink-500/10 text-pink-500',
  },
  {
    title: 'Performance Optimization',
    icon: <Zap className="h-6 w-6" />,
    description: 'Speeding up existing platforms with cutting-edge tools to ensure high Core Web Vitals.',
    color: 'bg-yellow-500/10 text-yellow-500',
  },
];

export const Services = () => {
  return (
    <Section id="services">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Core Expertise</h2>
        <div className="h-1.5 w-20 bg-secondary/50 rounded-full mb-6" />
        <p className="text-muted-foreground max-w-2xl">
          I bridge the gap between complex backend logic and pixel-perfect design 
          to deliver products that users love.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-8 rounded-3xl glass hover:border-primary/50 transition-all hover:-translate-y-2 group"
          >
            <div className={`p-4 rounded-2xl w-fit mb-6 transition-transform group-hover:scale-110 ${service.color}`}>
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
