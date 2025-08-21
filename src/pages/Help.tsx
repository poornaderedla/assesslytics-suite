import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, Search, BookOpen, Users, Settings, Shield } from "lucide-react";

const Help = () => {
  const helpCategories = [
    {
      icon: BookOpen,
      title: "Getting Started",
      description: "Learn the basics of using AssessmentHub",
      articles: 12
    },
    {
      icon: Users,
      title: "Account Management",
      description: "Manage your profile and preferences",
      articles: 8
    },
    {
      icon: Settings,
      title: "Assessment Features",
      description: "Understanding results and analytics",
      articles: 15
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Data protection and privacy controls",
      articles: 6
    }
  ];

  const popularArticles = [
    "How to interpret assessment results",
    "Creating your first assessment",
    "Understanding privacy settings",
    "Sharing assessment results",
    "Troubleshooting login issues"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Help Center</h1>
          <p className="text-xl text-white/90 mb-8">
            Find answers to your questions and get the most out of AssessmentHub
          </p>
          
          {/* Search */}
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-4 top-3 w-5 h-5 text-white/70" />
            <Input
              placeholder="Search for help articles..."
              className="pl-12 bg-white/10 border-white/20 text-white placeholder:text-white/70"
            />
          </div>
        </div>
      </div>

      {/* Help Categories */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-heading text-center mb-12">Browse by Category</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {helpCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-soft rounded-full mx-auto mb-4">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-foreground-soft mb-4">{category.description}</p>
                  <Badge variant="secondary">{category.articles} articles</Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Popular Articles */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-heading mb-6">Popular Articles</h3>
              <div className="space-y-4">
                {popularArticles.map((article, index) => (
                  <div key={index} className="flex items-center p-4 border border-border rounded-lg hover:bg-muted transition-colors cursor-pointer">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-soft rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary font-semibold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-foreground">{article}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-heading mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-heading mb-2">Still need help?</h4>
                    <p className="text-foreground-soft mb-4">
                      Can't find what you're looking for? Contact our support team.
                    </p>
                    <Button className="w-full">Contact Support</Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-heading mb-2">Video Tutorials</h4>
                    <p className="text-foreground-soft mb-4">
                      Watch step-by-step guides for common tasks.
                    </p>
                    <Button variant="outline" className="w-full">Watch Tutorials</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;