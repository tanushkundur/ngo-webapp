import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Link, useNavigate } from "react-router-dom";

const DonorRegister = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    // TODO: Add actual registration logic here
    // For now, just redirect to browse page
    navigate('/browse');
  };

  return (
    <div className="min-h-screen bg-secondary py-8 px-4">
      <div className="max-w-md mx-auto">
        <Card className="shadow-card">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-impact rounded-lg mx-auto mb-4"></div>
            <CardTitle className="text-2xl">Create Donor Account</CardTitle>
            <CardDescription>
              Join our community of generous donors
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" placeholder="Doe" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="+91 98765 43210" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" placeholder="City, State" />
            </div>
            
            <div className="space-y-2">
              <Label>Areas of Interest</Label>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="education" />
                  <Label htmlFor="education" className="text-sm">Education</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="healthcare" />
                  <Label htmlFor="healthcare" className="text-sm">Healthcare</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="environment" />
                  <Label htmlFor="environment" className="text-sm">Environment</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="poverty" />
                  <Label htmlFor="poverty" className="text-sm">Poverty</Label>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" type="password" />
            </div>
            
            <Button className="w-full" variant="impact" size="lg" onClick={handleCreateAccount}>
              Create Account
            </Button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Already have an account?
                </span>
              </div>
            </div>
            
            <Button variant="outline" className="w-full" asChild>
              <Link to="/donor/login">Sign In to Donor Account</Link>
            </Button>
            
            <div className="text-center">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
                ← Back to Home
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DonorRegister;