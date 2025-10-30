import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-flowers.jpg";
import perinatalImage from "@/assets/perinatal-health.jpg";
import adultImage from "@/assets/adult-therapy.jpg";
import teenImage from "@/assets/teen-therapy.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Peaceful flowers" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              Therapy for New and Expecting Parents, Adults, and Teens
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Find your inner strength and increase hope, healing, and happiness in your life.
            </p>
            <Link to="/contact">
              <Button size="lg" className="text-lg px-8 py-6">
                Schedule Your Free 15-Minute Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Welcome
          </h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            It can be a difficult step to seek out professional support, but in doing so you are demonstrating your willingness to invest in yourself and your well-being.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My goal is to empower my clients, help them find their inner strengths, and to increase hope, healing, & happiness in their lives. Each goal is individually tailored based on my client's unique needs.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-12">
            Our Services
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Perinatal Mental Health"
              description="Support for those trying to conceive, pregnant, or navigating postpartum life. You're not alone - approximately 1 in 5 pregnant people develop a perinatal mood or anxiety disorder."
              image={perinatalImage}
              link="/services/perinatal"
            />
            
            <ServiceCard
              title="Therapy for Adults"
              description="Life changes can be exciting or overwhelming. Get support during vulnerable times to create lasting changes and find healing through a meaningful therapeutic relationship."
              image={adultImage}
              link="/services/adult"
            />
            
            <ServiceCard
              title="Therapy for Teens (16+)"
              description="A safe environment for teens to explore their feelings, values, and goals. Support for dealing with self-esteem issues, anxiety, and navigating life's demands."
              image={teenImage}
              link="/services/teen"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Don't wait to get the help you need. Schedule your free consultation today.
          </p>
          <Link to="/contact">
            <Button size="lg" className="text-lg px-8 py-6">
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
