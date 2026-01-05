// import { Link } from "react-router-dom";
// import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from "lucide-react";

// const footerLinks = {
//   company: [
//     { name: "About", path: "/about" },
//     { name: "Services", path: "/services" },
//     { name: "Portfolio", path: "/portfolio" },
//     { name: "Contact", path: "/contact" },
//   ],
//   services: [
//     { name: "Logo Design", path: "/services" },
//     { name: "Branding", path: "/services" },
//     { name: "Event Branding", path: "/services" },
//     { name: "Social Media", path: "/services" },
//   ],
// };

// const socialLinks = [
//   { icon: Instagram, href: "#", label: "Instagram" },
//   { icon: Twitter, href: "#", label: "Twitter" },
//   { icon: Linkedin, href: "#", label: "LinkedIn" },
// ];

// export function Footer() {
//   return (
//     <footer className="bg-primary text-primary-foreground">
//       <div className="container mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
//           {/* Brand */}
//           <div className="space-y-4">
//             {/* <Link to="/" className="text-2xl font-bold">
//               Brand<span className="text-accent">ify</span>
//             </Link> */}

//             <Link to="/" className="flex items-center group">
//             <img 
//               src="/Brandify logo1.png" 
//               alt="Brandify Logo" 
//               className={`w-auto transition-all duration-500 object-contain ${
//                 window.scrollY > 0 ? "h-10" : "h-34 md:h-36"
//               }`} 
//             />
//           </Link>
//             <p className="text-primary-foreground/80 text-sm leading-relaxed">
//               Building powerful brands through creative design. We help businesses stand out with modern, strategic, and visually compelling designs.
//             </p>
//             <div className="flex space-x-4">
//               {socialLinks.map((social) => (
//                 <a
//                   key={social.label}
//                   href={social.href}
//                   className="hover:text-accent transition-colors"
//                   aria-label={social.label}
//                 >
//                   <social.icon className="h-5 w-5" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Company Links */}
//           <div>
//             <h4 className="font-semibold mb-4">Company</h4>
//             <ul className="space-y-3">
//               {footerLinks.company.map((link) => (
//                 <li key={link.path}>
//                   <Link
//                     to={link.path}
//                     className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services Links */}
//           <div>
//             <h4 className="font-semibold mb-4">Services</h4>
//             <ul className="space-y-3">
//               {footerLinks.services.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     to={link.path}
//                     className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h4 className="font-semibold mb-4">Contact</h4>
//             <ul className="space-y-3">
//               <li className="flex items-center space-x-3 text-sm text-primary-foreground/80">
//                 <Mail className="h-4 w-4 text-accent" />
//                 <span>hello@brandify.com</span>
//               </li>
//               <li className="flex items-center space-x-3 text-sm text-primary-foreground/80">
//                 <Phone className="h-4 w-4 text-accent" />
//                 <span>+1 (555) 123-4567</span>
//               </li>
//               <li className="flex items-start space-x-3 text-sm text-primary-foreground/80">
//                 <MapPin className="h-4 w-4 text-accent mt-0.5" />
//                 <span>123 Design Street, Creative City, CC 12345</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm text-primary-foreground/60">
//           <p>© {new Date().getFullYear()} Brandify. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }







import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ],
  services: [
    { name: "Logo Design", path: "/services" },
    { name: "Branding", path: "/services" },
    { name: "Event Branding", path: "/services" },
    { name: "Social Media", path: "/services" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/updyfitah_omar?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200 border-t border-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center group">
              <img 
                src="/Brandify logo.png" 
                alt="Brandify Logo" 
                className="h-16 w-auto transition-transform duration-500 group-hover:scale-105 object-contain" 
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Building powerful brands through creative design. We help businesses stand out with modern, strategic, and visually compelling designs.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-sky-400 hover:bg-sky-400/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-sky-400 transition-colors text-sm flex items-center group"
                  >
                    <span className="h-px w-0 bg-sky-400 mr-0 transition-all group-hover:w-3 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-sky-400 transition-colors text-sm flex items-center group"
                  >
                    <span className="h-px w-0 bg-sky-400 mr-0 transition-all group-hover:w-3 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-sm text-slate-400 group">
                <div className="p-2 rounded-lg bg-slate-900 group-hover:bg-sky-400/10 transition-colors">
                  <Mail className="h-4 w-4 text-sky-400" />
                </div>
                <span className="group-hover:text-slate-200 transition-colors">brandify06@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-slate-400 group">
                <div className="p-2 rounded-lg bg-slate-900 group-hover:bg-sky-400/10 transition-colors">
                  <Phone className="h-4 w-4 text-sky-400" />
                </div>
                <span className="group-hover:text-slate-200 transition-colors">+252 612334788</span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-slate-400 group">
                <div className="p-2 rounded-lg bg-slate-900 group-hover:bg-sky-400/10 transition-colors">
                  <MapPin className="h-4 w-4 text-sky-400" />
                </div>
                <span className="group-hover:text-slate-200 transition-colors leading-relaxed">
                  123 Design Street, Creative City, CC 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Brandify. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-sky-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sky-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}