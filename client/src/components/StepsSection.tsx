import { Card } from "@/components/ui/card";
import { FileText, ClipboardCheck, Calendar } from "lucide-react";

interface StepsSectionProps {
  language: "en" | "es";
}

const content = {
  en: {
    title: "Simple 3-Step Enrollment",
    steps: [
      {
        number: 1,
        title: "Fill Out the Form",
        description: "Complete our quick bilingual enrollment form with your child's basic information.",
        icon: FileText,
      },
      {
        number: 2,
        title: "Complete TherapyNotes Forms",
        description: "Watch our helpful video and complete your secure forms online at your convenience.",
        icon: ClipboardCheck,
      },
      {
        number: 3,
        title: "Book Your Assessment",
        description: "Schedule your child's first assessment with our expert therapists.",
        icon: Calendar,
      },
    ],
  },
  es: {
    title: "Inscripción Simple en 3 Pasos",
    steps: [
      {
        number: 1,
        title: "Complete el Formulario",
        description: "Complete nuestro rápido formulario de inscripción bilingüe con la información básica de su hijo.",
        icon: FileText,
      },
      {
        number: 2,
        title: "Complete los Formularios de TherapyNotes",
        description: "Mire nuestro video útil y complete sus formularios seguros en línea cuando le convenga.",
        icon: ClipboardCheck,
      },
      {
        number: 3,
        title: "Reserve Su Evaluación",
        description: "Programe la primera evaluación de su hijo con nuestros terapeutas expertos.",
        icon: Calendar,
      },
    ],
  },
};

export default function StepsSection({ language }: StepsSectionProps) {
  const t = content[language];

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {t.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.steps.map((step) => (
            <Card
              key={step.number}
              className="p-8 text-center hover-elevate transition-all"
              data-testid={`card-step-${step.number}`}
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-6">
                  {step.number}
                </div>
                
                <step.icon className="w-12 h-12 text-primary mb-4" />
                
                <h3 className="text-xl md:text-2xl font-semibold mb-4">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {step.number < 3 && (
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-border" />
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
