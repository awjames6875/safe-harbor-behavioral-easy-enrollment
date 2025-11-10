import { Card } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

interface FormEmbedSectionProps {
  language: "en" | "es";
}

const content = {
  en: {
    title: "Start Your Enrollment",
    subtitle: "Complete this quick form to begin the enrollment process",
    placeholder: "GoHighLevel Form Embed Area",
    instructions: [
      "Staff Instructions:",
      "1. Go to your GoHighLevel account",
      "2. Navigate to Forms and copy the embed code",
      "3. Paste the embed code in the server configuration",
      "The form will appear here automatically",
    ],
  },
  es: {
    title: "Comience Su Inscripción",
    subtitle: "Complete este formulario rápido para comenzar el proceso de inscripción",
    placeholder: "Área de Formulario de GoHighLevel",
    instructions: [
      "Instrucciones para el Personal:",
      "1. Vaya a su cuenta de GoHighLevel",
      "2. Navegue a Formularios y copie el código de inserción",
      "3. Pegue el código en la configuración del servidor",
      "El formulario aparecerá aquí automáticamente",
    ],
  },
};

export default function FormEmbedSection({ language }: FormEmbedSectionProps) {
  const t = content[language];

  return (
    <section className="py-16 md:py-24 px-6" id="enrollment-form">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {t.title}
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12">
          {t.subtitle}
        </p>
        
        <Card className="p-12 border-2 border-dashed border-primary/30 bg-primary/5">
          <div className="text-center">
            <AlertCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-4">{t.placeholder}</h3>
            <div className="text-left max-w-md mx-auto space-y-2 text-sm text-muted-foreground">
              {t.instructions.map((instruction, index) => (
                <p key={index} className={index === 0 ? "font-semibold text-foreground mt-6" : ""}>
                  {instruction}
                </p>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
