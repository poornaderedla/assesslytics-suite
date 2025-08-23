import Navigation from "@/components/Navigation";
import AssessmentCard from "@/components/AssessmentCard";
import { sampleAssessments } from "@/data/assessments";
import { Dumbbell, Activity, Target, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Fitness = () => {
  const fitnessAssessments = sampleAssessments.filter(
    assessment => assessment.category === "Fitness"
  );

  const fitnessFeatures = [
    {
      icon: Dumbbell,
      title: "Strength Assessment", 
      description: "Evaluate your physical strength and power"
    },
    {
      icon: Activity,
      title: "Cardiovascular Health",
      description: "Assess your heart health and endurance"
    },
    {
      icon: Target,
      title: "Fitness Goals",
      description: "Set and track your fitness objectives"
    },
    {
      icon: Trophy,
      title: "Performance Metrics",
      description: "Measure your athletic performance"
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
              <Dumbbell className="w-10 h-10 mr-3" />
              <h1 className="text-4xl font-bold">Fitness Assessments</h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Optimize your physical fitness with comprehensive assessments covering strength, endurance, 
              flexibility, and overall health. Create personalized fitness plans for better results.
            </p>
            <Badge className="bg-white/20 text-white px-4 py-2 text-lg">
              {fitnessAssessments.length} Assessments Available
            </Badge>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-heading text-center mb-12">
            Fitness Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fitnessFeatures.map((feature, index) => (
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
            <h2 className="text-3xl font-bold text-heading mb-4">Available Fitness Assessments</h2>
            <p className="text-foreground-soft max-w-2xl mx-auto">
              Discover fitness assessments designed to help you understand your physical capabilities 
              and create effective workout plans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fitnessAssessments.map((assessment) => (
              <AssessmentCard key={assessment.id} {...assessment} />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-card border border-border rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-heading mb-4">
                Ready to Transform Your Fitness?
              </h3>
              <p className="text-foreground-soft mb-6">
                Start your journey to better health and peak physical performance.
              </p>
              <Button size="lg" className="px-8">
                Start Your Fitness Assessment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fitness;