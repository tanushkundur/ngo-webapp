import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Building2, Users, DollarSign, CheckCircle, XCircle, Clock } from "lucide-react";

interface NGORequest {
  id: string;
  name: string;
  email: string;
  registrationNumber: string;
  causes: string;
  status: "pending" | "approved" | "rejected";
  submittedDate: string;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [ngoRequests, setNgoRequests] = useState<NGORequest[]>([]);

  useEffect(() => {
    // Check admin authentication
    const isAdmin = localStorage.getItem("adminAuth");
    if (!isAdmin) {
      navigate("/admin/login");
      return;
    }

    // Load NGO requests from localStorage
    const requests = JSON.parse(localStorage.getItem("ngoRequests") || "[]");
    setNgoRequests(requests);
  }, [navigate]);

  const handleApprove = (id: string) => {
    const updated = ngoRequests.map(req => 
      req.id === id ? { ...req, status: "approved" as const } : req
    );
    setNgoRequests(updated);
    localStorage.setItem("ngoRequests", JSON.stringify(updated));
    toast.success("NGO approved successfully");
  };

  const handleReject = (id: string) => {
    const updated = ngoRequests.map(req => 
      req.id === id ? { ...req, status: "rejected" as const } : req
    );
    setNgoRequests(updated);
    localStorage.setItem("ngoRequests", JSON.stringify(updated));
    toast.error("NGO request rejected");
  };

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    toast.success("Logged out successfully");
    navigate("/admin/login");
  };

  const stats = [
    {
      label: "Total NGOs",
      value: ngoRequests.filter(r => r.status === "approved").length,
      icon: Building2,
      color: "text-primary"
    },
    {
      label: "Pending Requests",
      value: ngoRequests.filter(r => r.status === "pending").length,
      icon: Clock,
      color: "text-yellow-500"
    },
    {
      label: "Total Donations",
      value: "₹12.5L",
      icon: DollarSign,
      color: "text-green-500"
    },
    {
      label: "Active Donors",
      value: "234",
      icon: Users,
      color: "text-blue-500"
    }
  ];

  const pendingRequests = ngoRequests.filter(r => r.status === "pending");
  const approvedNGOs = ngoRequests.filter(r => r.status === "approved");

  return (
    <div className="min-h-screen bg-secondary">
      <header className="bg-background shadow-soft border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <Button onClick={handleLogout} variant="outline">
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-3xl font-bold mt-1">{stat.value}</p>
                  </div>
                  <stat.icon className={`w-12 h-12 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList>
            <TabsTrigger value="pending">
              Pending Requests ({pendingRequests.length})
            </TabsTrigger>
            <TabsTrigger value="approved">
              Approved NGOs ({approvedNGOs.length})
            </TabsTrigger>
            <TabsTrigger value="analytics">
              Donation Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pending">
            <Card>
              <CardHeader>
                <CardTitle>NGO Approval Requests</CardTitle>
                <CardDescription>
                  Review and approve NGO registration requests
                </CardDescription>
              </CardHeader>
              <CardContent>
                {pendingRequests.length === 0 ? (
                  <p className="text-center text-muted-foreground py-8">
                    No pending requests
                  </p>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>NGO Name</TableHead>
                        <TableHead>Registration #</TableHead>
                        <TableHead>Causes</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Submitted</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {pendingRequests.map((request) => (
                        <TableRow key={request.id}>
                          <TableCell className="font-medium">{request.name}</TableCell>
                          <TableCell>{request.registrationNumber}</TableCell>
                          <TableCell>{request.causes}</TableCell>
                          <TableCell>{request.email}</TableCell>
                          <TableCell>{request.submittedDate}</TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                onClick={() => handleApprove(request.id)}
                                className="bg-green-600 hover:bg-green-700"
                              >
                                <CheckCircle className="w-4 h-4 mr-1" />
                                Approve
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => handleReject(request.id)}
                              >
                                <XCircle className="w-4 h-4 mr-1" />
                                Reject
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="approved">
            <Card>
              <CardHeader>
                <CardTitle>Approved NGOs</CardTitle>
                <CardDescription>
                  List of all approved and active NGOs
                </CardDescription>
              </CardHeader>
              <CardContent>
                {approvedNGOs.length === 0 ? (
                  <p className="text-center text-muted-foreground py-8">
                    No approved NGOs yet
                  </p>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>NGO Name</TableHead>
                        <TableHead>Registration #</TableHead>
                        <TableHead>Causes</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {approvedNGOs.map((ngo) => (
                        <TableRow key={ngo.id}>
                          <TableCell className="font-medium">{ngo.name}</TableCell>
                          <TableCell>{ngo.registrationNumber}</TableCell>
                          <TableCell>{ngo.causes}</TableCell>
                          <TableCell>{ngo.email}</TableCell>
                          <TableCell>
                            <Badge className="bg-green-600">Active</Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Top Performing NGOs</CardTitle>
                  <CardDescription>NGOs with highest donations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "Food For All", amount: "₹3.2L", donations: 156 },
                      { name: "Shelter Foundation", amount: "₹2.8L", donations: 142 },
                      { name: "Education Trust", amount: "₹2.1L", donations: 98 }
                    ].map((ngo, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                        <div>
                          <p className="font-medium">{ngo.name}</p>
                          <p className="text-sm text-muted-foreground">{ngo.donations} donations</p>
                        </div>
                        <p className="font-bold text-primary">{ngo.amount}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Donations</CardTitle>
                  <CardDescription>Latest donation activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { donor: "Rajesh Kumar", ngo: "Food For All", amount: "₹5,000" },
                      { donor: "Priya Sharma", ngo: "Shelter Foundation", amount: "₹3,500" },
                      { donor: "Amit Patel", ngo: "Education Trust", amount: "₹10,000" }
                    ].map((donation, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                        <div>
                          <p className="font-medium">{donation.donor}</p>
                          <p className="text-sm text-muted-foreground">{donation.ngo}</p>
                        </div>
                        <p className="font-bold text-green-600">{donation.amount}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
