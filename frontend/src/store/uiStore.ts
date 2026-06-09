import { create } from "zustand";

interface UiState {
  mobileMenuOpen: boolean;
  isPageLoading: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  toggleMobileMenu: () => void;
  setPageLoading: (loading: boolean) => void;
}

export const useUiStore = create<UiState>((set) => ({
  mobileMenuOpen: false,
  isPageLoading: false,
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
  toggleMobileMenu: () => set((s) => ({ mobileMenuOpen: !s.mobileMenuOpen })),
  setPageLoading: (loading) => set({ isPageLoading: loading }),
}));
