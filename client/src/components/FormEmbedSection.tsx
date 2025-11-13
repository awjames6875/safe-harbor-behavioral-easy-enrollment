import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { Loader2, Sparkles } from "lucide-react";

interface FormEmbedSectionProps {
  language: "en" | "es";
}

const content = {
  en: {
    title: "Sign Up Here",
    subtitle: "Fill out this quick form to get started!",
    iframeTitle: "Enrollment Form",
    loading: "Loading enrollment form...",
  },
  es: {
    title: "Regístrese Aquí",
    subtitle: "¡Llene este formulario rápido para empezar!",
    iframeTitle: "Formulario de Inscripción",
    loading: "Cargando formulario de inscripción...",
  },
};

export default function FormEmbedSection({ language }: FormEmbedSectionProps) {
  const t = content[language];
  const [isLoading, setIsLoading] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleIframeLoad = () => {
    // Start fade-out transition
    setIsLoading(false);
    
    // Remove overlay after transition completes (500ms)
    timeoutRef.current = setTimeout(() => {
      setShowOverlay(false);
    }, 500);
  };

  return (
    <section className="py-16 md:py-24 px-6" id="enrollment-form">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <AnimatedShinyText className="text-4xl md:text-5xl font-bold" shimmerWidth={200}>
            {t.title}
          </AnimatedShinyText>
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-12">
          {t.subtitle}
        </p>
        
        <Card className="p-6 md:p-8 overflow-hidden relative">
          {/* Loading Overlay */}
          {showOverlay && (
            <div 
              className={`absolute inset-0 bg-background/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center transition-opacity duration-500 ${
                isLoading ? 'opacity-100' : 'opacity-0'
              }`}
              data-testid="loading-overlay"
            >
              <div className="relative">
                <Sparkles className="w-16 h-16 text-primary animate-pulse" />
                <Loader2 className="w-8 h-8 text-primary/60 animate-spin absolute top-4 left-4" />
              </div>
              <p className="mt-6 text-lg font-medium text-foreground animate-pulse">
                {t.loading}
              </p>
            </div>
          )}
          
          {/* Enrollment Form Iframe */}
          <iframe 
            src="https://app.gohighlevel.com/v2/preview/NfHdX8rbPBTqxCESkSjm" 
            width="100%" 
            height="1000px" 
            style={{ border: 'none' }}
            title={t.iframeTitle}
            data-testid="iframe-enrollment-form"
            onLoad={handleIframeLoad}
          />
        </Card>
      </div>
    </section>
  );
}
