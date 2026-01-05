// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { ThemeToggle } from "@/components/ThemeToggle";
// import { motion, AnimatePresence } from "framer-motion";

// const navLinks = [
//   { name: "Home", path: "/" },
//   { name: "Services", path: "/services" },
//   { name: "Portfolio", path: "/portfolio" },
//   { name: "About", path: "/about" },
//   { name: "Contact", path: "/contact" },
// ];

// export function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 glass border-b">
//       <div className="container mx-auto px-4">
//         <div className="flex h-16 items-center justify-between">
//           {/* Logo */}
//           {/* <Link to="/" className="flex items-center space-x-2">
//             <span className="text-2xl font-bold text-primary">
//               Brand<span className="text-accent">ify</span>
//             </span>
//           </Link> */}

//           {/* <Link to="/" className="flex items-center">
//             <img 
//               src="/Brandify logo1.png" 
//               alt="Brandify Logo" 
//               className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105" 
//             />
//           </Link> */}

//           <Link to="/" className="flex items-center">
//   <img 
//     src="/Brandify logo1.png" 
//     alt="Brandify Logo" 
//     className="
//       /* Cabirka Mobile-ka (aad uma yara, aadna uma weyna) */
//       h-20 w-auto 
      
//       /* Cabirka Tablet-ka */
//       sm:h-40 
      
//       /* Cabirka Desktop-ka (si uu u muuqdo qoraalka yar ee slogan-ka ah) */
//       md:h-16 
      
//       /* Smooth transition marka screen-ka la beddelo */
//       object-contain 
//       transition-all 
//       duration-300 
//       hover:brightness-110
//     " 
//   />
// </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`text-sm font-medium transition-colors hover:text-accent ${
//                   location.pathname === link.path
//                     ? "text-accent"
//                     : "text-muted-foreground"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </nav>

//           {/* Desktop Actions */}
//           <div className="hidden md:flex items-center space-x-4">
//             <ThemeToggle />
//             <Button asChild>
//               <Link to="/contact">Get Started</Link>
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="flex md:hidden items-center space-x-2">
//             <ThemeToggle />
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         <AnimatePresence>
//           {isOpen && (
//             <motion.nav
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               className="md:hidden border-t"
//             >
//               <div className="flex flex-col space-y-4 py-4">
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.path}
//                     to={link.path}
//                     onClick={() => setIsOpen(false)}
//                     className={`text-sm font-medium transition-colors hover:text-accent ${
//                       location.pathname === link.path
//                         ? "text-accent"
//                         : "text-muted-foreground"
//                     }`}
//                   >
//                     {link.name}
//                   </Link>
//                 ))}
//                 <Button asChild className="w-fit">
//                   <Link to="/contact" onClick={() => setIsOpen(false)}>
//                     Get Started
//                   </Link>
//                 </Button>
//               </div>
//             </motion.nav>
//           )}
//         </AnimatePresence>
//       </div>
//     </header>
//   );
// }



// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X, ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { ThemeToggle } from "@/components/ThemeToggle";
// import { motion, AnimatePresence } from "framer-motion";

// const navLinks = [
//   { name: "Home", path: "/" },
//   { name: "Services", path: "/services" },
//   { name: "Portfolio", path: "/portfolio" },
//   { name: "About", path: "/about" },
//   { name: "Contact", path: "/contact" },
// ];

// export function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   // Waxaan ogaanaynaa haddii bogga hoos loo scroll-gareeyay
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header 
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled 
//           ? "bg-background/80 backdrop-blur-md border-b py-2" 
//           : "bg-transparent py-4"
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between">
          
//           {/* Logo leh Animation */}
//           <Link to="/" className="group flex items-center space-x-2">
//             <div className="bg-primary h-8 w-8 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
//               <span className="text-white font-bold text-xl">B</span>
//             </div>
//             <span className="text-2xl font-bold tracking-tight">
//               Brand<span className="text-primary">ify</span>
//             </span>
//           </Link>

