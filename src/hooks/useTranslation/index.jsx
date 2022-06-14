import LocalizedStrings from "react-localization";
import localization from "@/localization"; // import language resource files
import { useLanguageContext } from "@/context/locale/LanguageContext";

export default function useTranslation() {
  const { language } = useLanguageContext();
  let translation = new LocalizedStrings(localization);

  translation.setLanguage(language);
  return translation;
}
