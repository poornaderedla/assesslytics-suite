import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar, Star, Zap, Bug, Plus, ArrowUp } from "lucide-react";

const releaseNotes = [
  {
    version: "2.1.0",
    date: "2024-01-15",
    type: "major",
    title: "Enhanced Assessment Experience",
    description: "Major improvements to assessment interface and new categories",
    changes: [
      {
        type: "feature",
        title: "15 New Assessment Categories",
        description: "Added Technology, Finance, Marketing, Leadership, Communication, Creativity, Psychology, Career, Fitness, Nutrition, Relationships, Mental Health, Productivity, Innovation, and Entrepreneurship categories"
      },
      {
        type: "enhancement",
        title: "Improved User Interface",
        description: "Completely redesigned homepage with enhanced hero section, category showcase, and trust indicators"
      },
      {
        type: "feature",
        title: "Interactive FAQ System",
        description: "Added comprehensive FAQ section with search functionality and floating help widget"
      }
    ]
  },
  {
    version: "2.0.5",
    date: "2024-01-10",
    type: "patch",
    title: "Performance & Bug Fixes",
    description: "Critical bug fixes and performance improvements",
    changes: [
      {
        type: "fix",
        title: "Assessment Loading Speed",
        description: "Improved assessment loading times by 40% through optimized data fetching"
      },
      {
        type: "fix",
        title: "Mobile Responsiveness",
        description: "Fixed layout issues on mobile devices for better user experience"
      },
      {
        type: "enhancement",
        title: "Search Functionality",
        description: "Enhanced search algorithm for better assessment discovery"
      }
    ]
  },
  {
    version: "2.0.0",
    date: "2024-01-01",
    type: "major",
    title: "Complete Platform Redesign",
    description: "Major overhaul of the entire platform with modern design and improved functionality",
    changes: [
      {
        type: "feature",
        title: "New Design System",
        description: "Implemented modern design system with improved accessibility and user experience"
      },
      {
        type: "feature",
        title: "Assessment Categories",
        description: "Organized assessments into clear categories for better navigation"
      },
      {
        type: "feature",
        title: "Advanced Analytics",
        description: "Added detailed analytics and progress tracking for users"
      },
      {
        type: "enhancement",
        title: "Performance Optimization",
        description: "Significantly improved page load times and overall platform performance"
      }
    ]
  },
  {
    version: "1.5.2",
    date: "2023-12-15",
    type: "patch",
    title: "Security & Stability",
    description: "Important security updates and stability improvements",
    changes: [
      {
        type: "fix",
        title: "Security Enhancements",
        description: "Implemented additional security measures to protect user data"
      },
      {
        type: "fix",
        title: "Database Optimization",
        description: "Optimized database queries for better performance"
      },
      {
        type: "enhancement",
        title: "Error Handling",
        description: "Improved error handling and user feedback mechanisms"
      }
    ]
  },
  {
    version: "1.5.0",
    date: "2023-12-01",
    type: "minor",
    title: "User Experience Improvements",
    description: "Focus on improving user experience and accessibility",
    changes: [
      {
        type: "feature",
        title: "Dark Mode Support",
        description: "Added dark mode theme for better user experience"
      },
      {
        type: "feature",
        title: "Accessibility Improvements",
        description: "Enhanced accessibility features for users with disabilities"
      },
      {
        type: "enhancement",
        title: "Navigation Updates",
        description: "Improved navigation structure for better user flow"
      }
    ]
  }
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case "feature":
      return <Plus className="h-4 w-4 text-green-500" />;
    case "enhancement":
      return <ArrowUp className="h-4 w-4 text-blue-500" />;
    case "fix":
      return <Bug className="h-4 w-4 text-orange-500" />;
    default:
      return <Star className="h-4 w-4 text-purple-500" />;
  }
};

const getVersionBadge = (type: string) => {
  switch (type) {
    case "major":
      return <Badge variant="destructive">Major</Badge>;
    case "minor":
      return <Badge variant="secondary">Minor</Badge>;
    case "patch":
      return <Badge variant="outline">Patch</Badge>;
    default:
      return <Badge variant="outline">Release</Badge>;
  }
};

export default function ReleaseNotes() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Release Notes
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay up to date with the latest features, improvements, and bug fixes. 
            We're constantly working to make your assessment experience better.
          </p>
        </div>

        {/* Release Timeline */}
        <div className="space-y-8">
          {releaseNotes.map((release, index) => (
            <Card key={release.version} className="relative overflow-hidden border-l-4 border-l-primary/20">
              <CardHeader>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-primary" />
                      <CardTitle className="text-2xl font-bold">
                        Version {release.version}
                      </CardTitle>
                    </div>
                    {getVersionBadge(release.type)}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">{release.date}</span>
                  </div>
                </div>
                <CardDescription className="text-base mt-2">
                  <span className="font-semibold text-foreground">{release.title}</span>
                  <br />
                  {release.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {release.changes.map((change, changeIndex) => (
                    <div key={changeIndex} className="flex gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="flex-shrink-0 mt-0.5">
                        {getTypeIcon(change.type)}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">
                          {change.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {change.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              
              {index < releaseNotes.length - 1 && (
                <div className="px-6 pb-6">
                  <Separator />
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-muted-foreground mb-4">
                Follow our development progress and be the first to know about new features.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="outline" className="px-4 py-2">
                  <Star className="h-4 w-4 mr-2" />
                  New features every month
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  <Zap className="h-4 w-4 mr-2" />
                  Regular improvements
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  <Bug className="h-4 w-4 mr-2" />
                  Quick bug fixes
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}