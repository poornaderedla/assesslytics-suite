import Navigation from "@/components/Navigation";
import AssessmentCard from "@/components/AssessmentCard";
import { sampleAssessments } from "@/data/assessments";
import { Users2, Heart, MessageCircle, Handshake } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Relationships = () => {
  const relationshipAssessments = sampleAssessments.filter(
    assessment => assessment.category === "Relationships"
  );

  const relationshipFeatures = [
    {
      icon: Users2,
      title: "Relationship Styles", 
      description: "Understand your approach to relationships"
    },
    {
      icon: Heart,
      title: "Emotional Connection",
      description: "Assess your ability to form deep bonds"
    },
    {
      icon: MessageCircle,
      title: "Communication Skills",
      description: "Evaluate your relationship communication"
    },
    {
      icon: Handshake,
      title: "Conflict Resolution",
      description: "Measure your ability to resolve disputes"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Users2 className="w-10 h-10 mr-3" />
              <h1 className="text-4xl font-bold">Relationship Assessments</h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Build stronger, healthier relationships with assessments covering communication styles, 
              emotional intelligence, conflict resolution, and relationship dynamics.
            </p>
            <Badge className="bg-white/20 text-white px-4 py-2 text-lg">
              {relationshipAssessments.length} Assessments Available
            </Badge>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-heading text-center mb-12">
            Relationship Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {relationshipFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary-soft rounded-full mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-heading mb-2">{feature.title}</h3>
                <p className="text-foreground-soft">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Assessments Grid */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-heading mb-4">Available Relationship Assessments</h2>
            <p className="text-foreground-soft max-w-2xl mx-auto">
              Discover assessments designed to help you understand and improve your 
              personal and professional relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relationshipAssessments.map((assessment) => (
              <AssessmentCard key={assessment.id} {...assessment} />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-card border border-border rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-heading mb-4">
                Ready to Strengthen Your Relationships?
              </h3>
              <p className="text-foreground-soft mb-6">
                Build deeper connections and improve your relationship skills.
              </p>
              <Button size="lg" className="px-8">
                Start Your Relationship Assessment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Relationships;