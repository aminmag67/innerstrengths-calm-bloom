import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 animate-fade-in">
          Contact
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Ready to take the first step? Reach out today.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-2">Phone</h3>
                  <p className="text-muted-foreground">
                    Schedule your free 15-minute consultation by phone
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground">
                    Send us a message with your questions
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
          <CardContent className="p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-primary/10 p-4 rounded-full">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              What should you do now?
            </h2>
            <p className="text-xl text-foreground mb-6">
              Call to schedule your free 15-minute consultation.
            </p>
            <p className="text-muted-foreground mb-4">
              Serving clients throughout California via secure telehealth sessions
            </p>
            <p className="text-sm text-muted-foreground">
              Nilofar Mirchi, LMFT, PMH-C | License #84072
            </p>
          </CardContent>
        </Card>

        <div className="mt-12 bg-secondary rounded-lg p-8">
          <h3 className="text-xl font-display font-semibold text-foreground mb-4">
            What to Expect
          </h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              During your free 15-minute consultation, we'll discuss your needs and determine if we're a good fit. This is a no-pressure conversation to help you feel comfortable and answer any questions you may have about therapy.
            </p>
            <p>
              I offer secure telehealth sessions for clients throughout California, making it convenient for you to receive care from the comfort of your own space.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
