import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermsOfService() {
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

      {/* Terms Content */}
      <main className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        <article className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold mb-2" data-testid="heading-terms">
            Terms of Service
          </h1>
          <p className="text-muted-foreground mb-8" data-testid="text-last-updated">
            Last updated: November 14, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="mb-4">
              Welcome to Safe Harbor Easy Enrollment (the "Site"), an online enrollment and information portal operated for Safe Harbor Behavioral Health's Body & Brain™ Daycare program ("Safe Harbor," "we," "us," or "our").
            </p>
            <p className="mb-4">
              These Terms of Service ("Terms") govern your access to and use of this Site, including any forms, content, features, and services provided through it (collectively, the "Services").
            </p>
            <p className="mb-4">
              By accessing or using the Site, you agree to be bound by these Terms. If you do not agree to these Terms, you must not use the Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Who This Site Is For</h2>
            <p className="mb-4">
              This Site is intended for parents, legal guardians, and authorized caregivers of children who may participate in Safe Harbor's programs through partner daycare centers and community sites, primarily located in Oklahoma.
            </p>
            <p className="mb-2">By using this Site, you represent that:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>You are at least 18 years old; and</li>
              <li>You are a parent, legal guardian, or otherwise authorized to provide information and consent for the child or children you are enrolling.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Description of the Services</h2>
            <p className="mb-2">Through this Site, you can:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Submit enrollment information for a child or children;</li>
              <li>Provide contact and insurance information (including, where applicable, Medicaid / SoonerCare information);</li>
              <li>Review general information about Safe Harbor's Body & Brain™ Daycare services; and</li>
              <li>Receive communications from Safe Harbor regarding enrollment, scheduling, paperwork, and related program details.</li>
            </ul>
            <p className="mb-4">
              This Site is primarily an intake and enrollment tool. It is not an electronic medical record system and is not a substitute for in-person clinical care or professional medical advice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. No Medical or Emergency Advice</h2>
            <p className="mb-4">
              The Site may provide general educational or informational content about behavioral health and wellness. However:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>The Site does not provide medical advice, diagnosis, or treatment.</li>
              <li>Nothing on this Site should be used as a substitute for professional medical, mental health, or emergency services.</li>
            </ul>
            <p className="mb-4 font-semibold bg-destructive/10 border-l-4 border-destructive p-4 rounded">
              IF YOU OR YOUR CHILD ARE EXPERIENCING A MEDICAL OR MENTAL HEALTH EMERGENCY, CALL 911 OR GO TO THE NEAREST EMERGENCY ROOM IMMEDIATELY.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Your Responsibilities and Commitments</h2>
            <p className="mb-2">When you use this Site, you agree to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide accurate, current, and complete information about yourself and the child/children you are enrolling;</li>
              <li>Only submit information for a child if you are the parent, legal guardian, or otherwise legally authorized to do so;</li>
              <li>Keep your contact information up to date so Safe Harbor can reach you about services; and</li>
              <li>Use the Site only for lawful purposes and in compliance with these Terms and applicable laws.</li>
            </ul>
            <p className="mb-4">
              You are responsible for any activity that occurs under your use of the Site and for any information you choose to submit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Privacy and Use of Information</h2>
            <p className="mb-2">When you submit information through this Site, we collect and use that information to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Process enrollment;</li>
              <li>Verify eligibility and benefits (including SoonerCare / Medicaid, where applicable);</li>
              <li>Communicate with you about services; and</li>
              <li>Operate, maintain, and improve our programs and operations.</li>
            </ul>
            <p className="mb-4">
              Safe Harbor maintains separate privacy practices and may provide a Notice of Privacy Practices that describes how certain health-related information is used and disclosed in compliance with applicable law (including, where applicable, HIPAA). Those privacy notices are incorporated by reference into these Terms. If there is a conflict between these Terms and a legally required privacy notice, the legally required privacy notice will control with respect to protected health information.
            </p>
            <p className="mb-4">
              Although we use reasonable safeguards designed to protect the information you submit, no website or electronic system can be guaranteed 100% secure. By using this Site, you understand and accept these limitations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Communications and Electronic Notices</h2>
            <p className="mb-2">
              By providing your contact information (such as phone number and email address), you consent to being contacted by Safe Harbor by phone, text message, email, and other reasonable means regarding:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Enrollment and intake;</li>
              <li>Scheduling and appointment reminders;</li>
              <li>Requests for additional information or documentation; and</li>
              <li>Program updates and related service information.</li>
            </ul>
            <p className="mb-4">
              Message and data rates may apply for SMS/text messages. You may opt out of certain non-essential communications by following the instructions provided in those messages or by contacting us directly; however, some communications related to enrollment, scheduling, or necessary program information may be required while your child is enrolled.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Third-Party Services and Links</h2>
            <p className="mb-4">
              The Site may link to or integrate with third-party forms, payment processors, video platforms, or other external services ("Third-Party Services"). Safe Harbor does not control and is not responsible for Third-Party Services, including their content, policies, or security practices.
            </p>
            <p className="mb-4">
              Your use of any Third-Party Services is subject to the terms, conditions, and privacy policies of those third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Prohibited Uses</h2>
            <p className="mb-2">You agree that you will not:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Use the Site in any way that violates any federal, state, or local law or regulation;</li>
              <li>Misrepresent your identity or your authority to act for or on behalf of a child;</li>
              <li>Attempt to gain unauthorized access to the Site or any related systems;</li>
              <li>Interfere with or disrupt the operation of the Site; or</li>
              <li>Use bots, scripts, or automated methods to submit fraudulent or abusive information.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Intellectual Property</h2>
            <p className="mb-4">
              The Site, including its text, graphics, logos, and the Body & Brain™ program materials, may contain content owned by or licensed to Safe Harbor and protected by intellectual property laws.
            </p>
            <p className="mb-4">
              You may use the Site solely for the purpose of enrolling and participating in Safe Harbor's programs. You may not reproduce, distribute, modify, or create derivative works of the Site or its content except as allowed by law or with our prior written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Disclaimer of Warranties</h2>
            <p className="mb-4">
              THE SITE AND SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED.
            </p>
            <p className="mb-4">
              TO THE FULLEST EXTENT PERMITTED BY LAW, SAFE HARBOR DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="mb-4">
              WE DO NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Limitation of Liability</h2>
            <p className="mb-4">
              TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL SAFE HARBOR OR ITS OWNERS, DIRECTORS, EMPLOYEES, CONTRACTORS, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF DATA OR PROFITS, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF (OR INABILITY TO USE) THE SITE OR SERVICES.
            </p>
            <p className="mb-4">
              TO THE EXTENT SAFE HARBOR IS FOUND DIRECTLY LIABLE FOR ANY CLAIM ARISING OUT OF OR RELATED TO THE SITE OR THESE TERMS, THAT LIABILITY WILL BE LIMITED TO THE GREATER OF: (A) THE AMOUNT YOU HAVE PAID (IF ANY) THROUGH THE SITE IN THE 12 MONTHS BEFORE THE CLAIM AROSE, OR (B) ONE HUNDRED DOLLARS ($100).
            </p>
            <p className="mb-4">
              SOME JURISDICTIONS DO NOT ALLOW CERTAIN LIMITATIONS OF LIABILITY, SO SOME OF THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Indemnification</h2>
            <p className="mb-2">
              You agree to indemnify, defend, and hold harmless Safe Harbor and its owners, directors, employees, contractors, and agents from and against any and all claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Your violation of these Terms; or</li>
              <li>Your misuse of the Site or Services; or</li>
              <li>Any information or content you submit through the Site.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">14. Changes to the Site or These Terms</h2>
            <p className="mb-4">
              We may update, modify, or discontinue any part of the Site or Services at any time.
            </p>
            <p className="mb-4">
              We may also update these Terms from time to time. When we do, we will change the "Last updated" date at the top of this page. Your continued use of the Site after any changes to the Terms constitutes your acceptance of the updated Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">15. Termination</h2>
            <p className="mb-4">
              We may suspend or terminate your access to the Site at any time, with or without notice, if we believe you have violated these Terms or if necessary to protect the security, integrity, or lawful operation of the Site.
            </p>
            <p className="mb-4">
              You may stop using the Site at any time.
            </p>
          </section>

          {/* Back to Top Button */}
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
