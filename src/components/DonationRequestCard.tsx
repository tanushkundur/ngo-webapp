import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users } from "lucide-react";

interface DonationRequest {
  id: string;
  title: string;
  ngoName: string;
  description: string;
  urgency: "Low" | "Medium" | "High";
  location: string;
  beneficiaries: number;
  category: string;
  verified: boolean;
}

interface DonationRequestCardProps {
  request: DonationRequest;
}

const DonationRequestCard = ({ request }: DonationRequestCardProps) => {
  const urgencyColors = {
    Low: "bg-muted text-muted-foreground",
    Medium: "bg-warning text-warning-foreground",
    High: "bg-destructive text-destructive-foreground"
  };

  return (
    <Card className="shadow-soft hover:shadow-card transition-all duration-300 hover:scale-105 border-0">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <CardTitle className="text-lg text-foreground">{request.title}</CardTitle>
              {request.verified && (
                <Badge variant="secondary" className="bg-success text-success-foreground">
                  Verified
                </Badge>
              )}
            </div>
            <CardDescription className="text-muted-foreground">
              by {request.ngoName}
            </CardDescription>
          </div>
          <Badge className={urgencyColors[request.urgency]}>
            {request.urgency} Priority
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {request.description}
        </p>
        
        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {request.location}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {request.beneficiaries} beneficiaries
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {request.category}
          </div>
        </div>
        
        <div className="flex gap-2 pt-2">
          <Button variant="trust" className="flex-1">
            Donate Now
          </Button>
          <Button variant="outline" className="flex-1">
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DonationRequestCard;