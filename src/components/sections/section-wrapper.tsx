'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
}

export const Section = ({
  children,
  id,
  className,
  containerClassName,
}: SectionProps) => {
  return (
    <section
      id={id}
      className={cn('py-20 md:py-32 overflow-hidden', className)}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn('container mx-auto px-4 md:px-6', containerClassName)}
      >
        {children}
      </motion.div>
    </section>
  );
};
