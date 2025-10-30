import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import adultImage from "@/assets/adult-therapy.jpg";

const AdultTherapy = () => {
  const focusAreas = [
    "Symptoms of Anxiety",
    "Symptoms of Depression",
    "Issues with Self-esteem",
    "Stress with work or school",
    "Challenges with relationships or family",
    "Life and family transitions",
    "Gaining a better understanding of yourself",
    "Learning how to handle emotions"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <img 
            src={adultImage} 
            alt="Adult Therapy" 
            className="w-full h-80 object-cover rounded-lg shadow-lg mb-8"
          />
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 animate-fade-in">
            Therapy for Adults
          </h1>
          <h2 className="text-2xl md:text-3xl font-display text-primary mb-8">
            Don't Wait to Get the Help You Need
          </h2>
        </div>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Individual therapy can be effective in helping people who are experiencing anxiety, depression, trauma, relationship, or other emotional issues. It can also help people who are facing difficult life situations, or would like to develop healthier, more functional personal habits.
            </p>
            
            <p>
              Therapy can help uncover the inner strengths that we all have. Some are buried deeper than others, so therapy can bring out the answers that we already have within us.
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

export default AdultTherapy;
