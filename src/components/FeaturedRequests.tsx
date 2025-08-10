import DonationRequestCard from "./DonationRequestCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeaturedRequests = () => {
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
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Donation Requests
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Make an immediate impact by supporting these urgent requests from verified NGOs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {sampleRequests.map((request) => (
            <DonationRequestCard key={request.id} request={request} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/browse">View All Requests</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRequests;