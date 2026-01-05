// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ArrowRight, Palette, PenTool, PartyPopper, Share2, CheckCircle2, ArrowUpRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Layout } from "@/components/Layout";
// import { AnimatedSection } from "@/components/AnimatedSection";
// import { SectionHeading } from "@/components/SectionHeading";

// const services = [
//   {
//     icon: Palette,
//     title: "Logo Design",
//     description: "Unique and timeless logos that represent your brand's identity.",
//   },
//   {
//     icon: PenTool,
//     title: "Branding",
//     description: "Complete brand identity systems including colors, typography, and guidelines.",
//   },
//   {
//     icon: PartyPopper,
//     title: "Event Branding",
//     description: "Creative branding solutions for events, campaigns, and promotions.",
//   },
//   {
//     icon: Share2,
//     title: "Social Media",
//     description: "Content creation, visual design, and brand consistency across platforms.",
//   },
// ];

// const whyUs = [
//   "Creative Excellence",
//   "Strategic Approach",
//   "Modern Design",
//   "Brand Consistency",
//   "Fast Turnaround",
//   "Dedicated Support",
// ];

// const portfolioPreview = [
//   { title: "Tech Startup Rebrand", category: "Branding" },
//   { title: "Restaurant Identity", category: "Logo Design" },
//   { title: "Music Festival", category: "Event Branding" },
// ];

// export default function Home() {
//   return (
//     <Layout>
//       {/* Hero Section */}
//       <section className="relative min-h-[90vh] flex items-center overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-muted -z-10" />
//         <div className="container mx-auto px-4 py-20">
//           <div className="max-w-4xl mx-auto text-center">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
//                 Creative Design Agency
//               </span>
//             </motion.div>
//             <motion.h1
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6"
//             >
//               Building Powerful Brands Through{" "}
//               <span className="text-accent">Creative Design</span>
//             </motion.h1>
//             <motion.p
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
//             >
//               We help businesses stand out through modern, strategic, and visually 
//               compelling designs that connect with your audience.
//             </motion.p>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               className="flex flex-col sm:flex-row gap-4 justify-center"
//             >
//               <Button size="lg" asChild>
//                 <Link to="/contact">
//                   Get Started <ArrowRight className="ml-2 h-4 w-4" />
//                 </Link>
//               </Button>
//               <Button size="lg" variant="outline" asChild>
//                 <Link to="/portfolio">View Our Work</Link>
//               </Button>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Services Overview */}
//       <section className="py-24 bg-secondary/50">
//         <div className="container mx-auto px-4">
//           <AnimatedSection>
//             <SectionHeading
//               title="What We Do"
//               subtitle="We combine creativity with strategy to deliver designs that connect with your audience."
//             />
//           </AnimatedSection>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
//             {services.map((service, index) => (
//               <AnimatedSection key={service.title} delay={index * 0.1}>
//                 <div className="group p-6 bg-card rounded-xl border hover-lift cursor-pointer">
//                   <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
//                     <service.icon className="h-6 w-6 text-accent" />
//                   </div>
//                   <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
//                   <p className="text-muted-foreground text-sm">{service.description}</p>
//                 </div>
//               </AnimatedSection>
//             ))}
//           </div>

//           <AnimatedSection delay={0.4} className="text-center mt-12">
//             <Button variant="outline" asChild>
//               <Link to="/services">
//                 Explore All Services <ArrowRight className="ml-2 h-4 w-4" />
//               </Link>
//             </Button>
//           </AnimatedSection>
//         </div>
//       </section>

//       {/* Why Brandify */}
//       <section className="py-24">
//         <div className="container mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <AnimatedSection>
//               <span className="text-accent font-medium mb-4 block">Why Choose Us</span>
//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
//                 Creativity Meets Strategy
//               </h2>
//               <p className="text-muted-foreground text-lg mb-8">
//                 At Brandify, we don't just design – we strategize, create, and elevate. 
//                 Every project is an opportunity to build something memorable that truly 
//                 represents your brand's unique identity.
//               </p>
//               <div className="grid grid-cols-2 gap-4">
//                 {whyUs.map((item) => (
//                   <div key={item} className="flex items-center gap-3">
//                     <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
//                     <span className="text-sm font-medium">{item}</span>
//                   </div>
//                 ))}
//               </div>
//             </AnimatedSection>

//             <AnimatedSection delay={0.2}>
//               <div className="relative">
//                 <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 via-accent/20 to-primary/5 p-8 flex items-center justify-center">
//                   <div className="text-center">
//                     <div className="text-6xl md:text-7xl font-bold text-accent mb-2">10+</div>
//                     <p className="text-muted-foreground">Years of Excellence</p>
//                   </div>
//                 </div>
//                 <div className="absolute -bottom-6 -right-6 bg-card border rounded-xl p-4 shadow-lg">
//                   <div className="text-3xl font-bold">500+</div>
//                   <p className="text-sm text-muted-foreground">Happy Clients</p>
//                 </div>
//               </div>
//             </AnimatedSection>
//           </div>
//         </div>
//       </section>

//       {/* Portfolio Preview */}
//       <section className="py-24 bg-primary text-primary-foreground">
//         <div className="container mx-auto px-4">
//           <AnimatedSection>
//             <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
//               <div>
//                 <span className="text-accent font-medium mb-4 block">Our Work</span>
//                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
//                   Featured Projects
//                 </h2>
//               </div>
//               <Button variant="secondary" asChild className="mt-4 md:mt-0">
//                 <Link to="/portfolio">
//                   View All <ArrowUpRight className="ml-2 h-4 w-4" />
//                 </Link>
//               </Button>
//             </div>
//           </AnimatedSection>

