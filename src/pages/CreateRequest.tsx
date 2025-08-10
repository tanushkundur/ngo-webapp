import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Save, Upload } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CreateRequest = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    urgency: "",
    targetAmount: "",
    beneficiaries: "",
    location: "",
    donationType: [] as string[],
    deadline: "",
    contactPerson: "",
    contactPhone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would submit to backend
    console.log("Form submitted:", formData);
    // Redirect to dashboard
  };

  const handleDonationTypeChange = (type: string, checked: boolean) => {
    if (checked) {
      setFormData({
        ...formData,
        donationType: [...formData.donationType, type]
      });
    } else {
      setFormData({
        ...formData,
        donationType: formData.donationType.filter(t => t !== type)
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background shadow-soft border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/ngo/dashboard">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
                <h1 className="text-2xl font-bold text-foreground">NGO Connect</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Create New Request</h1>
            <p className="text-muted-foreground">
              Share your organization's needs with potential donors
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Form */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="shadow-card border-0">
                  <CardHeader>
                    <CardTitle>Request Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="title">Request Title *</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                        placeholder="e.g., Emergency Food Supplies for Flood Victims"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="description">Description *</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                        rows={6}
                        placeholder="Provide detailed information about your request, who will benefit, and how donations will be used..."
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="category">Category *</Label>
                        <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="food">Food & Nutrition</SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="shelter">Shelter & Housing</SelectItem>
                            <SelectItem value="clothing">Clothing</SelectItem>
                            <SelectItem value="disaster">Disaster Relief</SelectItem>
                            <SelectItem value="environment">Environment</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="urgency">Urgency Level *</Label>
                        <Select value={formData.urgency} onValueChange={(value) => setFormData({...formData, urgency: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select urgency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="high">High</SelectItem>
                            <SelectItem value="critical">Critical</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="targetAmount">Target Amount (₹)</Label>
                        <Input
                          id="targetAmount"
                          type="number"
                          value={formData.targetAmount}
                          onChange={(e) => setFormData({...formData, targetAmount: e.target.value})}
                          placeholder="25000"
                        />
                      </div>

                      <div>
                        <Label htmlFor="beneficiaries">Number of Beneficiaries *</Label>
                        <Input
                          id="beneficiaries"
                          type="number"
                          value={formData.beneficiaries}
                          onChange={(e) => setFormData({...formData, beneficiaries: e.target.value})}
                          placeholder="100"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="location">Location *</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                        placeholder="City, State"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="deadline">Deadline</Label>
                      <Input
                        id="deadline"
                        type="date"
                        value={formData.deadline}
                        onChange={(e) => setFormData({...formData, deadline: e.target.value})}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card border-0">
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="contactPerson">Contact Person *</Label>
                        <Input
                          id="contactPerson"
                          value={formData.contactPerson}
                          onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                          placeholder="Full Name"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="contactPhone">Contact Phone *</Label>
                        <Input
                          id="contactPhone"
                          type="tel"
                          value={formData.contactPhone}
                          onChange={(e) => setFormData({...formData, contactPhone: e.target.value})}
                          placeholder="+91 98765 43210"
                          required
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card className="shadow-card border-0">
                  <CardHeader>
                    <CardTitle>Donation Types</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="monetary"
                        checked={formData.donationType.includes("monetary")}
                        onCheckedChange={(checked) => handleDonationTypeChange("monetary", checked as boolean)}
                      />
                      <Label htmlFor="monetary">Monetary Donations</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="goods"
                        checked={formData.donationType.includes("goods")}
                        onCheckedChange={(checked) => handleDonationTypeChange("goods", checked as boolean)}
                      />
                      <Label htmlFor="goods">Goods & Supplies</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="volunteering"
                        checked={formData.donationType.includes("volunteering")}
                        onCheckedChange={(checked) => handleDonationTypeChange("volunteering", checked as boolean)}
                      />
                      <Label htmlFor="volunteering">Volunteer Services</Label>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card border-0">
                  <CardHeader>
                    <CardTitle>Upload Images</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                      <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground mb-2">
                        Upload images to support your request
                      </p>
                      <Button variant="outline" size="sm">
                        Choose Files
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-3">
                  <Button type="submit" className="w-full" variant="trust">
                    <Save className="w-4 h-4 mr-2" />
                    Publish Request
                  </Button>
                  <Button type="button" variant="outline" className="w-full">
                    Save as Draft
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateRequest;