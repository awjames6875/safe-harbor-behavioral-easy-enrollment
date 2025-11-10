import LanguageToggle from "@/components/LanguageToggle";
import logoImage from "@assets/image_1762766575326.png";

interface HeaderProps {
  language: "en" | "es";
  onLanguageChange: (lang: "en" | "es") => void;
}

export default function Header({ language, onLanguageChange }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src={logoImage} 
            alt="Safe Harbor Behavioral Health" 
            className="h-16 w-auto"
            data-testid="img-logo"
          />
        </div>
        
        <LanguageToggle language={language} onLanguageChange={onLanguageChange} />
      </div>
    </header>
  );
}
