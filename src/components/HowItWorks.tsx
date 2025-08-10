import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Heart, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Browse the NGO",
      description: "Browse and find the NGO you support. View all donation campaigns and education needs."
    },
    {
      icon: Heart,
      title: "Choose what to support",
      description: "Explore real-time requests, projects to fund, and filter campaign by type and region by."
    },
    {
      icon: TrendingUp,
      title: "Make a difference",
      description: "Donate from an accessible method. Watch stories shared by impact with progress tracking."
    }
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            How it Works?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={index} className="text-center shadow-card hover:shadow-impact transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;