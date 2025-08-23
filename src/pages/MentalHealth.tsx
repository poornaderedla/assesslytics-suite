import Navigation from "@/components/Navigation";
import AssessmentCard from "@/components/AssessmentCard";
import { sampleAssessments } from "@/data/assessments";
import { Shield, Sun, Smile, Brain } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const MentalHealth = () => {
  const mentalHealthAssessments = sampleAssessments.filter(
    assessment => assessment.category === "Mental Health"
  );

  const mentalHealthFeatures = [
    {
      icon: Shield,
      title: "Mental Resilience", 
      description: "Assess your ability to cope with challenges"
    },
    {
      icon: Sun,
      title: "Mood & Wellbeing",
      description: "Evaluate your emotional state and mood patterns"
    },
    {
      icon: Smile,
      title: "Stress Management",
      description: "Measure your stress coping mechanisms"
    },
    {
      icon: Brain,
      title: "Cognitive Health",
      description: "Test your mental clarity and focus"
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
              <Shield className="w-10 h-10 mr-3" />
              <h1 className="text-4xl font-bold">Mental Health Assessments</h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Prioritize your mental wellbeing with comprehensive assessments covering stress management, 
              emotional resilience, mood patterns, and cognitive health. Build stronger mental health habits.
            </p>
            <Badge className="bg-white/20 text-white px-4 py-2 text-lg">
              {mentalHealthAssessments.length} Assessments Available
            </Badge>
          </div>
        </div>
      </div>

      {/* Privacy Notice */}
      <div className="py-8 bg-secondary-soft/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-foreground-soft">
              <strong>Privacy & Confidentiality:</strong> All mental health assessments are completely confidential. 
              Results are for educational purposes only and do not constitute medical advice.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-heading text-center mb-12">
            Mental Health Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mentalHealthFeatures.map((feature, index) => (
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
            <h2 className="text-3xl font-bold text-heading mb-4">Available Mental Health Assessments</h2>
            <p className="text-foreground-soft max-w-2xl mx-auto">
              Explore mental health assessments designed to help you understand your emotional wellbeing 
              and develop better mental health practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentalHealthAssessments.map((assessment) => (
              <AssessmentCard key={assessment.id} {...assessment} />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-card border border-border rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-heading mb-4">
                Ready to Prioritize Your Mental Health?
              </h3>
              <p className="text-foreground-soft mb-6">
                Take the first step towards better mental wellbeing and emotional resilience.
              </p>
              <Button size="lg" className="px-8">
                Start Your Mental Health Assessment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentalHealth;