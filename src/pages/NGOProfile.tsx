import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Edit, Save, X, MapPin, Globe, Phone, Mail, Calendar, Users } from "lucide-react";
import { useState } from "react";

const NGOProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Rural Relief Foundation",
    email: "contact@ruralrelief.org",
    phone: "+91 98765 43210",
    website: "www.ruralrelief.org",
    location: "Mumbai, Maharashtra, India",
    established: "2015",
    description: "Rural Relief Foundation is dedicated to improving the lives of rural communities through education, healthcare, and sustainable development programs. We work directly with villages to identify needs and implement long-term solutions.",
    causes: ["Education", "Healthcare", "Rural Development", "Women Empowerment"],
    beneficiaries: "2,500+",
    volunteers: "85",
    activeProjects: "12"
  });

  const handleSave = () => {
    setIsEditing(false);
    // Here you would save to backend
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset changes
  };

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
              <a href="/ngo/dashboard" className="text-muted-foreground hover:text-primary transition-colors">
                Dashboard
              </a>
              <a href="/ngo/profile" className="text-primary font-medium">
                Profile
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                My Requests
              </a>
            </nav>

            <div className="flex items-center space-x-3">
              {!isEditing ? (
                <Button onClick={() => setIsEditing(true)} variant="outline">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              ) : (
                <div className="flex space-x-2">
                  <Button onClick={handleSave} variant="trust" size="sm">
                    <Save className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                  <Button onClick={handleCancel} variant="outline" size="sm">
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Profile Header */}
          <Card className="shadow-card border-0">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {profile.name.split(' ').map(word => word[0]).join('')}
                    </span>
                  </div>
                  <div>
                    {isEditing ? (
                      <Input 
                        value={profile.name}
                        onChange={(e) => setProfile({...profile, name: e.target.value})}
                        className="text-2xl font-bold mb-2"
                      />
                    ) : (
                      <h1 className="text-2xl font-bold text-foreground">{profile.name}</h1>
                    )}
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-success text-success-foreground">
                        Verified NGO
                      </Badge>
                      <Badge variant="outline">
                        Est. {profile.established}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Profile Information */}
            <div className="lg:col-span-2 space-y-6">
              {/* Basic Information */}
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle>Organization Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      {isEditing ? (
                        <Input 
                          id="email"
                          value={profile.email}
                          onChange={(e) => setProfile({...profile, email: e.target.value})}
                        />
                      ) : (
                        <div className="flex items-center mt-1">
                          <Mail className="w-4 h-4 mr-2 text-muted-foreground" />
                          <span>{profile.email}</span>
                        </div>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      {isEditing ? (
                        <Input 
                          id="phone"
                          value={profile.phone}
                          onChange={(e) => setProfile({...profile, phone: e.target.value})}
                        />
                      ) : (
                        <div className="flex items-center mt-1">
                          <Phone className="w-4 h-4 mr-2 text-muted-foreground" />
                          <span>{profile.phone}</span>
                        </div>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="website">Website</Label>
                      {isEditing ? (
                        <Input 
                          id="website"
                          value={profile.website}
                          onChange={(e) => setProfile({...profile, website: e.target.value})}
                        />
                      ) : (
                        <div className="flex items-center mt-1">
                          <Globe className="w-4 h-4 mr-2 text-muted-foreground" />
                          <span>{profile.website}</span>
                        </div>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="location">Location</Label>
                      {isEditing ? (
                        <Input 
                          id="location"
                          value={profile.location}
                          onChange={(e) => setProfile({...profile, location: e.target.value})}
                        />
                      ) : (
                        <div className="flex items-center mt-1">
                          <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                          <span>{profile.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* About Section */}
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle>About Us</CardTitle>
                </CardHeader>
                <CardContent>
                  {isEditing ? (
                    <Textarea 
                      value={profile.description}
                      onChange={(e) => setProfile({...profile, description: e.target.value})}
                      rows={6}
                      placeholder="Tell donors about your organization, mission, and impact..."
                    />
                  ) : (
                    <p className="text-muted-foreground leading-relaxed">{profile.description}</p>
                  )}
                </CardContent>
              </Card>

              {/* Causes */}
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle>Focus Areas</CardTitle>
                  <CardDescription>The causes and areas your organization works in</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {profile.causes.map((cause) => (
                      <Badge key={cause} variant="secondary" className="bg-accent text-accent-foreground">
                        {cause}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Stats and Impact */}
            <div className="space-y-6">
              {/* Impact Stats */}
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle>Our Impact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">{profile.beneficiaries}</div>
                    <p className="text-sm text-muted-foreground">Lives Impacted</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent">{profile.volunteers}</div>
                    <p className="text-sm text-muted-foreground">Active Volunteers</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-success">{profile.activeProjects}</div>
                    <p className="text-sm text-muted-foreground">Active Projects</p>
                  </div>
                </CardContent>
              </Card>

              {/* Verification Status */}
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle>Verification Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
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
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Address Proof</span>
                    <Badge variant="secondary" className="bg-success text-success-foreground">
                      Verified
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NGOProfile;