import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Eye, UserCheck } from "lucide-react";

const Privacy = () => {
  const privacyPrinciples = [
    {
      icon: Shield,
      title: "Data Protection",
      description: "We use industry-standard encryption and security measures to protect your personal information."
    },
    {
      icon: Lock,
      title: "Secure Storage",
      description: "All data is stored securely with 256-bit encryption and regular security audits."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We're clear about what data we collect, how we use it, and who we share it with."
    },
    {
      icon: UserCheck,
      title: "Your Control",
      description: "You own your data and can access, modify, or delete it at any time."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-secondary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-white/90">
            Your privacy is our priority. Learn how we protect and handle your data.
          </p>
        </div>
      </div>

      {/* Privacy Principles */}
      <div className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-heading text-center mb-12">Our Privacy Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {privacyPrinciples.map((principle, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-secondary-soft rounded-full mx-auto mb-4">
                  <principle.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-heading mb-2">{principle.title}</h3>
                <p className="text-foreground-soft">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Policy Content */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-heading mb-4">Information We Collect</h2>
              <div className="space-y-4 text-foreground-soft">
                <p><strong>Personal Information:</strong> When you create an account, we collect basic information such as your name, email address, and any profile information you choose to provide.</p>
                <p><strong>Assessment Data:</strong> We collect your responses to assessments and the results generated. This data is used to provide you with personalized insights and recommendations.</p>
                <p><strong>Usage Information:</strong> We collect information about how you use our platform, including pages visited, features used, and time spent on the platform.</p>
                <p><strong>Technical Information:</strong> We automatically collect certain technical information such as your IP address, browser type, and device information to ensure platform security and functionality.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-heading mb-4">How We Use Your Information</h2>
              <div className="space-y-4 text-foreground-soft">
                <p><strong>Service Provision:</strong> To provide and improve our assessment services, generate personalized results, and offer recommendations.</p>
                <p><strong>Communication:</strong> To send you important updates about your account, new features, and educational content (only if you've opted in).</p>
                <p><strong>Platform Improvement:</strong> To analyze usage patterns and improve our platform's functionality and user experience.</p>
                <p><strong>Security:</strong> To protect our platform and users from fraud, abuse, and security threats.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-heading mb-4">Data Sharing and Disclosure</h2>
              <div className="space-y-4 text-foreground-soft">
                <p><strong>No Sale of Personal Data:</strong> We never sell your personal information to third parties.</p>
                <p><strong>Service Providers:</strong> We may share data with trusted service providers who help us operate our platform, such as cloud hosting and analytics services. These providers are bound by strict confidentiality agreements.</p>
                <p><strong>Aggregated Data:</strong> We may share anonymized, aggregated data for research purposes or to improve assessment methodologies.</p>
                <p><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect the rights and safety of our users and platform.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-heading mb-4">Your Rights and Choices</h2>
              <div className="space-y-4 text-foreground-soft">
                <p><strong>Access:</strong> You can access and review your personal information at any time through your account settings.</p>
                <p><strong>Correction:</strong> You can update or correct your personal information through your account or by contacting us.</p>
                <p><strong>Deletion:</strong> You can request deletion of your account and personal data. Some information may be retained for legal or security purposes.</p>
                <p><strong>Data Portability:</strong> You can export your assessment data and results in a portable format.</p>
                <p><strong>Marketing Communications:</strong> You can opt out of marketing communications at any time.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-heading mb-4">Data Security</h2>
              <div className="space-y-4 text-foreground-soft">
                <p>We implement comprehensive security measures to protect your data:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>256-bit SSL encryption for all data transmission</li>
                  <li>Advanced encryption for data storage</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Strict access controls and employee training</li>
                  <li>Automated monitoring for security threats</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-heading mb-4">Contact Us</h2>
              <div className="text-foreground-soft">
                <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
                <div className="mt-4 space-y-2">
                  <p><strong>Email:</strong> privacy@assessmenthub.com</p>
                  <p><strong>Address:</strong> AssessmentHub Inc., 123 Innovation Drive, San Francisco, CA 94105</p>
                </div>
                <p className="mt-4 text-sm">This Privacy Policy was last updated on January 1, 2024.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Privacy;