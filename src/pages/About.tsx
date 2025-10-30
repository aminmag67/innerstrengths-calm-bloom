import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8 animate-fade-in">
          About Me
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-primary mb-6">
            Nilofar Mirchi, LMFT, PMH-C
          </h2>
          <p className="text-sm text-muted-foreground mb-8">License: #84072</p>
          
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              My name is Nilofar Mirchi, and I am a licensed psychotherapist, with a goal to provide compassionate support to individuals coping with concerns during major life changes including pregnancy/postpartum, fertility challenges, and parenting stressors. In addition to perinatal mental health, I also support adults and teens experiencing increased stress, depression, anxiety, panic, relationship challenges, life transitions, feelings of guilt, irritability/anger, grief, and loneliness/isolation.
            </p>
            
            <p>
              In building a safe and supportive relationship, together, we will work on improving your mental health, overcome past traumas, improve coping skills, and develop healthier habits. I truly believe the catalyst for change in therapy lies in a warm, empathetic, and trusting client-therapist relationship.
            </p>
            
            <p>
              I am trained in Motivational Interviewing, Cognitive Behavior Therapy (CBT), Birth to Five, and perinatal mood disorders. I'm also certified in Perinatal Mental Health through Postpartum Support International and I am trained in EMDR (Eye Movement Desensitization and Reprocessing), an evidence-based treatment for trauma.
            </p>
            
            <p>
              I know it can be hard to get started. Know that you are not alone. My focus is to help you build your confidence and find your inner strength.
            </p>
            
            <p>
              Whether you need support navigating through a difficult time, or have a specific issue holding you back, therapy may help you feel more capable and in control.
            </p>
          </div>
          
          <div className="mt-12 p-8 bg-accent rounded-lg text-center">
            <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
              Schedule your free 15 minute consultation
            </h3>
            <Link to="/contact">
              <Button size="lg" className="mt-4">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
