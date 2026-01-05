import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Target, Lightbulb, Rocket, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";

const process = [
  {
    step: "01",
    icon: Target,
    title: "Discover",
    description: "We dive deep into understanding your brand, goals, audience, and market positioning to create a solid foundation.",
  },
  {
    step: "02",
    icon: Lightbulb,
    title: "Design",
    description: "Our creative team develops concepts and visual directions that align with your brand strategy and vision.",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Develop",
    description: "We refine and perfect the chosen direction, creating all necessary assets and deliverables.",
  },
  {
    step: "04",
    icon: Award,
    title: "Deliver",
    description: "Final assets are delivered with comprehensive brand guidelines to ensure consistent implementation.",
  },
];

const values = [
  {
    title: "Creativity First",
    description: "We push boundaries and think outside the box to create unique solutions that make your brand memorable.",
  },
  {
    title: "Strategic Thinking",
    description: "Every design decision is backed by strategy, ensuring your brand communicates the right message.",
  },
  {
    title: "Client Partnership",
    description: "We believe in collaborative relationships, working closely with you throughout the creative process.",
  },
  {
    title: "Quality Obsession",
    description: "We're perfectionists at heart, ensuring every detail meets our high standards of excellence.",
  },
];

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "200+", label: "Happy Clients" },
  { number: "10+", label: "Years Experience" },
  { number: "15", label: "Industry Awards" },
];

export default function About() {
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
              About Brandify
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              We're a Team of <span className="text-accent">Creative Thinkers</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Brandify is a creative design agency dedicated to building powerful brand identities 
              that help businesses stand out and connect with their audiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.number}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="text-accent font-medium mb-4 block">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                From Passion to Purpose
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded with a simple belief that every business deserves a memorable brand identity, 
                  Brandify has grown from a small studio to a full-service creative agency.
                </p>
                <p>
                  Our journey began over a decade ago when we recognized a gap in the market for 
                  strategic, purposeful design that goes beyond aesthetics. We believe that great 
                  branding is about storytelling, connection, and creating lasting impressions.
                </p>
                <p>
                  Today, we've partnered with hundreds of businesses across industries, helping them 
                  transform their visual identities and stand out in competitive markets.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 via-accent/20 to-secondary overflow-hidden" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="text-accent font-medium mb-4 block">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold">What Drives Us</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="p-6 bg-card rounded-xl border h-full">
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="text-accent font-medium mb-4 block">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold">How We Work</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Our proven 4-step process ensures we deliver exceptional results on every project.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <AnimatedSection key={step.title} delay={index * 0.1}>
                <div className="relative">
                  <div className="text-7xl font-bold text-muted/20 absolute -top-4 -left-2">
                    {step.step}
                  </div>
                  <div className="relative pt-8">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <step.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-light/100 text-primary-foreground">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Work Together?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Let's create something amazing. Get in touch to start your brand transformation journey.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
