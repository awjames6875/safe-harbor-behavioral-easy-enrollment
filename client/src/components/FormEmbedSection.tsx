import { Card } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

interface FormEmbedSectionProps {
  language: "en" | "es";
}

const content = {
  en: {
    title: "Sign Up Here",
    subtitle: "Fill out this quick form to get started today!",
    placeholder: "Form Goes Here",
    instructions: [
      "For Staff:",
      "1. Log in to GoHighLevel",
      "2. Go to Forms and copy the code",
      "3. Paste the code here",
      "The form will show up for parents",
    ],
  },
  es: {
    title: "Inscríbase Aquí",
    subtitle: "¡Llene este formulario rápido para comenzar hoy!",
    placeholder: "El Formulario Va Aquí",
    instructions: [
      "Para Personal:",
      "1. Inicie sesión en GoHighLevel",
      "2. Vaya a Formularios y copie el código",
      "3. Pegue el código aquí",
      "El formulario aparecerá para los padres",
    ],
  },
};

export default function FormEmbedSection({ language }: FormEmbedSectionProps) {
  const t = content[language];

  return (
    <section className="py-16 md:py-24 px-6" id="enrollment-form">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          {t.title}
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-12">
          {t.subtitle}
        </p>
        
        <Card className="p-12 border-2 border-dashed border-primary/30 bg-primary/5 hover-elevate transition-all">
          <div className="text-center">
            <AlertCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-4">{t.placeholder}</h3>
            <div className="text-left max-w-md mx-auto space-y-2 text-base text-muted-foreground">
              {t.instructions.map((instruction, index) => (
                <p key={index} className={index === 0 ? "font-semibold text-foreground mt-6 text-lg" : ""}>
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
