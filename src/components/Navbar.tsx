import { useState, useEffect } from "react";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      label: "ACADEMICS",
      items: [
        { label: "Undergraduate (UG) Courses", href: "#" },
        { label: "Postgraduate (PG) Courses", href: "#" },
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
    { label: "Student Portal", href: "/student-portal" },
    { label: "Employee Services", href: "/employee-services" },
    { label: "Alumni", href: "#" },
    { label: "Study Centres", href: "#" },
  ];

  return (
    <header className={`w-full sticky top-0 z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'shadow-lg' : ''}`}>
      {/* Top bar with logo and main nav */}
      <div className="bg-secondary">
        <div className="container mx-auto px-4">
          <div className={`flex items-center justify-between lg:justify-start py-4 gap-8 lg:gap-12 transition-all duration-500 ease-in-out ${isScrolled ? 'lg:hidden' : ''}`}>
            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              <img src={logo} alt="ANUCDE Logo" className="h-12 sm:h-16 w-auto" />
              <div className="text-white">
                <h1 className="text-base sm:text-lg font-bold leading-tight tracking-wide">ACHARYA NAGARJUNA</h1>
                <p className="text-[10px] sm:text-xs text-white/80 tracking-widest">UNIVERSITY</p>
              </div>
            </a>

            {/* Main Navigation Links - beside logo (Desktop) - Hidden when not scrolled */}
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

            {/* Mobile Menu Button */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button className="lg:hidden text-white p-2">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-secondary border-l-0 p-0">
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between p-4 border-b border-white/10">
                    <span className="text-white font-bold">Menu</span>
                    <SheetClose asChild>
                      <button className="text-white p-1">
                        <X className="w-5 h-5" />
                      </button>
                    </SheetClose>
                  </div>

                  {/* Mobile Search */}
                  <div className="p-4 border-b border-white/10">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="w-full bg-white/10 border border-white/20 rounded px-3 py-2 text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-white/40"
                      />
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <div className="flex-1 overflow-y-auto">
                    <Accordion type="single" collapsible className="w-full">
                      {mainLinks.map((link) => (
                        <AccordionItem key={link.label} value={link.label} className="border-b border-white/10">
                          <AccordionTrigger className="px-4 py-3 text-white text-sm font-medium hover:bg-white/10 hover:no-underline">
                            {link.label}
                          </AccordionTrigger>
                          <AccordionContent className="pb-0">
                            {link.items.map((item, idx) => (
                              <a
                                key={idx}
                                href={item.href}
                                className="block px-6 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                                onClick={() => setMobileOpen(false)}
                              >
                                {item.label}
                              </a>
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>

                    {/* Mobile Quick Links */}
                    <div className="p-4 border-t border-white/10">
                      <p className="text-white/60 text-xs mb-3 uppercase tracking-wider">Quick Links</p>
                      {quickLinks.map((link, index) => (
                        <a
                          key={index}
                          href={link.href}
                          className="block py-2 text-sm text-white/80 hover:text-white transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Compact scrolled navbar - Desktop only */}
      <div className={`hidden bg-secondary transition-all duration-500 ease-in-out overflow-hidden ${isScrolled ? 'lg:block max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            {/* All navigation in one line */}
            <div className="flex items-center gap-1">
              {mainLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href="#"
                    className="flex items-center gap-1 px-3 py-2 text-white text-xs font-medium hover:bg-white/10 transition-colors rounded"
                  >
                    {link.label}
                    <ChevronDown className="w-3 h-3" />
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

              {/* Separator */}
              <div className="w-px h-6 bg-white/20 mx-2" />

              {/* Quick Links inline */}
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="px-3 py-2 text-white text-xs hover:bg-white/10 transition-colors rounded"
                >
                  {link.label}
                </a>
              ))}

              {/* Search */}
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
      </div>

      {/* Quick Links bar (Desktop only) - Hidden when scrolled */}
      <nav className={`hidden lg:block bg-secondary border-t border-white/10 transition-all duration-500 ease-in-out ${isScrolled ? 'max-h-0 opacity-0 overflow-hidden' : 'max-h-20 opacity-100'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-end">
            {/* Quick Links & Search - Right side */}
            <div className="flex items-center gap-1">
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
