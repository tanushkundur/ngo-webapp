import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Users, Target, Shield, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background shadow-soft border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
              <h1 className="text-2xl font-bold text-foreground">NGO Connect</h1>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-muted-foreground hover:text-accent transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-accent font-medium">
                About
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors">
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-3">
              <Button variant="outline" asChild>
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About NGO Connect
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Bridging the gap between compassionate donors and verified NGOs to create meaningful, transparent impact in communities worldwide.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              To democratize philanthropy by making charitable giving transparent, accessible, and impactful for both donors and organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle>Trust & Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Every NGO is thoroughly verified and all donations are tracked with complete transparency.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle>Community Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Connecting generous hearts with verified organizations to create lasting positive change.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Target className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle>Targeted Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Helping donors find causes that align with their values and making every donation count.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <Shield className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Security First</h3>
                <p className="text-muted-foreground">Your donations are protected with bank-level security and encryption.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Award className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Verified Partners</h3>
                <p className="text-muted-foreground">All NGOs undergo rigorous verification to ensure legitimacy and impact.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Globe className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Global Reach</h3>
                <p className="text-muted-foreground">Supporting causes and communities across the globe for maximum impact.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-6">
                NGO Connect was born from a simple observation: while millions of people wanted to make a difference, 
                and thousands of NGOs needed support, there was no reliable way to connect them transparently and efficiently.
              </p>
              <p className="mb-6">
                Founded in 2024, our platform has facilitated over $2 million in donations to more than 500 verified 
                NGOs, impacting over 10,000 lives across various causes including education, healthcare, environment, 
                and social welfare.
              </p>
              <p>
                Today, we continue to grow our network of trusted partners and compassionate donors, building a future 
                where every donation creates maximum impact and every cause finds the support it deserves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-impact text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make an Impact?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of donors and hundreds of NGOs who are already making a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent" asChild>
              <Link to="/">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;