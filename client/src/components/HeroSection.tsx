import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroImage from "@assets/generated_images/Daycare_hero_background_image_3cfbf092.png";

interface HeroSectionProps {
  language: "en" | "es";
  onGetStarted: () => void;
}

const content = {
  en: {
    headline: "Welcome to Safe Harbor's Body & Brain™ Program",
    subheadline: "Expert therapeutic daycare services for your child's growth and development",
    cta: "Get Started",
    watchVideo: "Watch Introduction Video",
  },
  es: {
    headline: "Bienvenido al Programa Body & Brain™ de Safe Harbor",
    subheadline: "Servicios de guardería terapéutica expertos para el crecimiento y desarrollo de su hijo",
    cta: "Comenzar",
    watchVideo: "Ver Video de Introducción",
  },
};

export default function HeroSection({ language, onGetStarted }: HeroSectionProps) {
  const t = content[language];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {t.headline}
        </h1>
        <p className="text-lg md:text-xl mb-12 leading-relaxed text-white/95">
          {t.subheadline}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={onGetStarted}
            className="px-8 py-6 text-lg"
            data-testid="button-get-started"
          >
            {t.cta}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-lg bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            data-testid="button-watch-video"
          >
            <Play className="w-5 h-5 mr-2" />
            {t.watchVideo}
          </Button>
        </div>
      </div>
    </section>
  );
}
