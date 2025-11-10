import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import mariaImage from "@assets/generated_images/Black_mother_testimonial_portrait_f82b76f9.png";
import davidImage from "@assets/generated_images/Hispanic_father_testimonial_portrait_4ea7d473.png";

interface TestimonialsSectionProps {
  language: "en" | "es";
}

const content = {
  en: {
    title: "What Parents Say",
    testimonials: [
      {
        quote: "This program is amazing! My daughter loves it. The staff is so kind and helpful. Signing up was super easy!",
        name: "Maria Rodriguez",
        childAge: 4,
        daycare: "Butterfly Academy",
        image: mariaImage,
        initials: "MR",
      },
      {
        quote: "Safe Harbor made everything simple. They helped us every step of the way. I tell all my friends about it!",
        name: "David Martinez",
        childAge: 5,
        daycare: "Sunshine Daycare",
        image: davidImage,
        initials: "DM",
      },
    ],
  },
  es: {
    title: "Lo Que Dicen Los Padres",
    testimonials: [
      {
        quote: "¡Este programa es increíble! A mi hija le encanta. El personal es muy amable y servicial. ¡Inscribirse fue súper fácil!",
        name: "Maria Rodriguez",
        childAge: 4,
        daycare: "Butterfly Academy",
        image: mariaImage,
        initials: "MR",
      },
      {
        quote: "Safe Harbor hizo todo simple. Nos ayudaron en cada paso. ¡Se lo cuento a todos mis amigos!",
        name: "David Martinez",
        childAge: 5,
        daycare: "Sunshine Daycare",
        image: davidImage,
        initials: "DM",
      },
    ],
  },
};

export default function TestimonialsSection({ language }: TestimonialsSectionProps) {
  const t = content[language];

  return (
    <section className="py-16 md:py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          {t.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 hover-elevate hover:scale-105 transition-transform"
              data-testid={`card-testimonial-${index}`}
            >
              <Quote className="w-10 h-10 text-primary mb-4" />
              
              <p className="text-xl mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <Avatar className="w-20 h-20">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.initials}</AvatarFallback>
                </Avatar>
                
                <div>
                  <p className="font-semibold text-xl">{testimonial.name}</p>
                  <p className="text-base text-muted-foreground">
                    {language === "en" 
                      ? `Parent of ${testimonial.childAge}-year-old`
                      : `Padre de niño de ${testimonial.childAge} años`
                    }
                  </p>
                  <p className="text-sm text-muted-foreground">{testimonial.daycare}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
