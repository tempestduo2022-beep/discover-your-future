import { FileText, Calendar, Phone, Award, Users, BookOpen, MapPin } from "lucide-react";
import campusImage from "@/assets/campus-main.png";

const HeroSection = () => {
  const quickActions = [
    { icon: FileText, label: "Apply Now", sublabel: "Start your application", primary: true },
    { icon: FileText, label: "Brochure", sublabel: "Download prospectus" },
    { icon: Calendar, label: "Academic Calendar", sublabel: "Important dates" },
    { icon: Phone, label: "Contact Us", sublabel: "Get in touch" },
  ];

  const stats = [
    { icon: Award, value: "NAAC A+", label: "Accreditation" },
    { icon: Users, value: "50K+", label: "Students" },
    { icon: BookOpen, value: "88+", label: "Programs" },
    { icon: MapPin, value: "80+", label: "Study Centres" },
  ];

  return (
    <section className="relative">
      {/* Hero Background */}
      <div className="relative h-[500px] overflow-hidden">
        <img
          src={campusImage}
          alt="ANUCDE Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-secondary/40" />
        
        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          <span className="w-8 h-1 bg-white rounded-full" />
          <span className="w-8 h-1 bg-white/40 rounded-full" />
          <span className="w-8 h-1 bg-white/40 rounded-full" />
        </div>

        {/* Navigation arrows */}
        <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors">
          ‹
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors">
          ›
        </button>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <p className="text-primary text-sm font-semibold mb-2 tracking-wider">DISTANCE EDUCATION</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
                ADMISSIONS OPEN FOR 2025-26
              </h1>
              <p className="text-white/90 text-lg mb-8">
                Shape your future with quality distance education from a NAAC A+ accredited university
              </p>
            </div>
          </div>
        </div>

        {/* Orange corner decoration */}
        <div className="absolute top-0 right-0 w-24 h-24">
          <div className="absolute top-4 right-4 w-12 h-12 border-2 border-primary rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-primary rounded-full" />
          </div>
        </div>
      </div>

      {/* Quick Actions & Stats Bar */}
      <div className="bg-muted py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Quick Actions */}
            <div className="flex flex-wrap gap-3">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-md transition-all ${
                    action.primary
                      ? "bg-primary text-white hover:bg-primary/90"
                      : "bg-white text-foreground hover:bg-gray-50 border border-border"
                  }`}
                >
                  <action.icon className="w-4 h-4" />
                  <div className="text-left">
                    <p className="text-sm font-semibold">{action.label}</p>
                    <p className={`text-xs ${action.primary ? "text-white/80" : "text-muted-foreground"}`}>
                      {action.sublabel}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2">
                  <stat.icon className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
