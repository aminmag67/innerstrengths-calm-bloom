import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import perinatalImage from "@/assets/perinatal-health.jpg";
import adultImage from "@/assets/adult-therapy.jpg";
import teenImage from "@/assets/teen-therapy.jpg";
import collegeImage from "@/assets/college-therapy.jpg";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 text-center animate-fade-in">
          Our Services
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          Compassionate, individualized therapy services to support you through life's challenges
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            title="Perinatal Mental Health"
            description="Comprehensive support for fertility challenges, pregnancy, and postpartum mental health. Specialized care for perinatal mood and anxiety disorders."
            image={perinatalImage}
            link="/services/perinatal"
          />
          
          <ServiceCard
            title="Therapy for Adults"
            description="Individual therapy for anxiety, depression, trauma, relationship issues, and life transitions. Build your inner strengths and develop healthier habits."
            image={adultImage}
            link="/services/adult"
          />
          
          <ServiceCard
            title="Therapy for Teens (16+)"
            description="Safe, supportive environment for teens dealing with anxiety, depression, self-esteem issues, and the challenges of adolescence."
            image={teenImage}
            link="/services/teen"
          />
          
          <ServiceCard
            title="Therapy for College Student Transitions"
            description="Navigate the unique challenges of college life with support for academic stress, identity exploration, relationships, and transitioning to independence."
            image={collegeImage}
            link="/services/college"
          />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
