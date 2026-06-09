import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { MainLayout } from "@/components/layouts/MainLayout";

const HomePage = lazy(() => import("@/pages/HomePage"));
const ServicesPage = lazy(() => import("@/pages/ServicesPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));

function PageLoader() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="h-10 w-10 animate-pulse rounded-full bg-primary/20" />
    </div>
  );
}

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<PageLoader />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="services"
          element={
            <Suspense fallback={<PageLoader />}>
              <ServicesPage />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={<PageLoader />}>
              <ContactPage />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
