import { Navbar } from "@/components/shared/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { Projects } from "@/components/sections/projects";
import { Blog } from "@/components/sections/blog";
import { client } from "@/sanity/lib/client";
import { projectsQuery, postsQuery } from "@/sanity/lib/queries";

export default async function Home() {
  const [projects, posts] = await Promise.all([
    client.fetch(projectsQuery),
    client.fetch(postsQuery),
  ]);

  return (
    <main className="relative flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Experience />
      
      {/* Dynamic Projects and Blog sections fetched from Sanity */}
      <Projects projects={projects} />
      <Blog posts={posts} />

      <Contact />
      
      <footer className="py-12 border-t border-border mt-auto bg-background/50 backdrop-blur-md">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Modern Portfolio. Crafted with <span className="text-primary font-bold">Next.js</span> & <span className="text-secondary font-bold">Sanity</span>.</p>
        </div>
      </footer>
    </main>
  );
}
