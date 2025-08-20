import Navigation from "@/components/Navigation";
import SearchSection from "@/components/SearchSection";
import FeaturedSection from "@/components/FeaturedSection";
import AssessmentCard from "@/components/AssessmentCard";
import { sampleAssessments } from "@/data/assessments";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Grid, List, SlidersHorizontal } from "lucide-react";

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
      <SearchSection />
      <FeaturedSection />
      
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
    </div>
  );
};

export default Index;
