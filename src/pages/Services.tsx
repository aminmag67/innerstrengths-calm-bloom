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
            title="Adults"
            description="Individual therapy for anxiety, depression, trauma, relationship issues, and life transitions. Build your inner strengths and develop healthier habits."
            image={adultImage}
            link="/services/adult"
          />
          
          <ServiceCard
            title="Teens (16+)"
            description="Safe, supportive environment for teens dealing with anxiety, depression, self-esteem issues, and the challenges of adolescence."
            image={teenImage}
            link="/services/teen"
          />
          
          <ServiceCard
            title="College Student Transitions"
            description="Supporting young adults through change, growth, and uncertainty. College can be both exciting and overwhelming — filled with new responsibilities, shifting identities, academic pressures, and changing relationships. We offer therapy for college students navigating transitions such as moving away from home, adjusting to campus life, managing stress and anxiety, exploring identity, or planning for life after graduation. Our goal is to help students build emotional resilience, clarify values, and develop coping strategies to support both their mental health and personal growth during this pivotal time."
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
