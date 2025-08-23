import Navigation from "@/components/Navigation";
import AssessmentCard from "@/components/AssessmentCard";
import { sampleAssessments } from "@/data/assessments";
import { MessageCircle, Mic, Users, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Communication = () => {
  const communicationAssessments = sampleAssessments.filter(
    assessment => assessment.category === "Communication"
  );

  const communicationFeatures = [
    {
      icon: MessageCircle,
      title: "Communication Style", 
      description: "Discover your natural communication approach"
    },
    {
      icon: Mic,
      title: "Public Speaking",
      description: "Evaluate your presentation and speaking skills"
    },
    {
      icon: Users,
      title: "Interpersonal Skills",
      description: "Assess your ability to connect with others"
    },
    {
      icon: Globe,
      title: "Cross-Cultural Communication",
      description: "Test your global communication competence"
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
              <MessageCircle className="w-10 h-10 mr-3" />
              <h1 className="text-4xl font-bold">Communication Assessments</h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Master the art of effective communication with assessments covering verbal, written, 
              and interpersonal skills. Build stronger connections and advance your career through better communication.
            </p>
            <Badge className="bg-white/20 text-white px-4 py-2 text-lg">
              {communicationAssessments.length} Assessments Available
            </Badge>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-heading text-center mb-12">
            Communication Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communicationFeatures.map((feature, index) => (
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
            <h2 className="text-3xl font-bold text-heading mb-4">Available Communication Assessments</h2>
            <p className="text-foreground-soft max-w-2xl mx-auto">
              Enhance your communication abilities with our comprehensive assessments designed 
              to improve your personal and professional interactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communicationAssessments.map((assessment) => (
              <AssessmentCard key={assessment.id} {...assessment} />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-card border border-border rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-heading mb-4">
                Ready to Enhance Your Communication?
              </h3>
              <p className="text-foreground-soft mb-6">
                Transform your relationships and career with powerful communication skills.
              </p>
              <Button size="lg" className="px-8">
                Start Your Communication Assessment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communication;