import Navigation from "@/components/Navigation";
import AssessmentCard from "@/components/AssessmentCard";
import { sampleAssessments } from "@/data/assessments";
import { Heart, Activity, Brain, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Health = () => {
  const healthAssessments = sampleAssessments.filter(
    assessment => assessment.category === "Health"
  );

  const healthFeatures = [
    {
      icon: Heart,
      title: "Wellness Evaluation", 
      description: "Comprehensive health and lifestyle assessment"
    },
    {
      icon: Activity,
      title: "Fitness Analysis",
      description: "Evaluate your physical activity and nutrition"
    },
    {
      icon: Brain,
      title: "Mental Health",
      description: "Assess stress levels and emotional wellbeing"
    },
    {
      icon: Shield,
      title: "Preventive Care",
      description: "Early detection and prevention strategies"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-10 h-10 mr-3" />
              <h1 className="text-4xl font-bold">Health & Wellness Assessments</h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Take control of your health journey with evidence-based assessments. 
              Evaluate your physical wellness, mental health, and lifestyle choices to build a healthier, happier you.
            </p>
            <Badge className="bg-white/20 text-white px-4 py-2 text-lg">
              {healthAssessments.length} Health Assessments
            </Badge>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-heading text-center mb-12">
            Your Health, Comprehensively Assessed
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {healthFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-secondary-soft rounded-full mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-heading mb-2">{feature.title}</h3>
                <p className="text-foreground-soft">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Health Promise */}
      <div className="py-16 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-heading mb-6">
            Your Privacy is Our Priority
          </h2>
          <p className="text-lg text-foreground-soft mb-8">
            All health assessments are completely confidential and secure. Your data is encrypted 
            and never shared without your explicit consent. Take control of your health information.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">100%</div>
              <div className="text-foreground-soft">Confidential</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">256-bit</div>
              <div className="text-foreground-soft">Encryption</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">HIPAA</div>
              <div className="text-foreground-soft">Compliant</div>
            </div>
          </div>
        </div>
      </div>

      {/* Assessments Grid */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-heading mb-4">Available Health Assessments</h2>
            <p className="text-foreground-soft max-w-2xl mx-auto">
              Explore our scientifically-validated health assessments designed by medical professionals 
              to provide you with actionable insights about your wellbeing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthAssessments.map((assessment) => (
              <AssessmentCard key={assessment.id} {...assessment} />
            ))}
          </div>

          {/* Health Disclaimer */}
          <div className="mt-12 p-6 bg-highlight-soft border border-highlight/20 rounded-xl">
            <h3 className="font-semibold text-heading mb-2">Important Health Disclaimer</h3>
            <p className="text-sm text-foreground-soft">
              These assessments are for informational purposes only and should not replace professional medical advice. 
              Always consult with qualified healthcare providers for medical concerns or before making health-related decisions.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-card border border-border rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-heading mb-4">
                Start Your Wellness Journey Today
              </h3>
              <p className="text-foreground-soft mb-6">
                Join millions who have taken the first step towards better health and wellness.
              </p>
              <Button size="lg" className="px-8">
                Begin Health Assessment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Health;