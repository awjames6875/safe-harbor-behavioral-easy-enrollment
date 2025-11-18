import { useEffect } from "react";
import { Card } from "@/components/ui/card";

interface FormEmbedSectionProps {
  language: "en" | "es";
}

const content = {
  en: {
    title: "Sign Up Here",
    subtitle: "Fill out this quick form to get started!",
    formTitle: "Enrollment Survey",
    formDescription: "Tell us about your child and your daycare.",
    iframeTitle: "Enrollment Survey",
  },
  es: {
    title: "Regístrese Aquí",
    subtitle: "¡Llene este formulario rápido para empezar!",
    formTitle: "Encuesta de Inscripción",
    formDescription: "Cuéntenos sobre su hijo y su guardería.",
    iframeTitle: "Encuesta de Inscripción",
  },
};

export default function FormEmbedSection({ language }: FormEmbedSectionProps) {
  const t = content[language];

  // Load GoHighLevel form embed script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-16 md:py-24 px-6" id="enrollment-form">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" data-testid="heading-enrollment">
          {t.title}
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-12" data-testid="text-enrollment-instruction">
          {t.subtitle}
        </p>
        
        <Card className="p-6 md:p-8 overflow-hidden">
          <iframe 
            src="https://api.leadconnectorhq.com/widget/survey/ilYKNge7tHozcy1PNsdI" 
            width="100%" 
            style={{ border: 'none', overflow: 'hidden' }}
            {...{ scrolling: 'no' }}
            id="ilYKNge7tHozcy1PNsdI"
            title={t.iframeTitle}
            data-testid="iframe-enrollment-survey"
          />
        </Card>
      </div>
    </section>
  );
}
