import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

export function Logo({
  variant = "light",
  onNavigate,
}: {
  variant?: "light" | "dark";
  onNavigate: (href: string) => void;
}) {
  const isDark = variant === "dark";

  return (
    <a
      href="/"
      className="group flex items-center gap-3"
      onClick={(event) => {
        event.preventDefault();
        onNavigate("/");
      }}
    >
      <motion.img
        src={logo}
        alt="WCM Ghana"
        width={56}
        height={56}
        className={`h-11 w-auto object-contain ${isDark ? "brightness-0 invert" : ""}`}
        whileHover={{ rotate: -6, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      />
      <div className="hidden leading-tight sm:block">
        <div
          className={`font-display text-base font-extrabold tracking-tight ${
            isDark ? "text-primary-foreground" : "text-navy"
          }`}
        >
          WCM
        </div>
        <div
          className={`font-display text-[9px] font-semibold uppercase tracking-[0.14em] ${
            isDark ? "text-gold" : "text-slate-500"
          }`}
        >
          World Conf. of Mayors – Ghana
        </div>
      </div>
    </a>
  );
}
