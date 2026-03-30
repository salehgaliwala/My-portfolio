'use client';

import { motion } from 'framer-motion';
import { Section } from './section-wrapper';
import { Brain, Code2, Globe, Sparkles } from 'lucide-react';

const skills = [
  { name: 'Frontend', icon: <Code2 className="h-5 w-5" />, items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'] },
  { name: 'Backend', icon: <Brain className="h-5 w-5" />, items: ['Node.js', 'Sanity.io', 'PostgreSQL', 'Prisma'] },
  { name: 'Design', icon: <Sparkles className="h-5 w-5" />, items: ['Figma', 'UI/UX', 'Responsive Design', 'Accessibility'] },
  { name: 'Tools', icon: <Globe className="h-5 w-5" />, items: ['Git', 'Vercel', 'Postman', 'Docker'] },
];

export const About = () => {
  return (
    <Section id="about">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">About Me</h2>
        <div className="h-1.5 w-20 bg-primary rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">I build products that live on the web.</h3>
          <p className="text-muted-foreground leading-relaxed">
            With over 5 years of experience in the digital space, I specialize in creating 
            seamless user experiences and robust backend systems. My approach combines 
            technical proficiency with a deep understanding of design principles.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Currently, I&apos;m focusing on building high-performance applications with
            Next.js and exploring the possibilities of AI-driven development.
          </p>
          
          <div className="pt-4 flex flex-wrap gap-4">
            <div className="p-4 rounded-2xl glass flex flex-col items-center justify-center min-w-[120px]">
              <span className="text-3xl font-bold text-primary">5+</span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Years Exp.</span>
            </div>
            <div className="p-4 rounded-2xl glass flex flex-col items-center justify-center min-w-[120px]">
              <span className="text-3xl font-bold text-secondary">50+</span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Projects</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-3xl glass hover:border-primary/50 transition-colors group"
            >
              <div className="p-3 rounded-2xl bg-primary/10 text-primary w-fit mb-4 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h4 className="font-bold mb-3">{skill.name}</h4>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={item} className="text-[10px] uppercase font-bold tracking-tighter px-2 py-1 rounded-md bg-white/5 border border-white/10">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
