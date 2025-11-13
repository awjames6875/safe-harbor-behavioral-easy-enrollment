import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Star } from "lucide-react";
import { SiYoutube, SiTiktok, SiPinterest } from "react-icons/si";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface FooterProps {
  language: "en" | "es";
}

const content = {
  en: {
    tagline: "Safe Harbor Behavioral Health",
    about: "Body & Brain™ Program",
    description: "Helping children grow and learn in a safe, caring place.",
    contact: "Contact Us",
    phone: "(918) 553-5746",
    email: "support@safeharborbehavioralhealth.com",
    address: "2510 E 15th St, Tulsa, OK 74104",
    hours: "Monday - Friday: 8am - 6pm",
    connect: "Connect With Us",
    socialTooltips: {
      facebook: "Follow us on Facebook",
      instagram: "Follow us on Instagram",
      twitter: "Follow us on X",
      youtube: "Subscribe on YouTube",
      tiktok: "Follow us on TikTok",
      pinterest: "Follow us on Pinterest",
      googleReviews: "Leave us a Google Review",
    },
    copyright: "© 2025 Safe Harbor Behavioral Health. All rights reserved.",
  },
  es: {
    tagline: "Safe Harbor Salud Conductual",
    about: "Programa Body & Brain™",
    description: "Ayudando a los niños a crecer y aprender en un lugar seguro y cariñoso.",
    contact: "Contáctenos",
    phone: "(918) 553-5746",
    email: "support@safeharborbehavioralhealth.com",
    address: "2510 E 15th St, Tulsa, OK 74104",
    hours: "Lunes - Viernes: 8am - 6pm",
    connect: "Conéctese Con Nosotros",
    socialTooltips: {
      facebook: "Síguenos en Facebook",
      instagram: "Síguenos en Instagram",
      twitter: "Síguenos en X",
      youtube: "Suscríbete en YouTube",
      tiktok: "Síguenos en TikTok",
      pinterest: "Síguenos en Pinterest",
      googleReviews: "Déjanos una reseña en Google",
    },
    copyright: "© 2025 Safe Harbor Behavioral Health. Todos los derechos reservados.",
  },
};

export default function Footer({ language }: FooterProps) {
  const t = content[language];

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* About Section */}
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">{t.tagline}</h2>
            <p className="mb-3 text-xl text-muted-foreground">
              {t.about}
            </p>
            <p className="text-lg text-muted-foreground">
              {t.description}
            </p>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">{t.contact}</h3>
            <address className="space-y-3 not-italic">
              <a 
                href={`tel:${t.phone}`} 
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-lg"
                data-testid="link-phone"
              >
                <Phone className="w-5 h-5" />
                <span>{t.phone}</span>
              </a>
              <a 
                href={`mailto:${t.email}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-lg"
                data-testid="link-email"
              >
                <Mail className="w-5 h-5" />
                <span>{t.email}</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground text-lg">
                <MapPin className="w-5 h-5 mt-1" />
                <span>{t.address}</span>
              </div>
            </address>
          </div>

          {/* Connect Section */}
          <div className="relative">
            <h3 className="mb-4 text-xl font-semibold">{t.connect}</h3>
            <div className="mb-6 flex flex-wrap gap-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full"
                      asChild
                    >
                      <a 
                        href="https://www.facebook.com/profile.php?id=61577803150292" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        data-testid="link-facebook"
                      >
                        <Facebook className="h-4 w-4" />
                        <span className="sr-only">Facebook</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{t.socialTooltips.facebook}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full"
                      asChild
                    >
                      <a 
                        href="https://www.instagram.com/safeharborbh/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        data-testid="link-instagram"
                      >
                        <Instagram className="h-4 w-4" />
                        <span className="sr-only">Instagram</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{t.socialTooltips.instagram}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full"
                      asChild
                    >
                      <a 
                        href="https://x.com/SafeHarborBH" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        data-testid="link-twitter"
                      >
                        <Twitter className="h-4 w-4" />
                        <span className="sr-only">X (Twitter)</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{t.socialTooltips.twitter}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full"
                      asChild
                    >
                      <a 
                        href="https://www.youtube.com/channel/UCCIaW9elV5Z3maAkhrbEzyw" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        data-testid="link-youtube"
                      >
                        <SiYoutube className="h-4 w-4" />
                        <span className="sr-only">YouTube</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{t.socialTooltips.youtube}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full"
                      asChild
                    >
                      <a 
                        href="https://www.tiktok.com/@user2356560294705?lang=en" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        data-testid="link-tiktok"
                      >
                        <SiTiktok className="h-4 w-4" />
                        <span className="sr-only">TikTok</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{t.socialTooltips.tiktok}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full"
                      asChild
                    >
                      <a 
                        href="https://www.pinterest.com/SafeHarborBehaviouralHealth" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        data-testid="link-pinterest"
                      >
                        <SiPinterest className="h-4 w-4" />
                        <span className="sr-only">Pinterest</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{t.socialTooltips.pinterest}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full"
                      asChild
                    >
                      <a 
                        href="https://g.page/r/CWld6M_N9veQEAI/review" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        data-testid="link-google-reviews"
                      >
                        <Star className="h-4 w-4" />
                        <span className="sr-only">Google Reviews</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{t.socialTooltips.googleReviews}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="text-lg text-muted-foreground">
              <p className="mb-2 font-semibold text-foreground">
                {language === "en" ? "Hours" : "Horario"}
              </p>
              <p>{t.hours}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col items-center justify-center gap-4 border-t pt-8 text-center">
          <p className="text-base text-muted-foreground">
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
