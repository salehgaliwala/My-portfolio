'use client';

import { motion } from 'framer-motion';
import { Section } from './section-wrapper';
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import { GitBranch, ExternalLink } from 'lucide-react';

interface Project {
  _id: string;
  title: string;
  slug: string;
  mainImage: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const Projects = ({ projects }: { projects: Project[] }) => {
  if (!projects || projects.length === 0) return null;

  return (
    <Section id="projects" className="bg-muted/10">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Featured Projects</h2>
        <div className="h-1.5 w-20 bg-secondary rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project._id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group glass rounded-3xl overflow-hidden flex flex-col h-full border border-white/5 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
          >
            <div className="relative h-56 w-full overflow-hidden">
              {project.mainImage && (
                <Image
                  src={urlForImage(project.mainImage).url()}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-primary transition-colors"
                  >
                    <GitBranch className="h-5 w-5" />
                  </Link>
                )}
                {project.demoUrl && (
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-primary transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </Link>
                )}
              </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies?.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-secondary group-hover:border-secondary/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
