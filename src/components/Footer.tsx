import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "All Assessments", href: "/" },
    { name: "Education", href: "/education" },
    { name: "Health", href: "/health" },
    { name: "Business", href: "/business" },
    { name: "Personal", href: "/personal" },
    { name: "Trending", href: "/trending" }
  ];

  const support = [
    { name: "Help Center", href: "/help" },
    { name: "Contact Us", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "User Guide", href: "/guide" },
    { name: "System Status", href: "/status" },
    { name: "Feedback", href: "/feedback" }
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Press Kit", href: "/press" },
    { name: "Blog", href: "/blog" },
    { name: "Research", href: "/research" },
    { name: "Release Notes", href: "/release-notes" }
  ];

  const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Data Protection", href: "/data-protection" },
    { name: "Accessibility", href: "/accessibility" },
    { name: "Compliance", href: "/compliance" }
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter Section */}
      <div className="bg-gradient-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Stay Updated with Latest Assessments</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Get exclusive access to new assessments, insights, and personalized growth recommendations delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button variant="secondary" className="px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-heading">AssessmentHub</h3>
              </div>
              <p className="text-foreground-soft mb-6 max-w-sm">
                The world's most comprehensive platform for personal and professional assessments. 
                Trusted by millions worldwide to unlock potential and drive growth.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center text-foreground-soft">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="text-sm">hello@assessmenthub.com</span>
                </div>
                <div className="flex items-center text-foreground-soft">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm">1-800-ASSESS-1</span>
                </div>
                <div className="flex items-center text-foreground-soft">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-heading mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-foreground-soft hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold text-heading mb-4">Support</h4>
              <ul className="space-y-2">
                {support.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-foreground-soft hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold text-heading mb-4">Company</h4>
              <ul className="space-y-2">
                {company.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-foreground-soft hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold text-heading mb-4">Legal</h4>
              <ul className="space-y-2">
                {legal.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-foreground-soft hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom Section */}
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Copyright */}
            <div className="text-foreground-soft text-sm">
              © {currentYear} AssessmentHub. All rights reserved. | 
              <span className="ml-1">Trusted by 2M+ users worldwide</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground-soft hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Certifications */}
            <div className="flex items-center space-x-4 text-xs text-foreground-soft">
              <span className="px-2 py-1 bg-primary-soft text-primary rounded">ISO 27001</span>
              <span className="px-2 py-1 bg-secondary-soft text-secondary rounded">GDPR Compliant</span>
              <span className="px-2 py-1 bg-highlight-soft text-highlight rounded">WCAG 2.1 AA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;