import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";

interface HeroSectionProps {
  language: "en" | "es";
  onGetStarted: () => void;
}

const content = {
  en: {
    badge: "Safe Harbor Behavioral Health",
    title1: "Welcome to",
    title2: "Safe Harbor Day Care",
    description: "We help your child grow and learn every day!",
    cta: "Start Now",
  },
  es: {
    badge: "Safe Harbor Behavioral Health",
    title1: "Bienvenido a la",
    title2: "Guardería Safe Harbor",
    description: "¡Ayudamos a su hijo a crecer y aprender cada día!",
    cta: "Empezar Ahora",
  },
};

export default function HeroSection({ language, onGetStarted }: HeroSectionProps) {
  const t = content[language];

  return (
    <div className="relative">
      <HeroGeometric
        badge={t.badge}
        title1={t.title1}
        title2={t.title2}
        description={t.description}
        onGetStarted={onGetStarted}
      />
      
      <div className="absolute bottom-12 left-0 right-0 z-20 flex justify-center">
        <Button
          size="lg"
          onClick={onGetStarted}
          className="text-xl font-semibold animate-pulse-glow"
          data-testid="button-get-started"
        >
          {t.cta}
        </Button>
      </div>
    </div>
  );
}
