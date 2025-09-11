import Navigation from "@/components/Navigation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, Search, MessageCircle, Phone, Mail, ChevronRight, Clock, Users, ThumbsUp } from "lucide-react";
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const faqCategories = [
    {
      title: "General Questions",
      id: "general",
      icon: <HelpCircle className="w-5 h-5" />,
      count: 3,
      faqs: [
        {
          question: "What is AssessmentHub?",
          answer: "AssessmentHub is a comprehensive platform offering over 300 scientifically-validated assessments across education, health, business, and personal development. Our mission is to provide accessible, high-quality tools for personal and professional growth.",
          helpful: 234,
          views: 1250
        },
        {
          question: "How much does it cost to use AssessmentHub?",
          answer: "Many of our assessments are free to use. We also offer premium assessments and features through our subscription plans, starting at $9.99/month. Check our pricing page for detailed information.",
          helpful: 187,
          views: 890
        },
        {
          question: "Are the assessments scientifically validated?",
          answer: "Yes, all our assessments are developed by experts and based on established scientific research. We regularly review and update our assessments to ensure they meet the highest standards of reliability and validity.",
          helpful: 312,
          views: 1456
        }
      ]
    },
    {
      title: "Using Assessments",
      id: "assessments",
      icon: <Clock className="w-5 h-5" />,
      count: 3,
      faqs: [
        {
          question: "How long does it take to complete an assessment?",
          answer: "Assessment completion times vary depending on the type and complexity. Most assessments take between 10-30 minutes to complete. The estimated time is displayed before you begin each assessment.",
          helpful: 156,
          views: 720
        },
        {
          question: "Can I save my progress and complete an assessment later?",
          answer: "Yes, if you have an account, your progress is automatically saved. You can return anytime to complete any assessment you've started.",
          helpful: 203,
          views: 934
        },
        {
          question: "How do I interpret my assessment results?",
          answer: "Each assessment comes with detailed explanations of your results, including what they mean and actionable insights. We also provide resources and recommendations based on your outcomes.",
          helpful: 289,
          views: 1123
        }
      ]
    },
    {
      title: "Account & Privacy",
      id: "privacy",
      icon: <Users className="w-5 h-5" />,
      count: 3,
      faqs: [
        {
          question: "Do I need to create an account to take assessments?",
          answer: "You can take many assessments without an account, but creating one allows you to save progress, track results over time, get personalized recommendations, and access premium features.",
          helpful: 145,
          views: 678
        },
        {
          question: "Is my personal information secure?",
          answer: "Absolutely. We use industry-standard encryption and security measures to protect your data. We're GDPR compliant and never share your personal information without your explicit consent.",
          helpful: 267,
          views: 1034
        },
        {
          question: "Can I delete my account and data?",
          answer: "Yes, you have full control over your data. You can delete your account and all associated data at any time through your account settings, or by contacting our support team.",
          helpful: 89,
          views: 456
        }
      ]
    },
    {
      title: "Technical Support",
      id: "technical",
      icon: <MessageCircle className="w-5 h-5" />,
      count: 3,
      faqs: [
        {
          question: "What browsers are supported?",
          answer: "AssessmentHub works on all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version of your preferred browser for the best experience.",
          helpful: 98,
          views: 445
        },
        {
          question: "I'm having trouble accessing my account. What should I do?",
          answer: "Try resetting your password first. If that doesn't work, clear your browser cache and cookies. If you're still having issues, contact our support team at support@assessmenthub.com.",
          helpful: 134,
          views: 567
        },
        {
          question: "Can I use AssessmentHub on my mobile device?",
          answer: "Yes! Our platform is fully responsive and optimized for mobile devices. You can take assessments on your smartphone or tablet with the same great experience as on desktop.",
          helpful: 176,
          views: 823
        }
      ]
    }
  ];

  // Filter FAQs based on search query and category
  const filteredFAQs = useMemo(() => {
    let filtered = faqCategories;
    
    if (selectedCategory !== "all") {
      filtered = filtered.filter(category => category.id === selectedCategory);
    }
    
    if (searchQuery.trim()) {
      filtered = filtered.map(category => ({
        ...category,
        faqs: category.faqs.filter(faq => 
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.faqs.length > 0);
    }
    
    return filtered;
  }, [searchQuery, selectedCategory, faqCategories]);

  const totalFAQs = faqCategories.reduce((sum, category) => sum + category.faqs.length, 0);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-highlight text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <HelpCircle className="w-10 h-10" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Find quick answers to the most common questions about AssessmentHub. Can't find what you're looking for? We're here to help!
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <HelpCircle className="w-4 h-4" />
              <span>{totalFAQs} Total Questions</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Clock className="w-4 h-4" />
              <span>Updated Daily</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <ThumbsUp className="w-4 h-4" />
              <span>98% Helpful Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="py-8 bg-background-soft border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground-soft w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 py-3 text-base search-glow"
                />
              </div>
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("all")}
                className="whitespace-nowrap"
              >
                All Categories
              </Button>
              {faqCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="whitespace-nowrap"
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.title}
                  <Badge variant="secondary" className="ml-2">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
          
          {/* Search Results Info */}
          {searchQuery && (
            <div className="mt-4 text-sm text-foreground-soft">
              Found {filteredFAQs.reduce((sum, cat) => sum + cat.faqs.length, 0)} results for "{searchQuery}"
            </div>
          )}
        </div>
      </div>

      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* FAQ Categories */}
          <div className="space-y-8">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((category, categoryIndex) => (
                <Card key={categoryIndex} className="overflow-hidden">
                  <CardHeader className="bg-muted/30">
                    <CardTitle className="text-2xl flex items-center gap-3">
                      <div className="text-primary">{category.icon}</div>
                      {category.title}
                      <Badge variant="secondary" className="ml-auto">
                        {category.faqs.length} {category.faqs.length === 1 ? 'question' : 'questions'}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Accordion type="single" collapsible className="w-full">
                      {category.faqs.map((faq, faqIndex) => (
                        <AccordionItem 
                          key={faqIndex} 
                          value={`item-${categoryIndex}-${faqIndex}`}
                          className="border-b last:border-b-0"
                        >
                          <AccordionTrigger className="text-left px-6 py-4 hover:bg-muted/20">
                            <div className="flex items-start gap-3 flex-1">
                              <span className="font-medium">{faq.question}</span>
                              <div className="flex items-center gap-2 ml-auto shrink-0 text-xs text-foreground-soft">
                                <ThumbsUp className="w-3 h-3" />
                                <span>{faq.helpful}</span>
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4">
                            <div className="bg-background-soft p-4 rounded-lg">
                              <p className="text-foreground-soft mb-3">{faq.answer}</p>
                              <div className="flex items-center justify-between text-xs text-foreground-soft">
                                <div className="flex items-center gap-4">
                                  <span className="flex items-center gap-1">
                                    <Users className="w-3 h-3" />
                                    {faq.views} views
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <ThumbsUp className="w-3 h-3" />
                                    {faq.helpful} found helpful
                                  </span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
                                    <ThumbsUp className="w-3 h-3 mr-1" />
                                    Helpful
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card className="text-center py-12">
                <CardContent>
                  <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-heading mb-2">No results found</h3>
                  <p className="text-foreground-soft mb-4">
                    Try adjusting your search terms or browse all categories
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("all");
                    }}
                  >
                    Clear Filters
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Still Need Help - Enhanced */}
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {/* Main Contact Card */}
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
              <CardContent className="p-8 text-center relative z-10">
                <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-heading mb-4">Still have questions?</h3>
                <p className="text-foreground-soft mb-6">
                  Can't find the answer you're looking for? Our support team is here to help.
                </p>
                <div className="flex flex-col gap-3">
                  <Button size="lg" asChild>
                    <Link to="/contact">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Contact Support
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/help">
                      Browse Help Center
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact Options */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Quick Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <Phone className="w-5 h-5 text-highlight" />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">Call Us</h4>
                    <p className="text-xs text-foreground-soft">1-800-ASSESS-1</p>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <a href="tel:+1-800-ASSESS">Call</a>
                  </Button>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <Mail className="w-5 h-5 text-secondary" />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">Email Support</h4>
                    <p className="text-xs text-foreground-soft">support@assessmenthub.com</p>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <a href="mailto:support@assessmenthub.com">Email</a>
                  </Button>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">Live Chat</h4>
                    <p className="text-xs text-foreground-soft">Available 24/7</p>
                  </div>
                  <Button variant="ghost" size="sm">Chat</Button>
                </div>
                
                <div className="pt-3 border-t border-border text-center">
                  <p className="text-xs text-foreground-soft">
                    Average response time: <span className="font-medium text-foreground">2 minutes</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;