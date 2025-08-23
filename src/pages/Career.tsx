import Navigation from "@/components/Navigation";
import AssessmentCard from "@/components/AssessmentCard";
import { sampleAssessments } from "@/data/assessments";
import { Target, TrendingUp, Award, Compass } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Career = () => {
  const careerAssessments = sampleAssessments.filter(
    assessment => assessment.category === "Career"
  );

  const careerFeatures = [
    {
      icon: Target,
      title: "Career Aptitude", 
      description: "Discover careers that match your skills and interests"
    },
    {
      icon: TrendingUp,
      title: "Professional Growth",
      description: "Assess your readiness for career advancement"
    },
    {
      icon: Award,
      title: "Skills Assessment",
      description: "Evaluate your professional competencies"
    },
    {
      icon: Compass,
      title: "Career Planning",
      description: "Get guidance for your professional journey"
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
              <Target className="w-10 h-10 mr-3" />
              <h1 className="text-4xl font-bold">Career Assessments</h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Navigate your professional journey with comprehensive career assessments. Discover your ideal career path, 
              assess your skills, and plan for professional growth and success.
            </p>
            <Badge className="bg-white/20 text-white px-4 py-2 text-lg">
              {careerAssessments.length} Assessments Available
            </Badge>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-heading text-center mb-12">
            Career Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {careerFeatures.map((feature, index) => (
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
            <h2 className="text-3xl font-bold text-heading mb-4">Available Career Assessments</h2>
            <p className="text-foreground-soft max-w-2xl mx-auto">
              Explore career assessments designed to help you make informed decisions about your 
              professional future and career development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerAssessments.map((assessment) => (
              <AssessmentCard key={assessment.id} {...assessment} />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-card border border-border rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-heading mb-4">
                Ready to Shape Your Career?
              </h3>
              <p className="text-foreground-soft mb-6">
                Take the first step towards a fulfilling and successful professional future.
              </p>
              <Button size="lg" className="px-8">
                Start Your Career Assessment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;