import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Layout } from "@/components/layout/layout"

export default function FAQPage() {
  const faqs = [
    {
      category: "Orders & Shipping",
      questions: [
        {
          question: "How do I track my order?",
          answer:
            "You can track your order by logging into your account and navigating to the 'Orders' section. Alternatively, you can use the tracking number provided in your shipping confirmation email.",
        },
        {
          question: "What are the shipping options?",
          answer:
            "We offer standard shipping (3-5 business days), express shipping (1-2 business days), and same-day delivery in select areas. Shipping costs vary based on your location and the shipping method chosen.",
        },
        {
          question: "Do you ship internationally?",
          answer:
            "Yes, we ship to most countries worldwide. International shipping times vary between 7-14 business days depending on the destination. Additional customs fees may apply.",
        },
        {
          question: "When will my order be processed?",
          answer:
            "Orders are typically processed within 24 hours of being placed. During peak seasons or promotional periods, processing may take up to 48 hours.",
        },
      ],
    },
    {
      category: "Returns & Refunds",
      questions: [
        {
          question: "What is your return policy?",
          answer:
            "We offer a 30-day return policy for most items. Products must be in their original condition with all tags and packaging intact. Certain items like perishables and personalized products cannot be returned.",
        },
        {
          question: "How do I initiate a return?",
          answer:
            "To initiate a return, log into your account, go to 'Orders', select the order containing the item you wish to return, and click 'Return Item'. Follow the instructions to complete the return process.",
        },
        {
          question: "When will I receive my refund?",
          answer:
            "Once your return is received and inspected, your refund will be processed within 3-5 business days. It may take an additional 5-10 business days for the refund to appear in your account, depending on your payment method.",
        },
        {
          question: "Do you offer exchanges?",
          answer:
            "Yes, we offer exchanges for items of equal value. To request an exchange, follow the same process as a return but select 'Exchange' instead of 'Refund' when prompted.",
        },
      ],
    },
    {
      category: "Account & Payment",
      questions: [
        {
          question: "How do I create an account?",
          answer:
            "You can create an account by clicking on the 'Account' icon in the top right corner of our website and selecting 'Sign Up'. Follow the prompts to complete your registration.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, Google Pay, and Velora gift cards.",
        },
        {
          question: "Is my payment information secure?",
          answer:
            "Yes, we use industry-standard encryption and security measures to protect your payment information. We are PCI DSS compliant and never store your full credit card details on our servers.",
        },
        {
          question: "Can I save my payment information for future purchases?",
          answer:
            "Yes, you can save your payment information securely in your account for faster checkout in the future. You can manage your saved payment methods in the 'Payment Methods' section of your account.",
        },
      ],
    },
    {
      category: "Products & Services",
      questions: [
        {
          question: "Are your products authentic?",
          answer:
            "Yes, all products sold on Velora are 100% authentic. We source directly from manufacturers and authorized distributors to ensure the highest quality and authenticity.",
        },
        {
          question: "Do you offer gift wrapping?",
          answer:
            "Yes, we offer premium gift wrapping services for an additional fee. You can select this option during checkout and even include a personalized message.",
        },
        {
          question: "How can I check product availability?",
          answer:
            "Product availability is displayed on each product page. If an item is out of stock, you can sign up for email notifications to be alerted when it becomes available again.",
        },
        {
          question: "Do you offer product warranties?",
          answer:
            "Many of our products come with manufacturer warranties. Warranty information is listed on the product page under 'Specifications'. We also offer extended warranty options on select items.",
        },
      ],
    },
  ]

  return (
    <Layout>
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-2">Frequently Asked Questions</h1>
            <p className="text-muted-foreground">
              Find answers to common questions about our products, services, and policies.
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((category, index) => (
              <div key={index}>
                <h2 className="text-xl font-semibold mb-4 text-gold">{category.category}</h2>
                <Accordion type="single" collapsible className="border rounded-lg">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`item-${index}-${faqIndex}`}>
                      <AccordionTrigger className="px-4 hover:text-gold hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4">
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-xl font-semibold mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-6">
              If you couldn't find the answer to your question, our customer support team is here to help.
            </p>
            <div className="flex justify-center gap-4">
              <a href="/support/contact">
                <button className="bg-gold hover:bg-gold/90 text-gold-foreground px-6 py-2 rounded-md">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

