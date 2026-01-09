import { ChevronDown, Search, User } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const mainLinks = [
    { label: "ADMISSIONS", hasDropdown: true },
    { label: "PROGRAMMES", hasDropdown: true },
    { label: "NEWS & EVENTS", hasDropdown: true },
    { label: "ABOUT", hasDropdown: true },
  ];

  const topLinks = [
    { label: "Student Portal" },
    { label: "Employee Services" },
    { label: "Alumni" },
    { label: "Study Centres" },
  ];

  return (
    <header className="w-full">
      {/* Top bar - similar to Oxford */}
      <div className="bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-8">
              {topLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="nav-link text-xs hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-white/10 border border-white/20 rounded px-3 py-1.5 text-xs text-white placeholder:text-white/60 w-40 focus:outline-none focus:border-white/40"
                />
                <Search className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/60" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation - Oxford style taller navbar */}
      <nav className="bg-secondary">
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

            {/* Main Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              {mainLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="nav-link flex items-center gap-1 py-6"
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
