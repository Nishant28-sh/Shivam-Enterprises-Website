import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Language } from "@/types";

interface LanguageState {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set, get) => ({
      language: "en",
      setLanguage: (language) => {
        document.documentElement.lang = language === "hi" ? "hi" : "en";
        set({ language });
      },
      toggleLanguage: () => {
        const next = get().language === "en" ? "hi" : "en";
        document.documentElement.lang = next === "hi" ? "hi" : "en";
        set({ language: next });
      },
    }),
    {
      name: "kd_lang",
      onRehydrateStorage: () => (state) => {
        if (state?.language) {
          document.documentElement.lang = state.language === "hi" ? "hi" : "en";
        }
      },
    },
  ),
);
