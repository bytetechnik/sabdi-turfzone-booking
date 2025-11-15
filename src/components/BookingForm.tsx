import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";

interface BookingFormProps {
  selectedSport: string | null;
  selectedSlot: string | null;
}

const BookingForm = ({ selectedSport, selectedSlot }: BookingFormProps) => {
  const { t } = useLanguage();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedSport || !selectedSlot || !date || !name || !phone) {
      toast.error("Please fill all required fields");
      return;
    }

    toast.success("Booking submitted successfully! We'll contact you shortly.");
    
    // Reset form
    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <Card className="p-6">
      <h3 className="text-2xl font-bold mb-6 text-foreground">{t("completeBooking")}</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">{t("fullName")} *</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="phone">{t("phoneNumber")} *</Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+880 1XXX XXXXXX"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="email">{t("email")}</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <Label className="mb-2 block">{t("selectDate")} *</Label>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={(date) => date < new Date()}
              className="rounded-md border"
            />
          </div>
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          disabled={!selectedSport || !selectedSlot}
        >
          {t("confirmBooking")}
        </Button>
      </form>
    </Card>
  );
};

export default BookingForm;
