import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Resources = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 animate-fade-in">
          Resources
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Helpful resources and support for mental health
        </p>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-display">Postpartum Support International (PSI)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                PSI offers wonderful resources for new and expecting parents, including support groups, counseling referrals, and so much more!
              </p>
              <a 
                href="https://www.postpartum.net/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:underline"
              >
                www.postpartum.net
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-display">NAMI</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                National Alliance on Mental Illness offers resources for individuals and families affected by mental health symptoms.
              </p>
              <a 
                href="https://www.nami.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:underline"
              >
                www.nami.org
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </CardContent>
          </Card>

          <Card className="border-accent bg-accent/10">
            <CardHeader>
              <CardTitle className="text-2xl font-display">Crisis Text Line</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Every person is connected with a Crisis Counselor via text message who is trained to bring a person from a hot moment to a cool calm moment through active listening and collaborative problem solving. All of Crisis Text Line's Crisis Counselors are volunteers, donating their time to helping people in crisis.
              </p>
              <p className="text-lg font-semibold text-foreground">
                Text START to 741-741
              </p>
            </CardContent>
          </Card>

          <Card className="border-accent bg-accent/10">
            <CardHeader>
              <CardTitle className="text-2xl font-display">National Suicide Prevention Lifeline</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                The National Suicide Prevention Lifeline is a national network of local crisis centers that provides free and confidential emotional support to people in suicidal crisis or emotional distress 24 hours a day, 7 days a week in the United States. We're committed to improving crisis services and advancing suicide prevention by empowering individuals, advancing professional best practices, and building awareness.
              </p>
              <p className="text-lg font-semibold text-foreground mb-2">
                Call, text or chat 988 or dial 800-273-8255
              </p>
              <a 
                href="https://suicidepreventionlifeline.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:underline"
              >
                https://suicidepreventionlifeline.org/
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Resources;
