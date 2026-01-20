import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Clock, 
  IndianRupee, 
  FileText, 
  CheckCircle2,
  Users,
  ArrowRight,
  Briefcase,
  Star
} from "lucide-react";

const DiplomaAdmissions = () => {
  const diplomaPrograms = [
    {
      name: "Diploma in Computer Applications (DCA)",
      duration: "1 Year",
      fee: "₹8,000",
      description: "Foundation course in computer fundamentals, MS Office, and programming basics",
      career: ["Data Entry Operator", "Computer Operator", "Office Assistant"],
    },
    {
      name: "Diploma in Business Management",
      duration: "1 Year",
      fee: "₹10,000",
      description: "Essential business management principles and practices",
      career: ["Office Coordinator", "Junior Manager", "Business Executive"],
    },
    {
      name: "Diploma in Human Resource Management",
      duration: "1 Year",
      fee: "₹10,000",
      description: "HR fundamentals, recruitment, and employee management",
      career: ["HR Assistant", "Recruitment Coordinator", "Training Associate"],
    },
    {
      name: "Diploma in Accounting",
      duration: "1 Year",
      fee: "₹9,000",
      description: "Accounting principles, taxation, and financial management",
      career: ["Accounts Assistant", "Junior Accountant", "Billing Executive"],
    },
  ];

  const pgDiplomaPrograms = [
    {
      name: "PG Diploma in Computer Applications (PGDCA)",
      duration: "1 Year",
      fee: "₹15,000",
      description: "Advanced computing, programming languages, and software development",
      career: ["Software Developer", "System Administrator", "IT Support Specialist"],
    },
    {
      name: "PG Diploma in Business Administration",
      duration: "1 Year",
      fee: "₹18,000",
      description: "Strategic management, marketing, and organizational behavior",
      career: ["Business Analyst", "Project Coordinator", "Operations Manager"],
    },
    {
      name: "PG Diploma in Financial Management",
      duration: "1 Year",
      fee: "₹16,000",
      description: "Corporate finance, investment analysis, and financial planning",
      career: ["Financial Analyst", "Investment Associate", "Risk Manager"],
    },
    {
      name: "PG Diploma in Marketing Management",
      duration: "1 Year",
      fee: "₹16,000",
      description: "Marketing strategies, digital marketing, and brand management",
      career: ["Marketing Executive", "Brand Manager", "Digital Marketer"],
    },
  ];

  const advantages = [
    { icon: Clock, title: "Short Duration", desc: "Complete in just 1 year" },
    { icon: Briefcase, title: "Job Ready", desc: "Industry-oriented curriculum" },
    { icon: IndianRupee, title: "Affordable", desc: "Cost-effective education" },
    { icon: Star, title: "Recognized", desc: "UGC-DEB approved programs" },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      <PageHeader
        title="Diploma & PG Diploma Programs"
        subtitle="Skill-focused programs designed for quick career advancement"
        breadcrumbs={[
          { label: "Admissions", href: "/admissions" },
          { label: "Diploma Programs" },
        ]}
      />

      <main className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          {/* Advantages */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {advantages.map((item, index) => (
              <Card key={index} className="text-center card-hover border-none shadow-md">
                <CardContent className="pt-6">
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-bold text-foreground">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Diploma Programs */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-8 h-8 text-primary" />
              <h2 className="section-title">Diploma Programs</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {diplomaPrograms.map((program, index) => (
                <Card key={index} className="card-hover overflow-hidden group">
                  <CardHeader className="bg-muted border-b border-border pb-4">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{program.name}</CardTitle>
                      <Badge variant="secondary">{program.duration}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-muted-foreground mb-4">{program.description}</p>
                    <div className="mb-4">
                      <p className="text-sm font-medium mb-2">Career Opportunities:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {program.career.map((item, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-primary font-bold">
                        <IndianRupee className="w-4 h-4 inline" />
                        {program.fee}
                      </span>
                      <Button size="sm">
                        Apply Now <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* PG Diploma Programs */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-8 h-8 text-primary" />
              <h2 className="section-title">PG Diploma Programs</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {pgDiplomaPrograms.map((program, index) => (
                <Card key={index} className="card-hover overflow-hidden group border-primary/20">
                  <CardHeader className="bg-primary/5 border-b border-border pb-4">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{program.name}</CardTitle>
                      <Badge className="bg-primary">{program.duration}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-muted-foreground mb-4">{program.description}</p>
                    <div className="mb-4">
                      <p className="text-sm font-medium mb-2">Career Opportunities:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {program.career.map((item, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs border-primary/30">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-primary font-bold">
                        <IndianRupee className="w-4 h-4 inline" />
                        {program.fee}
                      </span>
                      <Button size="sm">
                        Apply Now <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Eligibility */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    Diploma Eligibility
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "10+2 or equivalent from recognized board",
                      "Minimum 45% aggregate marks",
                      "No age limit for distance education",
                      "Valid ID proof required",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    PG Diploma Eligibility
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Bachelor's degree from recognized university",
                      "Minimum 50% aggregate marks",
                      "Relevant work experience (preferred)",
                      "Valid graduation certificate",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-secondary rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "Merriweather, serif" }}>
              Skill Up in Just 1 Year!
            </h3>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              Our diploma programs are designed to give you practical skills that employers value. Start your application today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Users className="w-4 h-4 mr-2" />
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary">
                Compare Programs
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DiplomaAdmissions;
