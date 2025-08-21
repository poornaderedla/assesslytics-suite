import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-highlight text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FileText className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-white/90">
            Please read these terms carefully before using AssessmentHub
          </p>
        </div>
      </div>

      {/* Terms Content */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-heading mb-4">1. Acceptance of Terms</h2>
              <div className="space-y-4 text-foreground-soft">
                <p>By accessing and using AssessmentHub ("the Service"), you accept and agree to be bound by the terms and provision of this agreement.</p>
                <p>If you do not agree to abide by the above, please do not use this service.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-heading mb-4">2. Description of Service</h2>
              <div className="space-y-4 text-foreground-soft">
                <p>AssessmentHub provides online assessment tools across various categories including education, health, business, and personal development. Our service includes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access to over 300 assessments and evaluation tools</li>
                  <li>Personalized results and recommendations</li>
                  <li>Progress tracking and analytics</li>
                  <li>Educational resources and insights</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-heading mb-4">3. User Accounts and Responsibilities</h2>
              <div className="space-y-4 text-foreground-soft">
                <p><strong>Account Creation:</strong> You may create an account to access additional features. You are responsible for maintaining the confidentiality of your account credentials.</p>
                <p><strong>Accurate Information:</strong> You agree to provide accurate, current, and complete information when creating your account.</p>
                <p><strong>Prohibited Uses:</strong> You agree not to use the service for any unlawful purpose or in any way that could damage, disable, or impair the service.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-heading mb-4">4. Assessment Results and Disclaimers</h2>
              <div className="space-y-4 text-foreground-soft">
                <p><strong>Educational Purpose:</strong> All assessments are provided for educational and informational purposes only.</p>
                <p><strong>Professional Advice:</strong> Assessment results should not replace professional medical, psychological, educational, or business advice.</p>
                <p><strong>Accuracy:</strong> While we strive for accuracy, we do not guarantee that assessment results will be error-free or suitable for every individual situation.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-heading mb-4">5. Intellectual Property</h2>
              <div className="space-y-4 text-foreground-soft">
                <p>All content, assessments, software, and materials available through the Service are protected by intellectual property rights.</p>
                <p>You may not reproduce, distribute, modify, or create derivative works of any content without explicit permission.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-heading mb-4">6. Privacy and Data Protection</h2>
              <div className="space-y-4 text-foreground-soft">
                <p>Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.</p>
                <p>By using the Service, you consent to the collection and use of information as described in our Privacy Policy.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-heading mb-4">7. Limitation of Liability</h2>
              <div className="space-y-4 text-foreground-soft">
                <p>AssessmentHub shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the service.</p>
                <p>This limitation applies whether the alleged liability is based on contract, tort, negligence, or any other basis.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-heading mb-4">8. Modifications to Terms</h2>
              <div className="space-y-4 text-foreground-soft">
                <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website.</p>
                <p>Your continued use of the Service after changes are posted constitutes acceptance of the modified terms.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-heading mb-4">9. Contact Information</h2>
              <div className="text-foreground-soft">
                <p>If you have questions about these Terms of Service, please contact us:</p>
                <div className="mt-4 space-y-2">
                  <p><strong>Email:</strong> legal@assessmenthub.com</p>
                  <p><strong>Address:</strong> AssessmentHub Inc., 123 Innovation Drive, San Francisco, CA 94105</p>
                </div>
                <p className="mt-4 text-sm">These Terms of Service were last updated on January 1, 2024.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Terms;