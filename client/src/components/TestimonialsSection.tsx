import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import mariaImage from "@assets/generated_images/Parent_testimonial_portrait_Maria_efefc5db.png";
import davidImage from "@assets/generated_images/Parent_testimonial_portrait_David_3132236e.png";

interface TestimonialsSectionProps {
  language: "en" | "es";
}

const content = {
  en: {
    title: "What Parents Are Saying",
    testimonials: [
      {
        quote: "The Body & Brain program has been incredible for my daughter. The staff is caring and professional, and the enrollment process was so easy!",
        name: "Maria Rodriguez",
        childAge: 4,
        daycare: "Butterfly Academy",
        image: mariaImage,
        initials: "MR",
      },
      {
        quote: "Safe Harbor made everything simple. From the first form to the assessment, they guided us every step of the way. Highly recommend!",
        name: "David Chen",
        childAge: 5,
        daycare: "Sunshine Daycare",
        image: davidImage,
        initials: "DC",
      },
    ],
  },
  es: {
    title: "Lo Que Dicen Los Padres",
    testimonials: [
      {
        quote: "El programa Body & Brain ha sido increíble para mi hija. El personal es atento y profesional, ¡y el proceso de inscripción fue muy fácil!",
        name: "Maria Rodriguez",
        childAge: 4,
        daycare: "Butterfly Academy",
        image: mariaImage,
        initials: "MR",
      },
      {
        quote: "Safe Harbor hizo todo simple. Desde el primer formulario hasta la evaluación, nos guiaron en cada paso. ¡Muy recomendado!",
        name: "David Chen",
        childAge: 5,
        daycare: "Sunshine Daycare",
        image: davidImage,
        initials: "DC",
      },
    ],
  },
};

export default function TestimonialsSection({ language }: TestimonialsSectionProps) {
  const t = content[language];

  return (
    <section className="py-16 md:py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {t.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 hover-elevate"
              data-testid={`card-testimonial-${index}`}
            >
              <Quote className="w-10 h-10 text-primary mb-4" />
              
              <p className="text-lg mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.initials}</AvatarFallback>
                </Avatar>
                
                <div>
                  <p className="font-semibold text-lg">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {language === "en" 
                      ? `Parent of ${testimonial.childAge}-year-old • ${testimonial.daycare}`
                      : `Padre de niño de ${testimonial.childAge} años • ${testimonial.daycare}`
                    }
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
