import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  BookOpen, 
  Award,
  ArrowRight,
  Users,
  Clock,
  Calendar
} from "lucide-react";

const Academics = () => {
  const programCategories = [
    {
      title: "Undergraduate Programs",
      icon: GraduationCap,
      description: "3-year bachelor's degree programs in Arts, Science, Commerce, and Management",
      programs: ["B.A.", "B.Com", "B.Sc", "BBA", "BCA"],
      link: "/admissions/ug",
      color: "bg-blue-500",
    },
    {
      title: "Postgraduate Programs",
      icon: BookOpen,
      description: "2-year master's degree programs for specialized knowledge and expertise",
      programs: ["M.A.", "M.Com", "M.Sc", "MBA", "MCA", "MSW"],
      link: "/admissions/pg",
      color: "bg-purple-500",
    },
    {
      title: "Diploma Programs",
      icon: Award,
      description: "1-year skill-focused diploma programs for quick career advancement",
      programs: ["DCA", "DBM", "DHRM", "Diploma in Accounting"],
      link: "/admissions/diploma",
      color: "bg-green-500",
    },
    {
      title: "PG Diploma Programs",
      icon: Award,
      description: "Advanced 1-year programs for graduates seeking specialized skills",
      programs: ["PGDCA", "PGDBA", "PGDFM", "PGDMM"],
      link: "/admissions/diploma",
      color: "bg-primary",
    },
  ];

  const highlights = [
    { icon: Users, value: "88+", label: "Programs Offered" },
    { icon: GraduationCap, value: "50K+", label: "Students Enrolled" },
    { icon: Clock, value: "45+", label: "Years of Excellence" },
    { icon: Calendar, value: "2", label: "Semesters/Year" },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      <PageHeader
        title="Academics"
        subtitle="Explore our comprehensive range of distance education programs"
        breadcrumbs={[{ label: "Academics" }]}
      />

      <main className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          {/* Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {highlights.map((item, index) => (
              <Card key={index} className="text-center card-hover border-none shadow-md">
                <CardContent className="pt-6">
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">{item.value}</p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Program Categories */}
          <section className="mb-16">
            <h2 className="section-title mb-8">Our Programs</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {programCategories.map((category, index) => (
                <Card key={index} className="card-hover overflow-hidden group">
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}>
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-1">{category.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{category.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {category.programs.map((program, idx) => (
                        <Badge key={idx} variant="secondary">
                          {program}
                        </Badge>
                      ))}
                    </div>
                    <Link to={category.link}>
                      <Button className="w-full group-hover:bg-primary group-hover:text-white">
                        View Programs <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Academic Resources */}
          <section className="mb-16">
            <h2 className="section-title mb-8">Academic Resources</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Syllabus", desc: "Download course syllabus", link: "#" },
                { title: "Study Material", desc: "Access learning resources", link: "#" },
                { title: "Academic Calendar", desc: "Important dates & schedules", link: "#" },
                { title: "Previous Papers", desc: "Exam preparation material", link: "#" },
              ].map((resource, index) => (
                <Card key={index} className="card-hover text-center">
                  <CardContent className="pt-6">
                    <BookOpen className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-1">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{resource.desc}</p>
                    <Button variant="outline" size="sm">
                      Access
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-secondary rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "Merriweather, serif" }}>
              Ready to Begin Your Academic Journey?
            </h3>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              Explore our programs and find the perfect fit for your educational goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions/notifications">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  View Notifications <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary">
                Download Prospectus
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Academics;
