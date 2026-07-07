"use client";

import { ThemeProvider } from "./ThemeContext";
import { AntdProvider } from "./AntdProvider";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <AntdProvider>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </AntdProvider>
    </ThemeProvider>
  );
}
