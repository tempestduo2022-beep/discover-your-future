import StudentPortalNavbar from "@/components/StudentPortalNavbar";
import { BookOpen, CreditCard, Calendar, FileText, HelpCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const StudentPortal = () => {
  const quickServices = [
    { label: "Student Self Service", icon: ExternalLink, primary: true },
    { label: "E-Learning Portal", icon: BookOpen },
    { label: "Email", icon: FileText },
    { label: "Library", icon: BookOpen },
  ];

  const announcements = [
    {
      title: "Semester Examinations Schedule Released",
      date: "8 Jan 2026",
      category: "Examinations",
    },
    {
      title: "Fee Payment Deadline Extended",
      date: "5 Jan 2026",
      category: "Fees",
    },
    {
      title: "New Study Materials Available for Download",
      date: "3 Jan 2026",
      category: "Academic",
    },
  ];

  const usefulLinks = [
    { label: "Academic Calendar 2025-26", icon: Calendar },
    { label: "Examination Guidelines", icon: FileText },
    { label: "Fee Structure", icon: CreditCard },
    { label: "FAQs", icon: HelpCircle },
  ];

  const termDates = [
    { term: "Spring Semester 2026", start: "15 Jan 2026", end: "15 May 2026" },
    { term: "Summer Term 2026", start: "1 Jun 2026", end: "31 Jul 2026" },
    { term: "Fall Semester 2026", start: "1 Aug 2026", end: "30 Nov 2026" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <StudentPortalNavbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-secondary/80 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <nav className="text-sm text-white/70 mb-4">
                <a href="/" className="hover:text-white">Home</a>
                <span className="mx-2">›</span>
                <span>Student Portal</span>
              </nav>
              <h1 className="text-4xl font-bold mb-4">Welcome to Student Portal</h1>
              <p className="text-white/80 text-lg max-w-2xl">
                Access all your academic resources, manage your courses, check results, 
                and stay updated with the latest announcements.
              </p>
            </div>

            {/* Systems & Services Box */}
            <div className="bg-white text-foreground rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-bold mb-4 text-secondary">SYSTEMS & SERVICES</h3>
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
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Announcements */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-6">Latest Announcements</h2>
              <div className="space-y-4">
                {announcements.map((item, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
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

              {/* Term Dates */}
              <div className="mt-10">
                <h2 className="text-2xl font-bold text-foreground mb-6">Term Dates</h2>
                <div className="bg-card border border-border rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-muted">
                      <tr>
                        <th className="text-left px-4 py-3 text-sm font-semibold text-foreground">Term</th>
                        <th className="text-left px-4 py-3 text-sm font-semibold text-foreground">Start Date</th>
                        <th className="text-left px-4 py-3 text-sm font-semibold text-foreground">End Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {termDates.map((term, index) => (
                        <tr key={index} className="border-t border-border">
                          <td className="px-4 py-3 text-sm text-foreground">{term.term}</td>
                          <td className="px-4 py-3 text-sm text-muted-foreground">{term.start}</td>
                          <td className="px-4 py-3 text-sm text-muted-foreground">{term.end}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Sidebar - Useful Links */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Useful Links</h2>
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
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>

              {/* Help Box */}
              <div className="mt-8 bg-secondary text-white rounded-lg p-6">
                <h3 className="font-bold mb-2">Need Help?</h3>
                <p className="text-sm text-white/80 mb-4">
                  Contact our student support team for assistance with any queries.
                </p>
                <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-secondary">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentPortal;
