'use client';

import { motion } from 'framer-motion';
import { Section } from './section-wrapper';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovators Inc.',
    location: 'Remote',
    period: '2022 - Present',
    description: 'Leading the development of a high-traffic SaaS platform using Next.js and Node.js. Optimized performance by 40% through edge caching and database indexing.',
  },
  {
    title: 'Frontend Developer',
    company: 'Creative Studio',
    location: 'New York, NY',
    period: '2020 - 2022',
    description: 'Developed interactive marketing sites and UI component libraries. Collaborated with designers to implement pixel-perfect, accessible interfaces.',
  },
  {
    title: 'Junior Web Developer',
    company: 'StartUp Hub',
    location: 'San Francisco, CA',
    period: '2018 - 2020',
    description: 'Built responsive web applications and integrated REST APIs. Assisted in the transition from a legacy PHP codebase to a modern React stack.',
  },
];

export const Experience = () => {
  return (
    <Section id="experience" className="bg-muted/5">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Professional Journey</h2>
        <div className="h-1.5 w-20 bg-primary/40 rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 pb-12 last:pb-0 group"
          >
            {/* Timeline Line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border group-last:bg-transparent" />
            
            {/* Timeline Dot */}
            <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-primary ring-4 ring-primary/20" />

            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mt-1">
                    <Briefcase className="h-3 w-3" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex flex-col md:items-end">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                    <Calendar className="h-3 w-3" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
                    <MapPin className="h-3 w-3" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
