import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Sprout, Clock3, ShieldCheck, PhoneCall, MapPinned, Wallet, Plus, Minus, Gauge, BadgeCheck, Users, Leaf } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const en = {
  badge:"Book | Spray | Pay",
  h1a:"Smart Drone Spraying for",
  h1b:"Faster, Safer Farming",
  sub:"Schedule aerial crop spraying with verified pilots. Get better coverage, lower chemical waste, and faster field turnaround.",
  cta1:"Get A Callback", cta2:"View Services",
  s1:"20,000+", s1l:"Acres Sprayed",
  s2:"100+", s2l:"Drone Partners",
  s3:"1,100+", s3l:"Satisfied Farmers",
  farmingTag:"Farming Made Easy",
  whatTitle:"What is KisanDrone?",
  whatBody:"KisanDrone is a comprehensive platform for drone spraying in Indian agriculture, making advanced technology accessible to farmers. It empowers rural drone pilots, ensuring efficient, cost-effective, and sustainable farming solutions.",
  droneTitle:"Drone Spraying:", droneTitle2:"A Modern Solution for Farmers",
  p1:"90%", p1l:"Water Saving",
  p2:"40%", p2l:"Input Saving",
  p3:"20%", p3l:"Cost Saving",
  droneBody:"Advanced sensors and GPS technology ensures Precise targeting & Equidistribution",
  perf1:"Sprays 50 Acres/Day", perf1s:"8x Productivity",
  perf2:"5 Mins", perf2s:"For an acre only",
  perf3:"No Human Exposure", perf3s:"Safest Spraying Mechanism",
  whoTitle:"Who is it for?",
  w1:"Farmer", w1s:"Instant Service, Reduced Cost",
  w2:"Drone Partner", w2s:"Start earning more with KisanDrone",
  w3:"Business", w3s:"Explore strategic collaborations",
  howTitle:"Drone spraying in three simple steps:",
  step1:"Book via call", step2:"Pilot sprays your crops", step3:"Pay after completion",
  faqTitle:"Frequently asked questions",
  faqs:[
    {q:"What is the Range of Agriculture Drone Services?", a:"KisanDrone supports pesticide spray, nano urea, fungicide spraying across all crop types — paddy, cotton, maize, pulses, mango orchards and more."},
    {q:"Whom should I contact to access agricultural drone for crop spraying?", a:"Call us on 8502858582 or fill the contact form. Our field coordinator will connect with you to schedule a pilot."},
    {q:"How do agricultural drones help me save money?", a:"Precision application reduces chemical overlap, lowers water usage by 90%, and completes spraying 8× faster — cutting cost by up to 20%."},
    {q:"Are agricultural drones hard to use?", a:"No. KisanDrone flights are executed by trained pilots. Farmers only need to share field details and preferred schedule."},
    {q:"Which crops can I use agricultural drones on?", a:"Maize, bajra, mango orchards, paddy, cotton, wheat, pulses and all horticulture crops."},
    {q:"How much does a farming drone service cost?", a:"Pricing depends on acreage and crop type. Contact us for a transparent quote before booking."},
  ],
  ctaTitle:"Unlock your farming potential.", ctaSub:"Begin your journey now!",
  phone1:"8502858582", phone2:"8168564013",
};

