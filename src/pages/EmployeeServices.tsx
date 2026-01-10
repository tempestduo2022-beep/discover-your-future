import EmployeeNavbar from "@/components/EmployeeNavbar";
import { 
  Briefcase, 
  FileText, 
  CreditCard, 
  Calendar, 
  Users, 
  GraduationCap, 
  Building2, 
  ClipboardList,
  ExternalLink,
  Mail,
  Phone,
  HeartPulse
} from "lucide-react";
import { Button } from "@/components/ui/button";

const EmployeeServices = () => {
  const quickServices = [
    { label: "Employee Self Service", icon: ExternalLink, primary: true },
    { label: "Pay Slip Portal", icon: CreditCard },
    { label: "Leave Application", icon: Calendar },
    { label: "Email Access", icon: Mail },
  ];

  const announcements = [
    {
      title: "Annual Training Program Schedule 2026",
      date: "9 Jan 2026",
      category: "Training",
    },
    {
      title: "Revised Leave Policy - Effective February 2026",
      date: "7 Jan 2026",
      category: "HR Policy",
    },
    {
      title: "Staff Meeting Notice - All Departments",
      date: "5 Jan 2026",
      category: "Notice",
    },
  ];

  const serviceCategories = [
    {
      title: "HR & Payroll",
      icon: CreditCard,
      items: ["Salary Details", "Pay Slip Download", "Provident Fund", "Income Tax Declaration"],
    },
    {
      title: "Leave Management",
      icon: Calendar,
      items: ["Apply for Leave", "Leave Balance", "Leave History", "Holiday Calendar"],
    },
    {
      title: "Faculty Resources",
      icon: GraduationCap,
      items: ["Lesson Writing", "Study Material Upload", "Assignment Evaluation", "Academic Calendar"],
    },
    {
      title: "Training & Development",
      icon: Users,
      items: ["Training Programs", "Workshops", "Skill Development", "Certifications"],
    },
    {
      title: "Administration",
      icon: Building2,
      items: ["Office Orders", "Circulars", "Forms & Applications", "Policy Documents"],
    },
    {
      title: "Employee Welfare",
      icon: HeartPulse,
      items: ["Health Services", "Employee Benefits", "Grievance Redressal", "Retirement Benefits"],
    },
  ];

  const usefulLinks = [
    { label: "Employee Handbook", icon: FileText },
    { label: "IT Support Ticket", icon: ClipboardList },
    { label: "Directory", icon: Users },
    { label: "Travel Allowance", icon: Briefcase },
  ];

  return (
    <div className="min-h-screen bg-background">
      <EmployeeNavbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-secondary/80 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="lg:col-span-2">
              <nav className="text-sm text-white/70 mb-4">
                <a href="/" className="hover:text-white">Home</a>
                <span className="mx-2">›</span>
                <span>Employee Services</span>
              </nav>
              <h1 className="text-2xl sm:text-4xl font-bold mb-4">Employee Services Portal</h1>
              <p className="text-white/80 text-base sm:text-lg max-w-2xl">
                Access HR services, manage leaves, download pay slips, and stay updated 
                with the latest circulars and training opportunities.
              </p>
            </div>

            {/* Systems & Services Box */}
            <div className="bg-white text-foreground rounded-lg p-4 sm:p-6 shadow-lg">
              <h3 className="text-lg font-bold mb-4 text-secondary">QUICK ACCESS</h3>
              <div className="space-y-3">
                {quickServices.map((service, index) => (
                  <Button
                    key={index}
                    variant={service.primary ? "default" : "outline"}
                    className={`w-full justify-start gap-2 ${service.primary ? "bg-primary hover:bg-primary/90" : ""}`}
                  >
                    <service.icon className="w-4 h-4" />
                    {service.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2">
              {/* Announcements */}
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">Latest Announcements</h2>
              <div className="space-y-4 mb-10">
                {announcements.map((item, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded mb-2">
                          {item.category}
                        </span>
                        <h3 className="font-semibold text-foreground hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <span className="text-sm text-muted-foreground">{item.date}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Service Categories Grid */}
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">Services</h2>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {serviceCategories.map((category, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-4 sm:p-6 hover:shadow-md hover:border-primary/50 transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                        <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-white" />
                      </div>
                      <h3 className="font-bold text-foreground text-sm sm:text-base">{category.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li key={idx}>
                          <a
                            href="#"
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">Useful Links</h2>
              <div className="space-y-3">
                {usefulLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <link.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>

              {/* Contact Box */}
              <div className="mt-8 bg-secondary text-white rounded-lg p-4 sm:p-6">
                <h3 className="font-bold mb-2">HR Department</h3>
                <p className="text-sm text-white/80 mb-4">
                  Contact HR for queries related to payroll, leave, or employee benefits.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <Phone className="w-4 h-4" />
                    <span>+91-XXX-XXXXXXX</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <Mail className="w-4 h-4" />
                    <span>hr@anucde.info</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-secondary">
                  Contact HR
                </Button>
              </div>

              {/* Director's Message */}
              <div className="mt-6 bg-muted rounded-lg p-4 sm:p-6">
                <h3 className="font-bold text-foreground mb-2">Director's Message</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  "Our staff are the backbone of ANUCDE. We are committed to providing 
                  the best resources and support for your professional growth."
                </p>
                <p className="text-sm font-medium text-primary">- Dr. Nagaraju Battu</p>
                <p className="text-xs text-muted-foreground">Director, CDE</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmployeeServices;
