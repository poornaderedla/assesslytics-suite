import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Search, TrendingUp, Users, Clock, ArrowRight } from "lucide-react";

const CategoryShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    { name: "Education", count: 85, color: "bg-primary-soft text-primary border-primary/20", description: "Learning styles, academic skills, cognitive assessments", trending: true },
    { name: "Health", count: 72, color: "bg-secondary-soft text-secondary border-secondary/20", description: "Mental health, wellness, nutrition, fitness evaluations", trending: true },
    { name: "Business", count: 68, color: "bg-highlight-soft text-highlight border-highlight/20", description: "Leadership, management, workplace skills", trending: false },
    { name: "Personal", count: 45, color: "bg-muted text-muted-foreground border-border", description: "Personality, relationships, self-discovery", trending: true },
    { name: "Technology", count: 38, color: "bg-blue-50 text-blue-600 border-blue-200", description: "Digital skills, programming, tech aptitude", trending: true },
    { name: "Finance", count: 42, color: "bg-green-50 text-green-600 border-green-200", description: "Financial literacy, investment, risk assessment", trending: false },
    { name: "Marketing", count: 35, color: "bg-orange-50 text-orange-600 border-orange-200", description: "Digital marketing, brand strategy, communication", trending: false },
    { name: "Leadership", count: 41, color: "bg-purple-50 text-purple-600 border-purple-200", description: "Leadership styles, team management, executive skills", trending: true },
    { name: "Communication", count: 47, color: "bg-teal-50 text-teal-600 border-teal-200", description: "Interpersonal skills, public speaking, presentation", trending: false },
    { name: "Creativity", count: 29, color: "bg-pink-50 text-pink-600 border-pink-200", description: "Creative thinking, innovation, artistic abilities", trending: false },
    { name: "Psychology", count: 33, color: "bg-indigo-50 text-indigo-600 border-indigo-200", description: "Behavioral assessment, cognitive patterns, mental models", trending: true },
    { name: "Relationships", count: 26, color: "bg-rose-50 text-rose-600 border-rose-200", description: "Social skills, romantic compatibility, family dynamics", trending: false },
    { name: "Career", count: 44, color: "bg-amber-50 text-amber-600 border-amber-200", description: "Career planning, job skills, professional development", trending: true },
    { name: "Fitness", count: 31, color: "bg-red-50 text-red-600 border-red-200", description: "Physical fitness, exercise planning, health metrics", trending: false },
    { name: "Nutrition", count: 28, color: "bg-lime-50 text-lime-600 border-lime-200", description: "Dietary habits, nutritional knowledge, meal planning", trending: false },
    { name: "Mental Health", count: 37, color: "bg-emerald-50 text-emerald-600 border-emerald-200", description: "Stress management, anxiety, depression screening", trending: true },
    { name: "Productivity", count: 39, color: "bg-yellow-50 text-yellow-600 border-yellow-200", description: "Time management, workflow optimization, efficiency", trending: false },
    { name: "Innovation", count: 24, color: "bg-cyan-50 text-cyan-600 border-cyan-200", description: "Creative problem solving, innovation mindset", trending: false },
    { name: "Entrepreneurship", count: 32, color: "bg-violet-50 text-violet-600 border-violet-200", description: "Business creation, startup skills, risk assessment", trending: true },
  ];

  const featuredCategories = categories.filter(cat => cat.trending).slice(0, 6);
  const allCategories = categories;

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-heading mb-4">
            Explore All Categories
          </h2>
          <p className="text-lg text-foreground-soft max-w-3xl mx-auto">
            Discover assessments across 19+ specialized categories, each designed by experts 
            to provide you with actionable insights and personalized recommendations.
          </p>
        </div>

        {/* Featured Trending Categories */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-heading flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Trending Categories
            </h3>
            <Button variant="ghost" size="sm" className="text-primary hover:text-primary-hover">
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCategories.map((category) => (
              <Card 
                key={category.name}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2"
                onMouseEnter={() => setSelectedCategory(category.name)}
                onMouseLeave={() => setSelectedCategory(null)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Badge className={`${category.color} px-3 py-1 font-medium border`}>
                        {category.count}
                      </Badge>
                      <Badge variant="outline" className="bg-primary-soft text-primary border-primary/20 px-2 py-1 text-xs">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Hot
                      </Badge>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                  
                  <h4 className="text-lg font-semibold text-heading mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h4>
                  <p className="text-sm text-foreground-soft mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {Math.floor(Math.random() * 10000) + 5000}+ taken
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        5-15 min
                      </span>
                    </div>
                    <Link 
                      to={`/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-xs text-primary hover:text-primary-hover font-medium"
                    >
                      Explore →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Categories Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-heading">
              All Categories
            </h3>
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                {allCategories.length} categories available
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {allCategories.map((category) => (
              <Link
                key={category.name}
                to={`/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="group"
              >
                <Card className="hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 h-full">
                  <CardContent className="p-4 text-center h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-center mb-3">
                        <Badge className={`${category.color} px-2 py-1 text-sm font-medium border`}>
                          {category.count}
                        </Badge>
                        {category.trending && (
                          <div className="w-2 h-2 bg-primary rounded-full ml-2 animate-pulse" />
                        )}
                      </div>
                      <h4 className="font-medium text-heading group-hover:text-primary transition-colors text-sm">
                        {category.name}
                      </h4>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all mt-2 mx-auto" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-hero rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-heading mb-4">
            Can't Find What You're Looking For?
          </h3>
          <p className="text-foreground-soft mb-6 max-w-2xl mx-auto">
            Our AI-powered recommendation engine can suggest the perfect assessment 
            based on your goals and interests.
          </p>
          <Button size="lg" className="px-8">
            Get AI Recommendations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;