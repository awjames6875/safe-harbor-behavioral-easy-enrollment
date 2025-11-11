import { Card } from "@/components/ui/card";
import { FileText, ClipboardCheck, Calendar } from "lucide-react";

interface StepsSectionProps {
  language: "en" | "es";
}

const content = {
  en: {
    title: "3 Easy Steps",
    steps: [
      {
        number: 1,
        title: "Fill Out Form",
        description: "Fill out our quick form with your child's info. Takes just a few minutes!",
        icon: FileText,
      },
      {
        number: 2,
        title: "Do Online Forms",
        description: "Watch a short video. Then fill out forms on your computer or phone when you want.",
        icon: ClipboardCheck,
      },
      {
        number: 3,
        title: "Book First Visit",
        description: "Pick a time for your child to meet our team. We will help you find a good day!",
        icon: Calendar,
      },
    ],
  },
  es: {
    title: "3 Pasos Fáciles",
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
        description: "Vea un video corto. Luego llene los formularios en su computadora o teléfono cuando quiera.",
        icon: ClipboardCheck,
      },
      {
        number: 3,
        title: "Reservar Primera Visita",
        description: "Escoja un tiempo para que su hijo vea a nuestro equipo. ¡Le ayudaremos a encontrar un buen día!",
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
              className="p-8 text-center hover-elevate relative group border-2 overflow-hidden transition-all duration-300"
              data-testid={`card-step-${step.number}`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/30 group-hover:w-2 group-hover:bg-primary transition-all duration-300 rounded-r-full" />
              
              <div className="flex flex-col items-center relative z-10">
                <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-3xl font-bold mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  {step.number}
                </div>
                
                <step.icon className="w-14 h-14 text-primary mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-primary/80" />
                
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 transition-all duration-300 group-hover:translate-x-1">
                  {step.title}
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground">
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
