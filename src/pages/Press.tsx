import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Download, Calendar, ExternalLink, Award, TrendingUp, Users, Globe } from "lucide-react";

const Press = () => {
  const pressReleases = [
    {
      date: "December 15, 2024",
      title: "AssessmentHub Reaches 2 Million Users Worldwide",
      excerpt: "Platform celebrates major milestone as global demand for personal and professional assessments continues to grow.",
      category: "Company News"
    },
    {
      date: "November 22, 2024",
      title: "AssessmentHub Launches AI-Powered Assessment Recommendations",
      excerpt: "New machine learning algorithm personalizes assessment suggestions based on user preferences and career goals.",
      category: "Product Launch"
    },
    {
      date: "October 8, 2024",
      title: "Partnership with Leading Universities Expands Educational Assessments",
      excerpt: "Collaboration with top academic institutions brings validated educational assessments to students globally.",
      category: "Partnership"
    },
    {
      date: "September 18, 2024",
      title: "AssessmentHub Wins 'Best EdTech Platform' at Global Innovation Awards",
      excerpt: "Recognition highlights platform's contribution to accessible, high-quality psychological and educational assessments.",
      category: "Award"
    }
  ];

  const mediaKit = [
    {
      title: "Company Logo Pack",
      description: "High-resolution logos in various formats (PNG, SVG, EPS)",
      size: "2.4 MB",
      format: "ZIP"
    },
    {
      title: "Brand Guidelines",
      description: "Complete brand identity guide including colors, typography, and usage",
      size: "1.8 MB", 
      format: "PDF"
    },
    {
      title: "Product Screenshots",
      description: "High-quality screenshots of platform interface and features",
      size: "5.2 MB",
      format: "ZIP"
    },
    {
      title: "Executive Headshots",
      description: "Professional photos of leadership team members",
      size: "3.1 MB",
      format: "ZIP"
    },
    {
      title: "Company Fact Sheet",
      description: "Key statistics, milestones, and company information",
      size: "890 KB",
      format: "PDF"
    }
  ];

  const awards = [
    {
      year: "2024",
      title: "Best EdTech Platform",
      organization: "Global Innovation Awards",
      description: "Recognition for outstanding contribution to accessible education technology."
    },
    {
      year: "2024",
      title: "Top 50 Startups to Watch",
      organization: "TechCrunch Disrupt",
      description: "Selected among the most promising technology startups globally."
    },
    {
      year: "2023",
      title: "Excellence in User Experience",
      organization: "UX Design Awards",
      description: "Honored for exceptional user interface and experience design."
    },
    {
      year: "2023",
      title: "Innovation in Assessment Technology",
      organization: "EdTech Breakthrough Awards",
      description: "Recognized for pioneering approaches to digital assessment delivery."
    }
  ];

  const stats = [
    { label: "Active Users", value: "2M+", icon: Users },
    { label: "Assessments Completed", value: "15M+", icon: TrendingUp },
    { label: "Countries Served", value: "120+", icon: Globe },
    { label: "Scientific Publications", value: "25+", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-heading mb-6">
              Press & <span className="text-primary">Media Center</span>
            </h1>
            <p className="text-xl text-foreground-soft max-w-3xl mx-auto mb-8">
              Latest news, media resources, and information about AssessmentHub's mission to 
              democratize access to high-quality personal and professional assessments.
            </p>
            <Button size="lg" className="px-8">
              Contact Press Team
            </Button>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-heading mb-1">{stat.value}</div>
                <div className="text-foreground-soft text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-heading mb-4">Latest Press Releases</h2>
            <p className="text-lg text-foreground-soft max-w-2xl mx-auto">
              Stay up-to-date with AssessmentHub's latest announcements and company news.
            </p>
          </div>

          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <Card key={index} className="hover:shadow-elegant transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="secondary">{release.category}</Badge>
                        <div className="flex items-center text-foreground-soft text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {release.date}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-heading mb-2">{release.title}</h3>
                      <p className="text-foreground-soft leading-relaxed">{release.excerpt}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Read More
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-heading mb-4">Media Kit & Resources</h2>
            <p className="text-lg text-foreground-soft max-w-2xl mx-auto">
              Download official logos, brand assets, and other media resources for editorial use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaKit.map((item, index) => (
              <Card key={index} className="hover:shadow-elegant transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground-soft text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-foreground-soft">
                      <span>{item.format}</span>
                      <Separator orientation="vertical" className="h-3" />
                      <span>{item.size}</span>
                    </div>
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-heading mb-4">Awards & Recognition</h2>
            <p className="text-lg text-foreground-soft max-w-2xl mx-auto">
              AssessmentHub has been recognized by leading organizations for innovation and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-heading">{award.title}</h3>
                        <Badge variant="secondary">{award.year}</Badge>
                      </div>
                      <p className="text-primary font-medium mb-2">{award.organization}</p>
                      <p className="text-foreground-soft text-sm leading-relaxed">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Media Inquiries</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            For press inquiries, interview requests, or additional information, 
            please contact our media relations team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="px-8">
              Contact Press Team
            </Button>
            <Button variant="outline" size="lg" className="px-8 border-white/20 text-white hover:bg-white/10">
              Download Media Kit
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Press;