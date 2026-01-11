import { useState, useEffect, useCallback } from "react";
import { FileText, Calendar, Phone, Award, Users, BookOpen, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import campusMain from "@/assets/campus-main.png";
import campusCde from "@/assets/campus-cde.png";
import workshopImg from "@/assets/workshop.png";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: campusMain,
      subtitle: "DISTANCE EDUCATION",
      title: "ADMISSIONS OPEN FOR 2025-26",
      description: "Shape your future with quality distance education from a NAAC A+ accredited university",
    },
    {
      image: campusCde,
      subtitle: "EXCELLENCE IN EDUCATION",
      title: "CENTRE FOR DISTANCE EDUCATION",
      description: "Acharya Nagarjuna University - Empowering learners across the nation",
    },
    {
      image: workshopImg,
      subtitle: "LEARN & GROW",
      title: "WORKSHOPS & SEMINARS",
      description: "Participate in interactive sessions with industry experts and faculty",
    },
  ];

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

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Hero Carousel */}
      <div className="relative h-[400px] sm:h-[500px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-secondary/40" />
          </div>
        ))}

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-8 h-1 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <p className="text-primary text-sm font-semibold mb-2 tracking-wider">
                {slides[currentSlide].subtitle}
              </p>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
                style={{ fontFamily: "Merriweather, serif" }}
              >
                {slides[currentSlide].title}
              </h1>
              <p className="text-white/90 text-lg mb-8">
                {slides[currentSlide].description}
              </p>
            </div>
          </div>
        </div>

        {/* Orange corner decoration */}
        <div className="absolute top-0 right-0 w-24 h-24 z-10">
          <div className="absolute top-4 right-4 w-12 h-12 border-2 border-primary rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-primary rounded-full" />
          </div>
        </div>
      </div>

      {/* Quick Actions & Stats Bar */}
      <div className="bg-muted py-4 sm:py-6 overflow-x-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            {/* Quick Actions */}
            <div className="flex flex-wrap gap-2 sm:gap-3 w-full lg:w-auto">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-md transition-all text-xs sm:text-sm ${
                    action.primary
                      ? "bg-primary text-white hover:bg-primary/90"
                      : "bg-white text-foreground hover:bg-gray-50 border border-border"
                  }`}
                >
                  <action.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  <div className="text-left">
                    <p className="font-semibold">{action.label}</p>
                    <p className={`text-[10px] sm:text-xs ${action.primary ? "text-white/80" : "text-muted-foreground"} hidden sm:block`}>
                      {action.sublabel}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Stats */}
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap lg:flex-nowrap">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2">
                  <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-foreground">{stat.value}</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">{stat.label}</p>
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
