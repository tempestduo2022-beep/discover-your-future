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
  ArrowRight
} from "lucide-react";

const UGAdmissions = () => {
  const programs = [
    {
      name: "Bachelor of Arts (B.A.)",
      duration: "3 Years",
      fee: "₹12,000/Year",
      specializations: ["English", "History", "Political Science", "Economics", "Public Administration"],
      seats: 500,
    },
    {
      name: "Bachelor of Commerce (B.Com)",
      duration: "3 Years",
      fee: "₹14,000/Year",
      specializations: ["General Commerce", "Computer Applications", "Corporate Secretaryship"],
      seats: 400,
    },
    {
      name: "Bachelor of Science (B.Sc)",
      duration: "3 Years",
      fee: "₹15,000/Year",
      specializations: ["Mathematics", "Computer Science", "Electronics"],
      seats: 300,
    },
    {
      name: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      fee: "₹18,000/Year",
      specializations: ["General Management", "Finance", "Marketing"],
      seats: 250,
    },
    {
      name: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      fee: "₹20,000/Year",
      specializations: ["Software Development", "Web Technologies"],
      seats: 200,
    },
  ];

  const eligibility = [
    "10+2 or equivalent examination from a recognized board",
    "Minimum 45% aggregate marks (40% for reserved categories)",
    "Age: No upper age limit for distance education",
    "Valid identity proof (Aadhar/Voter ID/Passport)",
  ];

  const applicationProcess = [
    { step: 1, title: "Online Registration", desc: "Create account on the admission portal" },
    { step: 2, title: "Fill Application", desc: "Complete the application form with details" },
    { step: 3, title: "Upload Documents", desc: "Upload required certificates and photos" },
    { step: 4, title: "Pay Fees", desc: "Complete payment through secure gateway" },
    { step: 5, title: "Confirmation", desc: "Download admission confirmation letter" },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      <PageHeader
        title="Undergraduate Admissions"
        subtitle="Launch your career with quality undergraduate education from ANUCDE"
        breadcrumbs={[
          { label: "Admissions", href: "/admissions" },
          { label: "UG Programs" },
        ]}
      />

      <main className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          {/* Key Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { icon: GraduationCap, label: "15+ Programs", sublabel: "Wide variety" },
              { icon: Clock, label: "3 Years", sublabel: "Duration" },
              { icon: Users, label: "50K+ Students", sublabel: "Enrolled" },
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
                  <CardHeader className="bg-secondary/5 border-b border-border">
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
                        {program.specializations.map((spec, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {spec}
                          </Badge>
                        ))}
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

          {/* Eligibility & Process */}
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

            {/* Application Process */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Application Process
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {applicationProcess.map((item) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="bg-secondary rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "Merriweather, serif" }}>
              Ready to Start Your Journey?
            </h3>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              Applications for 2025-26 academic session are now open. Apply today and take the first step towards your future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Apply Now <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
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

export default UGAdmissions;
