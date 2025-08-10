import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TotalImpact = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Total Impact so far
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="text-center shadow-card">
            <CardContent className="pt-6">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-impact rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-white">500</span>
              </div>
              <p className="text-sm text-muted-foreground">Items Donated</p>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-card">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-foreground mb-2">200</div>
              <p className="text-sm text-muted-foreground mb-4">NGOs Partnered</p>
              <div className="flex items-center justify-center space-x-1">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <div className="w-2 h-2 bg-warning rounded-full"></div>
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-card">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-foreground mb-2">10,000</div>
              <p className="text-sm text-muted-foreground mb-4">Total Donated</p>
              <div className="text-xs text-accent">↗ 15% increase</div>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-card">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-foreground mb-2">120</div>
              <p className="text-sm text-muted-foreground mb-4">Happy Communities</p>
              <div className="text-xs text-accent">↗ 8% growth</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TotalImpact;