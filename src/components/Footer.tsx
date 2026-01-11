import { Facebook, Twitter, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Footer = () => {
  const { ref: footerRef, isVisible } = useScrollAnimation(0.1);

  const footerLinks = {
    study: {
      title: "Study",
      links: ["Undergraduate", "Postgraduate", "Diplomas", "Certificates", "Academic Calendar"],
    },
    about: {
      title: "About",
      links: ["University History", "Vice-Chancellor", "Administration", "Campus", "Contact"],
    },
    support: {
      title: "Support",
      links: ["Student Portal", "Downloads", "Help", "Grievance", "RTI"],
    },
    connect: {
      title: "Connect",
      links: ["News", "Events", "Alumni", "Careers", "Media"],
    },
  };

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Youtube, href: "#" },
  ];

  return (
    <footer ref={footerRef} className="bg-secondary text-white overflow-hidden">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Logo and Contact */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="ANUCDE Logo" className="h-10 sm:h-12 w-auto" />
              <div>
                <h3 className="font-bold text-sm">ANUCDE</h3>
                <p className="text-xs text-white/70">Distance Education</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-white/70 mb-4">
              Acharya Nagarjuna University Centre for Distance Education - Empowering education through innovation since 1976.
            </p>
            <div className="space-y-2 text-xs sm:text-sm text-white/70">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                +91 863 234 4587
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                info@anucde.ac.in
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="break-words">Nagarjuna Nagar, Guntur - 522510, AP</span>
              </p>
            </div>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section, index) => (
            <div key={index} className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: `${index * 100 + 100}ms` }}>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm">{section.title}</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="footer-link text-white/70 hover:text-primary text-xs sm:text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className={`border-t border-white/10 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
          <div className="flex gap-3 sm:gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              >
                <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            ))}
          </div>
          
          <p className="text-xs sm:text-sm text-white/60 text-center order-last md:order-none">
            © 2025 Acharya Nagarjuna University Centre for Distance Education. All rights reserved.
          </p>

          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors hidden sm:inline">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
