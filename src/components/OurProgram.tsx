import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const OurProgram = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded-full"></div>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-center text-foreground mb-8">
          Our Program
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 shadow-card">
            <CardContent className="text-center space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hope Basket is more than a donation platform; it's a movement 
                of kindness. We connect the generosity with communities that need it most. 
                From providing meals to families facing hardship, to supporting education 
                initiatives, heat, comfort, and school essentials. With a few simple steps, 
                every donation you make helps transform someone's today into hope for 
                tomorrow. Together we can spread kindness, one basket at a time and 
                create lasting change in the lives of those who need it most.
              </p>
              
              <Button 
                variant="default" 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white"
              >
                Join Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OurProgram;