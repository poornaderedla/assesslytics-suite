import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Award, 
  Users, 
  Globe, 
  CheckCircle,
  Star,
  Building,
  GraduationCap,
  Heart,
  Briefcase,
  Lock,
  Clock,
  TrendingUp,
  Zap
} from "lucide-react";

const TrustSection = () => {
  const certifications = [
    { name: "ISO 27001", description: "Information Security", icon: Shield },
    { name: "GDPR Compliant", description: "Data Protection", icon: Lock },
    { name: "SOC 2 Type II", description: "Security & Availability", icon: CheckCircle },
    { name: "HIPAA Ready", description: "Healthcare Privacy", icon: Heart },
  ];

  const organizations = [
    { type: "Universities", count: "500+", examples: ["Harvard", "MIT", "Stanford"], icon: GraduationCap, color: "text-blue-600" },
    { type: "Fortune 500", count: "150+", examples: ["Google", "Microsoft", "Apple"], icon: Building, color: "text-green-600" },
    { type: "Healthcare", count: "200+", examples: ["Mayo Clinic", "Johns Hopkins"], icon: Heart, color: "text-red-600" },
    { type: "Government", count: "50+", examples: ["Various Agencies"], icon: Briefcase, color: "text-purple-600" },
  ];

  const achievements = [
    { metric: "99.9%", label: "Uptime", description: "Reliable 24/7 availability" },
    { metric: "<200ms", label: "Response Time", description: "Lightning fast performance" },
    { metric: "256-bit", label: "SSL Encryption", description: "Bank-level security" },
    { metric: "24/7", label: "Support", description: "Always here to help" },
  ];

  const researchPartners = [
    "American Psychological Association",
    "Society for Human Resource Management", 
    "International Association of Applied Psychology",
    "World Health Organization",
    "Harvard Medical School",
    "Stanford Psychology Department"
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-primary-soft text-primary border-primary/20 px-4 py-2 mb-4">
            <Award className="w-4 h-4 mr-2" />
            Trusted Worldwide
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-heading mb-6">
            The Most Trusted Assessment Platform
          </h2>
          <p className="text-lg text-foreground-soft max-w-3xl mx-auto">
            Join over 2 million users and 1000+ organizations who trust our scientifically-validated 
            assessments for their most important decisions.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{achievement.metric}</div>
                <div className="font-semibold text-heading mb-1">{achievement.label}</div>
                <div className="text-xs text-foreground-soft">{achievement.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Security & Compliance */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-heading text-center mb-8">
            Security & Compliance You Can Trust
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-all group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-soft rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <cert.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-heading mb-2">{cert.name}</h4>
                  <p className="text-sm text-foreground-soft">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trusted Organizations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-heading text-center mb-8">
            Trusted by Leading Organizations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {organizations.map((org, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1 group">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <org.icon className={`w-12 h-12 ${org.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  <div className="text-2xl font-bold text-heading mb-1">{org.count}</div>
                  <div className="font-semibold text-heading mb-2">{org.type}</div>
                  <div className="text-xs text-foreground-soft space-y-1">
                    {org.examples.map((example, i) => (
                      <div key={i}>{example}</div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Research Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-heading text-center mb-8">
            Research & Academic Partners
          </h3>
          <Card className="bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-foreground-soft">
                  Our assessments are developed in collaboration with leading research institutions
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {researchPartners.map((partner, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-foreground-soft group-hover:text-foreground transition-colors">
                      {partner}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Scientific Validation */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-heading mb-6">
                Scientifically Validated Results
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary-soft rounded-full flex-shrink-0">
                    <Star className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-heading mb-1">Peer-Reviewed Research</h4>
                    <p className="text-sm text-foreground-soft">All assessments backed by published scientific studies</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-secondary-soft rounded-full flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-heading mb-1">Continuously Improved</h4>
                    <p className="text-sm text-foreground-soft">Regular updates based on latest psychological research</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-highlight-soft rounded-full flex-shrink-0">
                    <Zap className="w-5 h-5 text-highlight" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-heading mb-1">High Reliability</h4>
                    <p className="text-sm text-foreground-soft">Average reliability coefficient of 0.85+ across all assessments</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-gradient-subtle">
              <CardContent className="p-8 text-center">
                <Globe className="w-16 h-16 text-primary mx-auto mb-6" />
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-heading">25+</div>
                    <div className="text-sm text-foreground-soft">Published Research Papers</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-heading">50+</div>
                    <div className="text-sm text-foreground-soft">PhD Psychologists</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-heading">10M+</div>
                    <div className="text-sm text-foreground-soft">Data Points Analyzed</div>
                  </div>
                </div>
                <Button className="mt-6" variant="outline">
                  View Research
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-primary text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Join Millions Who Trust Us</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Start your journey of self-discovery with assessments trusted by the world's 
                leading organizations and backed by rigorous scientific research.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-8">
                  Get Started Free
                </Button>
                <Button size="lg" variant="outline" className="px-8 border-white text-white hover:bg-white hover:text-primary">
                  View All Assessments
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;