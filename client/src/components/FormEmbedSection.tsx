import { Card } from "@/components/ui/card";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

interface FormEmbedSectionProps {
  language: "en" | "es";
}

const content = {
  en: {
    title: "Sign Up Here",
    subtitle: "Fill out this quick form to get started!",
    iframeTitle: "Enrollment Form",
  },
  es: {
    title: "Regístrese Aquí",
    subtitle: "¡Llene este formulario rápido para empezar!",
    iframeTitle: "Formulario de Inscripción",
  },
};

export default function FormEmbedSection({ language }: FormEmbedSectionProps) {
  const t = content[language];

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
        
        <Card className="p-6 md:p-8 overflow-hidden">
          <iframe 
            src="https://app.gohighlevel.com/v2/preview/NfHdX8rbPBTqxCESkSjm" 
            width="100%" 
            height="1000px" 
            style={{ border: 'none' }}
            title={t.iframeTitle}
            data-testid="iframe-enrollment-form"
          />
        </Card>
      </div>
    </section>
  );
}
