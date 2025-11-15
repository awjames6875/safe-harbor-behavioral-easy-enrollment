import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Loader2, Sparkles } from "lucide-react";

interface FormEmbedSectionProps {
  language: "en" | "es";
}

const content = {
  en: {
    title: "Sign Up Here",
    subtitle: "Fill out this quick form to get started!",
    iframeTitle: "Enrollment Survey",
    loading: "Loading enrollment form...",
  },
  es: {
    title: "Regístrese Aquí",
    subtitle: "¡Llene este formulario rápido para empezar!",
    iframeTitle: "Encuesta de Inscripción",
    loading: "Cargando formulario de inscripción...",
  },
};

export default function FormEmbedSection({ language }: FormEmbedSectionProps) {
  const t = content[language];
  const [isLoading, setIsLoading] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Load GoHighLevel form embed script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

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
          {t.title}
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-12">
          {t.subtitle}
        </p>
        
        <Card className="p-6 md:p-8 overflow-hidden relative min-h-[600px]">
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
          
          {/* GoHighLevel Parent Intake Form Iframe */}
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/QiHZ9AqGPrLJR596VHON"
            style={{ width: '100%', height: '660px', border: 'none', borderRadius: '3px' }}
            id="inline-QiHZ9AqGPrLJR596VHON"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="SH-Parent Intake"
            data-height="660"
            data-layout-iframe-id="inline-QiHZ9AqGPrLJR596VHON"
            data-form-id="QiHZ9AqGPrLJR596VHON"
            title={t.iframeTitle}
            data-testid="iframe-enrollment-form"
            onLoad={handleIframeLoad}
          />
        </Card>
      </div>
    </section>
  );
}
