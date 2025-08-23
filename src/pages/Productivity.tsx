import Navigation from "@/components/Navigation";
import AssessmentCard from "@/components/AssessmentCard";
import { sampleAssessments } from "@/data/assessments";
import { Zap, Clock, Target, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Productivity = () => {
  const productivityAssessments = sampleAssessments.filter(
    assessment => assessment.category === "Productivity"
  );

  const productivityFeatures = [
    {
      icon: Zap,
      title: "Efficiency Analysis", 
      description: "Measure your work efficiency and output quality"
    },
    {
      icon: Clock,
      title: "Time Management",
      description: "Assess your ability to manage time effectively"
    },
    {
      icon: Target,
      title: "Goal Achievement",
      description: "Evaluate your goal-setting and completion skills"
    },
    {
      icon: CheckCircle,
      title: "Task Prioritization",
      description: "Test your ability to prioritize important tasks"
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
              <Zap className="w-10 h-10 mr-3" />
              <h1 className="text-4xl font-bold">Productivity Assessments</h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Maximize your efficiency and achieve more with assessments covering time management, 
              goal setting, task prioritization, and workflow optimization strategies.
            </p>
            <Badge className="bg-white/20 text-white px-4 py-2 text-lg">
              {productivityAssessments.length} Assessments Available
            </Badge>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-heading text-center mb-12">
            Productivity Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productivityFeatures.map((feature, index) => (
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
            <h2 className="text-3xl font-bold text-heading mb-4">Available Productivity Assessments</h2>
            <p className="text-foreground-soft max-w-2xl mx-auto">
              Discover productivity assessments designed to help you optimize your workflow 
              and achieve your goals more efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productivityAssessments.map((assessment) => (
              <AssessmentCard key={assessment.id} {...assessment} />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-card border border-border rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-heading mb-4">
                Ready to Boost Your Productivity?
              </h3>
              <p className="text-foreground-soft mb-6">
                Unlock your potential and achieve more with proven productivity strategies.
              </p>
              <Button size="lg" className="px-8">
                Start Your Productivity Assessment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productivity;