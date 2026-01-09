import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const mainLinks = [
    {
      label: "ADMISSIONS",
      items: [
        { label: "Admission Notifications", href: "#" },
        { label: "Online Admission Application", href: "#" },
        { label: "Fee Structure", href: "#" },
        { label: "Entrance Examination Results", href: "#" },
        { label: "Entrance Hall Tickets", href: "#" },
        { label: "Course-wise Eligibility", href: "#" },
      ],
    },
    {
      label: "PROGRAMMES",
      items: [
        { label: "Undergraduate (UG) Courses", href: "#" },
        { label: "Postgraduate (PG) Courses", href: "#" },
        { label: "MBA & MCA Programmes", href: "#" },
        { label: "Diploma & PG Diploma", href: "#" },
        { label: "Certificate Courses", href: "#" },
        { label: "Syllabus & Study Material", href: "#" },
      ],
    },
    {
      label: "NEWS & EVENTS",
      items: [
        { label: "Latest Notifications", href: "#" },
        { label: "Examination Schedules", href: "#" },
        { label: "Workshop & Seminar Updates", href: "#" },
        { label: "Academic Calendar", href: "#" },
        { label: "Press Releases", href: "#" },
        { label: "Photo Gallery", href: "#" },
      ],
    },
    {
      label: "ABOUT",
      items: [
        { label: "About ANUCDE", href: "#" },
        { label: "Vice-Chancellor's Message", href: "#" },
        { label: "Director's Desk", href: "#" },
        { label: "List of Study Centres", href: "#" },
        { label: "NAAC & NIRF Rankings", href: "#" },
        { label: "Contact Us", href: "#" },
      ],
    },
  ];

  const quickLinks = [
    { label: "Student Portal", href: "#" },
    { label: "Employee Services", href: "#" },
    { label: "Alumni", href: "#" },
    { label: "Study Centres", href: "#" },
  ];

  return (
    <header className="w-full">
      {/* Top bar with logo and main nav */}
      <div className="bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              <img src={logo} alt="ANUCDE Logo" className="h-16 w-auto" />
              <div className="text-white">
                <h1 className="text-lg font-bold leading-tight tracking-wide">ACHARYA NAGARJUNA</h1>
                <p className="text-xs text-white/80 tracking-widest">UNIVERSITY</p>
              </div>
            </a>

            {/* Main Navigation Links - beside logo */}
            <div className="hidden lg:flex items-center">
              {mainLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href="#"
                    className="flex items-center gap-1.5 px-4 py-3 text-white text-sm font-medium hover:bg-white/10 transition-colors"
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </a>

                  {/* Dropdown Menu */}
                  {activeDropdown === link.label && (
                    <div className="absolute top-full left-0 min-w-[220px] bg-white shadow-lg border border-border z-50 animate-fade-in">
                      {link.items.map((item, idx) => (
                        <a
                          key={idx}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm text-foreground hover:bg-primary hover:text-white transition-colors border-b border-border/50 last:border-b-0"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links bar */}
      <nav className="bg-secondary border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-end">
            {/* Quick Links & Search - Right side */}
            <div className="hidden lg:flex items-center gap-1">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="px-3 py-3 text-white text-xs hover:bg-white/10 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="relative ml-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-white/10 border border-white/20 rounded px-3 py-1.5 text-xs text-white placeholder:text-white/60 w-32 focus:outline-none focus:border-white/40 focus:w-40 transition-all"
                />
                <Search className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/60" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
