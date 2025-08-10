import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OurProgram from "@/components/OurProgram";
import HowItWorks from "@/components/HowItWorks";
import UserTypeSelector from "@/components/UserTypeSelector";
import TotalImpact from "@/components/TotalImpact";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <OurProgram />
      <HowItWorks />
      <UserTypeSelector />
      <TotalImpact />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Index;