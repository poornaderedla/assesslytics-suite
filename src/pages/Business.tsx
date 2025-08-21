import Navigation from "@/components/Navigation";
import AssessmentCard from "@/components/AssessmentCard";
import { sampleAssessments } from "@/data/assessments";
import { Briefcase, TrendingUp, Users, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Business = () => {
  const businessAssessments = sampleAssessments.filter(
    assessment => assessment.category === "Business"
  );

  const businessFeatures = [
    {
      icon: Target,
      title: "Leadership Assessment", 
      description: "Evaluate and develop your leadership capabilities"
    },
    {
      icon: Users,
      title: "Team Dynamics",
      description: "Optimize team collaboration and communication"
    },
    {
      icon: TrendingUp,
      title: "Performance Analysis",
      description: "Measure and improve professional effectiveness"
    },
    {
      icon: Briefcase,
      title: "Career Development",
      description: "Advance your professional growth and skills"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-highlight text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Briefcase className="w-10 h-10 mr-3" />
              <h1 className="text-4xl font-bold">Business & Professional Assessments</h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Accelerate your career and business success with professional assessments designed 
              for leaders, teams, and organizations. Unlock insights that drive performance and growth.
            </p>
            <Badge className="bg-white/20 text-white px-4 py-2 text-lg">
              {businessAssessments.length} Professional Tools
            </Badge>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-heading text-center mb-12">
            Professional Excellence Made Measurable
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-highlight-soft rounded-full mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-highlight" />
                </div>
                <h3 className="text-xl font-semibold text-heading mb-2">{feature.title}</h3>
                <p className="text-foreground-soft">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-heading text-center mb-12">
            Trusted by Industry Leaders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-highlight mb-2">10K+</div>
              <div className="text-foreground-soft">Companies Trust Us</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-highlight mb-2">85%</div>
              <div className="text-foreground-soft">Performance Improvement</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-highlight mb-2">Fortune 500</div>
              <div className="text-foreground-soft">Client Base</div>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Focus */}
      <div className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-heading text-center mb-12">
            Industry-Specific Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Technology", description: "Innovation-focused leadership and agile team assessments" },
              { title: "Healthcare", description: "Patient-centered leadership and healthcare team optimization" },
              { title: "Finance", description: "Risk management and compliance-focused professional development" },
              { title: "Manufacturing", description: "Operational excellence and safety leadership assessments" },
              { title: "Retail", description: "Customer service excellence and retail management skills" },
              { title: "Consulting", description: "Client relationship and strategic thinking assessments" }
            ].map((industry, index) => (
              <div key={index} className="p-6 border border-border rounded-lg">
                <h3 className="text-xl font-semibold text-heading mb-2">{industry.title}</h3>
                <p className="text-foreground-soft">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Assessments Grid */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-heading mb-4">Professional Assessment Suite</h2>
            <p className="text-foreground-soft max-w-2xl mx-auto">
              Access our comprehensive collection of business assessments developed by organizational 
              psychologists and industry experts to drive measurable professional growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessAssessments.map((assessment) => (
              <AssessmentCard key={assessment.id} {...assessment} />
            ))}
          </div>

          {/* Enterprise CTA */}
          <div className="text-center mt-12">
            <div className="bg-gradient-highlight text-white rounded-xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Transform Your Organization
              </h3>
              <p className="text-white/90 mb-6">
                Ready to implement assessments across your team or organization? 
                Contact our enterprise team for custom solutions and bulk pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="px-8">
                  Schedule Demo
                </Button>
                <Button variant="outline" size="lg" className="px-8 border-white text-white hover:bg-white hover:text-highlight">
                  Enterprise Pricing
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;