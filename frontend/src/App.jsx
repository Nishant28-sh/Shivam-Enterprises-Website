import React, { useEffect, useState } from "react";
import { Link, NavLink, Navigate, Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import { Menu, Phone, Sprout, X } from "lucide-react";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { LanguageProvider } from "./context/LanguageContext";

const navItems = [
  { key: "home", to: "/" },
  { key: "services", to: "/services" },
  { key: "contact", to: "/contact" },
];
const copyMap = {
  en: { home:"Home", services:"Services", contact:"Contact", contactUs:"Contact Us", lang:"हिंदी", rights:"All rights reserved.", strip:"Innovating for a Greener Tomorrow" },
  hi: { home:"होम", services:"सेवाएं", contact:"संपर्क", contactUs:"संपर्क करें", lang:"EN", rights:"सर्वाधिकार सुरक्षित।", strip:"एक हरे कल के लिए नवाचार" },
};

function AppShell() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const [scrolled, setScrolled] = useState(false);
  const t = copyMap[language];

  useEffect(() => { document.body.style.overflow = mobileOpen ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [mobileOpen]);
  useEffect(() => { const s = localStorage.getItem("kd_lang"); if (s === "en" || s === "hi") setLanguage(s); }, []);
  useEffect(() => { localStorage.setItem("kd_lang", language); }, [language]);
  useEffect(() => { document.documentElement.lang = language === "hi" ? "hi" : "en"; }, [language]);
  useEffect(() => { const fn = () => setScrolled(window.scrollY > 8); window.addEventListener("scroll", fn, { passive: true }); return () => window.removeEventListener("scroll", fn); }, []);
  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
    const targets = Array.from(document.querySelectorAll(".motion-rise,.motion-fade,.motion-pop"));
    targets.forEach(el => el.classList.remove("motion-visible"));
    const obs = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("motion-visible"); obs.unobserve(e.target); } }); }, { threshold: 0.1 });
    targets.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [location.pathname]);

  return (
    <LanguageProvider value={{ language, setLanguage }}>
      <div style={{ minHeight: "100vh", backgroundColor: "#f5f7ef", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

        {/* ── TOP STRIP ── */}
        <div style={{ background: "#1b3a2d", padding: "8px 24px", textAlign: "center" }}>
          <p style={{ margin: 0, fontSize: "0.8rem", fontWeight: 600, color: "#a8c8a8" }}>{t.strip}</p>
        </div>

        {/* ── HEADER (leher.ag style: white bg, logo left, nav center, btns right) ── */}
        <header style={{
          position: "sticky", top: 0, zIndex: 50,
          background: "#fff",
          borderBottom: "1px solid #e8edda",
          boxShadow: scrolled ? "0 2px 12px -4px rgba(27,58,45,0.1)" : "none",
          transition: "box-shadow 0.2s",
        }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>

            {/* Logo */}
            <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: "#6fa832", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Sprout size={22} color="#fff" strokeWidth={2.2} />
              </div>
              <div>
                <div style={{ fontSize: "1.125rem", fontWeight: 800, color: "#1b3a2d", lineHeight: 1 }}>KisanDrone</div>
                <div style={{ fontSize: "0.65rem", color: "#5a7a5a", fontWeight: 600, letterSpacing: "0.04em" }}>किसान ड्रोन</div>
              </div>
            </Link>

            {/* Desktop nav — centered */}
            <nav style={{ display: "flex", gap: 4 }} className="hidden md:flex">
              {navItems.map(item => (
                <NavLink key={item.to} to={item.to} style={({ isActive }) => ({
                  display: "block", padding: "8px 16px", borderRadius: 8,
                  fontSize: "0.9rem", fontWeight: 600, textDecoration: "none",
                  color: isActive ? "#6fa832" : "#3d5c3d",
                  background: isActive ? "#f0f7e6" : "transparent",
                  transition: "all 0.18s",
                })}>
                  {t[item.key]}
                </NavLink>
              ))}
            </nav>

            {/* Right actions */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <button onClick={() => setLanguage(p => p === "en" ? "hi" : "en")}
                style={{ padding: "8px 16px", borderRadius: 999, border: "1.5px solid #c5e1a5", background: "#f0f7e6", color: "#2d5a3d", fontWeight: 700, fontSize: "0.8rem", cursor: "pointer" }}>
                {t.lang}
              </button>
              <Link to="/contact"
                style={{ display: "inline-flex", alignItems: "center", padding: "10px 20px", borderRadius: 999, background: "#1b3a2d", color: "#fff", fontWeight: 700, fontSize: "0.875rem", textDecoration: "none" }}>
                {t.contactUs}
              </Link>
              <a href="tel:+918502858582"
                style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 20px", borderRadius: 999, border: "2px solid #8bc34a", color: "#1b3a2d", fontWeight: 700, fontSize: "0.875rem", textDecoration: "none" }}
                className="hidden md:inline-flex">
                <Phone size={14} color="#6fa832" /> +91 8502858582
              </a>
              <button onClick={() => setMobileOpen(p => !p)} className="md:hidden"
                style={{ width: 40, height: 40, borderRadius: 8, border: "none", background: "#f0f7e6", color: "#2d5a3d", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </header>

        {/* Mobile overlay */}
        {mobileOpen && <div onClick={() => setMobileOpen(false)} style={{ position: "fixed", inset: 0, zIndex: 60, background: "rgba(27,58,45,0.35)", backdropFilter: "blur(3px)" }} />}

        {/* Mobile sidebar */}
        <aside style={{ position: "fixed", top: 0, right: 0, zIndex: 70, height: "100%", width: 280, background: "#fff", borderLeft: "1px solid #e8edda", boxShadow: "-6px 0 24px rgba(0,0,0,0.1)", transform: mobileOpen ? "translateX(0)" : "translateX(100%)", transition: "transform 0.26s ease" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px", borderBottom: "1px solid #e8edda" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: "#6fa832", display: "flex", alignItems: "center", justifyContent: "center" }}><Sprout size={18} color="#fff" /></div>
              <span style={{ fontWeight: 800, color: "#1b3a2d" }}>KisanDrone</span>
            </div>
            <button onClick={() => setMobileOpen(false)} style={{ width: 36, height: 36, borderRadius: 8, border: "none", background: "#f0f7e6", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><X size={18} color="#2d5a3d" /></button>
          </div>
          <div style={{ padding: 12 }}>
            {navItems.map(item => (
              <NavLink key={item.to} to={item.to} onClick={() => setMobileOpen(false)} style={({ isActive }) => ({
                display: "block", padding: "12px 16px", borderRadius: 10, marginBottom: 4,
                fontSize: "0.9rem", fontWeight: 600, textDecoration: "none",
                background: isActive ? "#f0f7e6" : "transparent",
                color: isActive ? "#6fa832" : "#3d5c3d",
              })}>{t[item.key]}</NavLink>
            ))}
            <div style={{ marginTop: 12 }}>
              <a href="tel:+918502858582" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "12px", borderRadius: 10, background: "#6fa832", color: "#fff", fontWeight: 700, textDecoration: "none", marginBottom: 8 }}>
                <Phone size={15} /> 8502858582
              </a>
              <button onClick={() => { setLanguage(p => p === "en" ? "hi" : "en"); setMobileOpen(false); }}
                style={{ width: "100%", padding: 12, borderRadius: 10, border: "1.5px solid #c5e1a5", background: "#f0f7e6", color: "#2d5a3d", fontWeight: 700, cursor: "pointer" }}>
                {t.lang}
              </button>
            </div>
          </div>
        </aside>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* ── FOOTER ── */}
        <footer style={{ background: "#1b3a2d", color: "#a8c8a8", padding: "56px 24px 32px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 48, justifyContent: "space-between", marginBottom: 40 }}>
              <div style={{ maxWidth: 280 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "#6fa832", display: "flex", alignItems: "center", justifyContent: "center" }}><Sprout size={20} color="#fff" /></div>
                  <span style={{ fontSize: "1.125rem", fontWeight: 800, color: "#fff" }}>KisanDrone</span>
                </div>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.7 }}>Precision drone spraying for modern farms. DGCA certified pilots.</p>
              </div>
              <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
                <div>
                  <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#8bc34a", marginBottom: 14 }}>Pages</p>
                  {navItems.map(item => (
                    <div key={item.to} style={{ marginBottom: 8 }}>
                      <Link to={item.to} style={{ fontSize: "0.875rem", color: "#a8c8a8", textDecoration: "none" }}>{t[item.key]}</Link>
                    </div>
                  ))}
                </div>
                <div>
                  <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#8bc34a", marginBottom: 14 }}>Contact</p>
                  <p style={{ fontSize: "0.875rem", marginBottom: 6 }}>📞 8502858582</p>
                  <p style={{ fontSize: "0.875rem" }}>📞 8168564013</p>
                </div>
              </div>
            </div>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
              <p style={{ fontSize: "0.8rem", margin: 0 }}>© {new Date().getFullYear()} KisanDrone. {t.rights}</p>
              <p style={{ fontSize: "0.8rem", margin: 0 }}>🌱 Precision Agriculture Technology</p>
            </div>
          </div>
        </footer>
      </div>
    </LanguageProvider>
  );
}

export default function App() {
  return <Router><AppShell /></Router>;
}
