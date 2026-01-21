import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "How does EcoSwap work?",
      answer: "EcoSwap connects people who want to exchange items they no longer need. Simply browse available items, contact the owner, and arrange a swap that works for both parties. It's a sustainable way to give items a second life while finding something new for yourself."
    },
    {
      question: "Is EcoSwap free to use?",
      answer: "Yes! EcoSwap is completely free to use. We believe in making sustainable living accessible to everyone. There are no listing fees, transaction fees, or membership costs."
    },
    {
      question: "What items can I swap?",
      answer: "You can swap almost anything! Popular categories include clothing, books, electronics, home decor, kitchen items, sports equipment, and more. We only ask that items are in good condition and safe to use."
    },
    {
      question: "How do I ensure a safe swap?",
      answer: "We recommend meeting in public places during daylight hours. Many communities have designated swap spots at libraries or community centers. Always trust your instincts, and consider bringing a friend if you're unsure."
    },
    {
      question: "What if I don't have anything to swap?",
      answer: "While swapping is our primary focus, some community members are happy to give away items for free, especially if you're just starting your sustainable living journey. You can also offer services, skills, or help in exchange for items."
    },
    {
      question: "How do I post an item for swap?",
      answer: "Create a free account, click 'Post Item', add photos and a description, select your preferred swap preferences, and publish your listing. Your item will be visible to the community immediately."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-forest/10 rounded-full">
              <HelpCircle className="h-8 w-8 text-forest" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-nature max-w-2xl mx-auto">
            Everything you need to know about sustainable swapping
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-card border-mint/20 px-6"
              >
                <AccordionTrigger className="text-left text-forest hover:text-sage transition-eco py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;