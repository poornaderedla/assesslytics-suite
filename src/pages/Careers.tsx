import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock, Users, Heart, Zap } from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      experience: "5+ years",
      description: "Join our engineering team to build scalable assessment platforms that impact millions of users worldwide."
    },
    {
      title: "UX/UI Designer",
      department: "Design", 
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Design intuitive and accessible user experiences for our assessment platform and mobile applications."
    },
    {
      title: "Assessment Psychologist",
      department: "Research",
      location: "Remote",
      type: "Full-time",
      experience: "PhD required",
      description: "Develop and validate new assessments while ensuring scientific rigor and cultural inclusivity."
    },
    {
      title: "Data Scientist",
      department: "Analytics",
      location: "San Francisco, CA / Remote", 
      type: "Full-time",
      experience: "4+ years",
      description: "Analyze user data to improve assessment accuracy and develop personalization algorithms."
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      experience: "2+ years",
      description: "Help enterprise clients maximize value from our platform and drive user adoption."
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "San Francisco, CA / Remote",
      type: "Full-time", 
      experience: "3+ years",
      description: "Lead digital marketing initiatives to grow our user base and increase brand awareness."
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness stipends"
    },
    {
      icon: Zap,
      title: "Growth & Learning",
      description: "Professional development budget, conference attendance, and internal mentorship"
    },
    {
      icon: Users,
      title: "Work-Life Balance",
      description: "Flexible hours, unlimited PTO, and remote work options"
    },
    {
      icon: Briefcase,
      title: "Equity & Benefits",
      description: "Competitive salary, equity package, and 401(k) matching"
    }
  ];

  const values = [
    "User-first mindset in everything we do",
    "Data-driven decision making",
    "Inclusive and diverse perspectives",
    "Continuous learning and growth",
    "Transparent and ethical practices",
    "Innovation with social impact"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-highlight text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Briefcase className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-6">Join Our Mission</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Help us democratize access to high-quality assessments and unlock human potential worldwide. 
            Join a team that's passionate about making a meaningful impact.
          </p>
        </div>
      </div>

      {/* Why Work With Us */}
      <div className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-heading text-center mb-12">Why AssessmentHub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-highlight-soft rounded-full mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-highlight" />
                </div>
                <h3 className="text-xl font-semibold text-heading mb-2">{benefit.title}</h3>
                <p className="text-foreground-soft">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-heading text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="flex items-center p-4 bg-gradient-subtle rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <span className="text-foreground">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-heading text-center mb-12">Open Positions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge className="bg-highlight text-white">{position.department}</Badge>
                    <Badge variant="outline">{position.type}</Badge>
                  </div>
                  <CardTitle className="text-xl">{position.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-foreground-soft">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{position.location}</span>
                    </div>
                    <div className="flex items-center text-foreground-soft">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">{position.experience}</span>
                    </div>
                  </div>
                  <p className="text-foreground-soft mb-6">{position.description}</p>
                  <Button className="w-full">Apply Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Application Process */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-heading text-center mb-12">Our Hiring Process</h2>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-6">1</div>
              <div>
                <h3 className="text-xl font-semibold text-heading mb-2">Application Review</h3>
                <p className="text-foreground-soft">We carefully review your application and portfolio to assess fit with the role and our team.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-6">2</div>
              <div>
                <h3 className="text-xl font-semibold text-heading mb-2">Initial Interview</h3>
                <p className="text-foreground-soft">A conversation with our team to discuss your experience, interests, and alignment with our mission.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-6">3</div>
              <div>
                <h3 className="text-xl font-semibold text-heading mb-2">Technical Assessment</h3>
                <p className="text-foreground-soft">A practical exercise or presentation relevant to the role to showcase your skills.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-6">4</div>
              <div>
                <h3 className="text-xl font-semibold text-heading mb-2">Final Interview</h3>
                <p className="text-foreground-soft">Meet with team members and leadership to discuss the role and answer any final questions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 bg-gradient-highlight text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make an Impact?</h2>
          <p className="text-xl text-white/90 mb-8">
            Don't see a perfect fit? We're always looking for exceptional talent. 
            Send us your resume and let us know how you'd like to contribute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="px-8">
              Send General Application
            </Button>
            <Button variant="outline" size="lg" className="px-8 border-white text-white hover:bg-white hover:text-highlight">
              View All Openings
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;