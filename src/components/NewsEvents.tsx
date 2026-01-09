import { ArrowRight } from "lucide-react";
import campusMain from "@/assets/campus-main.png";
import campusCde from "@/assets/campus-cde.png";
import workshop from "@/assets/workshop.png";

const NewsEvents = () => {
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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* News Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="section-title">NEWS</h2>
              <a href="#" className="text-primary hover:underline flex items-center gap-1 text-sm font-medium">
                All News <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {news.map((item, index) => (
                <article key={index} className="group cursor-pointer card-hover">
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
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="section-title">EVENTS</h2>
              <a href="#" className="text-primary hover:underline flex items-center gap-1 text-sm font-medium">
                All Events <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="space-y-4">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-primary text-white rounded-lg flex flex-col items-center justify-center">
                    <span className="text-lg font-bold leading-none">{event.day}</span>
                    <span className="text-xs">{event.month}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm hover:text-primary transition-colors">
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
