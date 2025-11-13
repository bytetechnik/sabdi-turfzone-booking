import { useLanguage } from "@/contexts/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      question: t("faqBookingQuestion"),
      answer: t("faqBookingAnswer"),
    },
    {
      question: t("faqPricingQuestion"),
      answer: t("faqPricingAnswer"),
    },
    {
      question: t("faqCancellationQuestion"),
      answer: t("faqCancellationAnswer"),
    },
    {
      question: t("faqTimingQuestion"),
      answer: t("faqTimingAnswer"),
    },
    {
      question: t("faqPaymentQuestion"),
      answer: t("faqPaymentAnswer"),
    },
    {
      question: t("faqRulesQuestion"),
      answer: t("faqRulesAnswer"),
    },
    {
      question: t("faqEquipmentQuestion"),
      answer: t("faqEquipmentAnswer"),
    },
    {
      question: t("faqWeatherQuestion"),
      answer: t("faqWeatherAnswer"),
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">{t("faqTitle")}</h2>
          <p className="text-muted-foreground text-lg">
            {t("faqDesc")}
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background rounded-lg px-6 border-none shadow-sm"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-foreground">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
