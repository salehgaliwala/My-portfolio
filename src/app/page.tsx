import { Navbar } from "@/components/shared/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Experience />
      
      {/* Dynamic Projects and Blog sections fetched from Sanity */}
      <section id="projects" className="py-24 relative overflow-hidden bg-muted/10">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[128px] -z-10" />
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Featured Projects</h2>
          <div className="h-1.5 w-20 bg-secondary rounded-full mx-auto mb-12" />
          <div className="p-12 glass rounded-3xl border-dashed border-2 border-border/50 max-w-2xl mx-auto shadow-2xl">
            <p className="text-muted-foreground mb-4">
              Your latest work is ready to be showcased! 
            </p>
            <div className="flex gap-2 justify-center">
              <span className="px-3 py-1 bg-primary/20 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary">Next.js</span>
              <span className="px-3 py-1 bg-secondary/20 rounded-full text-[10px] font-bold uppercase tracking-widest text-secondary">Sanity</span>
              <span className="px-3 py-1 bg-blue-500/20 rounded-full text-[10px] font-bold uppercase tracking-widest text-blue-500">Vercel</span>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Latest Insights</h2>
          <div className="h-1.5 w-20 bg-primary/50 rounded-full mx-auto mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass rounded-3xl p-6 h-64 flex flex-col justify-end group cursor-pointer hover:border-primary/50 transition-all shadow-xl shadow-black/5">
                <div className="h-2 w-12 bg-primary/20 rounded-full mb-4 group-hover:w-24 transition-all" />
                <h4 className="font-bold text-xl mb-2">Modern Web Design {i}</h4>
                <p className="text-sm text-muted-foreground line-clamp-2">Exploring the future of digital experiences with Framer Motion...</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      
      <footer className="py-12 border-t border-border mt-auto bg-background/50 backdrop-blur-md">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Modern Portfolio. Crafted with <span className="text-primary font-bold">Next.js</span> & <span className="text-secondary font-bold">Sanity</span>.</p>
        </div>
      </footer>
    </main>
  );
}
