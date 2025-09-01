import Navigation from "@/components/Navigation";
import SearchSection from "@/components/SearchSection";
import FeaturedSection from "@/components/FeaturedSection";
import AssessmentCard from "@/components/AssessmentCard";
import Footer from "@/components/Footer";
import EnhancedHero from "@/components/EnhancedHero";
import CategoryShowcase from "@/components/CategoryShowcase";
import TrustSection from "@/components/TrustSection";
import { sampleAssessments } from "@/data/assessments";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Grid, List, SlidersHorizontal } from "lucide-react";
import { Shield, Users, Award, Globe, Clock, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState<"featured" | "popular" | "newest" | "rating">("featured");

  // Sort assessments based on selected criteria
  const sortedAssessments = useMemo(() => {
    let sorted = [...sampleAssessments];
    
    switch (sortBy) {
      case "featured":
        return sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
      case "popular":
        return sorted.sort((a, b) => b.completions - a.completions);
      case "rating":
        return sorted.sort((a, b) => b.rating - a.rating);
      case "newest":
        return sorted; // In a real app, this would sort by creation date
      default:
        return sorted;
    }
  }, [sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <EnhancedHero />
      <CategoryShowcase />
      <SearchSection />
      <FeaturedSection />
      <TrustSection />
      
      {/* Assessment Grid Section */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-heading mb-2">All Assessments</h2>
              <p className="text-foreground-soft">
                {sortedAssessments.length} assessments available
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <label className="text-sm text-foreground-soft">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-3 py-2 border border-input-border rounded-lg bg-card text-sm"
                >
                  <option value="featured">Featured</option>
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
              
              <div className="flex items-center border border-input-border rounded-lg p-1">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="p-2"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="p-2"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Assessment Grid */}
          <div className={`grid gap-6 ${
            viewMode === "grid" 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
              : "grid-cols-1"
          }`}>
            {sortedAssessments.map((assessment) => (
              <AssessmentCard
                key={assessment.id}
                {...assessment}
              />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8">
              Load More Assessments
            </Button>
          </div>
        </div>
      </div>

      {/* Trust & Credibility Section */}
      <div className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-heading mb-4">Trusted by Millions Worldwide</h2>
            <p className="text-foreground-soft max-w-2xl mx-auto">
              Join over 2 million users who trust AssessmentHub for their personal and professional development journey.
            </p>
          </div>

          {/* Trust Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2M+</div>
              <div className="text-foreground-soft">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">300+</div>
              <div className="text-foreground-soft">Expert Assessments</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4.8★</div>
              <div className="text-foreground-soft">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-foreground-soft">Countries Served</div>
            </div>
          </div>

          {/* Trust Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-elegant transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center justify-center w-16 h-16 bg-primary-soft rounded-full mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-heading mb-2">Secure & Private</h3>
                <p className="text-sm text-foreground-soft">
                  Bank-level security with complete data privacy protection
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-elegant transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center justify-center w-16 h-16 bg-secondary-soft rounded-full mx-auto mb-4">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-heading mb-2">Expert Validated</h3>
                <p className="text-sm text-foreground-soft">
                  Developed by psychologists and industry professionals
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-elegant transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center justify-center w-16 h-16 bg-highlight-soft rounded-full mx-auto mb-4">
                  <Award className="w-8 h-8 text-highlight" />
                </div>
                <h3 className="font-semibold text-heading mb-2">Industry Leading</h3>
                <p className="text-sm text-foreground-soft">
                  Trusted by Fortune 500 companies and top universities
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-elegant transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center justify-center w-16 h-16 bg-primary-soft rounded-full mx-auto mb-4">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-heading mb-2">Global Reach</h3>
                <p className="text-sm text-foreground-soft">
                  Available in 25+ languages across 50+ countries
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-heading text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-elegant transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                </div>
                <p className="text-foreground-soft mb-4 italic">
                  "AssessmentHub helped me understand my leadership style and improved my team management significantly."
                </p>
                <div className="font-semibold text-heading">Sarah Chen</div>
                <div className="text-sm text-foreground-soft">VP of Engineering, TechCorp</div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-elegant transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                </div>
                <p className="text-foreground-soft mb-4 italic">
                  "The career aptitude test gave me clarity on my path. I switched careers and couldn't be happier!"
                </p>
                <div className="font-semibold text-heading">Marcus Rodriguez</div>
                <div className="text-sm text-foreground-soft">Software Developer</div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-elegant transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                </div>
                <p className="text-foreground-soft mb-4 italic">
                  "As an educator, these assessments help me understand my students better and adapt my teaching methods."
                </p>
                <div className="font-semibold text-heading">Dr. Emily Johnson</div>
                <div className="text-sm text-foreground-soft">Professor, Stanford University</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
