import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Award, 
  Shield, 
  Users, 
  Globe, 
  Star, 
  TrendingUp, 
  PlayCircle,
  CheckCircle,
  ArrowRight,
  Sparkles
} from "lucide-react";

const EnhancedHero = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    { text: "Changed my career path completely!", author: "Marketing Manager", rating: 5 },
    { text: "Incredible insights into my personality", author: "Software Engineer", rating: 5 },
    { text: "Helped me become a better leader", author: "Team Lead", rating: 5 },
  ];

  const stats = [
    { value: "2M+", label: "Active Users", icon: Users },
    { value: "300+", label: "Expert Tests", icon: Award },
    { value: "4.9★", label: "User Rating", icon: Star },
    { value: "120+", label: "Countries", icon: Globe },
  ];

  const features = [
    "Scientifically validated assessments",
    "Personalized recommendations",
    "Expert-backed insights",
    "Privacy & security guaranteed"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Trust Badge */}
            <div className="flex items-center gap-2 text-sm">
              <Badge className="bg-primary-soft text-primary border-primary/20 px-3 py-1">
                <Shield className="w-3 h-3 mr-1" />
                Trusted by 2M+ Users
              </Badge>
              <Badge className="bg-secondary-soft text-secondary border-secondary/20 px-3 py-1">
                <Award className="w-3 h-3 mr-1" />
                ISO Certified
              </Badge>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading leading-tight">
                Discover Your
                <span className="block text-transparent bg-gradient-primary bg-clip-text">
                  True Potential
                </span>
              </h1>
              <p className="text-xl text-foreground-soft mt-6 leading-relaxed max-w-2xl">
                Join millions who've unlocked their potential with our scientifically-backed assessments. 
                Get personalized insights that drive real results in your personal and professional life.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all animate-bounce-subtle">
                <Sparkles className="w-5 h-5 mr-2" />
                Start Free Assessment
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold group">
                <PlayCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 pt-4 border-t border-border/50">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-8 h-8 bg-gradient-primary rounded-full border-2 border-background flex items-center justify-center">
                    <span className="text-xs text-white font-semibold">{i}</span>
                  </div>
                ))}
              </div>
              <div className="text-sm text-foreground-soft">
                <span className="font-semibold text-heading">25,000+</span> assessments completed this week
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Elements */}
          <div className="space-y-6 animate-slide-in-right">
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1 group">
                  <CardContent className="p-4 text-center">
                    <stat.icon className="w-6 h-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-2xl font-bold text-heading">{stat.value}</div>
                    <div className="text-xs text-foreground-soft">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Rotating Testimonial */}
            <Card className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Live Review
                  </Badge>
                </div>
                <div className="transition-all duration-500 ease-in-out">
                  <p className="text-foreground-soft italic mb-3">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <div className="font-medium text-heading text-sm">
                    {testimonials[currentTestimonial].author}
                  </div>
                </div>
                
                {/* Testimonial Indicators */}
                <div className="flex items-center justify-center gap-2 mt-4">
                  {testimonials.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentTestimonial ? 'bg-primary w-4' : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Popular Categories Preview */}
            <Card className="bg-gradient-subtle">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-heading">Popular This Week</h3>
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div className="space-y-3">
                  {[
                    { name: "Personality Test", users: "12k+" },
                    { name: "Career Assessment", users: "8k+" },
                    { name: "Leadership Style", users: "6k+" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between group cursor-pointer">
                      <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">{item.users}</span>
                        <ArrowRight className="w-3 h-3 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedHero;