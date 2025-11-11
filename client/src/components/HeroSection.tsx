import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/Daycare_hero_with_brown_children_21832bcc.png";
import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import VideoModal from "@/components/VideoModal";

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

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r from-primary/[0.15] to-transparent",
            "backdrop-blur-[2px] border-2 border-primary/[0.20]",
            "shadow-[0_8px_32px_0_rgba(20,184,166,0.15)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.25),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

export default function HeroSection({ language, onGetStarted }: HeroSectionProps) {
  const t = content[language];
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      <div 
        className="absolute inset-0 bg-cover bg-center hero-live-photo"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute inset-0 bg-gradient-to-tl from-primary/15 via-transparent to-accent/10" style={{ animation: 'pulse 12s ease-in-out infinite' }} />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
          {t.headline}
        </h1>
        <p className="text-xl md:text-2xl mb-12 leading-relaxed text-white/95">
          {t.subheadline}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <div className="relative">
            <Button
              size="lg"
              onClick={onGetStarted}
              className="text-xl font-semibold relative overflow-visible border-2"
              data-testid="button-get-started"
            >
              <GlowingEffect disabled={false} borderWidth={2} blur={8} proximity={150} spread={30} />
              {t.cta}
            </Button>
          </div>
          <div className="relative">
            <Button
              size="lg"
              variant="outline"
              onClick={() => setIsVideoOpen(true)}
              className="text-xl font-semibold bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white relative overflow-visible"
              data-testid="button-watch-video"
            >
              <GlowingEffect disabled={false} borderWidth={2} blur={6} proximity={150} spread={25} variant="white" />
              <Play className="w-6 h-6 mr-2" />
              {t.watchVideo}
            </Button>
          </div>
        </div>
      </div>

      <VideoModal 
        open={isVideoOpen}
        onOpenChange={setIsVideoOpen}
        language={language}
      />
    </section>
  );
}
