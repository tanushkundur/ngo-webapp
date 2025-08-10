import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, Edit, MapPin, Mail, Phone, Heart } from "lucide-react";

const DonorProfile = () => {
  const donorData = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+91 98765 43210",
    location: "Mumbai, Maharashtra",
    joinDate: "January 2024",
    totalDonations: 12,
    totalAmount: "₹25,000",
    interests: ["Education", "Healthcare", "Environment"],
    recentDonations: [
      { id: 1, ngo: "Learning Light Foundation", amount: "₹2,000", date: "Dec 15, 2024", cause: "Educational Materials" },
      { id: 2, ngo: "Health for All", amount: "₹5,000", date: "Nov 28, 2024", cause: "Medical Equipment" },
      { id: 3, ngo: "Green Earth Initiative", amount: "₹1,500", date: "Nov 10, 2024", cause: "Tree Plantation" }
    ]
  };

  return (
    <div className="min-h-screen bg-secondary">
      {/* Header */}
      <header className="bg-background shadow-soft border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" asChild>
                <Link to="/browse">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Browse
                </Link>
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
                <h1 className="text-2xl font-bold text-foreground">NGO Connect</h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button variant="outline" asChild>
                <Link to="/donor/donations">My Donations</Link>
              </Button>
              <Button variant="impact" asChild>
                <Link to="/browse">Browse Requests</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Information */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">Profile Information</CardTitle>
                    <CardDescription>Manage your personal details and preferences</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>First Name</Label>
                    <Input value={donorData.firstName} readOnly />
                  </div>
                  <div className="space-y-2">
                    <Label>Last Name</Label>
                    <Input value={donorData.lastName} readOnly />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Email Address</Label>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <Input value={donorData.email} readOnly />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Phone Number</Label>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <Input value={donorData.phone} readOnly />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Location</Label>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <Input value={donorData.location} readOnly />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Areas of Interest</Label>
                  <div className="flex flex-wrap gap-2">
                    {donorData.interests.map((interest) => (
                      <Badge key={interest} variant="secondary">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats and Recent Activity */}
          <div className="space-y-6">
            {/* Donation Stats */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-primary" />
                  Donation Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{donorData.totalDonations}</div>
                  <div className="text-sm text-muted-foreground">Total Donations</div>
                </div>
                <Separator />
                <div className="text-center">
                  <div className="text-2xl font-bold text-impact">{donorData.totalAmount}</div>
                  <div className="text-sm text-muted-foreground">Total Contributed</div>
                </div>
                <Separator />
                <div className="text-center">
                  <div className="text-lg font-semibold">{donorData.joinDate}</div>
                  <div className="text-sm text-muted-foreground">Member Since</div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Donations */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Recent Donations</CardTitle>
                <CardDescription>Your latest contributions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {donorData.recentDonations.map((donation) => (
                  <div key={donation.id} className="border-l-4 border-primary pl-4 py-2">
                    <div className="font-medium text-sm">{donation.ngo}</div>
                    <div className="text-xs text-muted-foreground">{donation.cause}</div>
                    <div className="flex items-center justify-between mt-1">
                      <span className="font-bold text-impact">{donation.amount}</span>
                      <span className="text-xs text-muted-foreground">{donation.date}</span>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/donor/donations">View All Donations</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorProfile;