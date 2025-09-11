import { useState } from "react";
import { HelpCircle, X, MessageCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const FloatingHelp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const helpOptions = [
    {
      title: "Browse FAQs",
      description: "Find answers to common questions",
      icon: <HelpCircle className="w-5 h-5" />,
      link: "/faq",
      color: "text-primary"
    },
    {
      title: "Live Chat Support",
      description: "Chat with our support team",
      icon: <MessageCircle className="w-5 h-5" />,
      link: "/contact",
      color: "text-secondary"
    },
    {
      title: "Call Support",
      description: "Speak directly with an expert",
      icon: <Phone className="w-5 h-5" />,
      link: "tel:+1-800-ASSESS",
      color: "text-highlight"
    },
    {
      title: "Email Support",
      description: "Send us a detailed message",
      icon: <Mail className="w-5 h-5" />,
      link: "mailto:support@assessmenthub.com",
      color: "text-muted-foreground"
    }
  ];

  return (
    <>
      {/* Floating Help Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full shadow-custom-lg hover:shadow-custom-xl transition-all duration-300 animate-pulse-glow"
          size="icon"
        >
          {isOpen ? <X className="w-6 h-6" /> : <HelpCircle className="w-6 h-6" />}
        </Button>
      </div>

      {/* Help Menu */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 animate-fade-in-up">
          <Card className="w-80 shadow-custom-xl border-border-hover">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-primary" />
                How can we help?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {helpOptions.map((option, index) => (
                <Link
                  key={index}
                  to={option.link}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                >
                  <div className={`${option.color} group-hover:scale-110 transition-transform`}>
                    {option.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm text-foreground">{option.title}</h4>
                    <p className="text-xs text-foreground-soft">{option.description}</p>
                  </div>
                </Link>
              ))}
              
            <div className="pt-4 border-t border-border">
              <p className="text-xs text-center text-foreground-soft">
                Available 24/7 • Average response time: 2 minutes
              </p>
              <div className="mt-3 text-center">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/faq">Browse All FAQs</Link>
                </Button>
              </div>
            </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-30 bg-background/20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default FloatingHelp;