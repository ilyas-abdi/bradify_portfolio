import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";

const categories = ["All", "Branding", "Logo Design", "Event Branding", "Social Media"];

const projects = [
  { title: "Tech Startup Rebrand", category: "Branding", color: "from-blue-500/30 to-purple-500/20" },
  { title: "Artisan Coffee Logo", category: "Logo Design", color: "from-amber-500/30 to-blue-500/20" },
  { title: "Music Festival 2024", category: "Event Branding", color: "from-pink-500/30 to-rose-500/20" },
  { title: "Wellness App Identity", category: "Branding", color: "from-green-500/30 to-emerald-500/20" },
  { title: "Restaurant Rebrand", category: "Logo Design", color: "from-red-500/30 to-blue-500/20" },
  { title: "Tech Conference", category: "Event Branding", color: "from-cyan-500/30 to-blue-500/20" },
  { title: "Fashion Brand Launch", category: "Social Media", color: "from-violet-500/30 to-purple-500/20" },
  { title: "Fitness Studio Identity", category: "Branding", color: "from-lime-500/30 to-green-500/20" },
  { title: "Boutique Hotel Logo", category: "Logo Design", color: "from-amber-500/30 to-yellow-500/20" },
  { title: "Product Launch Campaign", category: "Social Media", color: "from-indigo-500/30 to-blue-500/20" },
  { title: "Charity Gala Event", category: "Event Branding", color: "from-rose-500/30 to-pink-500/20" },
  { title: "E-commerce Brand", category: "Branding", color: "from-teal-500/30 to-cyan-500/20" },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Work That <span className="text-accent">Speaks</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our collection of brand identities, logos, and creative campaigns 
              that have helped businesses stand out in their industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b sticky top-16 bg-background/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-blue-light/100 text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <AnimatedSection key={project.title} delay={index * 0.05}>
                <motion.div
                  layout
                  className="group cursor-pointer"
                >
                  <div className={`aspect-[4/3] rounded-xl bg-gradient-to-br ${project.color} overflow-hidden mb-4 relative`}>
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                        View Project
                      </span>
                    </div>
                  </div>
                  <span className="text-accent text-sm">{project.category}</span>
                  <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </motion.div>
              </AnimatedSection>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Like What You See?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Let's create something amazing for your brand too. 
                Get in touch to discuss your project.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-3 font-medium hover:bg-primary/90 transition-colors"
              >
                Start Your Project
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
