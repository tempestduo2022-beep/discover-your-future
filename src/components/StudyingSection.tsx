import { ArrowRight } from "lucide-react";
import campusMain from "@/assets/campus-main.png";
import campusCde from "@/assets/campus-cde.png";

const StudyingSection = () => {
  const programs = [
    {
      image: campusCde,
      title: "Undergraduate Admissions",
      description: "Explore our range of UG programs including BA, BSc, BBA, and B.Com through distance education.",
      link: "#",
    },
    {
      image: campusMain,
      title: "Postgraduate Admissions",
      description: "Advance your career with our PG programs including MA, MSc, MBA, and MCA.",
      link: "#",
    },
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-8">Studying at ANUCDE</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden h-80 group cursor-pointer"
            >
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Merriweather, serif' }}>
                  {program.title}
                </h3>
                <p className="text-white/80 text-sm mb-4">{program.description}</p>
                <a
                  href={program.link}
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyingSection;
