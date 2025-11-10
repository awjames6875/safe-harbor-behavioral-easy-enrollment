import { Button } from "@/components/ui/button";

interface LanguageToggleProps {
  language: "en" | "es";
  onLanguageChange: (lang: "en" | "es") => void;
}

export default function LanguageToggle({ language, onLanguageChange }: LanguageToggleProps) {
  return (
    <div className="flex items-center gap-1 bg-card border border-card-border rounded-lg p-1">
      <Button
        size="sm"
        variant={language === "en" ? "default" : "ghost"}
        onClick={() => onLanguageChange("en")}
        className="h-8 px-4"
        data-testid="button-language-en"
      >
        EN
      </Button>
      <Button
        size="sm"
        variant={language === "es" ? "default" : "ghost"}
        onClick={() => onLanguageChange("es")}
        className="h-8 px-4"
        data-testid="button-language-es"
      >
        ES
      </Button>
    </div>
  );
}
