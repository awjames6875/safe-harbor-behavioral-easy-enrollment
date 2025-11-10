import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, QrCode } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";

const content = {
  en: {
    title: "Check In Here",
    subtitle: "Scan the code or type the ID number",
    qrLabel: "Scan QR Code",
    orDivider: "OR",
    manualLabel: "Type ID Number",
    contactIdPlaceholder: "ID Number (like 12345)",
    submitButton: "Mark Here",
    successTitle: "Done!",
    successMessage: "Check-in saved!",
    anotherCheckIn: "Check In Another Child",
    backToHome: "Go Home",
  },
  es: {
    title: "Marcar Aquí",
    subtitle: "Vea el código o escriba el número de ID",
    qrLabel: "Ver Código QR",
    orDivider: "O",
    manualLabel: "Escribir Número de ID",
    contactIdPlaceholder: "Número de ID (como 12345)",
    submitButton: "Marcar Aquí",
    successTitle: "¡Listo!",
    successMessage: "¡Guardado!",
    anotherCheckIn: "Marcar Otro Niño",
    backToHome: "Ir a Inicio",
  },
};

export default function CheckIn() {
  const [language, setLanguage] = useState<"en" | "es">("en");
  const [contactId, setContactId] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const t = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Check-in submitted for contact ID:", contactId);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setContactId("");
    setIsSuccess(false);
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <Header language={language} onLanguageChange={setLanguage} />
      
      <div className="flex items-center justify-center p-6 pt-32">
        <Card className="w-full max-w-md p-8">
          {!isSuccess ? (
            <>
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-3">{t.title}</h1>
                <p className="text-lg text-muted-foreground">{t.subtitle}</p>
              </div>

              <div className="space-y-6">
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center bg-muted/50">
                  <QrCode className="w-28 h-28 text-muted-foreground mx-auto mb-4" />
                  <p className="text-base text-muted-foreground">{t.qrLabel}</p>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-base uppercase">
                    <span className="bg-card px-2 text-muted-foreground">
                      {t.orDivider}
                    </span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="contactId" className="text-lg">{t.manualLabel}</Label>
                    <Input
                      id="contactId"
                      type="text"
                      placeholder={t.contactIdPlaceholder}
                      value={contactId}
                      onChange={(e) => setContactId(e.target.value)}
                      className="mt-2 text-lg"
                      required
                      data-testid="input-contact-id"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full text-xl"
                    size="lg"
                    data-testid="button-mark-present"
                  >
                    {t.submitButton}
                  </Button>
                </form>

                <Link href="/">
                  <Button variant="ghost" className="w-full text-lg" data-testid="link-home">
                    {t.backToHome}
                  </Button>
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-3">{t.successTitle}</h2>
              <p className="text-xl text-muted-foreground mb-8">{t.successMessage}</p>
              
              <div className="space-y-3">
                <Button
                  onClick={handleReset}
                  className="w-full text-xl"
                  size="lg"
                  data-testid="button-another-checkin"
                >
                  {t.anotherCheckIn}
                </Button>
                <Link href="/">
                  <Button variant="outline" className="w-full text-lg" data-testid="link-home-success">
                    {t.backToHome}
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
