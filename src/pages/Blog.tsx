import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "The Science Behind Personality Assessments: What Makes Them Accurate?",
    excerpt: "Discover how modern personality assessments are developed, validated, and why they provide reliable insights into human behavior and preferences.",
    author: "Dr. Sarah Chen",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Research",
    image: "/api/placeholder/600/300"
  };

  const blogPosts = [
    {
      title: "5 Ways to Use Assessment Results for Career Growth",
      excerpt: "Learn practical strategies for leveraging assessment insights to advance your professional development.",
      author: "Michael Rodriguez",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Career"
    },
    {
      title: "Understanding Emotional Intelligence in the Workplace",
      excerpt: "Explore the impact of emotional intelligence on team dynamics and leadership effectiveness.",
      author: "Dr. Emily Watson",
      date: "March 8, 2024", 
      readTime: "7 min read",
      category: "Business"
    },
    {
      title: "The Future of Educational Assessments",
      excerpt: "How technology and AI are reshaping how we measure and support student learning.",
      author: "Prof. David Kim",
      date: "March 5, 2024",
      readTime: "9 min read",
      category: "Education"
    },
    {
      title: "Mental Health and Self-Assessment Tools",
      excerpt: "The role of assessment in supporting mental health awareness and early intervention.",
      author: "Dr. Lisa Martinez",
      date: "March 1, 2024",
      readTime: "5 min read",
      category: "Health"
    },
    {
      title: "Building Trust in Online Assessments",
      excerpt: "Key factors that make assessment platforms reliable and trustworthy for users.",
      author: "Alex Thompson",
      date: "February 28, 2024",
      readTime: "6 min read",
      category: "Technology"
    },
    {
      title: "Cross-Cultural Considerations in Assessment Design",
      excerpt: "How cultural factors influence assessment validity and the importance of inclusive design.",
      author: "Dr. Aisha Patel",
      date: "February 25, 2024",
      readTime: "8 min read",
      category: "Research"
    }
  ];

  const categories = ["All", "Research", "Career", "Business", "Education", "Health", "Technology"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">AssessmentHub Blog</h1>
          <p className="text-xl text-white/90">
            Insights, research, and expert perspectives on assessment science and personal development
          </p>
        </div>
      </div>

      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant="outline" 
                className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-white transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Featured Post */}
          <Card className="mb-16 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="bg-muted h-64 lg:h-auto flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-muted-foreground" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <Badge className="w-fit mb-4">{featuredPost.category}</Badge>
                <h2 className="text-2xl font-bold text-heading mb-4">{featuredPost.title}</h2>
                <p className="text-foreground-soft mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center text-sm text-foreground-soft mb-6">
                  <User className="w-4 h-4 mr-2" />
                  <span className="mr-4">{featuredPost.author}</span>
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{featuredPost.date}</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Button className="w-fit">
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2">{post.category}</Badge>
                  <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground-soft mb-6">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-foreground-soft mb-4">
                    <User className="w-4 h-4 mr-2" />
                    <span className="mr-4">{post.author}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-foreground-soft">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <Button variant="ghost" className="w-full mt-4 group">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16">
            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-heading mb-4">Stay Updated</h3>
                <p className="text-foreground-soft mb-6 max-w-2xl mx-auto">
                  Subscribe to our newsletter to get the latest articles, research insights, and assessment tips delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 border border-input-border rounded-lg"
                  />
                  <Button>Subscribe</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;