import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";

const NGOLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if NGO is approved
    const ngoRequests = JSON.parse(localStorage.getItem("ngoRequests") || "[]");
    const ngo = ngoRequests.find((req: any) => req.email === email && req.status === "approved");
    
    if (email === "ngo@example.com" && password === "ngo123") {
      if (ngo || email === "ngo@example.com") {
        localStorage.setItem("ngoAuth", "true");
        toast.success("Welcome back!");
        navigate("/ngo/dashboard");
      } else {
        toast.error("Your NGO registration is still pending admin approval");
      }
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center px-4">
      <Card className="w-full max-w-md shadow-card">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-gradient-primary rounded-lg mx-auto mb-4"></div>
          <CardTitle className="text-2xl">NGO Login</CardTitle>
          <CardDescription>
            Sign in to your NGO account to manage donation requests
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-3 mb-4">
              <p className="text-sm font-medium text-blue-900 dark:text-blue-100">Demo Credentials:</p>
              <p className="text-xs text-blue-700 dark:text-blue-300">Email: ngo@example.com</p>
              <p className="text-xs text-blue-700 dark:text-blue-300">Password: ngo123</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="ngo@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button className="w-full" variant="trust" type="submit">
              Sign In
            </Button>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Don't have an account?
              </span>
            </div>
          </div>
          <Button variant="outline" className="w-full" asChild>
            <Link to="/ngo/register">Register Your NGO</Link>
          </Button>
          <div className="text-center">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Home
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NGOLogin;