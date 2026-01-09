import { Facebook, Twitter, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
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
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Logo and Contact */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="ANUCDE Logo" className="h-12 w-auto" />
              <div>
                <h3 className="font-bold text-sm">ANUCDE</h3>
                <p className="text-xs text-white/70">Distance Education</p>
              </div>
            </div>
            <p className="text-sm text-white/70 mb-4">
              Acharya Nagarjuna University Centre for Distance Education - Empowering education through innovation since 1976.
            </p>
            <div className="space-y-2 text-sm text-white/70">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +91 863 234 4587
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                info@anucde.ac.in
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Nagarjuna Nagar, Guntur - 522510, Andhra Pradesh
              </p>
            </div>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="footer-link text-white/70 hover:text-primary">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          
          <p className="text-sm text-white/60 text-center">
            © 2025 Acharya Nagarjuna University Centre for Distance Education. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
