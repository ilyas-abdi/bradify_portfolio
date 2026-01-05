import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Palette, PenTool, PartyPopper, Share2, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";

const services = [
  {
    icon: Palette,
    title: "Logo Design",
    description: "Your logo is the face of your brand. We create unique, timeless logos that capture your brand's essence and make a lasting impression.",
    features: [
      "Custom logo concepts",
      "Multiple variations",
      "Vector files included",
      "Brand mark & wordmark options",
      "Unlimited revisions",
    ],
  },
  {
    icon: PenTool,
    title: "Branding",
    description: "A complete brand identity system that ensures consistency across all touchpoints. From colors to typography, we define your brand's visual language.",
    features: [
      "Brand strategy & positioning",
      "Color palette development",
      "Typography system",
      "Brand guidelines document",
      "Stationery design",
    ],
  },
  {
    icon: PartyPopper,
    title: "Event Branding",
    description: "Make your event unforgettable with cohesive branding that creates buzz and leaves a lasting impression on attendees.",
    features: [
      "Event logo & identity",
      "Promotional materials",
      "Signage & banners",
      "Digital assets",
      "Merchandise design",
    ],
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Build a strong online presence with consistent, engaging content that resonates with your audience and strengthens your brand.",
    features: [
      "Content strategy",
      "Visual content creation",
      "Brand voice development",
      "Platform optimization",
      "Engagement analytics",
    ],
  },
];

export default function Services() {
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
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Creative Solutions for Every{" "}
              <span className="text-accent">Brand Need</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From logo design to full-scale branding, we offer comprehensive services 
              to help your business stand out and connect with your audience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <AnimatedSection key={service.title}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                      <service.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                    <p className="text-muted-foreground text-lg mb-8">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                            <Check className="h-3 w-3 text-accent" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild>
                      <Link to="/contact">
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/20 via-secondary to-primary/10 flex items-center justify-center">
                      <service.icon className="h-32 w-32 text-accent/50" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Not Sure What You Need?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Let's chat about your project. We'll help you figure out the best approach 
                for your brand goals and budget.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Schedule a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
