import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Mail, Award, Users, Target, Heart } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer",
      description: "Former McKinsey consultant with 15+ years in organizational psychology and assessment design.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
      email: "sarah@assessmenthub.com"
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Chief Technology Officer",
      description: "PhD in Computer Science, former Google engineer specializing in AI-driven personalization.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
      email: "michael@assessmenthub.com"
    },
    {
      name: "Dr. Emily Johnson",
      role: "Head of Assessment Science",
      description: "Clinical psychologist and researcher with expertise in psychometric validation and test development.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
      email: "emily@assessmenthub.com"
    },
    {
      name: "David Kim",
      role: "VP of Product",
      description: "Former product leader at Coursera and Khan Academy, focused on learning experience design.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
      email: "david@assessmenthub.com"
    },
    {
      name: "Dr. Priya Patel",
      role: "Head of Research",
      description: "PhD in Educational Psychology, leading research on assessment validity and user outcomes.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
      email: "priya@assessmenthub.com"
    },
    {
      name: "James Thompson",
      role: "VP of Engineering",
      description: "Former Netflix engineer with expertise in scalable systems and data security.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
      email: "james@assessmenthub.com"
    }
  ];

  const advisors = [
    {
      name: "Prof. Robert Stevens",
      role: "Educational Assessment Advisor",
      description: "Harvard Professor Emeritus, pioneer in adaptive testing methodologies."
    },
    {
      name: "Dr. Lisa Chang",
      role: "Clinical Psychology Advisor", 
      description: "Former APA President, expert in psychological assessment ethics."
    },
    {
      name: "Mark Wilson",
      role: "Technology Advisor",
      description: "Former CTO of Duolingo, specializing in educational technology scaling."
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "We build assessments with scientific rigor and validated methodologies."
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "Making high-quality assessments available to everyone, everywhere."
    },
    {
      icon: Heart,
      title: "Empowerment",
      description: "Helping individuals discover their potential and achieve their goals."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Continuous improvement in everything we do, from user experience to scientific accuracy."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-heading mb-6">
            Meet Our <span className="text-primary">World-Class Team</span>
          </h1>
          <p className="text-xl text-foreground-soft max-w-3xl mx-auto mb-8">
            Led by renowned experts in psychology, technology, and education, our team is dedicated to revolutionizing 
            how people discover their potential through scientifically-backed assessments.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="text-sm">
              <Users className="w-4 h-4 mr-1" />
              50+ Team Members
            </Badge>
            <Badge variant="secondary" className="text-sm">
              <Award className="w-4 h-4 mr-1" />
              PhD-Level Expertise
            </Badge>
            <Badge variant="secondary" className="text-sm">
              <Target className="w-4 h-4 mr-1" />
              15+ Years Experience
            </Badge>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-heading mb-4">Leadership Team</h2>
            <p className="text-lg text-foreground-soft max-w-2xl mx-auto">
              Our leadership combines deep expertise in psychology, technology, and business 
              to deliver world-class assessment experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold text-heading mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-foreground-soft text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                  
                  <div className="flex justify-center space-x-3">
                    <Button variant="ghost" size="sm" className="p-2">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="p-2">
                      <Twitter className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="p-2">
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-heading mb-4">Our Values</h2>
            <p className="text-lg text-foreground-soft max-w-2xl mx-auto">
              The principles that guide everything we do, from product development to user support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-heading mb-3">{value.title}</h3>
                <p className="text-foreground-soft text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-heading mb-4">Advisory Board</h2>
            <p className="text-lg text-foreground-soft max-w-2xl mx-auto">
              Distinguished experts who guide our strategic direction and ensure scientific excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-heading mb-2">{advisor.name}</h3>
                  <p className="text-primary font-medium mb-3">{advisor.role}</p>
                  <p className="text-foreground-soft text-sm leading-relaxed">
                    {advisor.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for empowering human potential.
          </p>
          <Button variant="secondary" size="lg" className="px-8">
            View Open Positions
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;