import campusMain from "@/assets/campus-main.png";
import campusCde from "@/assets/campus-cde.png";
import workshop from "@/assets/workshop.png";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const DiscoverSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);

  const discoverItems = [
    {
      image: campusCde,
      title: "Admissions",
      description: "Apply now for UG, PG, and diploma programs through distance education",
      link: "#",
    },
    {
      image: campusMain,
      title: "Academic Excellence",
      description: "NAAC A+ Grade with 3.80 GPA - Recognized for quality education",
      link: "#",
    },
    {
      image: workshop,
      title: "Workshops & Seminars",
      description: "Faculty development and academic workshops for skill enhancement",
      link: "#",
    },
    {
      image: campusCde,
      title: "Study Centres",
      description: "80+ Study Centres across Andhra Pradesh for your convenience",
      link: "#",
    },
    {
      image: campusMain,
      title: "Student Support",
      description: "Comprehensive support services for distance learners",
      link: "#",
    },
  ];

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className={`section-title mb-6 sm:mb-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>DISCOVER</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {discoverItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className={`group block ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100 + 100}ms` }}
            >
              <div className="aspect-square overflow-hidden rounded-lg mb-2 sm:mb-3 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-primary font-semibold text-xs sm:text-sm mb-1 group-hover:underline">
                {item.title}
              </h3>
              <p className="text-[10px] sm:text-xs text-muted-foreground line-clamp-2">
                {item.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
