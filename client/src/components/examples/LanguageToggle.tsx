import { useState } from "react";
import LanguageToggle from "../LanguageToggle";

export default function LanguageToggleExample() {
  const [language, setLanguage] = useState<"en" | "es">("en");
  
  return <LanguageToggle language={language} onLanguageChange={setLanguage} />;
}