//           <div className="grid md:grid-cols-3 gap-6">
//             {portfolioPreview.map((project, index) => (
//               <AnimatedSection key={project.title} delay={index * 0.1}>
//                 <Link to="/portfolio" className="group block">
//                   <div className="aspect-[4/3] rounded-xl bg-primary-foreground/10 overflow-hidden mb-4">
//                     <div className="w-full h-full bg-gradient-to-br from-accent/30 to-primary-foreground/5 group-hover:scale-105 transition-transform duration-500" />
//                   </div>
//                   <span className="text-accent text-sm">{project.category}</span>
//                   <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
//                     {project.title}
//                   </h3>
//                 </Link>
//               </AnimatedSection>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-24">
//         <div className="container mx-auto px-4">
//           <AnimatedSection>
//             <div className="max-w-3xl mx-auto text-center">
//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
//                 Ready to Build Your Brand?
//               </h2>
//               <p className="text-muted-foreground text-lg mb-8">
//                 Let's collaborate to create something extraordinary. Get in touch with us today 
//                 and let's start your branding journey.
//               </p>
//               <Button size="lg" asChild>
//                 <Link to="/contact">
//                   Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
//                 </Link>
//               </Button>
//             </div>
//           </AnimatedSection>
//         </div>
//       </section>
//     </Layout>
//   );
// }









import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Palette, PenTool, PartyPopper, Share2, CheckCircle2, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";

const services = [
  {
    icon: Palette,
    title: "Logo Design",
    description: "Unique and timeless logos that represent your brand's identity.",
  },
  {
    icon: PenTool,
    title: "Branding",
    description: "Complete brand identity systems including colors, typography, and guidelines.",
  },
  {
    icon: PartyPopper,
    title: "Event Branding",
    description: "Creative branding solutions for events, campaigns, and promotions.",
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Content creation, visual design, and brand consistency across platforms.",
  },
];

const whyUs = [
  "Creative Excellence",
  "Strategic Approach",
  "Modern Design",
  "Brand Consistency",
  "Fast Turnaround",
  "Dedicated Support",
];

const portfolioPreview = [
  { title: "Tech Startup Rebrand", category: "Branding" },
  { title: "Restaurant Identity", category: "Logo Design" },
  { title: "Music Festival", category: "Event Branding" },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Gradient-ka waxaa looga dhigay Light Blue */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-background to-sky-50 -z-10" />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Text-accent waxaa loo beddelay text-sky-500 */}
              <span className="inline-block px-4 py-2 rounded-full bg-sky-500/10 text-sky-600 text-sm font-medium mb-6 border border-sky-200">
                Creative Design Agency
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6"
            >
              Building Powerful Brands Through{" "}
              <span className="text-sky-500">Creative Design</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              We help businesses stand out through modern, strategic, and visually 
              compelling designs that connect with your audience.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {/* Button-ka Primary ee Shadcn wuxuu qaadan doonaa theme-kaaga, ama halkan bg-sky-500 ku dar */}
              <Button size="lg" asChild className="bg-sky-500 hover:bg-sky-600">
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-sky-200 text-sky-700 hover:bg-sky-50">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-sky-50/30">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionHeading
              title="What We Do"
              subtitle="We combine creativity with strategy to deliver designs that connect with your audience."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <div className="group p-6 bg-card rounded-xl border border-sky-100 hover:border-sky-300 hover-lift cursor-pointer shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-sky-500/10 flex items-center justify-center mb-4 group-hover:bg-sky-500/20 transition-colors">
                    <service.icon className="h-6 w-6 text-sky-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-sky-600 transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4} className="text-center mt-12">
            <Button variant="outline" asChild className="border-sky-200 text-sky-600">
              <Link to="/services">
                Explore All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Brandify */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="text-sky-500 font-medium mb-4 block">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Creativity Meets Strategy
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                At Brandify, we don't just design – we strategize, create, and elevate. 
                Every project is an opportunity to build something memorable that truly 
                represents your brand's unique identity.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {whyUs.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-sky-500 flex-shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative">
                {/* Gradient and Stats changed to Light Blue */}
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-sky-400/10 via-sky-300/20 to-sky-200/5 p-8 flex items-center justify-center border border-sky-100">
                  <div className="text-center">
                    <div className="text-6xl md:text-7xl font-bold text-sky-500 mb-2">10+</div>
                    <p className="text-muted-foreground">Years of Excellence</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-card border border-sky-100 rounded-xl p-4 shadow-lg">
                  <div className="text-3xl font-bold text-sky-600">500+</div>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <span className="text-sky-400 font-medium mb-4 block">Our Work</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  Featured Projects
                </h2>
              </div>
              <Button variant="secondary" asChild className="mt-4 md:mt-0 bg-sky-500 hover:bg-sky-600 text-white border-none">
                <Link to="/portfolio">
                  View All <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {portfolioPreview.map((project, index) => (
              <AnimatedSection key={project.title} delay={index * 0.1}>
                <Link to="/portfolio" className="group block">
                  <div className="aspect-[4/3] rounded-xl bg-white/5 overflow-hidden mb-4 border border-white/10">
                    <div className="w-full h-full bg-gradient-to-br from-sky-400/30 to-sky-600/10 group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <span className="text-sky-400 text-sm">{project.category}</span>
                  <h3 className="text-lg font-semibold group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-sky-50/50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Build Your Brand?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Let's collaborate to create something extraordinary. Get in touch with us today 
                and let's start your branding journey.
              </p>
              <Button size="lg" asChild className="bg-sky-500 hover:bg-sky-600">
                <Link to="/contact">
                  Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
