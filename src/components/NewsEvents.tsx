import { ArrowRight } from "lucide-react";
import campusMain from "@/assets/campus-main.png";
import campusCde from "@/assets/campus-cde.png";
import workshop from "@/assets/workshop.png";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const NewsEvents = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);

  const news = [
    {
      image: campusCde,
      title: "Admissions Open for 2025-26 Academic Session",
      date: "8 Jan 2026",
    },
    {
      image: campusMain,
      title: "Annual Convocation Ceremony to be held in February",
      date: "5 Jan 2026",
    },
    {
      image: workshop,
      title: "Constitution Day celebrated with academic discussions",
      date: "26 Nov 2025",
    },
  ];

  const events = [
    {
      day: "15",
      month: "JAN",
      title: "Online Orientation Program",
      location: "Virtual Platform",
      date: "15 Jan 2026",
    },
    {
      day: "20",
      month: "JAN",
      title: "Faculty Development Workshop",
      location: "Main Campus",
      date: "20 Jan 2026",
    },
    {
      day: "01",
      month: "FEB",
      title: "Semester Examinations Begin",
      location: "All Study Centres",
      date: "01 Feb 2026",
    },
  ];

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* News Section */}
          <div className={`lg:col-span-2 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className="section-title">NEWS</h2>
              <a href="#" className="text-primary hover:underline flex items-center gap-1 text-sm font-medium">
                All News <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {news.map((item, index) => (
                <article 
                  key={index} 
                  className={`group cursor-pointer card-hover ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 100 + 200}ms` }}
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-lg mb-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{item.date}</p>
                </article>
              ))}
            </div>
          </div>

          {/* Events Section */}
          <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className="section-title">EVENTS</h2>
              <a href="#" className="text-primary hover:underline flex items-center gap-1 text-sm font-medium">
                All Events <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {events.map((event, index) => (
                <div
                  key={index}
                  className={`flex gap-3 sm:gap-4 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-primary text-white rounded-lg flex flex-col items-center justify-center">
                    <span className="text-base sm:text-lg font-bold leading-none">{event.day}</span>
                    <span className="text-[10px] sm:text-xs">{event.month}</span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground text-sm hover:text-primary transition-colors truncate">
                      {event.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">{event.location}</p>
                    <p className="text-xs text-muted-foreground">{event.date}</p>
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

export default NewsEvents;
