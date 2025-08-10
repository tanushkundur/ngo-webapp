import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ngoIcon from "@/assets/ngo-icon.jpg";
import donorIcon from "@/assets/donor-icon.jpg";

const UserTypeSelector = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Choose Your Path to Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're an NGO seeking support or a donor ready to help, 
            we've created the perfect platform for meaningful connections.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="shadow-card hover:shadow-impact transition-all duration-300 hover:scale-105 border-0">
            <CardHeader className="text-center pb-4">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img src={ngoIcon} alt="NGO" className="w-full h-full object-cover" />
              </div>
              <CardTitle className="text-2xl text-foreground">I'm an NGO</CardTitle>
              <CardDescription className="text-lg">
                Share your mission and connect with donors who care about your cause
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Post donation requests
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Get verified status
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Track donation impact
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Connect with donors
                </li>
              </ul>
              <Button className="w-full" variant="trust" size="lg" asChild>
                <Link to="/ngo/register">Register as NGO</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="shadow-card hover:shadow-impact transition-all duration-300 hover:scale-105 border-0">
            <CardHeader className="text-center pb-4">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img src={donorIcon} alt="Donor" className="w-full h-full object-cover" />
              </div>
              <CardTitle className="text-2xl text-foreground">I'm a Donor</CardTitle>
              <CardDescription className="text-lg">
                Find verified NGOs and causes that align with your values
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Browse verified requests
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Filter by cause & location
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Track your impact
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Direct communication
                </li>
              </ul>
              <Button className="w-full" variant="impact" size="lg" asChild>
                <Link to="/donor/register">Start Donating</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UserTypeSelector;