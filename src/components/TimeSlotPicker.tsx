import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface TimeSlotPickerProps {
  selectedSlot: string | null;
  onSelectSlot: (slot: string) => void;
}

const TimeSlotPicker = ({ selectedSlot, onSelectSlot }: TimeSlotPickerProps) => {
  const timeSlots = [
    { id: "6am-8am", time: "6:00 AM - 8:00 AM", price: "₹800" },
    { id: "8am-10am", time: "8:00 AM - 10:00 AM", price: "₹1000" },
    { id: "10am-12pm", time: "10:00 AM - 12:00 PM", price: "₹1200" },
    { id: "12pm-2pm", time: "12:00 PM - 2:00 PM", price: "₹1000" },
    { id: "2pm-4pm", time: "2:00 PM - 4:00 PM", price: "₹1000" },
    { id: "4pm-6pm", time: "4:00 PM - 6:00 PM", price: "₹1200" },
    { id: "6pm-8pm", time: "6:00 PM - 8:00 PM", price: "₹1500" },
    { id: "8pm-10pm", time: "8:00 PM - 10:00 PM", price: "₹1500" },
  ];

  return (
    <Card className="p-6">
      <h3 className="text-2xl font-bold mb-6 text-foreground">Select Time Slot</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {timeSlots.map((slot) => (
          <Button
            key={slot.id}
            variant={selectedSlot === slot.id ? "default" : "outline"}
            className={`h-auto flex flex-col items-start p-4 transition-all duration-300 ${
              selectedSlot === slot.id
                ? "bg-primary text-primary-foreground shadow-lg scale-105"
                : "hover:bg-primary/10 hover:border-primary"
            }`}
            onClick={() => onSelectSlot(slot.id)}
          >
            <span className="font-semibold text-sm mb-1">{slot.time}</span>
            <span className="text-lg font-bold">{slot.price}</span>
          </Button>
        ))}
      </div>
    </Card>
  );
};

export default TimeSlotPicker;
