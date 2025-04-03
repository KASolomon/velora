import { Layout } from "@/components/layout/layout"

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: April 1, 2023</p>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p>
              At Velora, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website or make a purchase.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We collect information that you provide directly to us when you register for an account, make a purchase,
              sign up for our newsletter, contact customer service, or otherwise communicate with us. This information
              may include:
            </p>
            <ul>
              <li>
                Personal identifiers such as your name, email address, postal address, phone number, and date of birth
              </li>
              <li>Account credentials such as your username and password</li>
              <li>Payment and billing information</li>
              <li>Order history and preferences</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <p>
              We also automatically collect certain information about your device and how you interact with our website,
              including:
            </p>
            <ul>
              <li>
                Device information such as your IP address, browser type, operating system, and device identifiers
              </li>
              <li>Usage information such as pages visited, time spent on pages, links clicked, and search terms</li>
              <li>Location information based on your IP address</li>
              <li>Information collected through cookies, web beacons, and other tracking technologies</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect for various purposes, including to:</p>
            <ul>
              <li>Process and fulfill your orders</li>
              <li>Create and manage your account</li>
              <li>Provide customer service and respond to your inquiries</li>
              <li>Send transactional emails, such as order confirmations and shipping updates</li>
              <li>Send marketing communications, if you have opted in</li>
              <li>Personalize your shopping experience</li>
              <li>Improve our website and services</li>
              <li>Detect and prevent fraud and unauthorized access</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Sharing Your Information</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>
                Service providers who perform services on our behalf, such as payment processing, shipping, and
                marketing
              </li>
              <li>Business partners with whom we jointly offer products or services</li>
              <li>Third parties in connection with a business transaction, such as a merger or acquisition</li>
              <li>Law enforcement or other authorities when required by law or to protect our rights</li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>

            <h2>Your Rights and Choices</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul>
              <li>Access to your personal information</li>
              <li>Correction of inaccurate or incomplete information</li>
              <li>Deletion of your personal information</li>
              <li>Restriction or objection to certain processing activities</li>
              <li>Data portability</li>
              <li>Withdrawal of consent</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided in the "Contact Us" section
              below.
            </p>

            <h2>Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to collect information about your browsing activities and
              to remember your preferences. You can manage your cookie preferences through your browser settings. Please
              note that disabling cookies may affect the functionality of our website.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information
              against unauthorized access, disclosure, alteration, and destruction. However, no method of transmission
              over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
            </p>

            <h2>International Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than the country in which you
              reside. These countries may have different data protection laws than your country of residence. We will
              take appropriate measures to ensure that your personal information remains protected in accordance with
              this Privacy Policy.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our website is not intended for children under the age of 13. We do not knowingly collect personal
              information from children under 13. If you are a parent or guardian and believe that your child has
              provided us with personal information, please contact us.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The updated version will be indicated by an updated
              "Last Updated" date. We encourage you to review this Privacy Policy periodically.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact
              us at:
            </p>
            <p>
              Email: privacy@velora.com
              <br />
              Phone: +1 (555) 123-4567
              <br />
              Address: 123 Velora Street, Luxury District, New York, NY 10001
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

