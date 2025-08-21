import Navigation from "@/components/Navigation";
import AssessmentCard from "@/components/AssessmentCard";
import { sampleAssessments } from "@/data/assessments";
import { GraduationCap, BookOpen, Brain, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Education = () => {
  const educationAssessments = sampleAssessments.filter(
    assessment => assessment.category === "Education"
  );

  const educationFeatures = [
    {
      icon: BookOpen,
      title: "Learning Style Discovery", 
      description: "Identify your optimal learning methods"
    },
    {
      icon: Brain,
      title: "Cognitive Assessment",
      description: "Evaluate critical thinking and problem-solving skills"
    },
    {
      icon: Target,
      title: "Career Guidance",
      description: "Align your skills with career opportunities"
    },
    {
      icon: GraduationCap,
      title: "Academic Success",
      description: "Optimize your study strategies and habits"
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
              <GraduationCap className="w-10 h-10 mr-3" />
              <h1 className="text-4xl font-bold">Education Assessments</h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Unlock your learning potential with scientifically-backed educational assessments. 
              Discover your learning style, evaluate cognitive abilities, and get personalized guidance for academic success.
            </p>
            <Badge className="bg-white/20 text-white px-4 py-2 text-lg">
              {educationAssessments.length} Assessments Available
            </Badge>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-heading text-center mb-12">
            Educational Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {educationFeatures.map((feature, index) => (
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

      {/* Statistics */}
      <div className="py-12 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500K+</div>
              <div className="text-foreground-soft">Students Assessed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-foreground-soft">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">4.9★</div>
              <div className="text-foreground-soft">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Assessments Grid */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-heading mb-4">Available Education Assessments</h2>
            <p className="text-foreground-soft max-w-2xl mx-auto">
              Choose from our comprehensive collection of educational assessments designed by experts 
              to help you understand your learning preferences and academic strengths.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationAssessments.map((assessment) => (
              <AssessmentCard key={assessment.id} {...assessment} />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-card border border-border rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-heading mb-4">
                Ready to Transform Your Learning?
              </h3>
              <p className="text-foreground-soft mb-6">
                Join thousands of students and educators who have discovered their optimal learning path.
              </p>
              <Button size="lg" className="px-8">
                Start Your Educational Journey
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;