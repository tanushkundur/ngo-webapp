import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";

const NGORegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    registrationNumber: "",
    email: "",
    causes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create NGO request
    const newRequest = {
      id: Date.now().toString(),
      ...formData,
      status: "pending",
      submittedDate: new Date().toLocaleDateString(),
    };

    // Save to localStorage
    const existingRequests = JSON.parse(localStorage.getItem("ngoRequests") || "[]");
    localStorage.setItem("ngoRequests", JSON.stringify([...existingRequests, newRequest]));

    toast.success("Registration submitted! Waiting for admin approval.");
    navigate("/ngo/login");
  };

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
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="ngo-name">NGO Name</Label>
              <Input 
                id="ngo-name" 
                placeholder="Your NGO Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="registration-number">Registration Number</Label>
              <Input 
                id="registration-number" 
                placeholder="REG123456"
                value={formData.registrationNumber}
                onChange={(e) => setFormData({...formData, registrationNumber: e.target.value})}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Contact Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="contact@ngo.org"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="causes">Primary Causes</Label>
              <Input 
                id="causes" 
                placeholder="Education, Health, Environment..."
                value={formData.causes}
                onChange={(e) => setFormData({...formData, causes: e.target.value})}
                required
              />
            </div>
            
            <Button className="w-full" variant="trust" size="lg" type="submit">
              Submit for Approval
            </Button>
          </form>
            
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