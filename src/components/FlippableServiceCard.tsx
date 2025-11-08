import { Card } from "@/components/ui/card";
import { useState } from "react";

interface FlippableServiceCardProps {
  title: string;
  image: string;
  backText: string;
}

const FlippableServiceCard = ({ title, image, backText }: FlippableServiceCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="perspective-1000 h-[400px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front of card */}
        <Card className="absolute inset-0 backface-hidden overflow-hidden">
          <div className="h-full flex flex-col">
            <div className="flex-1 overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-display font-semibold text-foreground text-center">
                {title}
              </h3>
            </div>
          </div>
        </Card>

        {/* Back of card */}
        <Card className="absolute inset-0 backface-hidden rotate-y-180 overflow-hidden bg-primary">
          <div className="h-full flex items-center justify-center p-8">
            <p className="text-primary-foreground text-center text-lg leading-relaxed">
              {backText}
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FlippableServiceCard;
