import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import teenImage from "@/assets/teen-therapy.jpg";

const TeenTherapy = () => {
  const focusAreas = [
    "Symptoms of Anxiety",
    "Symptoms of Depression",
    "Issues with Self-esteem",
    "Body Image Concerns",
    "Stress with school",
    "Challenges with relationship with peers or family",
    "Self-Harm",
    "Life and family transitions"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <img 
            src={teenImage} 
            alt="Teen Therapy" 
            className="w-full h-80 object-cover rounded-lg shadow-lg mb-8"
          />
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 animate-fade-in">
            Therapy for Teens (16+)
          </h1>
        </div>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              The process of counseling teens varies from family to family. During the first session I will gather information from parents about their concern for their child in addition to their mental health and family history. The next few sessions will be with the teens to start building the therapeutic relationship and gather their own perspective on why they are in therapy.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
              Common Areas of Focus in Therapy
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              {focusAreas.map((area, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-secondary rounded-lg p-8 my-8">
            <p className="text-muted-foreground leading-relaxed">
              Many teens are struggling with unrealistic expectations. They may be isolating, experiencing anger, sadness, disconnecting or acting in a way that no longer resembles your teen. Some teens are dealing with self-esteem issues or battling anxiety due to all the demands they have to navigate in life.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Therapy can be a safe environment for teens to explore their deep powerful feelings, values, and goals with guidance from a compassionate and knowledgeable therapist allowing them to move towards a healthy engagement with their environment.
            </p>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact">
              <Button size="lg" className="text-lg px-8 py-6">
                Schedule Your Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TeenTherapy;
