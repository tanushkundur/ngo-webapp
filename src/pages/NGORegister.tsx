import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const NGORegister = () => {
  return (
    <div className="min-h-screen bg-secondary py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-card">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-lg mx-auto mb-4"></div>
            <CardTitle className="text-2xl">Register Your NGO</CardTitle>
            <CardDescription>
              Join our platform to connect with generous donors
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="ngo-name">NGO Name</Label>
                <Input id="ngo-name" placeholder="Your NGO Name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="registration-number">Registration Number</Label>
                <Input id="registration-number" placeholder="REG123456" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Organization Description</Label>
              <Textarea 
                id="description" 
                placeholder="Tell us about your NGO's mission and work..."
                className="min-h-24"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Contact Email</Label>
                <Input id="email" type="email" placeholder="contact@ngo.org" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+91 98765 43210" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Textarea 
                id="address" 
                placeholder="Complete address with city and state"
                className="min-h-20"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="website">Website (Optional)</Label>
                <Input id="website" type="url" placeholder="https://yourngo.org" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="causes">Primary Causes</Label>
                <Input id="causes" placeholder="Education, Health, Environment..." />
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
            
            <Button className="w-full" variant="trust" size="lg">
              Register NGO
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
              <Link to="/ngo/login">Sign In to NGO Account</Link>
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

export default NGORegister;