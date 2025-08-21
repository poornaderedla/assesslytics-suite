import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Globe, Award, TrendingUp, Heart } from "lucide-react";

const About = () => {
  const stats = [
    { number: "2M+", label: "Active Users", icon: Users },
    { number: "300+", label: "Assessments", icon: Target },
    { number: "50+", label: "Countries", icon: Globe },
    { number: "99.9%", label: "Uptime", icon: TrendingUp }
  ];

  const values = [
    {
      icon: Heart,
      title: "User-Centric",
      description: "Every decision we make prioritizes user experience and outcomes"
    },
    {
      icon: Award,
      title: "Quality First",
      description: "We maintain the highest standards in assessment accuracy and reliability"
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Making personal and professional development accessible to everyone"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive community of learners and growth-minded individuals"
    }
  ];

  const timeline = [
    { year: "2020", event: "Founded with a vision to democratize personal assessment tools" },
    { year: "2021", event: "Launched with 50 core assessments across 4 categories" },
    { year: "2022", event: "Reached 500K users and expanded internationally" },
    { year: "2023", event: "Introduced AI-powered personalization and reached 1M users" },
    { year: "2024", event: "Launched 300+ assessments with 2M+ active users globally" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-primary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About AssessmentHub</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to unlock human potential through scientifically-backed assessments 
            that provide meaningful insights for personal and professional growth.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="flex items-center justify-center w-16 h-16 bg-primary-soft rounded-full mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-heading mb-2">{stat.number}</div>
                <div className="text-foreground-soft">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-heading mb-6">Our Mission</h2>
              <p className="text-lg text-foreground-soft mb-6 leading-relaxed">
                To democratize access to high-quality, scientifically-validated assessments that empower 
                individuals and organizations to make informed decisions about personal development, 
                career growth, health, and education.
              </p>
              <p className="text-foreground-soft leading-relaxed">
                We believe that self-knowledge is the foundation of growth, and our platform provides 
                the tools and insights needed to unlock that potential for millions of users worldwide.
              </p>
            </div>
            <div className="bg-gradient-subtle p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-heading mb-4">Our Vision</h3>
              <p className="text-foreground-soft leading-relaxed">
                A world where everyone has access to the insights they need to thrive—where personal 
                and professional development is guided by data, supported by community, and accessible 
                to all, regardless of background or circumstance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-heading text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-soft rounded-full mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-heading mb-3">{value.title}</h3>
                  <p className="text-foreground-soft">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-heading text-center mb-12">Our Journey</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <Badge className="bg-primary text-white text-lg px-4 py-2">{item.year}</Badge>
                </div>
                <div className="ml-6">
                  <p className="text-lg text-foreground">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl text-white/90 mb-8">
            Whether you're an individual seeking growth or an organization looking to develop your team, 
            we're here to support your journey with world-class assessments and insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
              Start Your Journey
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;