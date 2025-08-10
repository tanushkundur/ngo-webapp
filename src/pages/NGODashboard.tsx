import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Users, CheckCircle, Clock, TrendingUp } from "lucide-react";

const NGODashboard = () => {
  const stats = [
    { label: "Active Requests", value: "3", icon: Clock, color: "text-warning" },
    { label: "Total Donations", value: "₹45,000", icon: TrendingUp, color: "text-success" },
    { label: "Beneficiaries Helped", value: "150", icon: Users, color: "text-primary" },
    { label: "Completed Requests", value: "8", icon: CheckCircle, color: "text-accent" }
  ];

  const recentRequests = [
    {
      id: "1",
      title: "Emergency Food Supplies",
      status: "Active",
      donations: "₹15,000",
      target: "₹25,000",
      urgency: "High"
    },
    {
      id: "2", 
      title: "Educational Materials",
      status: "Completed",
      donations: "₹12,000",
      target: "₹12,000",
      urgency: "Medium"
    },
    {
      id: "3",
      title: "Winter Clothing Drive", 
      status: "Active",
      donations: "₹8,000",
      target: "₹20,000",
      urgency: "High"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background shadow-soft border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
              <h1 className="text-2xl font-bold text-foreground">NGO Connect</h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/ngo/dashboard" className="text-primary font-medium">
                Dashboard
              </a>
              <a href="/ngo/requests" className="text-muted-foreground hover:text-primary transition-colors">
                My Requests
              </a>
              <a href="/ngo/profile" className="text-muted-foreground hover:text-primary transition-colors">
                Profile
              </a>
            </nav>

            <div className="flex items-center space-x-3">
              <Button variant="outline">Profile</Button>
              <a href="/ngo/create-request">
                <Button variant="trust">
                  <Plus className="w-4 h-4 mr-2" />
                  New Request
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, Rural Relief Foundation
          </h1>
          <p className="text-muted-foreground">
            Manage your donation requests and track your impact
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label} className="shadow-soft border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  </div>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Requests */}
          <div className="lg:col-span-2">
            <Card className="shadow-card border-0">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Donation Requests</CardTitle>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentRequests.map((request) => (
                    <div key={request.id} className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{request.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {request.donations} raised of {request.target}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge 
                          variant={request.status === "Active" ? "default" : "secondary"}
                          className={request.status === "Active" ? "bg-accent text-accent-foreground" : ""}
                        >
                          {request.status}
                        </Badge>
                        <Badge 
                          variant={request.urgency === "High" ? "destructive" : "secondary"}
                        >
                          {request.urgency}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div>
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>
                  Common tasks you might want to do
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <a href="/ngo/create-request" className="block">
                  <Button className="w-full justify-start" variant="trust">
                    <Plus className="w-4 h-4 mr-2" />
                    Create New Request
                  </Button>
                </a>
                <Button className="w-full justify-start" variant="outline">
                  <Users className="w-4 h-4 mr-2" />
                  View Donors
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Impact Report
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Update Request Status
                </Button>
              </CardContent>
            </Card>

            {/* Verification Status */}
            <Card className="shadow-card border-0 mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  Verification Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">NGO Registration</span>
                    <Badge variant="secondary" className="bg-success text-success-foreground">
                      Verified
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Tax Exemption</span>
                    <Badge variant="secondary" className="bg-success text-success-foreground">
                      Verified
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Bank Details</span>
                    <Badge variant="secondary" className="bg-success text-success-foreground">
                      Verified
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NGODashboard;