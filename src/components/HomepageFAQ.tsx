import { HelpCircle, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const HomepageFAQ = () => {
  const quickFAQs = [
    {
      question: "What is AssessmentHub?",
      answer: "AssessmentHub is a comprehensive platform offering over 300 scientifically-validated assessments across education, health, business, and personal development."
    },
    {
      question: "Are the assessments free?",
      answer: "Many assessments are completely free. We also offer premium assessments and advanced features through our subscription plans starting at $9.99/month."
    },
    {
      question: "How long do assessments take?",
      answer: "Most assessments take 10-30 minutes to complete. The estimated time is shown before you begin each assessment."
    },
    {
      question: "Are results scientifically validated?",
      answer: "Yes, all our assessments are developed by experts and based on established scientific research with regular updates to ensure reliability."
    },
    {
      question: "Can I track my progress over time?",
      answer: "Absolutely! Create a free account to save your results, track progress, and get personalized recommendations based on your outcomes."
    }
  ];

  return (
    <section className="py-20 bg-background-soft">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-soft rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-heading mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-foreground-soft max-w-2xl mx-auto">
            Get quick answers to the most common questions about our assessments and platform
          </p>
        </div>

        {/* Quick FAQs */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">Quick Answers</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {quickFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`quick-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground-soft">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Button size="lg" asChild className="group">
            <Link to="/faq">
              View All FAQs
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <p className="text-sm text-foreground-soft mt-4">
            Still have questions? <Link to="/contact" className="text-primary hover:underline">Contact our support team</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomepageFAQ;