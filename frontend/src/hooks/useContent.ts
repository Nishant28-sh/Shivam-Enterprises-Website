import { useLanguageStore } from "@/store/languageStore";
import { homeCopy } from "@/constants/content/home";
import { servicesCopy } from "@/constants/content/services";
import { contactCopy } from "@/constants/content/contact";
import { layoutCopy } from "@/constants/content/layout";

export function useHomeContent() {
  const language = useLanguageStore((s) => s.language);
  return homeCopy[language];
}

export function useServicesContent() {
  const language = useLanguageStore((s) => s.language);
  return servicesCopy[language];
}

export function useContactContent() {
  const language = useLanguageStore((s) => s.language);
  return contactCopy[language];
}

export function useLayoutContent() {
  const language = useLanguageStore((s) => s.language);
  return layoutCopy[language];
}
