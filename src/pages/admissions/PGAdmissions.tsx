import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Clock, 
  IndianRupee, 
  FileText, 
  CheckCircle2,
  Calendar,
  Users,
  ArrowRight,
  BookOpen
} from "lucide-react";

const PGAdmissions = () => {
  const programs = [
    {
      name: "Master of Arts (M.A.)",
      duration: "2 Years",
      fee: "₹15,000/Year",
      specializations: ["English", "History", "Political Science", "Economics", "Public Administration", "Telugu", "Hindi"],
      seats: 300,
    },
    {
      name: "Master of Commerce (M.Com)",
      duration: "2 Years",
      fee: "₹18,000/Year",
      specializations: ["Finance", "Accounting", "Business Analytics"],
      seats: 250,
    },
    {
      name: "Master of Science (M.Sc)",
      duration: "2 Years",
      fee: "₹20,000/Year",
      specializations: ["Mathematics", "Computer Science", "Chemistry", "Physics"],
      seats: 200,
    },
    {
      name: "Master of Business Administration (MBA)",
      duration: "2 Years",
      fee: "₹35,000/Year",
      specializations: ["Human Resource Management", "Finance", "Marketing", "Operations"],
      seats: 400,
    },
    {
      name: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      fee: "₹28,000/Year",
      specializations: ["Software Engineering", "Data Science", "Cybersecurity"],
      seats: 150,
    },
    {
      name: "Master of Social Work (MSW)",
      duration: "2 Years",
      fee: "₹16,000/Year",
      specializations: ["Community Development", "Medical & Psychiatric Social Work"],
      seats: 100,
    },
  ];

  const eligibility = [
    "Bachelor's degree in relevant discipline from a recognized university",
    "Minimum 50% aggregate marks (45% for reserved categories)",
    "Valid entrance examination score (where applicable)",
    "Work experience preferred for MBA/MSW programs",
  ];

  const documents = [
    "Graduation marks statement and degree certificate",
    "10th and 12th mark sheets",
    "Transfer certificate and migration certificate",
    "Passport size photographs (4 copies)",
    "Caste certificate (if applicable)",
    "Entrance exam admit card and scorecard",
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      <PageHeader
        title="Postgraduate Admissions"
        subtitle="Advance your expertise with specialized postgraduate programs from ANUCDE"
        breadcrumbs={[
          { label: "Admissions", href: "/admissions" },
          { label: "PG Programs" },
        ]}
      />

      <main className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          {/* Key Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { icon: BookOpen, label: "20+ Programs", sublabel: "Specialized courses" },
              { icon: Clock, label: "2 Years", sublabel: "Duration" },
              { icon: Users, label: "25K+ Alumni", sublabel: "Network" },
              { icon: Calendar, label: "2025-26", sublabel: "Session Open" },
            ].map((item, index) => (
              <Card key={index} className="text-center card-hover border-none shadow-md">
                <CardContent className="pt-6">
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-bold text-foreground">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.sublabel}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Programs Grid */}
          <section className="mb-16">
            <h2 className="section-title mb-8">Available Programs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((program, index) => (
                <Card key={index} className="card-hover overflow-hidden group">
                  <CardHeader className="bg-primary/5 border-b border-border">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      {program.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="flex items-center gap-4 mb-4 text-sm">
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="w-4 h-4" /> {program.duration}
                      </span>
                      <span className="flex items-center gap-1 text-primary font-semibold">
                        <IndianRupee className="w-4 h-4" /> {program.fee}
                      </span>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm font-medium mb-2">Specializations:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {program.specializations.slice(0, 4).map((spec, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {spec}
                          </Badge>
                        ))}
                        {program.specializations.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{program.specializations.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-sm text-muted-foreground">
                        <Users className="w-4 h-4 inline mr-1" />
                        {program.seats} seats
                      </span>
                      <Button size="sm" className="group-hover:bg-primary group-hover:text-white">
                        Apply <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Eligibility & Documents */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Eligibility */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Eligibility Criteria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {eligibility.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Required Documents */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Required Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {documents.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Important Dates */}
          <section className="mb-16">
            <h2 className="section-title mb-8">Important Dates</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Application Opens", date: "January 15, 2025" },
                { label: "Last Date to Apply", date: "April 30, 2025" },
                { label: "Entrance Exam", date: "May 15, 2025" },
                { label: "Classes Begin", date: "July 1, 2025" },
              ].map((item, index) => (
                <Card key={index} className="text-center card-hover">
                  <CardContent className="pt-6">
                    <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
                    <p className="font-bold text-foreground mb-1">{item.date}</p>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "Merriweather, serif" }}>
              Elevate Your Career Today
            </h3>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              Join thousands of successful professionals who have advanced their careers with ANUCDE postgraduate programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Apply Now <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PGAdmissions;
