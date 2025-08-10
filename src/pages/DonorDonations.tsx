import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, Download, Calendar, MapPin } from "lucide-react";

const DonorDonations = () => {
  const donations = [
    {
      id: "1",
      date: "December 15, 2024",
      ngo: "Learning Light Foundation",
      cause: "Educational Materials for Underprivileged Children",
      amount: "₹2,000",
      status: "Completed",
      location: "Delhi NCR",
      beneficiaries: 25,
      transactionId: "TXN123456789"
    },
    {
      id: "2", 
      date: "November 28, 2024",
      ngo: "Health for All Organization",
      cause: "Medical Equipment for Community Health Center",
      amount: "₹5,000",
      status: "Completed",
      location: "Bangalore",
      beneficiaries: 100,
      transactionId: "TXN123456788"
    },
    {
      id: "3",
      date: "November 10, 2024", 
      ngo: "Green Earth Initiative",
      cause: "Tree Plantation Drive",
      amount: "₹1,500",
      status: "Completed",
      location: "Mumbai",
      beneficiaries: 50,
      transactionId: "TXN123456787"
    },
    {
      id: "4",
      date: "October 22, 2024",
      ngo: "Rural Relief Foundation", 
      cause: "Emergency Food Supplies for Rural Communities",
      amount: "₹3,000",
      status: "Completed",
      location: "Rural Maharashtra",
      beneficiaries: 75,
      transactionId: "TXN123456786"
    },
    {
      id: "5",
      date: "October 5, 2024",
      ngo: "Women Empowerment Network",
      cause: "Skill Development Program for Women",
      amount: "₹2,500",
      status: "Completed", 
      location: "Kolkata",
      beneficiaries: 30,
      transactionId: "TXN123456785"
    }
  ];

  const totalDonated = donations.reduce((sum, donation) => {
    return sum + parseInt(donation.amount.replace('₹', '').replace(',', ''));
  }, 0);

  const totalBeneficiaries = donations.reduce((sum, donation) => sum + donation.beneficiaries, 0);

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
                <Link to="/donor/profile">Profile</Link>
              </Button>
              <Button variant="impact" asChild>
                <Link to="/browse">Browse Requests</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{donations.length}</div>
                <div className="text-sm text-muted-foreground">Total Donations</div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-impact">₹{totalDonated.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Total Contributed</div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-foreground">{totalBeneficiaries}</div>
                <div className="text-sm text-muted-foreground">Lives Impacted</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Card className="shadow-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl">My Donations</CardTitle>
                <CardDescription>Track all your contributions and their impact</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search donations..." className="pl-10" />
              </div>
              
              <div className="flex gap-3">
                <Select>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Time Period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Time</SelectItem>
                    <SelectItem value="thismonth">This Month</SelectItem>
                    <SelectItem value="lastmonth">Last Month</SelectItem>
                    <SelectItem value="thisyear">This Year</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Donations List */}
            <div className="space-y-4">
              {donations.map((donation) => (
                <Card key={donation.id} className="border border-border">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{donation.date}</span>
                          <Badge variant="outline" className="ml-auto md:ml-0">
                            {donation.status}
                          </Badge>
                        </div>
                        
                        <h3 className="font-semibold text-lg mb-1">{donation.cause}</h3>
                        <p className="text-muted-foreground mb-2">{donation.ngo}</p>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {donation.location}
                          </div>
                          <div>
                            {donation.beneficiaries} beneficiaries
                          </div>
                        </div>
                        
                        <div className="text-xs text-muted-foreground mt-2">
                          Transaction ID: {donation.transactionId}
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-2xl font-bold text-impact mb-2">
                          {donation.amount}
                        </div>
                        <Button variant="outline" size="sm">
                          View Receipt
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Load More Donations
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DonorDonations;