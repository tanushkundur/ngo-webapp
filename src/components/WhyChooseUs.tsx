import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Eye, Zap, BarChart3 } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Verified NGOs",
      description: "Every organization on our platform undergoes rigorous verification to ensure your donations reach legitimate causes.",
      badge: "Verified",
      badgeColor: "bg-accent"
    },
    {
      icon: Eye,
      title: "Transparent Giving",
      description: "Track exactly where your donations go with detailed reports and regular updates from recipient organizations.",
      badge: "Transparent",
      badgeColor: "bg-warning"
    },
    {
      icon: Zap,
      title: "Flexible Ways to Give",
      description: "Whether you want to make a quick one-time donation or set up a regular giving schedule, we make it easy.",
      badge: "Flexible",
      badgeColor: "bg-primary"
    },
    {
      icon: BarChart3,
      title: "Real Impact Reports",
      description: "Get detailed reports on how your contributions are making a real difference in communities worldwide.",
      badge: "Impact Reports",
      badgeColor: "bg-accent"
    }
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Why Choose us?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="shadow-card hover:shadow-impact transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <Badge className={`${feature.badgeColor} text-white`}>
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {feature.description}
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

export default WhyChooseUs;