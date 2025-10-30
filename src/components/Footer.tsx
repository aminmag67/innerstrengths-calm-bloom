import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-display font-semibold text-primary mb-4">
              Inner Strengths Therapy
            </h3>
            <p className="text-muted-foreground text-sm">
              Compassionate therapy for women in California dealing with perinatal health, life transitions, and more.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Crisis Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Crisis Text Line: <span className="font-medium">Text START to 741-741</span></li>
              <li>National Suicide Prevention: <span className="font-medium">988</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Inner Strengths Therapy. All rights reserved.</p>
          <p className="mt-2">Nilofar Mirchi, LMFT, PMH-C | License #84072</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
