"use client";

import { DynamicNav } from '@/components/ui/dynamic-nav';

export default function PrivacyPolicy() {
  return (
    <main className="relative pt-0">
      {/* Navigation */}
      <DynamicNav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="font-bold text-xl text-foreground drop-shadow-lg">
              <a href="/">Finstone</a>
            </div>
          </div>
        </div>
      </DynamicNav>

      {/* Privacy Policy Content */}
      <section className="pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-black">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">1. Introduction</h2>
              <p className="mb-4">
                Finstone AI Audit ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
              </p>
              <p>
                By using our services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-black mb-3">2.1 Personal Information</h3>
              <p className="mb-4">We may collect personal information that you voluntarily provide to us, including:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Name and contact information (email, phone number)</li>
                <li>Company information and job title</li>
                <li>Business financial data and operational information</li>
                <li>Communication preferences and feedback</li>
              </ul>

              <h3 className="text-xl font-semibold text-black mb-3">2.2 Automatically Collected Information</h3>
              <p className="mb-4">When you visit our website, we automatically collect:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>IP address and browser information</li>
                <li>Pages visited and time spent on our site</li>
                <li>Device information and cookies</li>
                <li>Usage analytics and performance data</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use the collected information for:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Providing and improving our AI audit services</li>
                <li>Communicating with you about our services</li>
                <li>Processing payments and managing accounts</li>
                <li>Analyzing website usage and improving user experience</li>
                <li>Complying with legal obligations</li>
                <li>Marketing and promotional activities (with your consent)</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">4. Information Sharing and Disclosure</h2>
              <p className="mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>With your explicit consent</li>
                <li>To comply with legal requirements or court orders</li>
                <li>To protect our rights, property, or safety</li>
                <li>With trusted service providers who assist in our operations</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">5. Data Security</h2>
              <p className="mb-4">We implement appropriate security measures to protect your personal information, including:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Secure data storage and backup procedures</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">6. Your Rights and Choices</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Access and review your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
                <li>Request data portability</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">7. Cookies and Tracking Technologies</h2>
              <p className="mb-4">We use cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Provide personalized content and advertisements</li>
                <li>Improve website functionality and performance</li>
              </ul>
              <p>You can control cookie settings through your browser preferences.</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">8. Third-Party Services</h2>
              <p className="mb-4">Our website may contain links to third-party services. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">9. Data Retention</h2>
              <p className="mb-4">We retain your personal information for as long as necessary to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Provide our services and maintain your account</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Improve our services and user experience</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">10. International Data Transfers</h2>
              <p className="mb-4">Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards.</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">11. Children's Privacy</h2>
              <p className="mb-4">Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">12. Changes to This Privacy Policy</h2>
              <p className="mb-4">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">13. Contact Us</h2>
              <p className="mb-4">If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="mb-2"><strong>Email:</strong> hello@finstone.ai</p>
                <p className="mb-2"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/company/finstoneconsulting" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Finstone Consulting</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


