import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, Phone, Sprout } from "lucide-react";
import { NAV_ITEMS, PHONE_PRIMARY } from "@/constants/navigation";
import { useLayoutContent } from "@/hooks/useContent";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useLanguageStore } from "@/store/languageStore";
import { useUiStore } from "@/store/uiStore";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { transitionFast } from "@/lib/animations";

export function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const t = useLayoutContent();
  const scrolled = useScrollPosition(12);
  const toggleLanguage = useLanguageStore((s) => s.toggleLanguage);
  const setMobileMenuOpen = useUiStore((s) => s.setMobileMenuOpen);

  const heroMode = isHome && !scrolled;

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={transitionFast}
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-surface-card/90 shadow-soft backdrop-blur-nav backdrop-saturate-150"
          : heroMode
            ? "border-b border-white/10 bg-black/20 backdrop-blur-sm"
            : "border-b border-border bg-surface-card/90 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="group flex items-center gap-3 no-underline"
          aria-label="Shivam Enterprises home"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary shadow-soft transition-transform duration-200 group-hover:scale-105">
            <Sprout size={22} color="#fff" strokeWidth={2.2} aria-hidden />
          </div>
          <div>
            <div
              className={cn(
                "font-heading text-lg font-extrabold leading-none transition-colors",
                heroMode ? "text-white" : "text-primary-dark",
              )}
            >
              Shivam Enterprises
            </div>
            <div
              className={cn(
                "mt-0.5 text-[0.65rem] font-semibold tracking-wide transition-colors",
                heroMode ? "text-white/70" : "text-text-secondary",
              )}
            >
              किसान ड्रोन
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "relative px-4 py-2 font-heading text-sm font-semibold no-underline transition-colors duration-200",
                  heroMode
                    ? isActive
                      ? "text-primary-muted"
                      : "text-white/85 hover:text-white"
                    : isActive
                      ? "text-primary"
                      : "text-text-secondary hover:text-text-primary",
                )
              }
            >
              {({ isActive }) => (
                <>
                  {t[item.key]}
                  <motion.span
                    layoutId="nav-underline"
                    className={cn(
                      "absolute bottom-0 left-3 right-3 h-0.5 rounded-full",
                      heroMode ? "bg-primary-muted" : "bg-primary",
                    )}
                    initial={false}
                    animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                    transition={transitionFast}
                    style={{ originX: 0.5 }}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleLanguage}
            className={cn(
              "hidden rounded-full border px-4 py-2 text-xs font-bold transition-colors sm:inline-flex",
              heroMode
                ? "border-white/30 bg-white/10 text-white hover:bg-white/20"
                : "border-primary/25 bg-primary-light/50 text-primary-dark hover:bg-primary-light",
            )}
            aria-label="Switch language"
          >
            {t.lang}
          </button>

          <Link to="/contact" className="hidden sm:inline-flex">
            <Button size="sm" variant={heroMode ? "primary" : "secondary"}>
              {t.contactUs}
            </Button>
          </Link>

          <a
            href={`tel:${PHONE_PRIMARY}`}
            className={cn(
              "hidden items-center gap-2 rounded-full border-2 px-4 py-2 font-heading text-sm font-bold no-underline transition-colors lg:inline-flex",
              heroMode
                ? "border-white/40 text-white hover:border-white hover:bg-white/10"
                : "border-primary/30 text-primary-dark hover:border-primary hover:bg-primary-light/40",
            )}
          >
            <Phone size={14} className={heroMode ? "text-primary-muted" : "text-primary"} aria-hidden />
            +91 8502858582
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-xl md:hidden",
              heroMode ? "bg-white/15 text-white" : "bg-primary-light text-primary-dark",
            )}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