const hi = {
  badge:"बुक | स्प्रे | पेमेंट",
  h1a:"स्मार्ट ड्रोन स्प्रे सेवा",
  h1b:"आधुनिक खेती, स्मार्ट किसान!",
  sub:"सत्यापित पायलटों द्वारा एरियल स्प्रे सेवा बुक करें। बेहतर कवरेज, कम रसायन बर्बादी और तेज़ खेत कार्य।",
  cta1:"कॉल बैक लें", cta2:"सेवाएं देखें",
  s1:"20,000+", s1l:"एकड़ स्प्रे",
  s2:"100+", s2l:"ड्रोन पार्टनर",
  s3:"1,100+", s3l:"संतुष्ट किसान",
  farmingTag:"खेती हुई आसान",
  whatTitle:"KisanDrone क्या है?",
  whatBody:"KisanDrone भारतीय कृषि में ड्रोन स्प्रे के लिए एक संपूर्ण प्लेटफ़ॉर्म है जो उन्नत तकनीक को किसानों के लिए सुलभ बनाता है। यह ग्रामीण ड्रोन पायलटों को सशक्त करता है — कुशल, किफायती और टिकाऊ खेती के लिए।",
  droneTitle:"ड्रोन स्प्रेइंग:", droneTitle2:"किसानों के लिए आधुनिक समाधान",
  p1:"90%", p1l:"पानी की बचत",
  p2:"40%", p2l:"इनपुट बचत",
  p3:"20%", p3l:"लागत बचत",
  droneBody:"एडवांस सेंसर और GPS तकनीक से सटीक लक्ष्यीकरण और समान वितरण सुनिश्चित होता है",
  perf1:"50 एकड़/दिन स्प्रे", perf1s:"8x उत्पादकता",
  perf2:"5 मिनट", perf2s:"प्रति एकड़",
  perf3:"मानव संपर्क नहीं", perf3s:"सबसे सुरक्षित स्प्रे प्रणाली",
  whoTitle:"यह किसके लिए है?",
  w1:"किसान", w1s:"त्वरित सेवा, कम लागत",
  w2:"ड्रोन पार्टनर", w2s:"KisanDrone से अधिक कमाई शुरू करें",
  w3:"व्यवसाय", w3s:"रणनीतिक सहयोग का पता लगाएं",
  howTitle:"तीन सरल चरणों में ड्रोन स्प्रे:",
  step1:"कॉल से बुक करें", step2:"पायलट आपकी फसल स्प्रे करे", step3:"काम पूरा, भुगतान करें",
  faqTitle:"अक्सर पूछे जाने वाले प्रश्न",
  faqs:[
    {q:"कृषि ड्रोन सेवाओं का दायरा क्या है?", a:"KisanDrone कीटनाशक, नेनो यूरिया और फफूदनाशक स्प्रे सेवाएं सभी फसलों पर देता है।"},
    {q:"बुकिंग के लिए किससे संपर्क करें?", a:"8502858582 पर कॉल करें या संपर्क फॉर्म भरें।"},
    {q:"ड्रोन स्प्रे से पैसे कैसे बचते हैं?", a:"90% पानी की बचत, दवाई का कम उपयोग और 8 गुना तेज़ काम — कुल लागत 20% तक घट जाती है।"},
    {q:"क्या ड्रोन उपयोग करना मुश्किल है?", a:"नहीं। प्रशिक्षित पायलट उड़ान भरते हैं, किसानों को केवल खेत की जानकारी देनी होती है।"},
    {q:"किन फसलों पर ड्रोन स्प्रे होता है?", a:"मक्का, बाजरा, आम के बगीचे, धान, कपास, गेहूं, दालें और सभी बागवानी फसलें।"},
    {q:"ड्रोन स्प्रे की लागत क्या है?", a:"लागत एकड़ और फसल प्रकार पर निर्भर है। बुकिंग से पहले कोटेशन दिया जाएगा।"},
  ],
  ctaTitle:"अपनी खेती की क्षमता बढ़ाएं।", ctaSub:"आज ही शुरुआत करें!",
  phone1:"8502858582", phone2:"8168564013",
};