//           <Link to="/" className="flex items-center">
//             <img 
//               src="/Brandify logo1.png" 
//               alt="Brandify Logo" 
//               className="h-0 w-auto object-contain transition-transform duration-300 hover:scale-105" 
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-1">
//             {navLinks.map((link) => {
//               const isActive = location.pathname === link.path;
//               return (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 hover:text-primary ${
//                     isActive ? "text-primary" : "text-muted-foreground"
//                   }`}
//                 >
//                   {link.name}
//                   {/* Active Indicator Line */}
//                   {isActive && (
//                     <motion.div 
//                       layoutId="activeNav"
//                       className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary mx-4"
//                     />
//                   )}
//                 </Link>
//               );
//             })}
//           </nav>

//           {/* Actions */}
//           <div className="hidden md:flex items-center space-x-4">
//             <ThemeToggle />
//             <Button asChild className="rounded-full shadow-lg hover:shadow-primary/20 transition-all">
//               <Link to="/contact" className="flex items-center gap-2">
//                 Get Started <ArrowRight className="h-4 w-4" />
//               </Link>
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="flex md:hidden items-center space-x-2">
//             <ThemeToggle />
//             <Button
//               variant="ghost"
//               size="icon"
//               className="rounded-full"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               {isOpen ? <X /> : <Menu />}
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Navigation leh Slide Animation */}
//         <AnimatePresence>
//           {isOpen && (
//             <motion.nav
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b md:hidden shadow-xl"
//             >
//               <div className="flex flex-col p-6 space-y-4">
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.path}
//                     to={link.path}
//                     onClick={() => setIsOpen(false)}
//                     className={`text-lg font-semibold ${
//                       location.pathname === link.path ? "text-primary" : "text-muted-foreground"
//                     }`}
//                   >
//                     {link.name}
//                   </Link>
//                 ))}
//                 <hr className="border-muted" />
//                 <Button asChild className="w-full py-6 text-lg rounded-xl">
//                   <Link to="/contact" onClick={() => setIsOpen(false)}>
//                     Get Started
//                   </Link>
//                 </Button>
//               </div>
//             </motion.nav>
//           )}
//         </AnimatePresence>
//       </div>
//     </header>
//   );
// }








import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Ogaanshada Scroll-ka si design-ku isku beddelo
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          layout
          className={`relative flex items-center justify-between px-6 transition-all duration-500 ${
            scrolled 
              ? "h-16 rounded-full bg-blue-light/30 backdrop-blur-xl border shadow-lg shadow-primary/5" 
              : "h-14 rounded-2xl bg-transparent"
          }`}
        >
          {/* Logo Section */}
          <Link to="/" className="flex items-center group">
            <img 
              src="/Brandify logo.png" 
              alt="Brandify Logo" 
              className={`w-auto transition-all duration-500 object-contain ${
                scrolled ? "h-10" : "h-14 md:h-16"
              }`} 
            />
          </Link>

          {/* Desktop Navigation - Glass Pill Design */}
          <nav className="hidden md:flex items-center bg-muted/50 border border-border/50 rounded-full px-2 py-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-5 py-2 text-sm font-semibold transition-all duration-300 rounded-full ${
                    isActive 
                      ? "text-blue-light-foreground" 
                      : "text-muted-foreground hover:text-blue-light"
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute inset-0 bg-blue-light rounded-full shadow-md shadow-blue-light/20"
                      transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <Button asChild className="rounded-full px-6 group overflow-hidden">
              <Link to="/contact" className="flex items-center gap-2">
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Mobile Button */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full shadow-sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </motion.div>

        {/* Mobile Menu - Modern Full-Screen Blur */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className="absolute top-full left-4 right-4 mt-4 md:hidden"
            >
              <div className="bg-background/95 backdrop-blur-2xl border rounded-3xl p-6 shadow-2xl">
                <div className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between p-4 rounded-2xl text-lg font-semibold transition-all ${
                        location.pathname === link.path 
                          ? "bg-blue-light/10 text-blue-light" 
                          : "hover:bg-muted"
                      }`}
                    >
                      {link.name}
                      <ArrowRight className={`h-5 w-5 ${location.pathname === link.path ? "opacity-100" : "opacity-0"}`} />
                    </Link>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t">
                  <Button asChild className="w-full h-14 rounded-2xl text-lg">
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}