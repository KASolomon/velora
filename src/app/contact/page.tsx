import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Layout } from "@/components/layout/layout"

export default function ContactPage() {
  return (
    <Layout>
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
            <p className="text-muted-foreground">We're here to help. Reach out to us with any questions or concerns.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl font-semibold mb-6">Get in Touch</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First Name
                    </label>
                    <Input id="first-name" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last Name
                    </label>
                    <Input id="last-name" placeholder="Enter your last name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Enter subject" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Enter your message" rows={5} />
                </div>
                <Button className="w-full bg-gold hover:bg-gold/90 text-gold-foreground">Send Message</Button>
              </form>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-gold/10 p-3">
                      <MapPin className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-medium">Our Location</h3>
                      <p className="text-muted-foreground mt-1">
                        123 Velora Street, Luxury District
                        <br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-gold/10 p-3">
                      <Phone className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone Number</h3>
                      <p className="text-muted-foreground mt-1">
                        Customer Service: +1 (555) 123-4567
                        <br />
                        Support: +1 (555) 987-6543
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-gold/10 p-3">
                      <Mail className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email Address</h3>
                      <p className="text-muted-foreground mt-1">
                        Customer Service: support@velora.com
                        <br />
                        Business Inquiries: business@velora.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-medium mb-4">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 8:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

