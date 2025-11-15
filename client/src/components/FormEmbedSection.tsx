import { useEffect } from "react";
import { Card } from "@/components/ui/card";

interface FormEmbedSectionProps {
  language: "en" | "es";
}

const content = {
  en: {
    title: "Sign Up Here",
    subtitle: "Please complete BOTH forms below to finish your enrollment!",
    step1Title: "Step 1: Enrollment Survey",
    step1Description: "Tell us about your child and your daycare.",
    step2Title: "Step 2: Parent Intake Form",
    step2Description: "Complete your family information.",
    iframeTitle1: "Enrollment Survey",
    iframeTitle2: "Parent Intake Form",
    loading: "Loading forms...",
  },
  es: {
    title: "Regístrese Aquí",
    subtitle: "¡Por favor complete AMBOS formularios abajo para terminar su inscripción!",
    step1Title: "Paso 1: Encuesta de Inscripción",
    step1Description: "Cuéntenos sobre su hijo y su guardería.",
    step2Title: "Paso 2: Formulario de Admisión de Padres",
    step2Description: "Complete la información de su familia.",
    iframeTitle1: "Encuesta de Inscripción",
    iframeTitle2: "Formulario de Admisión de Padres",
    loading: "Cargando formularios...",
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
        <p className="text-xl font-semibold text-center mb-12 text-primary" data-testid="text-both-forms-instruction">
          {t.subtitle}
        </p>
        
        {/* Step 1: Enrollment Survey */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-2" data-testid="heading-step-1">
            {t.step1Title}
          </h3>
          <p className="text-lg text-muted-foreground mb-6" data-testid="text-step-1-description">
            {t.step1Description}
          </p>
          
          <Card className="p-6 md:p-8 overflow-hidden">
            <iframe 
              src="https://api.leadconnectorhq.com/widget/survey/ilYKNge7tHozcy1PNsdI" 
              width="100%" 
              style={{ border: 'none', overflow: 'hidden' }}
              {...{ scrolling: 'no' }}
              id="ilYKNge7tHozcy1PNsdI"
              title={t.iframeTitle1}
              data-testid="iframe-enrollment-survey"
            />
          </Card>
        </div>

        {/* Step 2: Parent Intake Form */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-2" data-testid="heading-step-2">
            {t.step2Title}
          </h3>
          <p className="text-lg text-muted-foreground mb-6" data-testid="text-step-2-description">
            {t.step2Description}
          </p>
          
          <Card className="p-6 md:p-8 overflow-hidden">
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
              title={t.iframeTitle2}
              data-testid="iframe-parent-intake"
            />
          </Card>
        </div>
      </div>
    </section>
  );
}
