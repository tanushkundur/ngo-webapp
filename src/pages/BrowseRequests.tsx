import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import DonationRequestCard from "@/components/DonationRequestCard";
import { Search, Filter } from "lucide-react";

const BrowseRequests = () => {
  const sampleRequests = [
    {
      id: "1",
      title: "Emergency Food Supplies for Rural Communities",
      ngoName: "Rural Relief Foundation",
      description: "We urgently need food supplies to support 200 families affected by recent floods in rural areas. The supplies will include rice, lentils, oil, and basic necessities to sustain these families for the next month while they rebuild their lives.",
      urgency: "High" as const,
      location: "Rural Maharashtra",
      beneficiaries: 200,
      category: "Food & Nutrition",
      verified: true
    },
    {
      id: "2", 
      title: "Educational Materials for Underprivileged Children",
      ngoName: "Learning Light Foundation",
      description: "Help us provide books, notebooks, and stationery to 150 children from underprivileged backgrounds. Your contribution will ensure these children don't miss out on education due to lack of basic learning materials.",
      urgency: "Medium" as const,
      location: "Delhi NCR",
      beneficiaries: 150,
      category: "Education",
      verified: true
    },
    {
      id: "3",
      title: "Winter Clothing Drive for Homeless",
      ngoName: "Warm Hearts Initiative",
      description: "As winter approaches, we need warm clothes, blankets, and shoes for homeless individuals. Your donations will provide essential warmth and comfort to those who need it most during the cold months.",
      urgency: "High" as const,
      location: "Mumbai",
      beneficiaries: 300,
      category: "Basic Needs",
      verified: true
    },
    {
      id: "4",
      title: "Medical Equipment for Community Health Center",
      ngoName: "Health for All Organization",
      description: "Our community health center serves 500+ families but lacks basic medical equipment. We need thermometers, blood pressure monitors, and first aid supplies to provide better healthcare services.",
      urgency: "Medium" as const,
      location: "Bangalore",
      beneficiaries: 500,
      category: "Healthcare",
      verified: true
    },
    {
      id: "5",
      title: "Clean Water Initiative for Rural Schools",
      ngoName: "Pure Water Foundation",
      description: "Help us install water purification systems in 10 rural schools to provide clean drinking water to over 800 students. Clean water is essential for health and regular school attendance.",
      urgency: "Medium" as const,
      location: "Rajasthan",
      beneficiaries: 800,
      category: "Water & Sanitation",
      verified: true
    },
    {
      id: "6",
      title: "Skill Development Program for Women",
      ngoName: "Women Empowerment Network",
      description: "Support our vocational training program that teaches tailoring, computer skills, and entrepreneurship to women from marginalized communities, helping them achieve financial independence.",
      urgency: "Low" as const,
      location: "Kolkata",
      beneficiaries: 100,
      category: "Women Empowerment",
      verified: true
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
              <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="/browse" className="text-primary font-medium">
                Browse Requests
              </a>
              <a href="/donor/donations" className="text-muted-foreground hover:text-primary transition-colors">
                My Donations
              </a>
            </nav>

            <div className="flex items-center space-x-3">
              <Button variant="outline" asChild>
                <a href="/donor/profile">Profile</a>
              </Button>
              <Button variant="impact">Donate Now</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Find Your Cause
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Browse verified donation requests from NGOs across the country and make a meaningful impact.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search donation requests..." 
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-3">
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="food">Food & Nutrition</SelectItem>
                  <SelectItem value="environment">Environment</SelectItem>
                </SelectContent>
              </Select>
              
              <Select>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Urgency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
              
              <Select>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="mumbai">Mumbai</SelectItem>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="bangalore">Bangalore</SelectItem>
                  <SelectItem value="kolkata">Kolkata</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">
              {sampleRequests.length} Donation Requests Found
            </h2>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Sort by: Most Recent</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleRequests.map((request) => (
              <DonationRequestCard key={request.id} request={request} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Requests
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrowseRequests;