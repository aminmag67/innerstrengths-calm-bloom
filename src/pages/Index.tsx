import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FlippableServiceCard from "@/components/FlippableServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-flowers.jpg";
import perinatalImage from "@/assets/perinatal-health.jpg";
import adultImage from "@/assets/adult-therapy.jpg";
import teenImage from "@/assets/teen-therapy.jpg";
import collegeImage from "@/assets/college-therapy.jpg";

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
            My Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FlippableServiceCard
              title="Perinatal Mental Health"
              image={perinatalImage}
              backText="Comprehensive support for fertility challenges, pregnancy, and postpartum mental health."
            />
            
            <FlippableServiceCard
              title="Adults"
              image={adultImage}
              backText="Individual therapy for anxiety, depression, trauma, and life transitions."
            />
            
            <FlippableServiceCard
              title="Teens (16+)"
              image={teenImage}
              backText="Safe, supportive environment for teens dealing with anxiety, depression, and self-esteem."
            />
            
            <FlippableServiceCard
              title="College Student Transitions"
              image={collegeImage}
              backText="Supporting young adults through change, growth, and uncertainty during college years."
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
