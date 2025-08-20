import { ArrowRight, TrendingUp, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const FeaturedSection = () => {
  const stats = [
    { label: "Active Assessments", value: "300+", icon: Award },
    { label: "Monthly Users", value: "250K+", icon: Users },
    { label: "Success Rate", value: "94%", icon: TrendingUp },
  ];

  const categories = [
    {
      name: "Education & Learning",
      description: "Academic assessments, learning styles, and educational planning tools",
      count: 85,
      color: "bg-primary-soft border-primary/20",
      textColor: "text-primary",
    },
    {
      name: "Health & Wellness",
      description: "Physical health, mental wellness, and lifestyle optimization assessments",
      count: 72,
      color: "bg-secondary-soft border-secondary/20",
      textColor: "text-secondary",
    },
    {
      name: "Business & Career",
      description: "Professional development, leadership, and career advancement tools",
      count: 68,
      color: "bg-highlight-soft border-highlight/20",
      textColor: "text-highlight",
    },
    {
      name: "Personal Growth",
      description: "Self-discovery, personality insights, and personal development assessments",
      count: 75,
      color: "bg-muted border-border",
      textColor: "text-muted-foreground",
    },
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary-soft text-primary border-primary/20 px-4 py-2">
            <TrendingUp className="w-4 h-4 mr-2" />
            Trusted by Professionals Worldwide
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-heading mb-4">
            Comprehensive Assessment Platform
          </h2>
          <p className="text-lg text-foreground-soft max-w-3xl mx-auto mb-8">
            Join thousands of individuals and organizations using our scientifically-backed assessments
            to unlock potential, drive growth, and achieve measurable results.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-soft rounded-lg mb-3">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-heading">{stat.value}</div>
                <div className="text-sm text-foreground-soft">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-heading">Explore by Category</h3>
            <Button variant="outline" className="flex items-center gap-2">
              View All Categories
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg border-2 ${category.color} hover:shadow-custom-md transition-all duration-300 group cursor-pointer`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-semibold text-heading group-hover:text-primary transition-colors">
                    {category.name}
                  </h4>
                  <Badge variant="outline" className={`${category.textColor} text-sm`}>
                    {category.count}
                  </Badge>
                </div>
                <p className="text-sm text-foreground-soft mb-4 line-clamp-2">
                  {category.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                >
                  Explore Assessments
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Discover Your Potential?
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Start with our most popular assessments or create a personalized learning path
            tailored to your goals and interests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Take Free Assessment
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Browse All Assessments
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;