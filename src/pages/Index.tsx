import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NewsEvents from "@/components/NewsEvents";
import DiscoverSection from "@/components/DiscoverSection";
import WelcomeSection from "@/components/WelcomeSection";
import StudyingSection from "@/components/StudyingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <NewsEvents />
      <DiscoverSection />
      <WelcomeSection />
      <StudyingSection />
      <Footer />
    </div>
  );
};

export default Index;
