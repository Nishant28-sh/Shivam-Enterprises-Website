import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FloatingCallButton } from "@/components/common/FloatingCallButton";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { MobileDrawer } from "./MobileDrawer";
import { useLayoutContent } from "@/hooks/useContent";
import { useUiStore } from "@/store/uiStore";

export function MainLayout() {
  const location = useLocation();
  const t = useLayoutContent();
  const setMobileMenuOpen = useUiStore((s) => s.setMobileMenuOpen);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname, setMobileMenuOpen]);

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-surface font-body text-text-primary">
      <div className="bg-primary-dark py-2 text-center">
        <p className="font-heading text-xs font-semibold tracking-wide text-primary-muted">
          {t.strip}
        </p>
      </div>

      <Navbar />
      <MobileDrawer />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <FloatingCallButton />
    </div>
  );
}
