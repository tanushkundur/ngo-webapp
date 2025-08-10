import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, Calendar, TrendingUp } from "lucide-react";

const DonorDashboard = () => {
  const stats = [
    { label: "Total Donated", value: "₹25,000", icon: Heart, color: "text-accent" },
    { label: "NGOs Supported", value: "5", icon: MapPin, color: "text-primary" },
    { label: "Lives Impacted", value: "200+", icon: TrendingUp, color: "text-success" },
    { label: "Donations This Month", value: "3", icon: Calendar, color: "text-warning" }
  ];

  const recentDonations = [
    {
      id: "1",
      ngo: "Rural Relief Foundation",
      cause: "Emergency Food Supplies",
      amount: "₹5,000",
      date: "Dec 15, 2024",
      status: "Delivered"
    },
    {
      id: "2",
      ngo: "Learning Light Foundation", 
      cause: "Educational Materials",
      amount: "₹3,000",
      date: "Dec 10, 2024",
      status: "In Progress"
    },
    {
      id: "3",
      ngo: "Warm Hearts Initiative",
      cause: "Winter Clothing Drive",
      amount: "₹7,000", 
      date: "Dec 5, 2024",
      status: "Delivered"
    }
  ];

  const suggestedCauses = [
    {
      id: "1",
      title: "Clean Water Initiative",
      ngo: "Pure Water Foundation",
      urgency: "High",
      location: "Rajasthan"
    },
    {
      id: "2", 
      title: "Medical Equipment Needed",
      ngo: "Health for All Organization",
      urgency: "Medium",
      location: "Bangalore"
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
              <a href="/donor/dashboard" className="text-primary font-medium">
                Dashboard
              </a>
              <a href="/browse" className="text-muted-foreground hover:text-primary transition-colors">
                Browse Requests
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                My Impact
              </a>
            </nav>

            <div className="flex items-center space-x-3">
              <Button variant="outline">Profile</Button>
              <Button variant="impact">
                <Heart className="w-4 h-4 mr-2" />
                Donate Now
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, John Doe
          </h1>
          <p className="text-muted-foreground">
            Thank you for making a difference in people's lives
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
          {/* Recent Donations */}
          <div className="lg:col-span-2">
            <Card className="shadow-card border-0">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Donations</CardTitle>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentDonations.map((donation) => (
                    <div key={donation.id} className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{donation.cause}</h3>
                        <p className="text-sm text-muted-foreground">
                          to {donation.ngo} • {donation.date}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-semibold text-foreground">{donation.amount}</span>
                        <Badge 
                          variant={donation.status === "Delivered" ? "secondary" : "default"}
                          className={donation.status === "Delivered" ? "bg-success text-success-foreground" : "bg-warning text-warning-foreground"}
                        >
                          {donation.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Suggested Causes & Quick Actions */}
          <div className="space-y-6">
            {/* Suggested Causes */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle>Suggested for You</CardTitle>
                <CardDescription>
                  Causes matching your interests
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {suggestedCauses.map((cause) => (
                  <div key={cause.id} className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-semibold text-foreground mb-1">{cause.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      by {cause.ngo}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{cause.location}</span>
                      </div>
                      <Badge 
                        variant={cause.urgency === "High" ? "destructive" : "secondary"}
                        className="text-xs"
                      >
                        {cause.urgency}
                      </Badge>
                    </div>
                    <Button size="sm" variant="impact" className="w-full mt-3">
                      Donate Now
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="impact">
                  <Heart className="w-4 h-4 mr-2" />
                  Browse New Causes
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  View Impact Report
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Calendar className="w-4 h-4 mr-2" />
                  Set Monthly Donation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorDashboard;