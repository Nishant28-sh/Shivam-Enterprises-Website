import React from "react";
import { ArrowRight, Clock3, Droplets, Radar, ShieldCheck, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const servicesCopy = {
  en: {
    badge: "Service Portfolio",
    heading: "Built for High-Trust Farm Operations",
    body:
      "Every KisanDrone service is designed for speed, field safety, and measurable outcomes. Plan, spray, and monitor with one coordinated operations team.",
    live: "Operations dashboard in real time",
    learnMore: "Learn More",
    serviceHighlights: [
      { title: "50 Acres/Day", subtitle: "High throughput operations", icon: Radar },
      { title: "5 Min/Acre", subtitle: "Fast mission turnaround", icon: Clock3 },
      { title: "DGCA Ready", subtitle: "Certified pilot network", icon: ShieldCheck },
    ],
    services: [
      {
        title: "Pesticide Spray",
        description:
          "Uniform pesticide distribution with route-optimized drone missions for broad-acre and high-density crop patterns.",
        icon: Droplets,
      },
      {
        title: "Nutrient Boost",
        description:
          "Scheduled micronutrient applications tailored to crop stages for healthier canopy growth and resilient output.",
        icon: Sparkles,
      },
      {
        title: "Crop Mapping",
        description:
          "Multi-angle aerial mapping to identify stress pockets, track variability, and optimize intervention strategy.",
        icon: Radar,
      },
    ],
  },
  hi: {
    badge: "सेवा पोर्टफोलियो",
    heading: "उच्च भरोसे वाली कृषि सेवाओं के लिए तैयार",
    body:
      "KisanDrone की हर सेवा तेज़ गति, खेत की सुरक्षा और मापने योग्य परिणामों के लिए बनाई गई है। एक ही समन्वित टीम के साथ योजना बनाएं, स्प्रे करें और मॉनिटर करें।",
    live: "ऑपरेशन्स डैशबोर्ड रियल टाइम में",
    learnMore: "और जानें",
    serviceHighlights: [
      { title: "50 एकड़/दिन", subtitle: "उच्च क्षमता संचालन", icon: Radar },
      { title: "5 मिनट/एकड़", subtitle: "तेज़ मिशन टर्नअराउंड", icon: Clock3 },
      { title: "DGCA प्रमाणित", subtitle: "प्रमाणित पायलट नेटवर्क", icon: ShieldCheck },
    ],
    services: [
      {
        title: "कीटनाशक स्प्रे",
        description:
          "ब्रॉड-एकर और हाई-डेंसिटी फसल पैटर्न के लिए रूट-ऑप्टिमाइज़्ड ड्रोन मिशन के साथ समान कीटनाशक वितरण।",
        icon: Droplets,
      },
      {
        title: "पोषक तत्व स्प्रे",
        description:
          "फसल के चरणों के अनुसार निर्धारित माइक्रोन्यूट्रिएंट एप्लिकेशन, ताकि वृद्धि बेहतर हो और उत्पादन मजबूत बने।",
        icon: Sparkles,
      },
      {
        title: "फसल मैपिंग",
        description:
          "स्ट्रेस क्षेत्रों की पहचान, विविधता ट्रैकिंग और बेहतर हस्तक्षेप रणनीति के लिए मल्टी-एंगल एरियल मैपिंग।",
        icon: Radar,
      },
    ],
  },
};

function Services() {
  const { language } = useLanguage();
  const t = servicesCopy[language] || servicesCopy.en;

  return (
    <section className="space-y-0">
      <section className="section-shell bg-[#e7f4ef]">
        <div className="grid w-full items-center gap-10 lg:grid-cols-2">
          <div className="space-y-5 motion-rise" style={{ "--stagger": "80ms" }}>
            <p className="inline-flex rounded-full border border-[#bddfd3] bg-[#e4f3ee] px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#0f5f54]">
              {t.badge}
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#0F172A] sm:text-5xl">{t.heading}</h1>
            <p className="max-w-2xl text-base leading-relaxed text-[#475569] sm:text-lg">
              {t.body}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-[0_20px_50px_-34px_rgba(15,23,42,0.22)] motion-pop hover-float" style={{ "--stagger": "180ms" }}>
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
                {t.live}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#dff1ea]">
        <div className="grid w-full gap-5 md:grid-cols-3">
          {t.serviceHighlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-[#c8ddd5] bg-[#f4fbf8] p-5 shadow-[0_16px_40px_-30px_rgba(15,23,42,0.24)] motion-rise hover-float"
                style={{ "--stagger": `${80 + index * 90}ms` }}
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#d9efe7] text-[#0f766e]">
                  <Icon size={20} />
                </span>
                <p className="mt-4 text-3xl font-extrabold tracking-tight text-[#0F172A]">{item.title}</p>
                <p className="mt-1 text-sm font-semibold text-[#475569]">{item.subtitle}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-shell bg-[#f3fbf7]">
        <div className="grid w-full gap-6 md:grid-cols-2 xl:grid-cols-3">
          {t.services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group rounded-2xl border border-[#cfe2da] bg-white p-6 shadow-[0_16px_40px_-30px_rgba(15,23,42,0.24)] transition hover:-translate-y-0.5 motion-pop hover-float"
                style={{ "--stagger": `${90 + index * 90}ms` }}
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#DCFCE7] text-[#15803D]">
                  <Icon size={22} strokeWidth={2.1} />
                </span>
                <h2 className="mt-5 text-2xl font-bold tracking-tight text-[#0F172A]">{service.title}</h2>
                <p className="mt-3 text-[#475569]">{service.description}</p>
                <a
                  href="#"
                  className="btn-primary mt-6 inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold shadow-[0_10px_24px_-16px_rgba(11,111,88,0.62)]"
                >
                  {t.learnMore}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
              </article>
            );
          })}
        </div>
      </section>
    </section>
  );
}

export default Services;
