import Navigation from "@/components/Navigation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, Search, MessageCircle } from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      title: "General Questions",
      faqs: [
        {
          question: "What is AssessmentHub?",
          answer: "AssessmentHub is a comprehensive platform offering over 300 scientifically-validated assessments across education, health, business, and personal development. Our mission is to provide accessible, high-quality tools for personal and professional growth."
        },
        {
          question: "How much does it cost to use AssessmentHub?",
          answer: "Many of our assessments are free to use. We also offer premium assessments and features through our subscription plans, starting at $9.99/month. Check our pricing page for detailed information."
        },
        {
          question: "Are the assessments scientifically validated?",
          answer: "Yes, all our assessments are developed by experts and based on established scientific research. We regularly review and update our assessments to ensure they meet the highest standards of reliability and validity."
        }
      ]
    },
    {
      title: "Using Assessments",
      faqs: [
        {
          question: "How long does it take to complete an assessment?",
          answer: "Assessment completion times vary depending on the type and complexity. Most assessments take between 10-30 minutes to complete. The estimated time is displayed before you begin each assessment."
        },
        {
          question: "Can I save my progress and complete an assessment later?",
          answer: "Yes, if you have an account, your progress is automatically saved. You can return anytime to complete any assessment you've started."
        },
        {
          question: "How do I interpret my assessment results?",
          answer: "Each assessment comes with detailed explanations of your results, including what they mean and actionable insights. We also provide resources and recommendations based on your outcomes."
        }
      ]
    },
    {
      title: "Account & Privacy",
      faqs: [
        {
          question: "Do I need to create an account to take assessments?",
          answer: "You can take many assessments without an account, but creating one allows you to save progress, track results over time, get personalized recommendations, and access premium features."
        },
        {
          question: "Is my personal information secure?",
          answer: "Absolutely. We use industry-standard encryption and security measures to protect your data. We're GDPR compliant and never share your personal information without your explicit consent."
        },
        {
          question: "Can I delete my account and data?",
          answer: "Yes, you have full control over your data. You can delete your account and all associated data at any time through your account settings, or by contacting our support team."
        }
      ]
    },
    {
      title: "Technical Support",
      faqs: [
        {
          question: "What browsers are supported?",
          answer: "AssessmentHub works on all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version of your preferred browser for the best experience."
        },
        {
          question: "I'm having trouble accessing my account. What should I do?",
          answer: "Try resetting your password first. If that doesn't work, clear your browser cache and cookies. If you're still having issues, contact our support team at support@assessmenthub.com."
        },
        {
          question: "Can I use AssessmentHub on my mobile device?",
          answer: "Yes! Our platform is fully responsive and optimized for mobile devices. You can take assessments on your smartphone or tablet with the same great experience as on desktop."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-highlight text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-white/90">
            Find quick answers to the most common questions about AssessmentHub
          </p>
        </div>
      </div>

      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* FAQ Categories */}
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex}>
                <CardHeader>
                  <CardTitle className="text-2xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`}>
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
            ))}
          </div>

          {/* Still Need Help */}
          <div className="mt-16">
            <Card>
              <CardContent className="p-8 text-center">
                <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-heading mb-4">Still have questions?</h3>
                <p className="text-foreground-soft mb-6">
                  Can't find the answer you're looking for? Our support team is here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg">Contact Support</Button>
                  <Button variant="outline" size="lg">Browse Help Center</Button>
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