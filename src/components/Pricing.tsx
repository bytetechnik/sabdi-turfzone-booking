import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Clock } from "lucide-react";

const Pricing = () => {
  const { t } = useLanguage();

  const pricingSlots = [
    {
      slot: t("morningSlot"),
      time: t("morningTime"),
      weekdayPrice: "2,000",
      weekendPrice: "2,500",
    },
    {
      slot: t("afternoonEveningSlot"),
      time: t("afternoonEveningTime"),
      weekdayPrice: "2,500",
      weekendPrice: "3,000",
    },
    {
      slot: t("nightSlot"),
      time: t("nightTime"),
      weekdayPrice: "3,000",
      weekendPrice: "3,500",
    },
    {
      slot: t("midnightSlot"),
      time: t("midnightTime"),
      weekdayPrice: "2,500",
      weekendPrice: "3,000",
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">{t("pricingTitle")}</h2>
          <p className="text-muted-foreground text-lg">
            {t("pricingDesc")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {pricingSlots.map((item, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-card-foreground">{item.slot}</h3>
                  <p className="text-sm text-muted-foreground">{item.time}</p>
                </div>
              </div>
              
              <div className="space-y-3 pt-4 border-t">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{t("sundayThursday")}</span>
                  <span className="text-lg font-bold text-foreground">৳{item.weekdayPrice}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{t("fridaySaturday")}</span>
                  <span className="text-lg font-bold text-primary">৳{item.weekendPrice}</span>
                </div>
                <p className="text-xs text-muted-foreground text-center mt-2">{t("perSlot")}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Alternative Table View for Desktop */}
        <div className="hidden lg:block mt-12">
          <Card className="p-6 bg-card">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-4 font-bold text-foreground">{t("timeSlot")}</th>
                    <th className="text-center py-4 px-4 font-bold text-foreground">{t("sundayThursday")}</th>
                    <th className="text-center py-4 px-4 font-bold text-foreground">{t("fridaySaturday")}</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingSlots.map((item, index) => (
                    <tr key={index} className="border-b last:border-b-0">
                      <td className="py-4 px-4">
                        <div>
                          <p className="font-semibold text-foreground">{item.slot}</p>
                          <p className="text-sm text-muted-foreground">{item.time}</p>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className="text-lg font-bold text-foreground">৳{item.weekdayPrice}</span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className="text-lg font-bold text-primary">৳{item.weekendPrice}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

