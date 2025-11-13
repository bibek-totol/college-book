"use client";
import { useState, useEffect } from "react";
import { Theme } from "@radix-ui/themes";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "./providers/Providers";
import Loader from "@/components/Loader";
import "./globals.css";
import "./App.css";

export default function RootLayout({ children } : { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body className="antialiased">
        <Theme>
          <Providers>
            {loading ? (
              <Loader />
            ) : (
              <>
                <Navbar />
                <main>{children}</main>
                <Toaster position="bottom-right" richColors />
                <Footer />
              </>
            )}
          </Providers>
        </Theme>
      </body>
    </html>
  );
}
