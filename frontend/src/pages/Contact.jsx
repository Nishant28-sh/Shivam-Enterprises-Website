import React from "react";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const contactCopy = {
  en: {
    badge: "Contact KisanDrone",
    heading: "Talk to a Field Specialist",
    body:
      "Share your farm details and our operations team will suggest the right spray plan, estimated timeline, and service package.",
    details: [
      {
        label: "Phone",
        value: "+91 8708639550",
        icon: Phone,
      },
      {
        label: "Email",
        value: "hello@kisandrone.in",
        icon: Mail,
      },
      {
        label: "Address",
        value: "KisanDrone Operations Hub, Gurgaon, Haryana",
        icon: MapPin,
      },
    ],
    response: "Response in one business day",
    formHeading: "Request a Consultation",
    formBody: "Complete the form and we will call you within one business day.",
    name: "Name",
    namePlaceholder: "Enter your full name",
    farmSize: "Farm Size (Acres)",
    farmSizePlaceholder: "e.g. 25",
    phoneNumber: "Phone Number",
    phonePlaceholder: "Enter your mobile number",
    serviceNeeded: "Service Needed",
    selectService: "Select a service",
    spray: "Pesticide Spray",
    nutrient: "Nutrient Boost",
    mapping: "Crop Mapping",
    submit: "Submit Enquiry",
  },
  hi: {
    badge: "KisanDrone से संपर्क",
    heading: "फील्ड विशेषज्ञ से बात करें",
    body:
      "अपने खेत की जानकारी साझा करें और हमारी ऑपरेशन्स टीम आपके लिए सही स्प्रे प्लान, अनुमानित समय और सेवा पैकेज बताएगी।",
    details: [
      {
        label: "फोन",
        value: "+91 98765 43210",
        icon: Phone,
      },
      {
        label: "ईमेल",
        value: "hello@kisandrone.in",
        icon: Mail,
      },
      {
        label: "पता",
        value: "KisanDrone ऑपरेशन्स हब, गुरुग्राम, हरियाणा",
        icon: MapPin,
      },
    ],
    response: "एक कार्य दिवस में उत्तर",
    formHeading: "परामर्श का अनुरोध करें",
    formBody: "फॉर्म भरें, हम एक कार्य दिवस में आपको कॉल करेंगे।",
    name: "नाम",
    namePlaceholder: "अपना पूरा नाम दर्ज करें",
    farmSize: "खेत का आकार (एकड़)",
    farmSizePlaceholder: "जैसे 25",
    phoneNumber: "फोन नंबर",
    phonePlaceholder: "अपना मोबाइल नंबर दर्ज करें",
    serviceNeeded: "आवश्यक सेवा",
    selectService: "सेवा चुनें",
    spray: "कीटनाशक स्प्रे",
    nutrient: "पोषक तत्व स्प्रे",
    mapping: "फसल मैपिंग",
    submit: "पूछताछ भेजें",
  },
};

function Contact() {
  const { language } = useLanguage();
  const t = contactCopy[language] || contactCopy.en;

  return (
    <section className="space-y-0">
      <section className="section-shell bg-[#f1f6ea]">
        <div className="grid w-full items-center gap-10 lg:grid-cols-2">
          <div className="space-y-5 motion-rise" style={{ "--stagger": "80ms" }}>
            <p className="inline-flex rounded-full border border-[#d2dfc9] bg-[#eef4e6] px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#516a45]">
              {t.badge}
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#0F172A] sm:text-5xl">{t.heading}</h1>
            <p className="max-w-2xl text-base leading-relaxed text-[#475569] sm:text-lg">{t.body}</p>

            <div className="grid gap-4 sm:grid-cols-2">
              {t.details.map((item, index) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.label}
                    className="rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-[0_16px_40px_-30px_rgba(15,23,42,0.24)] motion-pop hover-float"
                    style={{ "--stagger": `${120 + index * 90}ms` }}
                  >
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf4e6] text-[#5d7a4c]">
                        <Icon size={20} />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-[#475569]">{item.label}</p>
                        <p className="text-base font-medium text-[#0F172A]">{item.value}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-[0_20px_50px_-34px_rgba(15,23,42,0.22)] motion-pop hover-float" style={{ "--stagger": "200ms" }}>
            <div className="drone-scene h-[22rem]">
              <video
                className="drone-scene-video"
                src="/assets/istockphoto-2009338133-640_adpp_is.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
              <div className="absolute inset-0 bg-[#0F172A]/24" />
              <div className="absolute bottom-4 left-4 rounded-xl border border-[#E2E8F0] bg-white/90 px-4 py-2 text-sm font-semibold text-[#334155] backdrop-blur-sm">
                <span className="inline-flex items-center gap-2">
                  <Clock3 size={15} />
                  {t.response}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#e5efda]">
        <div className="w-full rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-[0_16px_40px_-30px_rgba(15,23,42,0.24)] sm:p-10 motion-rise" style={{ "--stagger": "100ms" }}>
          <h2 className="text-3xl font-bold tracking-tight text-[#0F172A]">{t.formHeading}</h2>
          <p className="mt-2 text-[#475569]">{t.formBody}</p>

          <form className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-semibold text-[#334155]">
                {t.name}
              </label>
              <input
                id="name"
                type="text"
                placeholder={t.namePlaceholder}
                className="w-full rounded-xl border border-[#cfdec5] bg-[#f4f8ee] px-4 py-3 text-sm outline-none transition focus:border-[#5d7a4c] focus:bg-white"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="farm-size" className="text-sm font-semibold text-[#334155]">
                {t.farmSize}
              </label>
              <input
                id="farm-size"
                type="number"
                placeholder={t.farmSizePlaceholder}
                className="w-full rounded-xl border border-[#cfdec5] bg-[#f4f8ee] px-4 py-3 text-sm outline-none transition focus:border-[#5d7a4c] focus:bg-white"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-semibold text-[#334155]">
                {t.phoneNumber}
              </label>
              <input
                id="phone"
                type="tel"
                placeholder={t.phonePlaceholder}
                className="w-full rounded-xl border border-[#cfdec5] bg-[#f4f8ee] px-4 py-3 text-sm outline-none transition focus:border-[#5d7a4c] focus:bg-white"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="service" className="text-sm font-semibold text-[#334155]">
                {t.serviceNeeded}
              </label>
              <select
                id="service"
                className="w-full rounded-xl border border-[#cfdec5] bg-[#f4f8ee] px-4 py-3 text-sm outline-none transition focus:border-[#5d7a4c] focus:bg-white"
                defaultValue=""
              >
                <option value="" disabled>
                  {t.selectService}
                </option>
                <option value="spray">{t.spray}</option>
                <option value="nutrient">{t.nutrient}</option>
                <option value="mapping">{t.mapping}</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="btn-primary w-full rounded-xl px-6 py-3 text-sm font-semibold shadow-[0_18px_36px_-18px_rgba(11,111,88,0.72)] glow-pulse"
              >
                {t.submit}
              </button>
            </div>
          </form>
        </div>
      </section>
    </section>
  );
}

export default Contact;
