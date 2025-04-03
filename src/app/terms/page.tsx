import { Layout } from "@/components/layout/layout"

export default function TermsOfServicePage() {
  return (
    <Layout>
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: April 1, 2023</p>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p>
              Welcome to Velora. These Terms of Service ("Terms") govern your access to and use of our website,
              products, and services. By accessing or using our services, you agree to be bound by these Terms.
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound
              by these Terms. If you do not agree to these Terms, you may not access or use our services.
            </p>

            <h2>2. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice of any material changes by
              posting the updated Terms on our website or by sending you an email. Your continued use of our services
              after such modifications constitutes your acceptance of the updated Terms.
            </p>

            <h2>3. Account Registration</h2>
            <p>
              To access certain features of our website, you may need to create an account. You are responsible for
              maintaining the confidentiality of your account credentials and for all activities that occur under your
              account. You agree to provide accurate and complete information when creating your account and to update
              your information as necessary.
            </p>

            <h2>4. Products and Pricing</h2>
            <p>
              All product descriptions, images, and prices are subject to change without notice. We reserve the right to
              limit quantities, discontinue products, or correct pricing errors at any time. Prices displayed on our
              website are in the currency indicated and do not include taxes, shipping, or handling fees, which will be
              added at checkout.
            </p>

            <h2>5. Orders and Payment</h2>
            <p>
              When you place an order, you are making an offer to purchase the products at the listed price. We reserve
              the right to accept or decline your order for any reason. Payment must be made at the time of order. We
              accept various payment methods as indicated on our website.
            </p>

            <h2>6. Shipping and Delivery</h2>
            <p>
              We will make reasonable efforts to deliver products within the estimated delivery time. However, delivery
              times are not guaranteed, and delays may occur due to factors beyond our control. Risk of loss and title
              for products pass to you upon delivery to the carrier.
            </p>

            <h2>7. Returns and Refunds</h2>
            <p>
              Our return and refund policy is outlined in our Shipping & Returns page. By making a purchase, you agree
              to the terms of this policy.
            </p>

            <h2>8. Intellectual Property</h2>
            <p>
              All content on our website, including text, graphics, logos, images, and software, is the property of
              Velora or its licensors and is protected by copyright, trademark, and other intellectual property laws.
              You may not reproduce, distribute, modify, or create derivative works from any content without our express
              written consent.
            </p>

            <h2>9. User Content</h2>
            <p>
              By submitting reviews, comments, or other content to our website, you grant us a non-exclusive,
              royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt,
              publish, translate, create derivative works from, distribute, and display such content throughout the
              world in any media.
            </p>

            <h2>10. Prohibited Conduct</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use our services for any illegal purpose</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Interfere with the proper functioning of our website</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Engage in any activity that could damage, disable, or impair our services</li>
              <li>Use any automated means to access or collect data from our website</li>
              <li>Impersonate any person or entity</li>
            </ul>

            <h2>11. Disclaimer of Warranties</h2>
            <p>
              OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR
              IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, OR NON-INFRINGEMENT.
            </p>

            <h2>12. Limitation of Liability</h2>
            <p>
              IN NO EVENT SHALL VELORA, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT,
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS,
              DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO
              ACCESS OR USE THE SERVICES.
            </p>

            <h2>13. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Velora and its officers, directors, employees, and
              agents from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees
              (including reasonable attorneys' fees) arising from your use of our services or violation of these Terms.
            </p>

            <h2>14. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of New York,
              without regard to its conflict of law provisions. Any dispute arising from these Terms shall be resolved
              exclusively in the state or federal courts located in New York County, New York.
            </p>

            <h2>15. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited
              or eliminated to the minimum extent necessary so that the Terms shall otherwise remain in full force and
              effect and enforceable.
            </p>

            <h2>16. Entire Agreement</h2>
            <p>
              These Terms constitute the entire agreement between you and Velora regarding your use of our services and
              supersede all prior agreements and understandings, whether written or oral.
            </p>

            <h2>17. Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p>
              Email: legal@velora.com
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

