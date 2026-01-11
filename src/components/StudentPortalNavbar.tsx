import { useState } from "react";
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

const StudentPortalNavbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

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
        { label: "Study Materials", href: "#" },
        { label: "PCP Classes Timetable", href: "#" },
        { label: "Results & Grades", href: "#" },
        { label: "Assignment Submission", href: "#" },
      ],
    },
    {
      label: "EXAMINATIONS",
      items: [
        { label: "Exam Application", href: "#" },
        { label: "Exam Timetable", href: "#" },
        { label: "Exam Center", href: "#" },
        { label: "Hall Tickets", href: "#" },
        { label: "Revaluation Application", href: "#" },
      ],
    },
    {
      label: "FEES & FUNDING",
      items: [
        { label: "Fee Payment", href: "#" },
        { label: "Fee Structure", href: "#" },
        { label: "Search Fee Dues", href: "#" },
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
        { label: "Instructions for Original Certificate Verification", href: "#" },
      ],
    },
    {
      label: "RESOURCES",
      items: [
        { label: "Previous Question Papers", href: "#" },
        { label: "Academic Calendar", href: "#" },
        { label: "Notifications & Circulars", href: "#" },
      ],
    },
    {
      label: "SUPPORT",
      items: [
        { label: "Help Desk", href: "#" },
        { label: "FAQs", href: "#" },
        { label: "Contact Study Centre", href: "#" },
        { label: "Student Grievances", href: "#" },
        { label: "Feedback Form", href: "#" },
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
              <img src={logo} alt="ANUCDE Logo" className="h-8 sm:h-10 w-auto" />
            </a>

            {/* Global Links (Desktop) */}
            <div className="hidden md:flex items-center gap-6">
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

            {/* Search & Mobile Menu */}
            <div className="flex items-center gap-3">
              <div className="relative hidden sm:block">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-white/10 border border-white/20 rounded px-3 py-1.5 text-xs text-white placeholder:text-white/60 w-32 sm:w-40 focus:outline-none focus:border-white/40 transition-all"
                />
                <Search className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/60" />
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
                      <span className="text-white font-bold">Student Portal</span>
                      <SheetClose asChild>
                        <button className="text-white p-1">
                          <X className="w-5 h-5" />
                        </button>
                      </SheetClose>
                    </div>

                    {/* Mobile Search */}
                    <div className="p-4 border-b border-white/10 sm:hidden">
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
                      {/* Global Links for Mobile */}
                      <div className="p-4 border-b border-white/10 md:hidden">
                        <p className="text-white/60 text-xs mb-3 uppercase tracking-wider">Quick Access</p>
                        {globalLinks.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            className="block py-2 text-sm text-white/80 hover:text-white transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>

                      <Accordion type="single" collapsible className="w-full">
                        {portalNavLinks.map((link) => (
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
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>

      {/* Portal Identity Bar */}
      <div className="bg-secondary border-t border-white/10">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <img src={logo} alt="ANUCDE Logo" className="h-10 sm:h-14 w-auto" />
            <div className="text-white">
              <h1 className="text-lg sm:text-2xl font-bold tracking-wide">ANUCDE STUDENTS</h1>
              <p className="text-[10px] sm:text-xs text-white/70">Centre for Distance Education</p>
            </div>
          </div>
        </div>
      </div>

      {/* Portal Navigation (Desktop) */}
      <nav className="hidden lg:block bg-secondary/90 border-t border-white/10 relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            {portalNavLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="flex items-center gap-1 px-4 py-3 text-white text-xs font-medium hover:bg-white/10 transition-colors whitespace-nowrap"
                >
                  {link.label}
                  <ChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === link.label && (
                  <div className="absolute top-full left-0 min-w-[220px] bg-white shadow-xl border border-border z-[100]">
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
