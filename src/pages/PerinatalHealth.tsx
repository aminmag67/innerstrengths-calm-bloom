import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import perinatalImage from "@/assets/perinatal-health.jpg";

const PerinatalHealth = () => {
  const commonAreas = [
    "Feeling empty and numb as if you're just going through the motions",
    "Feeling of powerless",
    "Difficulty with bonding and attachment",
    "Integrating a new identity as a parent",
    "Being a good enough parent",
    "Maintaining intimacy and connection with your partner, family and friends",
    "Waves of unexpected and overwhelming emotions",
    "Persistent feelings of guilt and shame",
    "Racing thoughts and having trouble quieting your mind",
    "Being constantly in a state of worry",
    "Mood Swings",
    "Difficulty Controlling The Worry",
    "Fatigue and Sleep Problems",
    "Coping with miscarriage",
    "Perinatal grief and loss",
    "Perinatal trauma"
  ];

  const riskFactors = [
    "Personal or family history of mental illness including but not limited to depression, anxiety, and postpartum depression.",
    "Traumatic pregnancy or birth. Were you on bed rest? Have an emergency C-section? Was your baby in the NICU?",
    "Difficult experiences around pregnancy or birth Infertility, miscarriages, multiples: Is your baby special needs, colicky, or have a difficult temperament? Have you had challenges feeding your baby?",
    "A history of domestic violence, physical, sexual, or other abuse.",
    "A traumatic childhood. People often underestimate the impact of childhood trauma on their lives as adults. Even if you think you're over it, profound childhood experiences have lasting effects.",
    "Stress and/or significant changes in your life can greatly impact your emotional health. For example moving, relationship challenges, losing a loved one or losing a job.",
    "Lack of social support. Do you feel like there's no one you can confide in? Does your family live in another part of the country/world?"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <img 
            src={perinatalImage} 
            alt="Perinatal Mental Health" 
            className="w-full h-80 object-cover rounded-lg shadow-lg mb-8"
          />
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 animate-fade-in">
            Perinatal Mental Health
          </h1>
        </div>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <div>
            <p className="text-muted-foreground leading-relaxed">
              Postpartum Depression is one of the Perinatal Mood and Anxiety Disorders (PMADs) which include Perinatal Anxiety, Perinatal Traumatic Stress Disorder, Perinatal Obsessive Compulsive Disorder, and Perinatal Psychosis. It's common to wonder, "why me?", "What did I do wrong?" You did nothing wrong. PMADs are extremely common; 15-20% of birthing people will develop a Perinatal Mood and Anxiety Disorder.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              Common Areas of Focus in Therapy
            </h2>
            <ul className="space-y-2 text-muted-foreground">
              {commonAreas.map((area, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-accent rounded-lg p-8 my-12">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6 text-center">
              Risk Factors
            </h2>
            <p className="text-muted-foreground mb-4 font-medium">
              Risk factors for possibly developing maternal mental health disorders:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              {riskFactors.map((factor, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>{factor}</span>
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

export default PerinatalHealth;
