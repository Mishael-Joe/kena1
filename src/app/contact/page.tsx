import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Define metadata for SEO
export const metadata: Metadata = {
  title: "Contact | Ziv",
  description: "Get in touch with Ziv.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      {/* Contact Header */}
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Get in Touch
        </h1>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground">
            Have questions or want to work together? I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div>
            {/* FAQ */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </AccordionTrigger>
                  <AccordionContent>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Officia, illo vel? Corrupti assumenda voluptate beatae.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg">
                    Are you available for speaking engagements?
                  </AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus impedit praesentium animi dolorum similique
                    recusandae?
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg">
                    How quickly can I expect a response?
                  </AccordionTrigger>
                  <AccordionContent>
                    I typically respond to all inquiries within 1–2 business
                    days.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
