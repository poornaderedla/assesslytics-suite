import { useState } from "react";
import { Search, Filter, SlidersHorizontal, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const popularSearches = [
    "Personality Test", "IQ Assessment", "Career Guide", "Health Check",
    "Leadership Skills", "Learning Style", "Stress Level", "Team Dynamics"
  ];

  const filterOptions = [
    { name: "Duration", options: ["Under 5 min", "5-15 min", "15+ min"] },
    { name: "Difficulty", options: ["Beginner", "Intermediate", "Advanced"] },
    { name: "Type", options: ["Quiz", "Survey", "Evaluation", "Diagnostic"] },
  ];

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <div className="bg-gradient-hero py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Main Search */}
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-heading mb-4">
            Discover Your Next Assessment
          </h2>
          <p className="text-lg text-foreground-soft mb-8 max-w-2xl mx-auto">
            Explore over 300 professionally designed assessments across education, health, business, and personal development
          </p>
          
          <div className="relative max-w-2xl mx-auto">
            <div className="search-glow relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground-soft" />
              <Input
                type="text"
                placeholder="Search assessments, topics, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-12 h-14 text-lg bg-card border-input-border rounded-xl shadow-custom-sm"
              />
              <Button
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 btn-primary h-10"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                AI Suggest
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Filters */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </Button>
          {filterOptions.map(category => (
            <div key={category.name} className="flex items-center gap-2">
              <span className="text-sm font-medium text-foreground-soft">{category.name}:</span>
              {category.options.map(option => (
                <Badge
                  key={option}
                  variant="outline"
                  className={`cursor-pointer transition-colors ${
                    activeFilters.includes(option)
                      ? "bg-primary text-primary-foreground border-primary"
                      : "hover:bg-primary-soft"
                  }`}
                  onClick={() => toggleFilter(option)}
                >
                  {option}
                </Badge>
              ))}
            </div>
          ))}
        </div>

        {/* Popular Searches */}
        <div className="text-center">
          <p className="text-sm text-foreground-soft mb-3">Popular searches:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {popularSearches.map((search) => (
              <button
                key={search}
                onClick={() => setSearchQuery(search)}
                className="px-3 py-1 text-sm bg-card hover:bg-card-hover border border-border rounded-md transition-colors"
              >
                {search}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;