import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  const faqs = [
    {
      question: "I've never talked to anyone. I'm used to handling things on my own. Why talk to a therapist?",
      answer: "People who ask for help know when they need it and have the courage to reach out. Everyone needs help now and then. In our work together, I'll help you explore and identify your inner strengths and how to implement them to reduce the influence of the problems you are facing."
    },
    {
      question: "What's the difference between talking to you or my best friend or family?",
      answer: "A mental health professional can help you approach your situation in a new way– teach you new skills, gain different perspectives, listen to you without judgment or expectations, and help you listen to yourself. Furthermore, counseling is completely confidential. You won't have to worry about others 'knowing my business.' Lastly, if your situation provokes a great deal of negative emotion, and you've been confiding in a friend or family member, there is the risk that once you are feeling better you could start avoiding that person so you aren't reminded of this difficult time in your life."
    },
    {
      question: "Why shouldn't I just take medication?",
      answer: "Medication can be effective but it alone cannot solve all issues. Sometimes medication is needed in conjunction with counseling. Our work together is designed to explore and unpack the problems you are experiencing and expand on your strengths that can help you accomplish your personal goals."
    },
    {
      question: "How does it work? What do I have to do in sessions?",
      answer: "Because each person has different issues and goals for counseling, it will be different depending on the individual. I tailor my therapeutic approach to your specific needs."
    },
    {
      question: "How long will it take?",
      answer: "Unfortunately, this is not possible to say in a general FAQs page. Everyone's circumstances are unique to them and the length of time counseling can take to allow you to accomplish your goals depends on your desire for personal development, your commitment, and the factors that are driving you to seek counseling in the first place."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 animate-fade-in">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Find answers to common questions about therapy and our services
        </p>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-display font-semibold hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      
      <Footer />
    </div>
  );
};

export default FAQs;
