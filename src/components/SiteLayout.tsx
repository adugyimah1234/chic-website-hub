import { useState, type ReactNode } from "react";
import { Toaster } from "./ui/sonner";
import { PageTransition, ScrollProgress } from "./Motion";
import { TopBar } from "./TopBar";
import { Logo } from "./Logo";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { Footer } from "./Footer";

export function SiteLayout({
  children,
  pathname,
  onNavigate,
}: {
  children: ReactNode;
  pathname: string;
  onNavigate: (href: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Toaster position="top-right" richColors closeButton />
      <ScrollProgress />
      <TopBar />

      <header className="sticky top-0 z-50 border-b border-border/60 bg-white">
        <div className="container-page flex h-18 items-center justify-between py-3">
          <Logo onNavigate={onNavigate} />
          <DesktopNav pathname={pathname} onNavigate={onNavigate} />
          <MobileNav open={open} setOpen={setOpen} onNavigate={onNavigate} />
        </div>
      </header>

      <main className="flex-1">
        <PageTransition pathname={pathname}>{children}</PageTransition>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
