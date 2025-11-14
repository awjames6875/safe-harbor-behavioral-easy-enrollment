import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with Back Button */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" className="gap-2" asChild>
            <Link href="/" data-testid="button-back-enrollment">
              <ArrowLeft className="h-4 w-4" />
              Back to Enrollment
            </Link>
          </Button>
        </div>
      </header>

      {/* Privacy Policy Content */}
      <main className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        <article className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold mb-2" data-testid="heading-privacy">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-8" data-testid="text-last-updated">
            Last updated: November 14, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="mb-4">
              Safe Harbor Behavioral Health ("Safe Harbor," "we," "us," or "our") operates Safe Harbor Easy Enrollment (the "Site"). This Privacy Policy explains how we collect, use, disclose, and protect the information you provide when using this Site as part of the Body & Brain™ Daycare Program enrollment process.
            </p>
            <p className="mb-4">
              By accessing or using the Site, you agree to the practices described in this Privacy Policy. If you do not agree, please do not use the Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <p className="mb-4">
              We may collect the following categories of information:
            </p>
            
            <h3 className="text-xl font-semibold mb-3">2.1 Information You Provide Directly</h3>
            <p className="mb-2">This includes information you voluntarily submit through forms, including:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Parent/guardian contact information (name, phone, email, address)</li>
              <li>Child information (name, age, date of birth, daycare site, guardian relationship)</li>
              <li>Insurance information (including SoonerCare/Medicaid details)</li>
              <li>Scheduling preferences</li>
              <li>Any additional notes or information you choose to provide</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2.2 Automatically Collected Information</h3>
            <p className="mb-2">When you access the Site, we may automatically collect certain technical data, including:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device type</li>
              <li>Pages visited</li>
              <li>Date and time of access</li>
              <li>Basic analytics information</li>
            </ul>
            <p className="mb-4">
              This information helps us improve the Site, troubleshoot issues, and understand usage patterns. We do not use this information to identify individual users.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="mb-2">We use the information collected to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Process child enrollment for the Body & Brain™ Daycare Program</li>
              <li>Verify insurance eligibility (including SoonerCare)</li>
              <li>Contact you about enrollment steps, scheduling, paperwork, and service details</li>
              <li>Maintain required program and compliance records</li>
              <li>Improve the Site and our services</li>
              <li>Communicate updates, reminders, or important program information</li>
              <li>Respond to questions or support requests</li>
              <li>Meet regulatory, billing, and reporting obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. How We Protect Your Information</h2>
            <p className="mb-4">
              We use reasonable administrative, technical, and physical safeguards designed to protect the data submitted through this Site. However, no online system can be guaranteed 100% secure.
            </p>
            <p className="mb-4">
              By using the Site, you acknowledge these limitations and assume responsibility for protecting your own devices and login information (if applicable).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Sharing of Information</h2>
            <p className="mb-4">
              Safe Harbor does <strong>not sell</strong> or rent your personal information.
            </p>
            <p className="mb-2">We may share information under the following circumstances:</p>

            <h3 className="text-xl font-semibold mb-3">5.1 With Your Consent</h3>
            <p className="mb-4">
              For example, when coordinating with partner daycare centers or therapy providers.
            </p>

            <h3 className="text-xl font-semibold mb-3">5.2 With Service Providers</h3>
            <p className="mb-4">
              We may use third-party platforms to securely receive forms, process data, or send communications. These vendors are required to protect the privacy of your information.
            </p>

            <h3 className="text-xl font-semibold mb-3">5.3 For Legal and Compliance Purposes</h3>
            <p className="mb-4">
              We may disclose information if required by law, regulation, court order, or to comply with SoonerCare/Medicaid, ODMHSAS, or other state/federal requirements.
            </p>

            <h3 className="text-xl font-semibold mb-3">5.4 Program Operations</h3>
            <p className="mb-4">
              Information may be shared among Safe Harbor staff and contractors directly involved in enrollment, intake, service delivery, or case management.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Cookies and Tracking Technologies</h2>
            <p className="mb-2">The Site may use basic analytics, session data, or optional cookies to improve user experience. Cookies help with:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Saving form progress</li>
              <li>Improving page load performance</li>
              <li>Understanding how users navigate the Site</li>
            </ul>
            <p className="mb-4">
              You can disable cookies in your browser, but certain features of the Site may not work as intended.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Children's Privacy</h2>
            <p className="mb-4">
              The Site collects information about children <strong>only</strong> for the purpose of enrollment into services.
            </p>
            <p className="mb-4">
              All information must be submitted by a parent, legal guardian, or legally authorized caregiver.
            </p>
            <p className="mb-4">
              We do not knowingly collect information directly from children.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Communications & Text Messages</h2>
            <p className="mb-2">By providing your phone number and email address, you consent to receive communications regarding:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Enrollment</li>
              <li>Scheduling</li>
              <li>Required documents</li>
              <li>Program participation</li>
              <li>Service updates</li>
            </ul>
            <p className="mb-4">
              Message/data rates may apply.
            </p>
            <p className="mb-4">
              You may opt out of non-essential communication at any time, but essential enrollment or scheduling messages may still be required.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Data Retention</h2>
            <p className="mb-2">We retain information for as long as necessary to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Complete enrollment</li>
              <li>Provide program services</li>
              <li>Meet Medicaid/SoonerCare, ODMHSAS, or other regulatory requirements</li>
              <li>Maintain accurate records under applicable law</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Third-Party Links</h2>
            <p className="mb-4">
              The Site may link to third-party tools or platforms (e.g., form processors, scheduling tools, intake forms).
            </p>
            <p className="mb-4">
              Safe Harbor is not responsible for the privacy, security, or content of these external sites.
            </p>
            <p className="mb-4">
              You are encouraged to review the privacy policies of any third-party site you interact with.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. HIPAA & Other Privacy Rights</h2>
            <p className="mb-4">
              Safe Harbor may provide a <strong>Notice of Privacy Practices (NPP)</strong> describing how protected health information (PHI) is used and disclosed under HIPAA.
            </p>
            <p className="mb-4">
              Where HIPAA or another legally required privacy notice applies, that notice controls.
            </p>
            <p className="mb-4">
              This Site is mainly an enrollment tool and not an EMR system. Information submitted here may become part of your child's clinical record once services begin.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Your Rights</h2>
            <p className="mb-2">Depending on applicable federal or state law, you may have rights to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Access or request copies of certain information</li>
              <li>Request corrections</li>
              <li>Request restrictions on certain uses</li>
              <li>Withdraw consent (where applicable)</li>
              <li>Ask questions or file privacy-related concerns</li>
            </ul>
            <p className="mb-4">
              To exercise these rights, use the contact information on the Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy periodically.
            </p>
            <p className="mb-4">
              When changes are made, the "Last updated" date at the top of this page will be revised.
            </p>
            <p className="mb-4">
              Your continued use of the Site after changes indicates acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">14. Contact Information</h2>
            <p className="mb-4">
              If you have questions about this Privacy Policy, data practices, or enrollment, please contact us using the contact information available on the Site's enrollment or contact page.
            </p>
          </section>

          {/* Back to Enrollment Button */}
          <div className="mt-12 pt-8 border-t text-center">
            <Button variant="default" asChild>
              <Link href="/" data-testid="button-back-enrollment-bottom">
                Back to Enrollment
              </Link>
            </Button>
          </div>
        </article>
      </main>
    </div>
  );
}