export default function Home() {
  const { language } = useLanguage();
  const t = language === "hi" ? hi : en;
  const [openFaq, setOpenFaq] = useState(null);

  const oval = { borderRadius: "50% / 40%", overflow: "hidden", objectFit: "cover" };

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <video style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} src="/assets/home%20page%20background%20video.mp4" autoPlay muted loop playsInline />
        <div style={{ position: "absolute", inset: 0, background: "rgba(8,18,10,0.70)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "80px 24px", width: "100%" }}>
          <span style={{ display: "inline-block", background: "rgba(139,195,74,0.2)", border: "1px solid rgba(139,195,74,0.5)", color: "#c5e1a5", borderRadius: 999, padding: "6px 16px", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 24 }}>
            {t.badge}
          </span>
          <h1 style={{ fontSize: "clamp(2.8rem,6vw,5.25rem)", fontWeight: 800, color: "#fff", lineHeight: 1.06, maxWidth: 700, margin: "0 0 24px" }}>
            {t.h1a}<br /><span style={{ color: "#8bc34a" }}>{t.h1b}</span>
          </h1>
          <p style={{ fontSize: "clamp(1rem,2vw,1.2rem)", color: "#c8ddc8", maxWidth: 560, lineHeight: 1.75, margin: "0 0 36px" }}>{t.sub}</p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link to="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#6fa832", color: "#fff", borderRadius: 999, padding: "14px 30px", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none" }}>
              {t.cta1} <ArrowRight size={16} />
            </Link>
            <Link to="/services" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "#8bc34a", border: "2px solid #8bc34a", borderRadius: 999, padding: "12px 28px", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none" }}>
              {t.cta2}
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div style={{ background: "#c5e1a5" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "28px 24px", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
          {[[t.s1,t.s1l,Gauge],[t.s2,t.s2l,Users],[t.s3,t.s3l,BadgeCheck]].map(([v,l,Ic],i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, justifyContent: "center" }}>
              <div style={{ width: 52, height: 52, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Ic size={22} color="#2d5a3d" />
              </div>
              <div>
                <div style={{ fontSize: "clamp(1.6rem,3vw,2.25rem)", fontWeight: 800, color: "#1b3a2d", lineHeight: 1 }}>{v}</div>
                <div style={{ fontSize: "0.875rem", color: "#2d5a3d", fontWeight: 600, marginTop: 2 }}>{l}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── WHAT IS KISANDRONE ── */}
      <section style={{ background: "#f5f7ef", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 64, alignItems: "center" }}>
          {/* Oval image collage — leher.ag style */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, maxWidth: 380, margin: "0 auto" }}>
            <div style={{ height: 180, borderRadius: "50% / 45%", overflow: "hidden" }}>
              <video style={{ width: "100%", height: "100%", objectFit: "cover" }} src="/assets/Home%20page%20background%20image.mp4" autoPlay muted loop playsInline />
            </div>
            <div style={{ height: 280, borderRadius: "50% / 45%", overflow: "hidden", marginTop: -40, position: "relative" }}>
              <img src="/assets/farmer-photoi.png" alt="farmer" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "rgba(27,58,45,0.55)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#fff", fontWeight: 800, fontSize: "1.25rem", textAlign: "center", lineHeight: 1.2 }}>{t.farmingTag}</span>
              </div>
            </div>
            <div style={{ height: 180, borderRadius: "50% / 45%", overflow: "hidden", marginTop: -20 }}>
              <video style={{ width: "100%", height: "100%", objectFit: "cover" }} src="/assets/Home%20page%20background%20image.mp4" autoPlay muted loop playsInline />
            </div>
          </div>
          <div>
            <h2 style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)", fontWeight: 800, color: "#1b3a2d", marginBottom: 16 }}>{t.whatTitle}</h2>
            <p style={{ fontSize: "1.0625rem", color: "#5a7a5a", lineHeight: 1.8 }}>{t.whatBody}</p>
          </div>
        </div>
      </section>

      {/* ── DRONE STATS ── */}
      <section style={{ position: "relative", minHeight: 520 }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/assets/Drone Image.webp')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(245,247,239,0.82)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "80px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 48, alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, color: "#1b3a2d", lineHeight: 1.1 }}>
              {t.droneTitle}<br />{t.droneTitle2}
            </h2>
          </div>
          <div style={{ background: "#fff", borderRadius: 20, padding: 32, boxShadow: "0 16px 48px -20px rgba(27,58,45,0.2)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8, textAlign: "center", marginBottom: 24 }}>
              {[[t.p1,t.p1l,Droplets],[t.p2,t.p2l,Sprout],[t.p3,t.p3l,Gauge]].map(([v,l,Ic],i) => (
                <div key={i} style={{ padding: "8px 4px", borderRight: i<2 ? "1px solid #e8edda" : "none" }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#f0f7e6", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 8px" }}>
                    <Ic size={18} color="#6fa832" />
                  </div>
                  <div style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)", fontWeight: 800, color: "#1b3a2d", lineHeight: 1 }}>{v}</div>
                  <div style={{ fontSize: "0.875rem", color: "#5a7a5a", marginTop: 4, fontWeight: 600 }}>{l}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "0.9375rem", color: "#5a7a5a", lineHeight: 1.7, textAlign: "center" }}>{t.droneBody}</p>
          </div>
        </div>
        {/* Dark perf bar */}
        <div style={{ background: "#1b3a2d", padding: "24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
            {[[t.perf1,t.perf1s,Gauge],[t.perf2,t.perf2s,Clock3],[t.perf3,t.perf3s,ShieldCheck]].map(([v,s,Ic],i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#f59e0b", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Ic size={20} color="#1b3a2d" />
                </div>
                <div>
                  <div style={{ fontSize: "clamp(0.85rem,1.5vw,1.1rem)", fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>{v}</div>
                  <div style={{ fontSize: "0.8rem", color: "#8bc34a", marginTop: 2 }}>{s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IS IT FOR ── */}
      <section style={{ background: "#f5f7ef", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)", fontWeight: 800, color: "#1b3a2d", textAlign: "center", marginBottom: 48 }}>{t.whoTitle}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 24 }}>
            {[[t.w1,t.w1s,"/contact",Sprout],[t.w2,t.w2s,"/contact",Users],[t.w3,t.w3s,"/contact",Gauge]].map(([title,sub,path,Ic],i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 20, padding: "32px 28px", border: "1px solid #e8edda", boxShadow: "0 8px 24px -12px rgba(27,58,45,0.12)" }}>
                <div style={{ width: 56, height: 56, borderRadius: 14, background: "#f0f7e6", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  <Ic size={24} color="#2d5a3d" />
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1b3a2d", marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: "0.9375rem", color: "#5a7a5a", lineHeight: 1.7, marginBottom: 24 }}>{sub}</p>
                <Link to={path} style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#6fa832", fontWeight: 700, fontSize: "0.875rem", textDecoration: "none" }}>
                  Know More <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ background: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 700, color: "#1b3a2d", marginBottom: 48 }}>{t.howTitle}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 24 }}>
            {[[t.step1,"1",PhoneCall],[t.step2,"2",MapPinned],[t.step3,"3",Wallet]].map(([label,step,Ic],i) => (
              <div key={i} style={{ background: "#f5f7ef", borderRadius: 20, padding: "36px 24px", textAlign: "center" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#f0f7e6", border: "2px solid #c5e1a5", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <Ic size={26} color="#2d5a3d" />
                </div>
                <div style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#6fa832", marginBottom: 6 }}>Step {step}</div>
                <div style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#1b3a2d" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: "#f5f7ef", padding: "80px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)", fontWeight: 800, color: "#1b3a2d", textAlign: "center", marginBottom: 40 }}>{t.faqTitle}</h2>
          {t.faqs.map((f,i) => {
            const open = openFaq === i;
            return (
              <div key={i} style={{ background: "#fff", borderRadius: 14, border: `1.5px solid ${open?"#8bc34a":"#e8edda"}`, marginBottom: 10, overflow: "hidden" }}>
                <button onClick={() => setOpenFaq(open ? null : i)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                  <span style={{ fontSize: "1rem", fontWeight: 600, color: open?"#6fa832":"#1b3a2d", paddingRight: 16 }}>{f.q}</span>
                  <span style={{ color: "#6fa832", flexShrink: 0 }}>{open ? <Minus size={18}/> : <Plus size={18}/>}</span>
                </button>
                {open && <p style={{ padding: "0 24px 20px", fontSize: "0.9375rem", color: "#5a7a5a", lineHeight: 1.75 }}>{f.a}</p>}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ background: "#1b3a2d", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.75rem,4vw,3rem)", fontWeight: 800, color: "#fff", marginBottom: 16 }}>
            {t.ctaTitle}<br /><span style={{ color: "#8bc34a" }}>{t.ctaSub}</span>
          </h2>
          <p style={{ color: "#8bc34a", fontSize: "1rem", marginBottom: 32 }}>
            📞 <strong style={{ color: "#fff" }}>{t.phone1}</strong> &nbsp;|&nbsp; 📞 <strong style={{ color: "#fff" }}>{t.phone2}</strong>
          </p>
          <Link to="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#6fa832", color: "#fff", borderRadius: 999, padding: "16px 36px", fontWeight: 700, fontSize: "1rem", textDecoration: "none" }}>
            {t.cta1} <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </div>
  );
}
