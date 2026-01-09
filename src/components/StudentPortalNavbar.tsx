import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import logo from "@/assets/logo.png";

const StudentPortalNavbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const globalLinks = [
    { label: "ADMISSIONS", href: "/" },
    { label: "RESEARCH", href: "#" },
    { label: "NEWS & EVENTS", href: "#" },
    { label: "ABOUT", href: "#" },
  ];

  const portalNavLinks = [
    {
      label: "NEW STUDENTS",
      items: [
        { label: "Welcome Guide", href: "#" },
        { label: "Orientation Program", href: "#" },
        { label: "Registration Process", href: "#" },
        { label: "ID Card & Documents", href: "#" },
      ],
    },
    {
      label: "ACADEMIC MATTERS",
      items: [
        { label: "Course Registration", href: "#" },
        { label: "Exam Schedules", href: "#" },
        { label: "Results & Grades", href: "#" },
        { label: "Study Materials", href: "#" },
        { label: "Assignment Submission", href: "#" },
      ],
    },
    {
      label: "FEES & FUNDING",
      items: [
        { label: "Fee Payment", href: "#" },
        { label: "Fee Structure", href: "#" },
        { label: "Scholarships", href: "#" },
        { label: "Payment History", href: "#" },
      ],
    },
    {
      label: "STUDENT SERVICES",
      items: [
        { label: "Library Services", href: "#" },
        { label: "Transport", href: "#" },
        { label: "Hostel", href: "#" },
        { label: "Health Services", href: "#" },
      ],
    },
    {
      label: "RESOURCES",
      items: [
        { label: "E-Learning Portal", href: "#" },
        { label: "Digital Library", href: "#" },
        { label: "Previous Question Papers", href: "#" },
        { label: "Academic Calendar", href: "#" },
      ],
    },
    {
      label: "SUPPORT",
      items: [
        { label: "Help Desk", href: "#" },
        { label: "FAQs", href: "#" },
        { label: "Contact Study Centre", href: "#" },
        { label: "Grievance Redressal", href: "#" },
      ],
    },
  ];

  return (
    <header className="w-full">
      {/* Top Global Nav Bar */}
      <div className="bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <img src={logo} alt="ANUCDE Logo" className="h-10 w-auto" />
            </a>

            {/* Global Links */}
            <div className="hidden lg:flex items-center gap-6">
              {globalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/80 text-xs font-medium hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-white/10 border border-white/20 rounded px-3 py-1.5 text-xs text-white placeholder:text-white/60 w-40 focus:outline-none focus:border-white/40 transition-all"
              />
              <Search className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/60" />
            </div>
          </div>
        </div>
      </div>

      {/* Portal Identity Bar */}
      <div className="bg-secondary border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <img src={logo} alt="ANUCDE Logo" className="h-14 w-auto" />
            <div className="text-white">
              <h1 className="text-2xl font-bold tracking-wide">ANUCDE STUDENTS</h1>
              <p className="text-xs text-white/70">Centre for Distance Education</p>
            </div>
          </div>
        </div>
      </div>

      {/* Portal Navigation */}
      <nav className="bg-secondary/90 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            {portalNavLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href="#"
                  className="flex items-center gap-1 px-4 py-3 text-white text-xs font-medium hover:bg-white/10 transition-colors"
                >
                  {link.label}
                  <ChevronDown className="w-3 h-3" />
                </a>

                {/* Dropdown Menu */}
                {activeDropdown === link.label && (
                  <div className="absolute top-full left-0 min-w-[200px] bg-white shadow-lg border border-border z-50 animate-fade-in">
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
      </nav>
    </header>
  );
};

export default StudentPortalNavbar;
