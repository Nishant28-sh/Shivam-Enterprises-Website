import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, Sprout, X } from "lucide-react";
import { NAV_ITEMS, PHONE_PRIMARY } from "@/constants/navigation";
import { useLayoutContent } from "@/hooks/useContent";
import { useLanguageStore } from "@/store/languageStore";
import { useUiStore } from "@/store/uiStore";
import { cn } from "@/lib/cn";

export function MobileDrawer() {
  const open = useUiStore((s) => s.mobileMenuOpen);
  const setMobileMenuOpen = useUiStore((s) => s.setMobileMenuOpen);
  const toggleLanguage = useLanguageStore((s) => s.toggleLanguage);
  const t = useLayoutContent();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-primary-dark/30 backdrop-blur-sm md:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu overlay"
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 z-[70] flex h-full w-[min(300px,88vw)] flex-col border-l border-border bg-surface-card shadow-elevated md:hidden"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between border-b border-border p-4">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                  <Sprout size={18} color="#fff" aria-hidden />
                </div>
                <span className="font-heading text-sm font-extrabold text-primary-dark">
                  Shivam Enterprises
                </span>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="flex-1 p-3">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                >
                  <NavLink
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "mb-1 block rounded-xl px-4 py-3 font-heading text-sm font-semibold no-underline",
                        isActive
                          ? "bg-primary-light text-primary"
                          : "text-text-secondary hover:bg-surface",
                      )
                    }
                  >
                    {t[item.key]}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <div className="space-y-2 border-t border-border p-4">
              <a
                href={`tel:${PHONE_PRIMARY}`}
                className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 font-heading text-sm font-bold text-white no-underline"
              >
                <Phone size={15} aria-hidden />
                8502858582
              </a>
              <button
                type="button"
                onClick={() => {
                  toggleLanguage();
                  setMobileMenuOpen(false);
                }}
                className="w-full rounded-xl border border-primary/25 bg-primary-light/50 px-4 py-3 font-heading text-sm font-bold text-primary-dark"
              >
                {t.lang}
              </button>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-xl bg-primary-dark px-4 py-3 text-center font-heading text-sm font-bold text-white no-underline"
              >
                {t.contactUs}
              </Link>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
