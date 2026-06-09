import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, MapPin, Phone, Sprout } from "lucide-react";
import { NAV_ITEMS, PHONE_PRIMARY, PHONE_SECONDARY } from "@/constants/navigation";
import { useLayoutContent } from "@/hooks/useContent";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function Footer() {
  const t = useLayoutContent();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-surface-card">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8"
        >
          <motion.div variants={fadeUp} className="lg:col-span-4">
            <motion.div
              className="mb-5 flex items-center gap-3"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary shadow-soft">
                <Sprout size={22} color="#fff" aria-hidden />
              </div>
              <div>
                <span className="block font-heading text-xl font-extrabold text-text-primary">
                  Shivam Enterprises
                </span>
                <span className="text-xs font-medium text-text-secondary">किसान ड्रोन</span>
              </div>
            </motion.div>
            <p className="max-w-sm font-body text-sm leading-relaxed text-text-secondary">
              {t.footerDescription}
            </p>
            <motion.div
              variants={fadeUp}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary-light/60 px-3 py-1.5"
            >
              <Globe size={14} className="text-primary" aria-hidden />
              <span className="text-xs font-semibold text-primary-dark">{t.serviceArea}</span>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUp} className="lg:col-span-2">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-primary">
              {t.pages}
            </p>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item, i) => (
                <motion.li
                  key={item.to}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 + i * 0.07 }}
                >
                  <Link
                    to={item.to}
                    className="group inline-flex items-center font-body text-sm text-text-secondary no-underline transition-colors hover:text-primary"
                  >
                    <motion.span
                      className="mr-2 h-0.5 rounded-full bg-primary"
                      initial={{ width: 0 }}
                      whileHover={{ width: 12 }}
                      transition={{ duration: 0.2 }}
                    />
                    {t[item.key]}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="lg:col-span-3">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-primary">
              {t.addressLabel}
            </p>
            <motion.div
              whileHover={{ y: -2 }}
              className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-4 shadow-soft"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                <MapPin size={16} aria-hidden />
              </span>
              <div>
                <p className="font-heading text-xs font-bold text-text-primary sm:text-sm">
                  SHIVAM ENTERPRISES
                </p>
                <p className="mt-1 font-body text-xs leading-relaxed text-text-secondary sm:text-sm">
                  {t.address}
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUp} className="lg:col-span-3">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-primary">
              {t.contactLabel}
            </p>
            <div className="space-y-2.5">
              {[
                { tel: PHONE_PRIMARY, display: "8502858582" },
                { tel: PHONE_SECONDARY, display: "8168564013" },
              ].map((phone, i) => (
                <motion.a
                  key={phone.tel}
                  href={`tel:${phone.tel}`}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  whileHover={{ x: 4, boxShadow: "0 8px 24px -8px rgba(22,163,74,0.2)" }}
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 no-underline shadow-soft transition-colors hover:border-primary/30"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-light text-primary">
                    <Phone size={16} aria-hidden />
                  </span>
                  <p className="font-heading text-sm font-bold text-text-primary">
                    {phone.display}
                  </p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row"
        >
          <p className="text-center font-body text-xs text-text-secondary sm:text-left">
            © {year} Shivam Enterprises. {t.rights}
          </p>
          <p className="text-center font-body text-xs text-text-secondary">{t.precisionTag}</p>
        </motion.div>
      </div>
    </footer>
  );
}
