import Navigation from "@/components/Navigation";
import AssessmentCard from "@/components/AssessmentCard";
import { sampleAssessments } from "@/data/assessments";
import { TrendingUp, Flame, Clock, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Trending = () => {
  // Get trending assessments (most popular ones)
  const trendingAssessments = sampleAssessments
    .sort((a, b) => b.completions - a.completions)
    .slice(0, 9);

  const trendingStats = [
    { icon: Flame, label: "Hot Topics", value: "25+" },
    { icon: TrendingUp, label: "Growth Rate", value: "+342%" },
    { icon: Clock, label: "This Week", value: "48K" },
    { icon: Star, label: "Top Rated", value: "4.8" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="w-8 h-8 mr-3" />
              <h1 className="text-4xl font-bold">Trending Assessments</h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover the most popular assessments chosen by thousands of users worldwide. 
              Stay ahead with trending topics and emerging insights.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {trendingStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mx-auto mb-3">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trending Content */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-heading mb-2">Most Popular This Month</h2>
              <p className="text-foreground-soft">
                {trendingAssessments.length} trending assessments based on user engagement
              </p>
            </div>
            <Badge className="bg-highlight-soft text-highlight px-4 py-2">
              Updated Daily
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingAssessments.map((assessment, index) => (
              <div key={assessment.id} className="relative">
                {index < 3 && (
                  <Badge className="absolute -top-2 -right-2 z-10 bg-gradient-primary text-white">
                    #{index + 1}
                  </Badge>
                )}
                <AssessmentCard {...assessment} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;