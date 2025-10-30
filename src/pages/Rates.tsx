import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Rates = () => {
  const inNetworkProviders = [
    "Optum",
    "Aetna",
    "Cigna",
    "United Health Care",
    "Oxford Health Plans",
    "Oscar",
    "UHS Student Resources",
    "AllSavers UHC",
    "Harvard Pilgrim"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-12 animate-fade-in">
          Rates & Insurance
        </h1>
        
        <div className="space-y-8">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                Session Rates
              </h2>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex justify-between items-center">
                  <span>Initial intake sessions (70 minutes)</span>
                  <span className="font-semibold text-foreground">$225</span>
                </p>
                <p className="flex justify-between items-center">
                  <span>Individual sessions (50 minutes)</span>
                  <span className="font-semibold text-foreground">$175</span>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                Payment
              </h2>
              <p className="text-muted-foreground">All major credit cards accepted.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                Insurance
              </h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">In Network:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {inNetworkProviders.map((provider) => (
                    <div key={provider} className="text-muted-foreground">
                      • {provider}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Out of Network:</h3>
                <p className="text-muted-foreground mb-4">
                  I am able to supply you with a monthly receipt called a "Superbill," which you can submit to your insurance company for possible reimbursement, depending on your plan and benefits. The best way to find out if you have benefits is to call your insurance provider directly.
                </p>
                <p className="text-muted-foreground">
                  Regardless of the outcome of the reimbursement claim, payment in full is due at the time of service.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                Cancellation Policy
              </h2>
              <p className="text-muted-foreground">
                If you are unable to attend a session, please make sure you cancel at least 24 hours beforehand. Otherwise, you will be charged for the full rate of the session.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                Good Faith Estimate
              </h2>
              <p className="text-muted-foreground">
                Under the law, health care providers need to give patients who don't have insurance or who are not using insurance an estimate of the expected charges for medical services, including psychotherapy services. You have the right to receive a Good Faith Estimate for the total expected cost of any non-emergency healthcare services, including psychotherapy services. For questions or more information about your right to a Good Faith Estimate, visit{" "}
                <a 
                  href="https://www.cms.gov/nosurprises" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  www.cms.gov/nosurprises
                </a>.
              </p>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
              Any Other Questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Please contact me for any additional questions you may have. I look forward to hearing from you!
            </p>
            <Link to="/contact">
              <Button size="lg">Contact Me</Button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Rates;
