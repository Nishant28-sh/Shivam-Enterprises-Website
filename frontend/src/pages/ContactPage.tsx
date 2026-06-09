import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Clock3, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { SeoHead } from "@/components/common/SeoHead";
import { SectionReveal } from "@/components/common/SectionReveal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { useContactContent } from "@/hooks/useContent";
import { SEO_PAGES } from "@/constants/seo";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validations/contactSchema";
import { fadeUp } from "@/lib/animations";

export default function ContactPage() {
  const t = useContactContent();
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", farmSize: "", phone: "", service: "" },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setSubmitting(false);
    toast.success(t.successTitle, { description: t.successMessage });
    reset();
    void data;
  };

  return (
    <>
      <SeoHead meta={SEO_PAGES.contact} />

      <SectionReveal className="bg-gradient-to-b from-primary-light/30 to-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="max-w-2xl">
            <Badge>{t.badge}</Badge>
            <h1 className="mt-5 font-heading text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl">
              {t.heading}
            </h1>
            <p className="mt-4 font-body text-base leading-relaxed text-text-secondary sm:text-lg">
              {t.body}
            </p>
          </motion.div>
        </div>
      </SectionReveal>

      <section className="bg-surface pb-20 pt-4">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-2 lg:gap-12 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="overflow-hidden rounded-3xl border border-border bg-surface-card shadow-card"
          >
            <div className="border-b border-border px-5 py-4">
              <p className="font-heading text-sm font-bold text-text-primary">{t.mapTitle}</p>
              <p className="mt-1 text-xs text-text-secondary">{t.details[2]?.value}</p>
            </div>
            <iframe
              title="Shivam Enterprises location map"
              src="https://maps.google.com/maps?q=Gurgaon%2C%20Haryana&t=&z=11&ie=UTF8&iwloc=&output=embed"
              className="h-72 w-full border-0 sm:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="grid gap-3 p-4 sm:grid-cols-2">
              {t.details.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-4"
                  >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                      <Icon size={18} aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-text-secondary">{item.label}</p>
                      <p className="text-sm font-medium text-text-primary">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-3xl border border-border bg-surface-card p-8 shadow-card sm:p-10"
          >
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary-light/60 px-3 py-1 text-xs font-semibold text-primary-dark">
              <Clock3 size={14} aria-hidden />
              {t.response}
            </div>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-text-primary">
              {t.formHeading}
            </h2>
            <p className="mt-2 font-body text-text-secondary">{t.formBody}</p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid gap-5 md:grid-cols-2" noValidate>
              <div className="space-y-2 md:col-span-1">
                <label htmlFor="name" className="text-sm font-semibold text-text-primary">
                  {t.name}
                </label>
                <Input
                  id="name"
                  placeholder={t.namePlaceholder}
                  error={errors.name?.message}
                  {...register("name")}
                />
              </div>

              <div className="space-y-2 md:col-span-1">
                <label htmlFor="farm-size" className="text-sm font-semibold text-text-primary">
                  {t.farmSize}
                </label>
                <Input
                  id="farm-size"
                  type="number"
                  placeholder={t.farmSizePlaceholder}
                  error={errors.farmSize?.message}
                  {...register("farmSize")}
                />
              </div>

              <div className="space-y-2 md:col-span-1">
                <label htmlFor="phone" className="text-sm font-semibold text-text-primary">
                  {t.phoneNumber}
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder={t.phonePlaceholder}
                  error={errors.phone?.message}
                  {...register("phone")}
                />
              </div>

              <div className="space-y-2 md:col-span-1">
                <label htmlFor="service" className="text-sm font-semibold text-text-primary">
                  {t.serviceNeeded}
                </label>
                <Select id="service" error={errors.service?.message} {...register("service")}>
                  <option value="" disabled>
                    {t.selectService}
                  </option>
                  <option value="spray">{t.spray}</option>
                  <option value="nutrient">{t.nutrient}</option>
                  <option value="mapping">{t.mapping}</option>
                </Select>
              </div>

              <div className="md:col-span-2">
                <Button type="submit" className="w-full" disabled={submitting}>
                  {submitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" aria-hidden />
                      {t.submit}
                    </>
                  ) : (
                    t.submit
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
