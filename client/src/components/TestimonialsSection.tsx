import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import { SparklesText } from "@/components/ui/sparkles-text";
import mariaImage from "@assets/generated_images/Black_mother_testimonial_portrait_f82b76f9.png";
import davidImage from "@assets/generated_images/Hispanic_father_testimonial_portrait_4ea7d473.png";
import carmenImage from "@assets/generated_images/Carmen_Lopez_testimonial_portrait_481bd585.png";
import jamesImage from "@assets/generated_images/James_Brown_testimonial_portrait_b3ea0655.png";

interface TestimonialsSectionProps {
  language: "en" | "es";
}

const content = {
  en: {
    title: "What Parents Say",
    testimonials: [
      {
        quote: "This program is great! My daughter loves it here. The staff is very nice and helpful. Signing up was easy!",
        name: "Maria Rodriguez",
        childAge: 4,
        daycare: "Butterfly Academy",
        image: mariaImage,
        initials: "MR",
      },
      {
        quote: "Safe Harbor made it simple. They helped us at every step. I tell all my friends about this place!",
        name: "David Martinez",
        childAge: 5,
        daycare: "Sunshine Daycare",
        image: davidImage,
        initials: "DM",
      },
      {
        quote: "My son is so happy! The teachers care about him. I feel good knowing he is safe here every day.",
        name: "Carmen Lopez",
        childAge: 3,
        daycare: "Rainbow Kids Center",
        image: carmenImage,
        initials: "CL",
      },
      {
        quote: "Best choice we made! The program helps my kids learn and grow. Thank you Safe Harbor!",
        name: "James Brown",
        childAge: 6,
        daycare: "Little Stars Academy",
        image: jamesImage,
        initials: "JB",
      },
    ],
  },
  es: {
    title: "Lo Que Dicen Los Padres",
    testimonials: [
      {
        quote: "¡Este programa es muy bueno! A mi hija le gusta mucho. El personal es muy amable. ¡Inscribirse fue fácil!",
        name: "Maria Rodriguez",
        childAge: 4,
        daycare: "Butterfly Academy",
        image: mariaImage,
        initials: "MR",
      },
      {
        quote: "Safe Harbor lo hizo simple. Nos ayudaron en cada paso. ¡Les cuento a todos mis amigos de este lugar!",
        name: "David Martinez",
        childAge: 5,
        daycare: "Sunshine Daycare",
        image: davidImage,
        initials: "DM",
      },
      {
        quote: "¡Mi hijo está tan feliz! Los maestros se preocupan por él. Me siento bien sabiendo que está seguro aquí.",
        name: "Carmen Lopez",
        childAge: 3,
        daycare: "Rainbow Kids Center",
        image: carmenImage,
        initials: "CL",
      },
      {
        quote: "¡La mejor decisión que tomamos! El programa ayuda a mis hijos a aprender y crecer. ¡Gracias Safe Harbor!",
        name: "James Brown",
        childAge: 6,
        daycare: "Little Stars Academy",
        image: jamesImage,
        initials: "JB",
      },
    ],
  },
};

export default function TestimonialsSection({ language }: TestimonialsSectionProps) {
  const t = content[language];
  
  // Duplicate testimonials for seamless infinite scroll
  const allTestimonials = [...t.testimonials, ...t.testimonials];

  return (
    <section className="py-16 md:py-24 px-6 bg-muted/30 overflow-hidden">
      <div className="max-w-6xl mx-auto mb-12 flex justify-center">
        <SparklesText 
          as="h2"
          text={t.title} 
          className="text-4xl md:text-5xl font-bold"
          colors={{ first: "#2D9B92", second: "#4FC3B8" }}
          sparklesCount={8}
        />
      </div>
      
      <div className="relative group">
        <div className="flex group-hover:[animation-play-state:paused] animate-marquee">
          {allTestimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="flex-shrink-0 w-[400px] p-8 hover-elevate mr-6"
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
                      ? `Parent of ${testimonial.childAge}-year-old`
                      : `Padre de niño de ${testimonial.childAge} años`
                    }
                  </p>
                  <p className="text-xs text-muted-foreground">{testimonial.daycare}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
