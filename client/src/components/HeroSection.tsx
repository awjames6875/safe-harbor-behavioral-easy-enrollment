import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroImage from "@assets/generated_images/Daycare_hero_with_brown_children_21832bcc.png";

interface HeroSectionProps {
  language: "en" | "es";
  onGetStarted: () => void;
}

const content = {
  en: {
    headline: "Welcome to Safe Harbor Day Care",
    subheadline: "We help your child grow and learn every day!",
    cta: "Start Now",
    watchVideo: "Watch Video",
  },
  es: {
    headline: "Bienvenido a la Guardería Safe Harbor",
    subheadline: "¡Ayudamos a su hijo a crecer y aprender cada día!",
    cta: "Empezar Ahora",
    watchVideo: "Ver Video",
  },
};

export default function HeroSection({ language, onGetStarted }: HeroSectionProps) {
  const t = content[language];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
          {t.headline}
        </h1>
        <p className="text-xl md:text-2xl mb-12 leading-relaxed text-white/95">
          {t.subheadline}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            onClick={onGetStarted}
            className="text-xl font-semibold animate-pulse-glow"
            data-testid="button-get-started"
          >
            {t.cta}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-xl font-semibold bg-white/10 backdrop-blur-sm border-white/30 text-white"
            data-testid="button-watch-video"
          >
            <Play className="w-6 h-6 mr-2" />
            {t.watchVideo}
          </Button>
        </div>
      </div>
    </section>
  );
}
