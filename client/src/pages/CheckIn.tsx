import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, QrCode } from "lucide-react";
import { Link } from "wouter";
import LanguageToggle from "@/components/LanguageToggle";

const content = {
  en: {
    title: "Staff Check-In",
    subtitle: "Scan QR code or enter Contact ID to mark attendance",
    qrLabel: "Scan QR Code",
    orDivider: "OR",
    manualLabel: "Enter Contact ID Manually",
    contactIdPlaceholder: "Contact ID (e.g., 12345)",
    submitButton: "Mark Present",
    successTitle: "Check-In Successful!",
    successMessage: "Attendance has been recorded.",
    anotherCheckIn: "Check In Another Child",
    backToHome: "Back to Home",
  },
  es: {
    title: "Registro de Personal",
    subtitle: "Escanee el código QR o ingrese el ID de contacto para marcar asistencia",
    qrLabel: "Escanear Código QR",
    orDivider: "O",
    manualLabel: "Ingresar ID de Contacto Manualmente",
    contactIdPlaceholder: "ID de Contacto (ej., 12345)",
    submitButton: "Marcar Presente",
    successTitle: "¡Registro Exitoso!",
    successMessage: "La asistencia ha sido registrada.",
    anotherCheckIn: "Registrar Otro Niño",
    backToHome: "Volver al Inicio",
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
    <div className="min-h-screen bg-muted/30 flex items-center justify-center p-6">
      <div className="fixed top-6 right-6 z-50">
        <LanguageToggle language={language} onLanguageChange={setLanguage} />
      </div>

      <Card className="w-full max-w-md p-8">
        {!isSuccess ? (
          <>
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">{t.title}</h1>
              <p className="text-muted-foreground">{t.subtitle}</p>
            </div>

            <div className="space-y-6">
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center bg-muted/50">
                <QrCode className="w-24 h-24 text-muted-foreground mx-auto mb-4" />
                <p className="text-sm text-muted-foreground">{t.qrLabel}</p>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">
                    {t.orDivider}
                  </span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="contactId">{t.manualLabel}</Label>
                  <Input
                    id="contactId"
                    type="text"
                    placeholder={t.contactIdPlaceholder}
                    value={contactId}
                    onChange={(e) => setContactId(e.target.value)}
                    className="mt-2"
                    required
                    data-testid="input-contact-id"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  data-testid="button-mark-present"
                >
                  {t.submitButton}
                </Button>
              </form>

              <Link href="/">
                <Button variant="ghost" className="w-full" data-testid="link-home">
                  {t.backToHome}
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-8">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-2">{t.successTitle}</h2>
            <p className="text-muted-foreground mb-8">{t.successMessage}</p>
            
            <div className="space-y-3">
              <Button
                onClick={handleReset}
                className="w-full"
                size="lg"
                data-testid="button-another-checkin"
              >
                {t.anotherCheckIn}
              </Button>
              <Link href="/">
                <Button variant="outline" className="w-full" data-testid="link-home-success">
                  {t.backToHome}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
