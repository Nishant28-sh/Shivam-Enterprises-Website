import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";

interface AppProvidersProps {
  children: React.ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <HelmetProvider>
      <BrowserRouter>
        {children}
        <Toaster
          position="top-right"
          richColors
          closeButton
          toastOptions={{
            classNames: {
              toast: "font-body",
            },
          }}
        />
      </BrowserRouter>
    </HelmetProvider>
  );
}
