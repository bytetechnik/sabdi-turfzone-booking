import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Get In Touch</h2>
          <p className="text-muted-foreground text-lg">
            Have questions? We're here to help!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 hover:shadow-lg transition-all duration-300">
            <MapPin className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-bold mb-2 text-card-foreground">Location</h3>
            <p className="text-muted-foreground">
              123 Sports Complex<br />
              City Center, State 123456
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300">
            <Phone className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-bold mb-2 text-card-foreground">Phone</h3>
            <p className="text-muted-foreground">
              +91 98765 43210<br />
              +91 87654 32109
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300">
            <Mail className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-bold mb-2 text-card-foreground">Email</h3>
            <p className="text-muted-foreground">
              info@sabditurfzone.com<br />
              booking@sabditurfzone.com
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300">
            <Clock className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-bold mb-2 text-card-foreground">Hours</h3>
            <p className="text-muted-foreground">
              Every Day<br />
              6:00 AM - 10:00 PM
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
