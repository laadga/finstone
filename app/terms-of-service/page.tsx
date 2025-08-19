"use client";

import { DynamicNav } from '@/components/ui/dynamic-nav';

export default function TermsOfService() {
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

      {/* Terms of Service Content */}
      <section className="pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-black">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using the services provided by Finstone AI Audit ("we," "our," or "us"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">2. Description of Service</h2>
              <p className="mb-4">
                Finstone AI Audit provides AI-powered financial systems auditing services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Financial operations analysis and optimization</li>
                <li>Process automation recommendations</li>
                <li>Compliance and risk assessment</li>
                <li>Technology stack evaluation</li>
                <li>ROI calculation and forecasting</li>
                <li>Implementation roadmap development</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">3. User Responsibilities</h2>
              <p className="mb-4">As a user of our services, you agree to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account and information</li>
                <li>Use our services for lawful purposes only</li>
                <li>Not attempt to reverse engineer or hack our systems</li>
                <li>Respect intellectual property rights</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">4. Service Delivery and Timeline</h2>
              <p className="mb-4">
                Our AI audit services are typically delivered within 14 days from the initial kickoff call. However, actual delivery times may vary based on:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Complexity of your business operations</li>
                <li>Availability of required information and data</li>
                <li>Scope of the audit requested</li>
                <li>Team availability and scheduling</li>
              </ul>
              <p>We will communicate any delays and provide updated timelines as needed.</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">5. Payment Terms</h2>
              <p className="mb-4">
                Our AI audit service is offered at a flat fee of $1,000 USD. Payment terms are as follows:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Payment is due upon service initiation</li>
                <li>We accept major credit cards and bank transfers</li>
                <li>All fees are non-refundable except as specified in our guarantee</li>
                <li>Additional services beyond the scope of the audit may incur additional charges</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">6. Our Guarantee</h2>
              <p className="mb-4">
                We stand behind our services with the following guarantee:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>If our audit doesn't identify at least $10,000 in potential annual savings, we'll provide a full refund</li>
                <li>Guarantee applies only to the initial audit service</li>
                <li>Implementation services are not covered by this guarantee</li>
                <li>Refund requests must be made within 30 days of audit delivery</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">7. Intellectual Property</h2>
              <p className="mb-4">
                All content, methodologies, and intellectual property developed by Finstone AI Audit remain our exclusive property. You receive a license to use the audit results and recommendations for your business operations only.
              </p>
              <p className="mb-4">
                You retain ownership of your business data and information. We will not use your proprietary information for any purpose other than providing our services.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">8. Confidentiality</h2>
              <p className="mb-4">
                We understand the sensitive nature of financial and business information. We commit to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Maintaining strict confidentiality of all client information</li>
                <li>Using information only for the purpose of providing our services</li>
                <li>Implementing appropriate security measures</li>
                <li>Requiring all team members to sign confidentiality agreements</li>
                <li>Not sharing client information with third parties without consent</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">9. Limitation of Liability</h2>
              <p className="mb-4">
                Our liability is limited as follows:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>We are not liable for any indirect, incidental, or consequential damages</li>
                <li>Our total liability is limited to the amount paid for our services</li>
                <li>We are not responsible for implementation results or business outcomes</li>
                <li>Recommendations are provided "as is" without warranty</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">10. Disclaimers</h2>
              <p className="mb-4">
                Our services are provided on an "as is" and "as available" basis. We make no warranties, express or implied, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Warranties of merchantability or fitness for a particular purpose</li>
                <li>Guarantees of specific business outcomes or financial results</li>
                <li>Assurances that our recommendations will solve all business problems</li>
                <li>Promises of uninterrupted or error-free service</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">11. Termination</h2>
              <p className="mb-4">
                Either party may terminate this agreement with written notice. Upon termination:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>We will deliver any completed work</li>
                <li>You will pay for services rendered up to termination</li>
                <li>Confidentiality obligations continue indefinitely</li>
                <li>Intellectual property rights remain as specified</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">12. Governing Law</h2>
              <p className="mb-4">
                These terms are governed by and construed in accordance with the laws of the jurisdiction where Finstone AI Audit operates. Any disputes will be resolved through good faith negotiation or mediation before pursuing legal action.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">13. Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of the modified terms.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">14. Contact Information</h2>
              <p className="mb-4">For questions about these terms or our services, please contact us:</p>
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


