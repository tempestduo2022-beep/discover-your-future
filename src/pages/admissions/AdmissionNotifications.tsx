import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Bell, 
  Calendar, 
  Download, 
  ExternalLink,
  AlertCircle,
  Clock,
  FileText,
  Filter
} from "lucide-react";
import { useState } from "react";

const AdmissionNotifications = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const notifications = [
    {
      id: 1,
      title: "Admission Open for UG/PG Programs 2025-26",
      date: "January 15, 2025",
      category: "admission",
      type: "new",
      description: "Applications are now open for all undergraduate and postgraduate programs for the academic year 2025-26.",
      link: "#",
      downloadLink: "#",
    },
    {
      id: 2,
      title: "Last Date Extended for MBA Admissions",
      date: "January 10, 2025",
      category: "extension",
      type: "important",
      description: "The last date for MBA program admissions has been extended to February 28, 2025.",
      link: "#",
    },
    {
      id: 3,
      title: "Entrance Exam Schedule Released",
      date: "January 8, 2025",
      category: "exam",
      type: "new",
      description: "Entrance examination schedule for all PG programs has been released. Check your hall ticket.",
      link: "#",
      downloadLink: "#",
    },
    {
      id: 4,
      title: "Fee Structure Revised for 2025-26",
      date: "January 5, 2025",
      category: "fee",
      type: "info",
      description: "Updated fee structure for all programs is now available. Download the detailed brochure.",
      downloadLink: "#",
    },
    {
      id: 5,
      title: "Scholarship Applications Now Open",
      date: "December 28, 2024",
      category: "scholarship",
      type: "new",
      description: "Merit-based and need-based scholarship applications are now being accepted for 2025-26.",
      link: "#",
    },
    {
      id: 6,
      title: "Diploma Admissions Closing Soon",
      date: "December 20, 2024",
      category: "admission",
      type: "urgent",
      description: "Last few days remaining for diploma program admissions. Apply before December 31, 2024.",
      link: "#",
    },
    {
      id: 7,
      title: "Online Counseling Schedule",
      date: "December 15, 2024",
      category: "counseling",
      type: "info",
      description: "Online counseling sessions for admitted students will begin from January 20, 2025.",
      link: "#",
    },
    {
      id: 8,
      title: "Document Verification Process",
      date: "December 10, 2024",
      category: "admission",
      type: "info",
      description: "Guidelines for document verification at study centres have been released.",
      downloadLink: "#",
    },
  ];

  const filters = [
    { id: "all", label: "All Notifications" },
    { id: "admission", label: "Admissions" },
    { id: "exam", label: "Examinations" },
    { id: "fee", label: "Fee Related" },
    { id: "scholarship", label: "Scholarships" },
  ];

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "new":
        return <Badge className="bg-green-500">New</Badge>;
      case "important":
        return <Badge className="bg-primary">Important</Badge>;
      case "urgent":
        return <Badge variant="destructive">Urgent</Badge>;
      default:
        return <Badge variant="secondary">Info</Badge>;
    }
  };

  const filteredNotifications = activeFilter === "all" 
    ? notifications 
    : notifications.filter(n => n.category === activeFilter);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      <PageHeader
        title="Admission Notifications"
        subtitle="Stay updated with the latest admission announcements and important notices"
        breadcrumbs={[
          { label: "Admissions", href: "/admissions" },
          { label: "Notifications" },
        ]}
      />

      <main className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          {/* Important Alert */}
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mb-8 flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground">Admissions Open for 2025-26</p>
              <p className="text-sm text-muted-foreground">
                Applications are now being accepted for all UG, PG, and Diploma programs. 
                Last date to apply: April 30, 2025
              </p>
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
            <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter.id)}
                className="flex-shrink-0"
              >
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { icon: Bell, label: "Total Notices", value: notifications.length.toString() },
              { icon: Clock, label: "This Month", value: "5" },
              { icon: AlertCircle, label: "Urgent", value: "1" },
              { icon: FileText, label: "Downloads", value: "4" },
            ].map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-4 pb-4">
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-1" />
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Notifications List */}
          <div className="space-y-4">
            {filteredNotifications.map((notification) => (
              <Card key={notification.id} className="card-hover overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    {/* Date Section */}
                    <div className="bg-muted p-4 md:w-40 flex md:flex-col items-center justify-center gap-2 md:gap-1 border-b md:border-b-0 md:border-r border-border">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-foreground">{notification.date}</span>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 p-4">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        {getTypeBadge(notification.type)}
                        <Badge variant="outline" className="text-xs capitalize">
                          {notification.category}
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-foreground mb-2 text-lg">
                        {notification.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {notification.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {notification.link && (
                          <Button size="sm" variant="outline">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            View Details
                          </Button>
                        )}
                        {notification.downloadLink && (
                          <Button size="sm" variant="outline">
                            <Download className="w-3 h-3 mr-1" />
                            Download
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Load More Notifications
            </Button>
          </div>

          {/* Subscribe Section */}
          <Card className="mt-12 bg-secondary text-white overflow-hidden">
            <CardContent className="p-8 text-center">
              <Bell className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "Merriweather, serif" }}>
                Never Miss an Update
              </h3>
              <p className="text-white/80 mb-6 max-w-lg mx-auto">
                Subscribe to our notification alerts and receive important admission updates directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2 rounded-md text-foreground bg-white border-0 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="bg-primary hover:bg-primary/90">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdmissionNotifications;
