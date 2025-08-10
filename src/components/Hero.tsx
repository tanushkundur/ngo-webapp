import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen bg-gradient-grey-green overflow-hidden">
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              "Give hope & home"
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-lg">
              Donate essentials to those who need them most.
            </p>
            <Button 
              variant="default" 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
            >
              Donate Now
            </Button>
          </div>
          
          <div className="hidden lg:block">
            <img 
              src="/lovable-uploads/54b6a5f0-59a7-43b0-9516-a04e3b7aeeac.png" 
              alt="Child in need" 
              className="w-full h-[600px] object-cover rounded-lg shadow-impact"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;