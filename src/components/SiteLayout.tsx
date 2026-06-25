import { useState, type ReactNode } from "react";
import { Toaster } from "./ui/sonner";
import { PageTransition, ScrollProgress } from "./Motion";
import { Logo } from "./Logo";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { Footer } from "./Footer";
import { SocialLinks } from "./SocialLinks";

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

      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white shadow-sm">
        <div className="container-page grid h-[4.75rem] grid-cols-[1fr_auto_1fr] items-center gap-4 py-3">
          <Logo onNavigate={onNavigate} />
          <DesktopNav pathname={pathname} onNavigate={onNavigate} />
          <div className="flex items-center justify-end gap-2">
            <SocialLinks className="hidden xl:flex" />
            <MobileNav open={open} setOpen={setOpen} onNavigate={onNavigate} />
          </div>
        </div>
      </header>

      <main className="flex-1">
        <PageTransition pathname={pathname}>{children}</PageTransition>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
