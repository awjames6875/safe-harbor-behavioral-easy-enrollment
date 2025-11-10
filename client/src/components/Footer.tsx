import { Phone, Mail, MapPin } from "lucide-react";

interface FooterProps {
  language: "en" | "es";
}

const content = {
  en: {
    tagline: "Safe Harbor Behavioral Health",
    contact: "Contact Us",
    phone: "(918) 555-1212",
    email: "info@safeharbor.com",
    address: "123 Healthcare Blvd, Tulsa, OK 74104",
    hours: "Monday - Friday: 8am - 6pm",
    copyright: "© 2025 Safe Harbor Behavioral Health. All rights reserved.",
  },
  es: {
    tagline: "Safe Harbor Salud Conductual",
    contact: "Contáctenos",
    phone: "(918) 555-1212",
    email: "info@safeharbor.com",
    address: "123 Healthcare Blvd, Tulsa, OK 74104",
    hours: "Lunes - Viernes: 8am - 6pm",
    copyright: "© 2025 Safe Harbor Behavioral Health. Todos los derechos reservados.",
  },
};

export default function Footer({ language }: FooterProps) {
  const t = content[language];

  return (
    <footer className="bg-card border-t border-card-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">{t.tagline}</h3>
            <p className="text-muted-foreground text-lg">
              Body & Brain™ Program
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-xl mb-4">{t.contact}</h4>
            <div className="space-y-3">
              <a 
                href={`tel:${t.phone}`} 
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground hover-elevate transition-colors text-lg"
                data-testid="link-phone"
              >
                <Phone className="w-6 h-6" />
                <span>{t.phone}</span>
              </a>
              <a 
                href={`mailto:${t.email}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground hover-elevate transition-colors text-lg"
                data-testid="link-email"
              >
                <Mail className="w-6 h-6" />
                <span>{t.email}</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground text-lg">
                <MapPin className="w-6 h-6" />
                <span>{t.address}</span>
              </div>
              <p className="text-base text-muted-foreground ml-9">{t.hours}</p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-base text-muted-foreground">
          {t.copyright}
        </div>
      </div>
    </footer>
  );
}
