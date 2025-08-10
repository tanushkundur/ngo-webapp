import Header from "@/components/Header";
import Hero from "@/components/Hero";
import UserTypeSelector from "@/components/UserTypeSelector";
import FeaturedRequests from "@/components/FeaturedRequests";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <UserTypeSelector />
      <FeaturedRequests />
      <Footer />
    </div>
  );
};

export default Index;