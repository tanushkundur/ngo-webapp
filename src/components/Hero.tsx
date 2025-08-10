import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-community.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero text-primary-foreground py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Community helping each other" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
          Connecting NGOs with <span className="text-accent-glow">Generous Hearts</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-slide-up">
          Bridge the gap between verified NGOs in need and donors ready to make a difference. 
          Transparent, secure, and impactful giving.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <Button variant="impact" size="xl" className="min-w-48" asChild>
            <Link to="/donor/register">Start Donating</Link>
          </Button>
          <Button variant="outline" size="xl" className="min-w-48 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
            <Link to="/ngo/register">Register NGO</Link>
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="animate-fade-in">
            <div className="text-3xl font-bold text-accent-glow">500+</div>
            <div className="text-primary-foreground/80">Verified NGOs</div>
          </div>
          <div className="animate-fade-in">
            <div className="text-3xl font-bold text-accent-glow">10K+</div>
            <div className="text-primary-foreground/80">Lives Impacted</div>
          </div>
          <div className="animate-fade-in">
            <div className="text-3xl font-bold text-accent-glow">$2M+</div>
            <div className="text-primary-foreground/80">Funds Raised</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;