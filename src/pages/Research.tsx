import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, FileText, Users, TrendingUp, Download, ExternalLink, Calendar, Award, Search } from "lucide-react";

const Research = () => {
  const publications = [
    {
      title: "Validation of Digital Personality Assessments: A Large-Scale Cross-Cultural Study",
      authors: "Chen, S., Rodriguez, M., Johnson, E.",
      journal: "Journal of Applied Psychology",
      year: "2024",
      impact: "High Impact",
      type: "Peer-Reviewed",
      abstract: "This comprehensive study validates our digital personality assessment framework across 50 countries, demonstrating strong psychometric properties and cultural equivalence.",
      downloads: "2,450",
      citations: "15"
    },
    {
      title: "AI-Powered Assessment Personalization: Improving User Engagement and Accuracy",
      authors: "Patel, P., Kim, D., Thompson, J.",
      journal: "Computers & Education",
      year: "2024",
      impact: "High Impact",
      type: "Peer-Reviewed",
      abstract: "Investigation of machine learning algorithms for personalizing assessment experiences, showing 34% improvement in completion rates and 28% increase in accuracy.",
      downloads: "1,890",
      citations: "8"
    },
    {
      title: "Digital Assessment Accessibility: Design Principles for Inclusive Evaluation",
      authors: "Johnson, E., Chen, S.",
      journal: "Universal Access in the Information Society",
      year: "2023",
      impact: "Medium Impact",
      type: "Peer-Reviewed",
      abstract: "Comprehensive framework for designing accessible digital assessments, ensuring equitable access across diverse user populations.",
      downloads: "3,120",
      citations: "23"
    },
    {
      title: "Longitudinal Analysis of Assessment-Based Career Guidance Outcomes",
      authors: "Rodriguez, M., Patel, P.",
      journal: "Career Development International",
      year: "2023",
      impact: "Medium Impact",
      type: "Peer-Reviewed",
      abstract: "Five-year follow-up study tracking career outcomes of users who received assessment-based guidance, showing significant positive impacts on job satisfaction and career progression.",
      downloads: "1,567",
      citations: "19"
    }
  ];

  const whitepapers = [
    {
      title: "The Future of Digital Assessment: Trends and Innovations",
      authors: "AssessmentHub Research Team",
      year: "2024",
      type: "Industry Report",
      description: "Comprehensive analysis of emerging trends in digital assessment technology, including AI integration, adaptive testing, and personalization.",
      pages: "45 pages"
    },
    {
      title: "Building Trust in Online Assessments: Security and Privacy Best Practices",
      authors: "Thompson, J., Security Team",
      year: "2024",
      type: "Technical Report",
      description: "Detailed examination of security protocols and privacy measures essential for maintaining user trust in digital assessment platforms.",
      pages: "32 pages"
    },
    {
      title: "Cross-Cultural Assessment Validity: A Global Perspective",
      authors: "Chen, S., International Research Consortium",
      year: "2023",
      type: "Research Report",
      description: "Multi-year study examining the validity and reliability of assessments across different cultural contexts and populations.",
      pages: "67 pages"
    }
  ];

  const ongoingStudies = [
    {
      title: "Impact of Gamification on Assessment Engagement",
      lead: "Dr. Priya Patel",
      startDate: "January 2024",
      expectedCompletion: "December 2024",
      participants: "5,000+ users",
      description: "Investigating how gamification elements affect user engagement, completion rates, and assessment accuracy across different demographic groups.",
      status: "Data Collection Phase"
    },
    {
      title: "Predictive Validity of Career Aptitude Assessments",
      lead: "Dr. Michael Rodriguez",
      startDate: "March 2024",
      expectedCompletion: "March 2026",
      participants: "10,000+ professionals",
      description: "Longitudinal study tracking the predictive validity of our career assessments in relation to actual job performance and career satisfaction.",
      status: "Recruitment Phase"
    },
    {
      title: "Neural Correlates of Assessment Performance",
      lead: "Dr. Emily Johnson",
      startDate: "June 2024",
      expectedCompletion: "June 2025",
      participants: "200 participants",
      description: "Using neuroimaging to understand the cognitive processes underlying assessment performance, informing future assessment design.",
      status: "Data Collection Phase"
    }
  ];

  const collaborations = [
    {
      institution: "Stanford University",
      department: "Department of Psychology",
      project: "Digital Assessment Validation Framework",
      duration: "2024-2026",
      focus: "Psychometric validation of digital assessment tools"
    },
    {
      institution: "MIT",
      department: "Computer Science and Artificial Intelligence Laboratory",
      project: "AI-Driven Assessment Personalization",
      duration: "2023-2025", 
      focus: "Machine learning approaches to assessment customization"
    },
    {
      institution: "University of Oxford",
      department: "Department of Education",
      project: "Cross-Cultural Assessment Study",
      duration: "2023-2024",
      focus: "Cultural adaptation and validation of assessments"
    },
    {
      institution: "Harvard Medical School",
      department: "Department of Psychiatry",
      project: "Mental Health Assessment Tools",
      duration: "2024-2025",
      focus: "Development of clinical-grade mental health screening tools"
    }
  ];

  const researchAreas = [
    {
      title: "Psychometric Validation",
      icon: Award,
      description: "Rigorous validation of assessment tools using classical test theory and item response theory methodologies."
    },
    {
      title: "AI & Personalization", 
      icon: TrendingUp,
      description: "Leveraging machine learning to create adaptive, personalized assessment experiences."
    },
    {
      title: "Accessibility Research",
      icon: Users,
      description: "Ensuring assessments are accessible and equitable across diverse populations and abilities."
    },
    {
      title: "Cross-Cultural Studies",
      icon: Search,
      description: "Validating assessment tools across different cultural contexts and languages."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-heading mb-6">
              Research & <span className="text-primary">Innovation</span>
            </h1>
            <p className="text-xl text-foreground-soft max-w-3xl mx-auto mb-8">
              Advancing the science of assessment through rigorous research, academic partnerships, 
              and evidence-based innovation. Our commitment to scientific excellence drives everything we do.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="px-8">
                View Publications
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Research Partnerships
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-heading mb-4">Research Focus Areas</h2>
            <p className="text-lg text-foreground-soft max-w-2xl mx-auto">
              Our interdisciplinary research spans psychology, technology, and education, 
              driving innovation in digital assessment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchAreas.map((area, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-heading mb-3">{area.title}</h3>
                  <p className="text-foreground-soft text-sm leading-relaxed">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Content Tabs */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="publications" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="publications">Publications</TabsTrigger>
              <TabsTrigger value="whitepapers">White Papers</TabsTrigger>
              <TabsTrigger value="ongoing">Ongoing Studies</TabsTrigger>
              <TabsTrigger value="collaborations">Partnerships</TabsTrigger>
            </TabsList>

            <TabsContent value="publications" className="mt-8">
              <div className="space-y-6">
                {publications.map((pub, index) => (
                  <Card key={index} className="hover:shadow-elegant transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <Badge variant="secondary">{pub.type}</Badge>
                            <Badge variant={pub.impact === 'High Impact' ? 'default' : 'outline'}>
                              {pub.impact}
                            </Badge>
                            <span className="text-foreground-soft text-sm">{pub.year}</span>
                          </div>
                          <h3 className="text-xl font-semibold text-heading mb-2">{pub.title}</h3>
                          <p className="text-primary font-medium mb-2">{pub.authors}</p>
                          <p className="text-foreground-soft text-sm mb-3">{pub.journal}</p>
                          <p className="text-foreground-soft leading-relaxed mb-4">{pub.abstract}</p>
                          <div className="flex items-center gap-6 text-sm text-foreground-soft">
                            <span>{pub.downloads} downloads</span>
                            <span>{pub.citations} citations</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <FileText className="w-4 h-4 mr-1" />
                            Read
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
            </TabsContent>

            <TabsContent value="whitepapers" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {whitepapers.map((paper, index) => (
                  <Card key={index} className="hover:shadow-elegant transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">{paper.type}</Badge>
                        <span className="text-foreground-soft text-sm">{paper.year}</span>
                      </div>
                      <CardTitle className="text-lg">{paper.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-primary font-medium mb-2">{paper.authors}</p>
                      <p className="text-foreground-soft text-sm leading-relaxed mb-4">
                        {paper.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-foreground-soft">{paper.pages}</span>
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ongoing" className="mt-8">
              <div className="space-y-6">
                {ongoingStudies.map((study, index) => (
                  <Card key={index} className="hover:shadow-elegant transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <Badge variant="default">{study.status}</Badge>
                            <div className="flex items-center text-foreground-soft text-sm">
                              <Calendar className="w-4 h-4 mr-1" />
                              {study.startDate} - {study.expectedCompletion}
                            </div>
                          </div>
                          <h3 className="text-xl font-semibold text-heading mb-2">{study.title}</h3>
                          <p className="text-primary font-medium mb-2">Principal Investigator: {study.lead}</p>
                          <p className="text-foreground-soft leading-relaxed mb-4">{study.description}</p>
                          <div className="flex items-center gap-6 text-sm text-foreground-soft">
                            <span>{study.participants}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Learn More
                            <ExternalLink className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="collaborations" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {collaborations.map((collab, index) => (
                  <Card key={index} className="hover:shadow-elegant transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <BookOpen className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-heading mb-1">{collab.institution}</h3>
                          <p className="text-primary font-medium text-sm mb-2">{collab.department}</p>
                          <p className="text-foreground-soft font-medium mb-2">{collab.project}</p>
                          <p className="text-foreground-soft text-sm leading-relaxed mb-3">
                            {collab.focus}
                          </p>
                          <Badge variant="outline" className="text-xs">
                            {collab.duration}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Research Community</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Collaborate with leading researchers, access cutting-edge findings, 
            and contribute to the future of assessment science.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="px-8">
              Research Partnerships
            </Button>
            <Button variant="outline" size="lg" className="px-8 border-white/20 text-white hover:bg-white/10">
              Subscribe to Updates
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Research;