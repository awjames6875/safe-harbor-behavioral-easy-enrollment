import { Card } from "@/components/ui/card";
import { FileText, ClipboardCheck, Calendar } from "lucide-react";

interface StepsSectionProps {
  language: "en" | "es";
}

const content = {
  en: {
    title: "3 Easy Steps to Join",
    steps: [
      {
        number: 1,
        title: "Fill Out Form",
        description: "Fill out our quick form with your child's info. It only takes a few minutes!",
        icon: FileText,
      },
      {
        number: 2,
        title: "Do Online Forms",
        description: "Watch a short video. Then fill out forms on your computer or phone whenever you want.",
        icon: ClipboardCheck,
      },
      {
        number: 3,
        title: "Book First Visit",
        description: "Pick a time for your child to meet our team. We'll help you find a day that works!",
        icon: Calendar,
      },
    ],
  },
  es: {
    title: "3 Pasos Fáciles Para Unirse",
    steps: [
      {
        number: 1,
        title: "Llenar Formulario",
        description: "Llene nuestro formulario rápido con la información de su hijo. ¡Solo toma unos minutos!",
        icon: FileText,
      },
      {
        number: 2,
        title: "Hacer Formularios",
        description: "Mire un video corto. Luego llene los formularios en su computadora o teléfono cuando quiera.",
        icon: ClipboardCheck,
      },
      {
        number: 3,
        title: "Reservar Primera Visita",
        description: "Elija un momento para que su hijo conozca a nuestro equipo. ¡Le ayudaremos a encontrar un día!",
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
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          {t.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.steps.map((step) => (
            <Card
              key={step.number}
              className="p-8 text-center hover-elevate hover:scale-105 transition-all"
              data-testid={`card-step-${step.number}`}
            >
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-3xl font-bold mb-6">
                  {step.number}
                </div>
                
                <step.icon className="w-14 h-14 text-primary mb-4" />
                
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                  {step.title}
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
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
