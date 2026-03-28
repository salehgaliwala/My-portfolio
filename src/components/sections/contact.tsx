'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, User } from 'lucide-react';
import { Section } from './section-wrapper';
import { cn } from '@/lib/utils';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactValues = z.infer<typeof contactSchema>;

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactValues) => {
    // Simulate API call
    console.log('Form data:', data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert('Thank you! Your message has been sent successfully.');
    reset();
  };

  return (
    <Section id="contact" className="bg-muted/10">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-center">Get In Touch</h2>
        <div className="h-1.5 w-20 bg-primary rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
        <div className="lg:col-span-5 space-y-8">
          <div className="p-8 rounded-3xl glass space-y-6">
            <h3 className="text-2xl font-bold">Let's discuss your next project</h3>
            <p className="text-muted-foreground">
              I'm interested in freelance opportunities, full-time roles, or just chatting about code!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Email Me</p>
                  <p className="font-medium">hello@yourname.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-secondary/10 text-secondary">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Chat On</p>
                  <p className="font-medium">LinkedIn / Twitter</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium pl-1">Full Name</label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  <input
                    {...register('name')}
                    placeholder="John Doe"
                    className={cn(
                      'w-full h-12 pl-12 pr-4 rounded-2xl glass bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all border-none placeholder:text-muted-foreground/50',
                      errors.name && 'ring-2 ring-destructive'
                    )}
                  />
                </div>
                {errors.name && <p className="text-xs text-destructive pl-1">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium pl-1">Email Address</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  <input
                    {...register('email')}
                    placeholder="john@example.com"
                    className={cn(
                      'w-full h-12 pl-12 pr-4 rounded-2xl glass bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all border-none placeholder:text-muted-foreground/50',
                      errors.email && 'ring-2 ring-destructive'
                    )}
                  />
                </div>
                {errors.email && <p className="text-xs text-destructive pl-1">{errors.email.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium pl-1">Subject</label>
              <input
                {...register('subject')}
                placeholder="How can I help you?"
                className={cn(
                  'w-full h-12 px-4 rounded-2xl glass bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all border-none placeholder:text-muted-foreground/50',
                  errors.subject && 'ring-2 ring-destructive'
                )}
              />
              {errors.subject && <p className="text-xs text-destructive pl-1">{errors.subject.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium pl-1">Message</label>
              <textarea
                {...register('message')}
                rows={5}
                placeholder="Tell me more about your project..."
                className={cn(
                  'w-full p-4 rounded-2xl glass bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all border-none resize-none placeholder:text-muted-foreground/50',
                  errors.message && 'ring-2 ring-destructive'
                )}
              />
              {errors.message && <p className="text-xs text-destructive pl-1">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 rounded-2xl bg-primary text-primary-foreground font-bold flex items-center justify-center gap-2 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed group shadow-xl shadow-primary/20"
            >
              {isSubmitting ? (
                <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Send Message
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};
