import Navigation from "@/components/Navigation";
import AssessmentCard from "@/components/AssessmentCard";
import { sampleAssessments } from "@/data/assessments";
import { User, Heart, Sparkles, Compass } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Personal = () => {
  const personalAssessments = sampleAssessments.filter(
    assessment => assessment.category === "Personal"
  );

  const personalFeatures = [
    {
      icon: User,
      title: "Self-Discovery", 
      description: "Understand your personality, values, and motivations"
    },
    {
      icon: Heart,
      title: "Emotional Intelligence",
      description: "Develop empathy, self-awareness, and social skills"
    },
    {
      icon: Sparkles,
      title: "Personal Growth",
      description: "Identify strengths and areas for development"
    },
    {
      icon: Compass,
      title: "Life Direction",
      description: "Find clarity on your goals and life purpose"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-10 h-10 mr-3" />
              <h1 className="text-4xl font-bold">Personal Development Assessments</h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Embark on a journey of self-discovery and personal growth. Our scientifically-backed 
              assessments help you understand yourself better and unlock your full potential.
            </p>
            <Badge className="bg-white/20 text-white px-4 py-2 text-lg">
              {personalAssessments.length} Self-Discovery Tools
            </Badge>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-heading text-center mb-12">
            Your Journey to Self-Understanding
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {personalFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary-soft rounded-full mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-heading mb-2">{feature.title}</h3>
                <p className="text-foreground-soft">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Personal Growth Philosophy */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-heading mb-6">
            Every Great Journey Begins with Self-Knowledge
          </h2>
          <p className="text-lg text-foreground-soft mb-8 leading-relaxed">
            Personal development is not a destination—it's a lifelong journey of growth, discovery, and transformation. 
            Our assessments provide the compass to guide you toward becoming the best version of yourself.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2M+</div>
              <div className="text-foreground-soft">Lives Transformed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">4.9★</div>
              <div className="text-foreground-soft">User Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">92%</div>
              <div className="text-foreground-soft">Report Positive Change</div>
            </div>
          </div>
        </div>
      </div>

      {/* Growth Areas */}
      <div className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-heading text-center mb-12">
            Areas of Personal Growth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Personality & Identity", 
                description: "Discover your core personality traits, values, and what makes you unique",
                icon: "🧠"
              },
              { 
                title: "Relationships & Communication", 
                description: "Improve your interpersonal skills and build stronger connections",
                icon: "💬"
              },
              { 
                title: "Career & Life Purpose", 
                description: "Find alignment between your passions, skills, and career path",
                icon: "🎯"
              },
              { 
                title: "Emotional Wellbeing", 
                description: "Develop emotional intelligence and resilience for life's challenges",
                icon: "❤️"
              },
              { 
                title: "Habits & Lifestyle", 
                description: "Build positive habits and create a lifestyle that supports your goals",
                icon: "⚡"
              },
              { 
                title: "Mindset & Beliefs", 
                description: "Identify limiting beliefs and cultivate a growth-oriented mindset",
                icon: "🌱"
              }
            ].map((area, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border">
                <div className="text-3xl mb-3">{area.icon}</div>
                <h3 className="text-xl font-semibold text-heading mb-2">{area.title}</h3>
                <p className="text-foreground-soft">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Assessments Grid */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-heading mb-4">Personal Development Assessments</h2>
            <p className="text-foreground-soft max-w-2xl mx-auto">
              Explore our carefully curated collection of personal development assessments, 
              each designed to provide deep insights and actionable guidance for your growth journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalAssessments.map((assessment) => (
              <AssessmentCard key={assessment.id} {...assessment} />
            ))}
          </div>

          {/* Inspirational CTA */}
          <div className="text-center mt-12">
            <div className="bg-gradient-primary text-white rounded-xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Your Best Self is Waiting
              </h3>
              <p className="text-white/90 mb-6">
                The most important investment you can make is in yourself. 
                Start your personal development journey today and unlock the extraordinary person within you.
              </p>
              <Button variant="secondary" size="lg" className="px-8">
                Begin Your Journey
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;